# 醫學糰子 MedMochi

可持續擴充的繁體中文醫師國考二階複習網站。包含高血壓與高血脂單元、知識筆記、臨床情境選擇題、錯題與學習紀錄，以及自行匯入新單元的功能。

## 開啟 GitHub Pages

1. 前往 [Repository Settings → Pages](https://github.com/91616derrick/medimochi/settings/pages)。
2. 在 **Build and deployment → Source** 選擇 **Deploy from a branch**。
3. Branch 選 **main**，資料夾選 **/(root)**，按 **Save**。
4. 網站網址將是 https://91616derrick.github.io/medimochi/ 。

## Supabase（選用：跨裝置同步）

已設定 Supabase project `hgzwzovkwqbzakcqdbrw`，網站使用僅限公開客戶端的 publishable key，絕不存放 service_role、secret key 或資料庫密碼。正式登入前：

1. 開啟 [Supabase → Authentication → URL Configuration](https://supabase.com/dashboard/project/hgzwzovkwqbzakcqdbrw/auth/url-configuration)。
2. **Site URL** 設為 `https://91616derrick.github.io/medimochi/`。
3. **Redirect URLs** 加上 `https://91616derrick.github.io/medimochi/`。
4. 確認 Email 登入已啟用，再從網站的「雲端同步」寄送 Magic Link。

資料表 `public.user_learning_state` 已啟用 RLS，只允許登入者讀寫自己的資料。尚須以真實登入流程驗證 Email Magic Link 與跨裝置同步。

## 更新學習內容

在網站的「新增內容」中匯入符合 `new_unit_template.json` 格式的 JSON，系統會將章節與題目加入個人知識庫。不重複機制依題目 ID、正規化題幹與已答題紀錄運作；對同義改寫的語意重複不保證完全辨識。

**隱私：** `my_progress_private.json`、私人作答紀錄與任何秘密金鑰都不應提交到公開 Repository。建議定期在網站匯出備份。


## MedMochi 2.0｜2026-11-11 更新

- 3 個知識單元：**高血壓（Hypertension）**、**高血脂（Dyslipidemia）**、**缺血性心臟病（Ischemic Heart Disease）**。
- 第三單元依教材目錄切分為 **A 動脈粥狀硬化、B 背景知識、C 慢性冠心症 CCS、D 急性冠心症 ACS**。該教材截圖僅含章節標題，內文由正式臨床指引獨立整理。
- 16 個視覺化詳解章節、比較表／流程圖／示意圖；題庫共 38 題（新增 22 題），每題四選一並有選項解析。
- 既有學習資料採原本 `medimochi_v1` 格式，改版不清空本機進度；雲端仍由登入與 RLS 保護。
- 題目保證不重複顯示已作答的「同題 ID」，但 AI 同義改寫的語意重複仍需人工複核，無法聲稱絕對零重複。
- 新章節在 `study-content.js`，圖表與畫面由 `study-ui.js`、`study-ui.css` 提供；GitHub Pages 使用 `main / (root)`。
- 指引來源會列在每章底部；更新日期與適用族群須個別判讀。
