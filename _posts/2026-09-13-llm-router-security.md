---
title: "你貼進 AI 的那行程式碼，可能已經被賣掉了：LLM 路由器的資安黑洞"
date: 2026-09-13 13:37:00 +0800
categories:
  - AI安全
tags:
  - LLM 路由器
  - AI 資安
  - 供應鏈攻擊
  - 憑證洩漏
  - AI agent
layout: single
author_profile: false
toc: true
toc_sticky: true
header:
  teaser: /assets/images/2026-09-13-llm-router-security.png
excerpt: "一位資安研究者花錢買了 6TB 的 AI 對話紀錄，聲稱裡面有足以入侵中國政府與科技巨頭的通行證。這不是電影情節，而是被忽略太久的 LLM 路由器資安黑洞。"
---



![你貼進 AI 的那行程式碼，可能已經被賣掉了：LLM 路由器的資安黑洞](/assets/images/2026-09-13-llm-router-security.png)



---

> *以下為虛構對話，人物與情節為創作，科學內容來源標註於文末。*

## ▌午後兩點的麵店

麵店過了午餐尖峰，只剩三桌客人。

Dg 把湯匙放下，清了清喉嚨。

「Liy，妳知道嗎，現在很多人用 AI 都是走什麼——」他停頓一下，拉長語尾，「——中間人路由器。」

Liy 正在擦桌子，抬起頭。

「中間人？」

「對，LLM 路由器。」Dg 靠在椅背上，「就是說，你以為你在跟 Claude 講話，其實中間還隔了一個代寄公司。」

「代寄公司。」Liy 重複了一次。

「比喻啦。」

Liy 點點頭，繼續擦桌子。

「那不是很正常嗎？」她說，「我們外送也是叫外送員送啊。」

Dg 卡了一秒。

「不是那個意思——」

「可是外送員也看得到餐點是什麼啊。」Liy 把抹布摺好，「上次那個大哥還說我們的滷肉飯看起來很好吃。」

## ▌Cala 走進來

門口的風鈴響了。

Cala 一手拿著手機一手推門，頭也沒抬，直接走到吧檯前面的位置坐下。

「陽春麵大碗，加蛋。」她說完才看到 Dg，「欸，你們在聊什麼？」

「AI 資安。」Dg 立刻挺直身體。

「AI 資安？」Cala 把手機放下，「是不是最近那個 6TB 的事情？」

「對對對。」

「我就知道 K 一定會叫你研究這個。」Cala 用手指戳了戳吧檯，「他是不是覺得你太少關心他工作的事情？」

Dg 愣住。

「不是——這個跟 K 沒關係——」

「沒關係喔？」Cala 挑眉，「那你怎麼會突然研究這個。」

「因為新聞在報啊。」

「喔——」Cala 拉長音，「那你剛剛跟 Liy 講到哪裡了？」

## ▌代寄公司的信

Dg 深吸一口氣，決定重新開始。

「就是說，那個路由器，它會把你的訊息都錄下來。你跟 AI 講什麼它都知道。」

「那不就是外送員看得到滷肉飯嗎？」Liy 說。

Cala 撲哧笑出來。

「不是啦 Liy，」Cala 說，「他的意思是那個路由器像是——像是偷看你情書的郵差。」

「情書？」Liy 眨眨眼，「誰寫情書給 AI？」

「不是真的情書——」Cala 揮揮手，「就是那種你不想讓別人看到的東西啊。」

「那我就不會寫給 AI 啊。」

「工程師會啊。」Dg 終於插進來，「工程師會把 SSH 金鑰貼進去，叫 AI 幫他連伺服器。」

「SSH 金鑰是什麼？」Liy 問。

「就是——」Dg 想了一下，「就是門的鑰匙。」

「那為什麼要拍照給 AI 看？」

Dg 又卡住了。

## ▌腦補的方向

「Liy 妳不懂啦，」Cala 撐著臉頰，「工程師就是這樣，什麼事都要問 AI。Dg 你不也是，K 交代什麼事你都跑去問 AI 對不對？」

「我沒有——」

「別否認了，我上次看到你螢幕開三個 AI 視窗。」

「那是在比較——」

「比較？」Cala 瞇眼，「你該不會是拿 K 給你的資料同時貼到三個平台去問吧？」

Dg 的湯匙停在半空中。

「……那個是公開資料。」

「你確定 K 不會生氣？」

「他為什麼要生氣。」

「因為你把他的思考過程貼到不知道哪裡去了啊。」Cala 拿起筷子，「說不定你貼進去的那個 AI，就是那種路由器。你有查過那個網址是不是官方的嗎？」

Dg 沒說話。

Liy 從吧檯後面探出頭。

「Dg 哥你那個網址是什麼？」

「呃——」Dg 掏出手機看了一下，「api-cheap 點什麼的。」

「聽起來就不是官方的。」Cala 說。

「便宜嘛。」

「便宜的代寄公司。」Liy 說。

## ▌最後一碗麵

Cala 的陽春麵端上來了。

她夾了一口麵，一邊嚼一邊看 Dg。

「所以你剛剛想跟 Liy 解釋什麼？」

「我想說，」Dg 放下湯匙，「就是那個路由器會把訊息錄下來，然後有人買了 6TB 的資料，裡面有很多公司的密碼。」

「喔。」Cala 點點頭，「所以你貼進 api-cheap 的那些資料，現在也在別人的 6TB 裡面囉？」

Dg 沒回答。

Liy 端著空盤子走過去，經過 Dg 身邊時停了一下。

「Dg 哥，」她說，「你要不要跟 K 老師講一下？」

「講什麼？」

「講你之前用過那個代寄公司啊。」

Dg 看著她。

*他默默把手機螢幕轉暗，放進口袋。*

---

## 關鍵亮點

- 一位名叫 Chaofan Shou 的資安研究者在 2026 年 9 月 10 日聲稱，從一個中國 LLM 路由器服務購得約 6TB 的對話日誌，內含 SSH 金鑰、VPN 設定、雲端 API 憑證等敏感資料
- 「LLM 路由器」是插在使用者與大型語言模型之間的代理層，會完整記錄每一筆請求與回應——而開發者常在對話中直接貼入憑證
- 這次事件的洩漏點是**第三方路由器服務**，不是 Anthropic 或 OpenAI 的伺服器；理解框架的差異至關重要
- 早在 2026 年 4 月，同一位研究者參與的學術論文已系統性測量過 428 個路由器，發現其中不乏主動竊取憑證的案例

---

## 事件現場：一筆 6TB 的可疑資料集

2026 年 9 月 10 日，資安研究者 Chaofan Shou 在 X（前 Twitter）上發出一則推文，內容大意是：他花錢從中國一個主要的 LLM 路由器服務購入了一份約 6TB 的對話資料集，僅憑這份資料，他聲稱可以入侵約 7 個中國與獨立國協的政府機構，以及 19 家中國大型企業——包含小米、華為、蔚來（NIO）、MiniMax 等名字。

這些「入侵通行證」的形式是什麼？根據他的說法，資料集裡散落著 SSH 金鑰、VPN 設定檔、阿里雲（Aliyun）API 金鑰、GitLab token——全都是開發者或 AI agent 在向 Claude 這類 AI 助手提問時，直接貼進對話框裡的內容。

⚠️ 這裡必須先立一個誠信框架：**上述數字（6TB、7 個機構、19 家企業）目前僅來自研究者單方面的聲稱**，尚未經過第三方獨立驗證。但這不代表事件本身不重要——即使數字有出入，它揭示的攻擊面（attack surface）是真實存在的，而且不是第一次被記錄。

---

## 什麼是 LLM 路由器？它為什麼會存在？

要理解這件事的嚴重性，得先搞懂「LLM 路由器」是什麼。

想像一下，你想使用 Claude、GPT、Gemini 這幾個 AI 模型，但每一家都要單獨申請帳號、每一家的 API 呼叫格式又不太一樣。這時候，有人跳出來說：「我幫你做一個中間層，你把請求丟給我，我幫你轉到你想用的那個模型，一個介面、一個帳單，還可以幫你省錢。」

這個「中間層」就是 LLM 路由器（LLM Router）。

它的商業賣點通常是三件事的組合：**降低成本**（同一個問題轉到最便宜的模型）、**繞過地區限制**（例如中國無法直接使用 Claude，透過路由器就可以）、**負載平衡**（一家模型當機時自動切換到另一家）。聽起來很方便——但代價是：所有流量都會經過這個中間人的伺服器。

用郵局來比喻：你原本是把信直接投進 A 郵政的信箱，現在變成先寄到一家「代寄公司」，再由他們轉寄。這家公司當然看得到你信裡的每一個字。**它們也有能力把每一封信影印一份，存下來。**

---

## 憑證是怎麼跑進對話裡的

到這裡有讀者可能會問：「就算路由器可以看到對話，我又不會笨到把密碼貼進 AI 聊天室裡。」

問題是——**AI agent 時代的開發者，經常是在不自覺的狀況下，把敏感資訊送進了對話裡。**

想像一個典型的場景：一位工程師用 Claude Code 這類 AI 助手來幫忙除錯。他打字說：「幫我用這個 SSH 金鑰連到伺服器 192.168.xx.xx，看一下 nginx 的錯誤日誌」——然後把整段金鑰貼上。或者，AI agent 自動化執行任務時，會在工具呼叫（tool call）的參數裡帶上雲端服務的 API token。這些內容全部會經過路由器，並且被完整記錄。

Cloud Security Alliance 在 2026 年 4 月的一份研究報告裡整理過，這類代理層可能經手的敏感資料清單長得驚人：LLM 供應商的 API 金鑰、AWS/GCP/Azure 雲端憑證、Kubernetes 服務帳號 token、SSH 金鑰、Git 憑證、shell 歷史紀錄、加密貨幣錢包檔案——**任何開發者可能在對話中提到的東西，都可能被錄下來**。

一個容易被忽略的技術細節：路由器會終結（terminate）用戶與模型之間的 TLS 加密連線。也就是說，加密只保護「使用者→路由器」和「路由器→模型」這兩段，但在路由器**內部**，資料是完全明文（plaintext）的。這不是漏洞——這是它必須這樣運作才能「路由」的架構特性。

---

## 不是新問題：一篇四月的論文早就警告過

這次 9 月的事件之所以特別值得關注，不是因為它是孤立事件，而是因為它為一份五個月前發表的學術論文做了現實驗證。

2026 年 4 月，Chaofan Shou 與加州大學聖塔芭芭拉分校、聖地牙哥分校、Fuzzland、World Liberty Financial 的研究者共同發表了一篇論文，標題是〈Your Agent Is Mine: Measuring Malicious Intermediary Attacks on the LLM Supply Chain〉（你的 AI 助手是我的了：測量 LLM 供應鏈上的惡意中間人攻擊）。

研究團隊從淘寶、閒魚、Shopify 上買了 28 個付費路由器，又從公開社群收集了 400 個免費路由器，總共測試 428 個服務。

| 觀察項目 | 數量 | 說明 |
|---------|------|------|
| 主動注入惡意程式碼的路由器 | 9 個（1 付費 + 8 免費） | 會偷偷修改 AI 傳回的工具呼叫指令 |
| 部署自適應規避（延遲攻擊）的路由器 | 2 個 | 前幾次乖乖工作，取得信任後才動手 |
| 竊取研究者放置的 AWS 誘餌憑證 | 17 個路由器接觸過 | AWS canary token 被用於追蹤憑證流向 |
| 成功盜走研究者以太幣（ETH） | 1 個路由器 | 資料集裡放了一個真的私鑰作為誘餌，直接被搬空 |

換句話說：**在 2026 年 9 月的 6TB 事件之前，學界早就系統性地證明過，這個攻擊面不只理論存在，而是「已經在被利用」的現在進行式。**

論文提出的核心概念叫「Router-in-the-Middle」（RITM，中間人路由器），對比大家熟悉的「Man-in-the-Middle」（MITM，中間人攻擊）。差別在於：傳統 MITM 攻擊者要想辦法插進通訊之間，而 RITM 是——**中間人本來就正大光明地站在通訊之間，還是你付錢請他來的。**

---

## 誰在錄音？框架的重要性

這次事件在中文網路上流傳時，出現一種常見的誤解框架：「Anthropic 的 Claude 洩漏了 6TB 資料！」

**這個框架是錯的。** 洩漏點不是 Anthropic 的伺服器，而是使用者選擇的、位於 Anthropic 與最終使用者之間的第三方中國路由器。Anthropic 本身並沒有被駭。

這個區分不是在替 Anthropic 澄清——而是因為，如果我們用錯的框架理解事件，就會做出錯的防禦動作。如果你以為問題出在 Anthropic，可能會覺得「改用其他模型就好」；但實際上，**只要你透過第三方路由器連任何一家模型，同樣的風險都存在**。

這裡也要提一段背景脈絡，讓事件的地緣政治色彩不至於失焦：

- 2026 年 2 月，Anthropic 公開指控 DeepSeek、Moonshot、MiniMax 三家中國 AI 實驗室，透過約 24,000 個偽造帳號、產生超過 1,600 萬次對話，對 Claude 進行「蒸餾攻擊」（distillation attack）——用 Claude 的輸出來訓練自家模型
- 2026 年 3 月底，Chaofan Shou 首次發現 Anthropic 因為 npm 打包錯誤，讓 Claude Code 的完整原始碼透過 source map 意外外洩
- 2026 年 7 月，中國工信部（MIIT）警告 Claude Code 含有「後門」，Anthropic 回應說那是反濫用機制，且「中國用戶本來就未獲授權使用」

這些事件疊在一起，構成一個複雜的圖像：**LLM 路由器在中國的存在，本身就是為了繞過 Anthropic 的地區限制。** 而繞過的代價，就是把所有流量交給一個沒有信任基礎的第三方。

---

## 一般使用者如何自保

如果你只是用 ChatGPT、Claude、Gemini 的官方網頁或官方 App 聊天，這件事跟你的距離比較遠——那些服務有自己的隱私政策，資料流向相對可控。

風險最高的是以下幾類使用者：

**開發者與工程師**：如果你使用第三方的 AI 程式碼助手，或透過某個「便宜的 API 代理」呼叫模型，請確認你打交道的是真正的官方 API 端點（api.anthropic.com、api.openai.com 等），而不是某個聲稱「幫你省錢」的中間服務。

**企業內部**：AI 網關（AI Gateway）與 LLM 代理層應該被當作**跟身份驗證與金流系統同等級的關鍵資安基礎設施**來管理，而不是「順手找個現成工具接上就好」的中間件。

**日常使用者**：養成一個習慣——**不要把任何憑證、密碼、私鑰貼進 AI 對話裡**。即使是官方服務，也應該把 API 金鑰改用「引用」而非「明文」的方式處理。需要 AI 幫你操作某個服務時，讓 AI 教你怎麼用環境變數處理憑證，而不是把憑證直接交給它。

Dev.to 上一位工程師提出的原則值得記住：「在憑證離開你的邊界之前，就要做過濾（redact at egress）」——因為一旦資料離開你的電腦、進到路由器的日誌裡，它已經不在你的控制範圍內了。

---

## 常見問題

**Q1：這件事是 Anthropic 或 OpenAI 被駭嗎？**

不是。洩漏點是第三方中國 LLM 路由器服務，不是 AI 模型公司本身的伺服器。這個區分很重要——它決定了問題該怎麼解。

**Q2：6TB 資料集裡真的有可以入侵政府的憑證嗎？**

⚠️ 目前這個聲稱僅來自研究者 Chaofan Shou 的推文，尚未經第三方獨立驗證。但根據他 4 月發表的學術論文，同類型攻擊在他測試的 428 個路由器中確實廣泛存在，因此聲稱的方向可信，具體數字仍待查證。

**Q3：如果我只用 ChatGPT 網頁版聊天，會不會受影響？**

如果你使用的是官方網頁或官方 App，直接連到 OpenAI/Anthropic 的伺服器，那你不會受這個特定事件影響。但 OpenAI 或 Anthropic 自己的資料使用政策是另一個獨立議題，值得單獨關注。

**Q4：為什麼會有這麼多人使用第三方路由器？**

主要有三個原因：**成本**（多模型比價、批量折扣）、**地區限制**（如中國、部分中東國家無法直接使用某些模型）、**便利性**（統一介面、統一計費）。

**Q5：企業要用 AI 助手，有沒有比較安全的做法？**

有。企業級的做法通常是自建 AI 網關（AI Gateway），把稽核日誌、憑證管理、輸入/輸出過濾都納入資安控制範圍，並在資料流出前做敏感資訊掃描（PII/secret scanning）。關鍵原則是：**把 AI 中間層當作和金流一樣重要的關鍵基礎設施來管理。**

---

## 結論

這次事件真正的教訓，不是「AI 不安全」，也不是「中國路由器不能用」——而是：**當你為了省錢、為了便利、為了繞過限制，選擇一個沒有信任基礎的中間人時，你把資料主權也一併交出去了。**

大型語言模型的興起帶來了新的攻擊面，而業界的資安框架正在追趕。OWASP 已經有 LLM Top 10 風險清單，NIST 也發布了 AI Risk Management Framework，Cloud Security Alliance 提出了 MAESTRO 威脅建模方法——這些都是還在快速演進的工具。

但在制度趕上之前，最實際的防線還是使用者自己：**把每一個 AI 中間層當成「可能會錄音的第三方」來對待**，該加密的加密、該隔離的隔離、該懷疑的懷疑。

Chaofan Shou 花錢買到的那 6TB 資料，可能只是我們看到的第一份。在暗網上、在閒魚上、在無數個看似便宜的 API 服務背後——**還有多少份沒有人買下來、沒有人揭露的資料集，正在靜靜地等著被出售？**

這才是這則新聞真正該讓人失眠的地方。

---

## 延伸搜尋

- [LLM Router 資安風險](https://www.google.com/search?q=LLM+Router+%E8%B3%87%E5%AE%89%E9%A2%A8%E9%9A%AA)
- [Router in the Middle attack](https://www.google.com/search?q=Router+in+the+Middle+attack)
- [OWASP LLM Top 10](https://www.google.com/search?q=OWASP+LLM+Top+10)
- [AI Gateway 企業部署](https://www.google.com/search?q=AI+Gateway+%E4%BC%81%E6%A5%AD%E9%83%A8%E7%BD%B2)
- [AI agent 憑證管理最佳實踐](https://www.google.com/search?q=AI+agent+%E6%86%91%E8%AD%89%E7%AE%A1%E7%90%86)

---

## 參考資料來源

- [Your Agent Is Mine: Measuring Malicious Intermediary Attacks on the LLM Supply Chain (arXiv)](https://arxiv.org/abs/2604.08407)
- [Chaofan Shou 原始推文（X）](https://x.com/shoucccc/status/2098169782541631871)
- [A Researcher Buys 6TB Of Anthropic Claude Data Dump From A China-Based LLM Router (WCCFTech)](https://wccftech.com/a-researcher-buys-6tb-of-anthropic-claude-data-dump-from-a-china-based-llm-router-finds-enough-ammo-to-hack-xiaomi-huawei-and-chinese-government-agencies/)
- [Detecting and Preventing Distillation Attacks (Anthropic 官方公告)](https://anthropic.com/news/detecting-and-preventing-distillation-attacks)
- [Claude Code Source Leaked via npm Packaging Error (The Hacker News)](https://thehackernews.com/2026/04/claude-code-tleaked-via-npm-packaging.html)
- [Anthropic Rejects China's Claim About Claude Code Backdoor (Bank Info Security)](https://www.bankinfosecurity.com/anthropic-rejects-chinas-claim-about-claude-code-backdoor-a-32184)
- [Malicious LLM Proxy Routers: Hidden AI Supply Chain Risk (Cloud Security Alliance)](https://labs.cloudsecurityalliance.org/research/csa-research-note-llm-proxy-router-risk-20260416-csa-styled/)
- [The AI Supply Chain is Actually an API Supply Chain (Security Boulevard)](https://securityboulevard.com/2026/04/the-ai-supply-chain-is-actually-an-api-supply-chain-lessons-from-the-litellm-breach/)
- [Your LLM Router Logged the Wallet Key. It Already Left. (Dev.to)](https://dev.to/alex_spinov/your-llm-router-logged-the-wallet-key-it-already-left-1jje)
- [China Warns of Claude Code Backdoor Security Risk (Quartz)](https://qz.com/china-anthropic-claude-code-backdoor-security-warning-070926)