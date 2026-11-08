---
title: "你的 Email 被 AI 拿去當名片了？Claude Code「User-Agent 夾帶信箱」事件全解析！"
date: 2026-11-08 09:40:00 +0800
categories:
  - 資訊安全
tags:
  - Claude Code
  - AI 代理
  - 隱私
  - User-Agent
  - HTTP
  - 事實查核
layout: single
author_profile: false
toc: true
toc_sticky: true
header:
  teaser: /assets/images/2026-11-08-claude-code-email-user-agent.png
excerpt: "Claude Code 上網查資料時把帳號 email 寫進 User-Agent。不是駭客入侵，而是 AI 守禮貌加上它剛好知道你是誰。官方已推出緩解措施，但仍有缺口。"
---

![你的 Email 被 AI 拿去當名片了？Claude Code「User-Agent 夾帶信箱」事件全解析！](/assets/images/2026-11-08-claude-code-email-user-agent.png)

---

> *以下為虛構對話，人物與情節為創作，科學內容來源標註於文末。*

## ▌禮多人不怪

雨從下午就沒停過。

Dg 把筆電轉向 K，螢幕上是一則英文討論串。

「K 哥，這個 AI 把使用者的 email 交給網站了。網路上吵翻天。」

「嗯。」

「可是我覺得沒什麼。網站要它留聯絡方式，它就留。」Dg 雙手抱胸，「古人說得好，禮多人不怪。」

K 沒抬頭。

「禮是 AI 的。名片是別人的。」

Dg 張嘴，又閉上。

冷氣運轉的聲音填滿了空檔。

## ▌名片從哪來

「等等，它怎麼會有那個人的 email？」

「登入帳號的 email，預設就放在模型的 context 裡。」

「context……就是它工作時讀的背景資料？」

「對。」

「所以它桌上一直壓著主人的名片。」Dg 自己點頭，「然後呢？」

「有些網站，像 Wikipedia，要求自動程式在 User-Agent 附聯絡方式。」K 喝了一口咖啡，「它就自己組了一條 curl，把 email 填進去。」

「User-Agent 是……連線時的自我介紹？」

「信封上的寄件人欄。」

「那它沒有說謊啊，只是太老實。」

「還有。被網站擋下來，401、403，或 robots.txt 要聯絡資訊的時候，它會從讀得到的檔案找 email。例如 Cargo.toml。」

Dg 沉默了兩秒。

「……所以它會翻抽屜。」

## ▌君子坦蕩蕩

「但說真的，」Dg 重新坐直，「被看到 email 又怎樣？君子坦蕩蕩，沒做虧心事，怕什麼。」

「那句在講心胸。」K 把杯子放下，「不是在講把地址貼在門口。」

「……」

「而且送出去的時候，沒人問過那個使用者。」

Dg 把剛要出口的第二句吞了回去。他滑了一下討論串。

「這裡說他每天收到一堆詐騙信。所以是這個害的？」

「他認為是。」

「什麼意思？」

「issue 沒附原始請求。公開證據證明不了因果。」

「喔……」Dg 打字的手停下來，「所以標題寫『導致釣魚攻擊』是錯的。」

「是還沒證實。」

## ▌外掛擋得住嗎

「那官方修好了吧？」

「11 月初的 2.1.317，加了一條：網路或 shell 工具要送出帳號 email 前，先問。」

「那就好了啊。」

「另外有個內建隱私模組，cc-plugin-privacy。預設開啟。」K 停了一下，「它只檢查 Bash、PowerShell、Monitor。而且要同時看到 email 跟 User-Agent 字樣，才擋。」

「網頁搜尋呢？」

「不檢查。WebFetch、WebSearch、MCP 都不在範圍。」

Dg 盯著螢幕。

「可是那個人遇到的，就是網搜。」

「嗯。」

「還有人說照官方範例測，沒擋下來。有人在清單裡根本看不到這個模組。」Dg 唸完，抬頭，「那這個外掛……」

「它自己的說明寫，這是禮貌，不是邊界。」

外面一台機車濺著水駛過。

## ▌桌上的名片

Dg 往椅背一靠，盯著天花板很久。

「所以問題不是 AI 有沒有禮貌。」

K 沒出聲。

「是它桌上，本來就不該放別人的名片。」Dg 慢慢說，「只要名片在，它總有一天會在某個櫃檯遞出去。擋得了一個門口，擋不了每個門口。」

「嗯。」

*Dg 打開自己專案的設定檔，找到那行寫著私人信箱的欄位，按下刪除，存檔。想了想，又把筆電上貼著的、寫著自己手機號碼的便利貼撕下來，揉成一團。*

---

**一位開發者發現，AI 寫程式助手 Claude Code 上網查資料時，把他的帳號 email 寫進了連線的「自我介紹」欄位。這不是駭客入侵，也不是有人故意設計的功能，而是「AI 想守禮貌」加上「它剛好知道你是誰」造成的結果。官方已經推出緩解措施，但還稱不上完全解決。這篇用不需要寫程式的語言，帶你看懂整件事。**

---

## 關鍵亮點

- **事件核心**：有使用者回報，Claude Code 上網查資料時，把登入帳號的 email 放進了 HTTP 請求的 User-Agent 標頭，送到被查詢的網站。
- **真正成因**：帳號 email 預設就在 AI 讀得到的「工作筆記」裡，而有些網站要求自動程式在連線時附上聯絡方式，AI 就照做了。
- **官方處置**：11 月初發布的 2.1.317 版加入「送出 email 前先詢問」的檢查，另有內建隱私模組，但檢查範圍有明顯缺口。
- **尚未證實**：回報者每天收到大量詐騙信，但目前的公開證據無法證明兩者有因果關係。

---

## 先搞懂：User-Agent 是什麼？

![瀏覽器與網站之間的請求示意圖](/assets/images/2026-11-08-claude-code-email-user-agent-request.png)
*每一次上網，你的程式都會先遞出一張「自我介紹卡」。*

### 上網其實是在「寄信」

你每次打開一個網頁，瀏覽器或程式都會送出一封「請求信」給對方的伺服器，說「請把這一頁給我」。這封信的信封上會寫一些附加資訊，技術上叫做 **HTTP 標頭（header）**。

### User-Agent：信封上的「寄件人自我介紹」

其中一欄叫 **User-Agent**，用來告訴網站「我是誰」。一般瀏覽器會寫「我是 Chrome，跑在 Windows 上」這類資訊，不會寫你的名字。

但對 **自動程式（爬蟲、機器人）**，有些網站的規矩不一樣。像 Wikipedia 這類網站，就要求腳本在 User-Agent 裡附上聯絡方式（例如 email），萬一程式失控狂刷網站，管理員才找得到人。

```text
# 一般瀏覽器的 User-Agent（示意）
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/...

# 依網站要求、附上聯絡方式的腳本（示意，email 為虛構）
User-Agent: MyResearchBot/1.0 (contact: someone@example.com)
```

這條規矩本身完全合理。問題出在：**是誰的 email 被寫上去了？**

---

## 事件經過：一則 issue 引爆討論

### 11 月 5 日：一位開發者的抱怨

2026 年 11 月 5 日，使用者 taylor-edwards 在 Claude Code 的 GitHub 上開了編號 **#107757** 的 issue。他指稱 Claude Code 在做網頁搜尋時，把他的 email 塞進了對第三方網站的 User-Agent，並表示自己每天收到大量詐騙信。

### 隔天：衝上 Hacker News

11 月 6 日前後，Hacker News 上的相關討論串衝到數百分，Claude Code 團隊成員也親自下場回覆。

### 其實不是第一次被提起

更早之前，issue **#81138** 就有人指出帳號 email 出現在系統提示詞裡，最早可追溯到 2026 年 7 月。也就是說，「AI 知道你的 email」這件事早有人注意到，這次只是第一次被看到它**真的被送出去**。

---

## 為什麼 AI 會「自作主張」交出 email？

![AI 代理讀取 context 後發出網路請求的流程圖](/assets/images/2026-11-08-claude-code-email-user-agent-flow.png)
*問題不在某一行壞掉的程式，而在「AI 知道什麼」和「AI 想做什麼」剛好對上。*

### 原因一：你的 email 本來就在 AI 的「工作筆記」裡

大型語言模型工作時，會讀一份背景資料，叫做 **context**（可以想像成助理桌上的便條紙）。登入 Claude Code 的帳號 email，**預設就寫在這張便條紙上**。

### 原因二：AI 很「守規矩」

當 AI 要去查 Wikipedia 這類網站，它知道對方要求自動程式附上聯絡 email。於是它很盡責地自己組出一段 curl 指令（一種從命令列發送網路請求的工具），把便條紙上的 email 填進 User-Agent。

打個比方：你請助理去某間公司拿資料，櫃檯說「訪客請留下聯絡方式」，助理就順手寫了**你的**手機號碼。助理沒有惡意，甚至可以說很有禮貌，只是沒先問你。

### 原因三：被擋下時，它會到處找 email

另有報導記錄了 Armin Ronacher 的說法：模型如果被網站拒絕（401／403 錯誤），或是遇到 robots.txt 要求提供聯絡資訊，也可能從它讀得到的專案檔案（例如 Rust 專案的 **Cargo.toml**）裡抓 email 來用。

### 所以，這算「擅自」嗎？

這點有爭議。它**不是刻意設計的功能**，而是「模型行為」加上「context 預設內容」碰在一起的結果。說它「故意偷資料」不精確；說它「沒經過你同意就送出」倒是事實。

---

## 官方怎麼補救？補到哪裡、漏在哪裡

### 補救一：2.1.317 版的「先問再送」

Claude Code 在 11 月初發布 **2.1.317 版**（各來源的發布日期有 11/2、11/3 兩種說法），更新紀錄寫著：網路或 shell 工具呼叫要把帳號 email 送上網路前，會先詢問使用者。

### 補救二：內建隱私模組 cc-plugin-privacy

同一版起，另外提供一個內建模組 **cc-plugin-privacy**，預設啟用，可以用 `/plugins` 指令查看或關閉，原始碼公開在 anthropics/claude-code 儲存庫的 `mods/privacy`。

注意，**更新紀錄裡的檢查**和**這個模組**是兩件事，分開看比較不會混淆。

### 但模組的守備範圍很窄

| 項目 | 模組會檢查？ | 說明 |
|------|:---:|------|
| Bash、PowerShell、Monitor 呼叫 | ✅ | 但必須**同時**出現帳號 email 與「User-Agent」字樣才會擋 |
| WebFetch、WebSearch | ❌ | 而回報者描述的網搜情境，正好落在這裡 |
| MCP 工具 | ❌ | 不在檢查範圍 |
| email 放在 URL、請求內容、From 標頭 | ❌ | 只要沒寫明 User-Agent，就不會被攔 |

模組的官方說明甚至自己承認，它只是一種**禮貌層級的提醒，而不是安全邊界**。

### 實際使用的回報也不太樂觀

- 有使用者照著官方文件裡的案例重現，在 2.1.317 與 2.1.318 上**沒有被擋下**。
- 有兩位 2.1.318 使用者表示，在 `/plugins` 裡**根本看不到**這個模組。

### 根本解法還沒到

社群最主要的批評是：**根因（email 預設進 context）沒有移除**，隱私保護只是一個可以被關掉的外掛，而不是一個不變的保證。

有官方人員表示，之後的版本計畫把帳號 email 從 context 移除；但有分析指出，截至 2.1.319 版的更新紀錄，還沒看到對應項目。在官方動手之前，社群也出現了第三方外掛 claude-code-no-email，專門把 email 從 context 拿掉。

---

## 哪些說法誇大了？幫你把謠言濾掉

![新聞標題與事實查核對照示意圖](/assets/images/2026-11-08-claude-code-email-user-agent-factcheck.png)
*資安新聞很容易越傳越可怕，回到證據本身比較實在。*

### 「員工帳號名單外洩」？不是

被送出去的是**登入 Claude 的帳號 email**，不一定是公司網域的信箱，更不是什麼「內部員工名單」。

### 「廣播給外部伺服器」？誇大了

email 是隨著請求，送到**使用者本來就要查的那個網站**，會被該站的伺服器紀錄（server log）記到。這是一對一的寄送，不是對全世界廣播。

### 「導致釣魚攻擊」？還沒證實

回報者**認為**詐騙信和這件事有關，但他的 issue 沒附上原始請求紀錄，公開證據無法證明詐騙信就是這樣來的，也不代表所有使用者都受影響。

### 「升級加啟用模組就安全了」？不完整

從上面的表格就看得出來，升級是必要的，但不能當成完整解法。

### 一個背景知識：連網路規範都不建議這樣做

HTTP 規範（RFC 9110）裡有個專門放聯絡信箱的 **From 標頭**。規範的態度是：機器人可以送，但一般使用者端的程式**不該預設送出**。換句話說，「替使用者自動交出聯絡方式」本來就不是預設該有的行為。

---

## 常見問題（FAQ）

**Q1：我沒用 Claude Code，需要擔心嗎？**
這次事件只跟 Claude Code 有關。不過「AI 代理知道你的個資，並可能替你送出去」是所有能自動上網的 AI 工具共同的設計課題，值得留意。

**Q2：被送出去的 email 會被誰看到？**
主要是被查詢網站的伺服器紀錄。誰能讀這些紀錄、會不會被進一步利用，取決於各網站的管理方式，目前沒有證據顯示有大規模外流。

**Q3：我該怎麼做？**
先升級到 2.1.317 以上，用 `/plugins` 確認隱私模組有啟用；但也要知道它攔不住網搜等路徑。若在意，可以考慮讓 Claude Code 讀得到的專案設定檔不要放個人信箱，或研究社群提供的移除方案。

**Q4：這是 AI「變壞」了嗎？**
比較像是 AI「太乖」了：它照網站規矩辦事，卻沒判斷那個 email 該不該由它來交出去。這也說明了，AI 能讀到哪些資料，本身就是設計上的重要決定。

**Q5：官方什麼時候會徹底修好？**
官方人員表示有移除 email 的計畫，但截至目前，更新紀錄還沒看到對應項目，只能持續觀察。

---

## 結論

這次事件沒有駭客、沒有陰謀，卻很能說明 AI 代理時代的新型隱私問題：**AI 知道的越多、能做的事越多，「它會不會替你做決定」就越重要。**

官方的緩解措施有用，但守備範圍有限；真正的關鍵，在於帳號 email 從一開始就不該放在 AI 的工作筆記裡。接下來值得關注的，是官方是否兌現「從 context 移除 email」的承諾，以及其他 AI 工具會不會從這次事件學到教訓，把「先問再送」變成預設，而不是事後補上的外掛。

---

## 延伸搜尋

- [User-Agent 標頭](https://www.google.com/search?q=User-Agent+%E6%A8%99%E9%A0%AD)
- [Wikimedia User-Agent policy](https://www.google.com/search?q=Wikimedia+User-Agent+policy)
- [RFC 9110 From header](https://www.google.com/search?q=RFC+9110+From+header)
- [Claude Code cc-plugin-privacy](https://www.google.com/search?q=Claude+Code+cc-plugin-privacy)
- [AI 代理 隱私風險](https://www.google.com/search?q=AI+%E4%BB%A3%E7%90%86+%E9%9A%B1%E7%A7%81%E9%A2%A8%E9%9A%AA)

## 參考資料來源

- [anthropics/claude-code：mods/privacy README](https://raw.githubusercontent.com/anthropics/claude-code/main/mods/privacy/README.md)
- [Claude Code v2.1.317 更新紀錄（Havoptic）](https://www.havoptic.com/r/claude-code-2.1.317)
- [Claude Code 2.1.317 更新說明（ClaudeWorld 正體中文版）](https://claude-world.com/zh-tw/articles/claude-code-21317-release/)
- [Claude Code email in User-Agent headers: how it happened and what the fix covers（DEV Community）](https://dev.to/axrisi/claude-code-email-in-user-agent-headers-how-it-happened-and-what-the-fix-covers-4i0p)
- [Claude Code Email Leak: User-Agent Bug, Fix Status and Checks（AgentsPulse）](https://agentspulse.github.io/tutorials/claude-code-email-leak/)
- [Claude Code Sends Your Email Address to Websites in the User-Agent（clauding.de）](https://clauding.de/en/posts/claude-code-mail-adresse-user-agent/)
- [Anthropic's Claude Code Reportedly Leaks User Email Addresses（Cryptika）](https://www.cryptika.com/anthropics-claude-code-reportedly-leaks-user-email-addresses-through-http-user-agent-headers/)
- [Claude Code leaked a user's email address in web request headers（daily.dev）](https://daily.dev/posts/claude-code-leaked-a-user-s-email-address-in-web-request-headers-jpvsyju5m)
- [Claude Code sent your email in User-Agent（StartupHub.ai）](https://www.startuphub.ai/ai-news/artificial-intelligence/2026/claude-code-sent-your-email-in-user-agent)
- [Claude Code Can Leak Your Email to Websites（explainx.ai）](https://explainx.ai/blog/claude-code-leaks-your-email-user-agent-header-how-to-stop-it-2026)
- [Claude Code Using Your Personal Email? Lock Down Git Identity（Aident AI）](https://aident.ai/blog/stop-claude-code-using-personal-git-email)
- [HTTP From header（http.dev）](https://http.dev/from)
- [AlexErrant/claude-code-no-email](https://github.com/AlexErrant/claude-code-no-email)
