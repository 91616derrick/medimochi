/* MedMochi optional authenticated cloud backup. Without config, all offline features still work. */
(function(){
  'use strict';
  const cloud = {client:null,user:null,ready:false,busy:false,timer:null,dirty:false,last:'',status:'未連接雲端'};
  const cfg = window.MEDMOCHI_SUPABASE || {};
  const htmlEscape = (s)=> String(s??'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const configured = !!(cfg.url && cfg.publishableKey);
  window.medMochiCloudHTML = function(){
    const badge = !configured?'未設定':cloud.user?'已登入':'未登入';
    return `<h1 class="page-title">雲端同步 ☁️</h1><p class="page-sub">讓醫學糰子的作答紀錄與私人學習單元，在不同裝置登入後同步。</p>
      <div class="info-card" style="max-width:760px"><span class="chip">目前狀態：${htmlEscape(badge)}</span>
      <p class="muted" style="margin:14px 0">${htmlEscape(cloud.status)}</p>
      ${!configured?`<p>這個網站仍可離線使用。要啟用雲端，請先依 SETUP.md 建立 Supabase 資料表、設定登入網址，再填寫 <code>supabase-config.js</code> 的 Project URL 與 publishable key。</p>`:''}
      ${configured&&!cloud.user?`<label class="form-group"><span class="field-label">電子郵件（Magic Link 登入）</span><input id="cloud-email" class="field" type="email" autocomplete="email" placeholder="you@example.com"></label><button class="btn" id="cloud-login">寄送登入連結</button>`:''}
      ${configured&&cloud.user?`<p>已登入：<strong>${htmlEscape(cloud.user.email||'使用者')}</strong></p><div class="row"><button class="btn" id="cloud-sync">立即合併並同步</button><button class="btn outline" id="cloud-logout">登出雲端</button></div>`:''}
      <p class="form-tip">保護隱私：資料表設置 Row Level Security，僅登入者本人可存取自己的學習紀錄。未登入時會保留瀏覽器的本機紀錄；登出不會自動刪除本機資料。</p>
      </div><div class="wide-notice">登入後會先合併本機與雲端已作答題目，再上傳合併結果。題目以唯一 ID 為主，已作答題目不會在「新題」模式重複出現。多裝置同時離線修改時，仍可能有版本衝突，請定期匯出 JSON 備份。</div>`;
  };
  window.medMochiBindCloud = function(){
    const login=document.getElementById('cloud-login');
    if(login)login.onclick=async()=>{
      const email=document.getElementById('cloud-email').value.trim();
      if(!/^\S+@\S+\.\S+$/.test(email)){toast('請輸入有效的電子郵件');return}
      if(!cloud.client){toast('雲端服務尚未完成初始化');return}
      login.disabled=true;
      try{
        const redirectTo=location.origin+location.pathname;
        const {error}=await cloud.client.auth.signInWithOtp({email,options:{emailRedirectTo:redirectTo}});
        if(error)throw error;
        cloud.status='登入連結已寄出，請查看信箱。';toast('已寄出登入連結');
      }catch(e){cloud.status='登入失敗：'+e.message;toast('登入失敗');}
      login.disabled=false;render();
    };
    const sync=document.getElementById('cloud-sync');if(sync)sync.onclick=()=>synchronize(true);
    const logout=document.getElementById('cloud-logout');if(logout)logout.onclick=async()=>{
      if(!cloud.client)return;
      if(cloud.dirty) await synchronize(true);
      const {error}=await cloud.client.auth.signOut();
      if(error){toast('登出失敗');return}
      cloud.user=null;cloud.ready=false;cloud.status='已登出。此裝置的本機紀錄仍保留。';render();
    };
  };
  window.medMochiPersist = function(){
    if(!cloud.ready||!cloud.user)return;
    cloud.dirty=true;
    clearTimeout(cloud.timer);
    cloud.timer=setTimeout(()=>synchronize(false),1800);
  };
  const keyOf = (q)=> (typeof norm==='function'?norm(q.stem):String(q.stem||'').toLowerCase().replace(/\s+/g,''));
  function mergeState(remote){
    if(!remote||typeof remote!=='object')return false;
    let changed=false;
    for(const u of (Array.isArray(remote.units)?remote.units:[])){
      if(!validUnit(u))continue;
      const idx=data.units.findIndex(x=>x.id===u.id);
      if(idx<0){data.units.push({...u,userAdded:true});changed=true}
      else if(data.units[idx].userAdded && u.userAdded){
        // Remote wins only if it has more sections; preserves local additions in simple offline conflict cases.
        if((u.sections||[]).length>(data.units[idx].sections||[]).length){data.units[idx]=u;changed=true}
      }
    }
    for(const q of(Array.isArray(remote.questions)?remote.questions:[])){
      if(!validQ(q)||!data.units.some(u=>u.id===q.unitId))continue;
      if(!data.questions.some(x=>x.id===q.id||keyOf(x)===keyOf(q))){data.questions.push(q);changed=true}
    }
    if(remote.attempts&&typeof remote.attempts==='object'){
      for(const [id,a] of Object.entries(remote.attempts)){
        if(!a||typeof a.correct!=='boolean'||!Number.isInteger(a.selected))continue;
        const current=data.attempts[id];
        if(!current || String(a.at||'')>String(current.at||'')){data.attempts[id]=a;changed=true}
      }
    }
    if(remote.history&&typeof remote.history==='object'){
      if(Number.isInteger(remote.history.answered)&&remote.history.answered>(data.history.answered||0)){
        data.history={answered:remote.history.answered,correct:remote.history.correct||0,misses:Array.isArray(remote.history.misses)?remote.history.misses:[]};changed=true;
      }
    }
    for(const p of (Array.isArray(remote.previous_topics)?remote.previous_topics:[])){
      if(p&&typeof p.id==='string'&&!data.previous_topics.some(x=>x.id===p.id)){data.previous_topics.push(p);changed=true}
    }
    return changed;
  }
  async function synchronize(manual){
    if(!cloud.user||!cloud.client)return;
    if(cloud.busy){cloud.dirty=true;return}
    cloud.busy=true;cloud.dirty=false;cloud.status='同步中…';if(manual)render();
    try{
      const {data:row,error:readError}=await cloud.client.from('user_learning_state').select('payload').eq('user_id',cloud.user.id).maybeSingle();
      if(readError)throw readError;
      if(row?.payload)mergeState(row.payload);
      // Commit local merge without calling persist(), which would schedule a recursive sync.
      localStorage.setItem(STORE_KEY,JSON.stringify(data));
      const {error:writeError}=await cloud.client.from('user_learning_state').upsert({user_id:cloud.user.id,payload:data},{onConflict:'user_id'});
      if(writeError)throw writeError;
      cloud.status='最近同步成功：'+new Date().toLocaleString('zh-TW');
    }catch(e){cloud.dirty=true;cloud.status='同步失敗：'+String(e.message||e)+'。本機資料仍保留。';}
    finally{cloud.busy=false;render();if(cloud.dirty&&!manual){clearTimeout(cloud.timer);cloud.timer=setTimeout(()=>synchronize(false),4000)}}
  }
  async function init(){
    if(!configured){render();return}
    if(!window.supabase?.createClient){
      cloud.status='正在載入雲端服務…';render();
      try{await new Promise((resolve,reject)=>{const el=document.createElement('script');el.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';el.onload=resolve;el.onerror=()=>reject(new Error('無法載入 SDK'));document.head.appendChild(el)});}
      catch(e){cloud.status='無法載入 Supabase SDK；請確認網路。';render();return}
    }
    try{
      cloud.client=window.supabase.createClient(cfg.url,cfg.publishableKey);
      const {data:auth,error}=await cloud.client.auth.getUser();
      if(error && !/session missing|auth session missing/i.test(error.message||''))throw error;
      if(auth?.user){cloud.user=auth.user;cloud.ready=true;await synchronize(false)}
      else{cloud.status='請輸入電子郵件以登入，登入後才會啟用跨裝置同步。'}
      cloud.client.auth.onAuthStateChange((event,session)=>{
        // Defer Supabase queries outside Auth callback to avoid lock reentrancy.
        setTimeout(async()=>{
          if(session?.user){
            const changedUser=cloud.user?.id!==session.user.id;
            cloud.user=session.user;cloud.ready=true;
            if(changedUser)await synchronize(false);else render();
          }else if(event==='SIGNED_OUT'){cloud.user=null;cloud.ready=false;cloud.status='已登出。';render()}
        },0);
      });
    }catch(e){cloud.status='雲端初始化失敗：'+String(e.message||e)}
    render();
  }
  init();
})();