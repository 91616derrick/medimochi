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
