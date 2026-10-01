# Magic_U 的安装、离线和更新

项目保持原生 HTML / CSS / JS 和 GitHub Pages 部署，不需要构建、安装依赖或维护两套手机页面。

## 入口与页面

入口是 `index.html`。manifest 的 `id` 和 `start_url` 都是 `./index.html`，`scope` 是 `./`。保持原来的入口标识，兼容 `https://tammyuuuu.github.io/Magic_U/` 这种仓库子路径。`app-nav.js` 仍连接主页、旅程和手册；其他入口和解锁条件不变。

全部 12 个业务页面都加载 `pwa-client.js`：

| 策略 | 页面 |
| --- | --- |
| 安装时预缓存 | `index.html`、`journey.html`、`daily_card.html`、`divination.html`、`handbook.html`、`handbook_daily.html`、`daily_archive.html`、`handbook_readings.html`、`handbook_spreads.html` |
| 首次访问后缓存 | `lesson.html`、`boss.html`、`spread_practice.html` |

手册列表和记录详情比较小，预缓存后可以直接离线读取原有记录。学习、Boss 和牌阵练习属于次级流程，访问时再缓存 HTML 及其资源，避免安装时下载所有学习内容。

`offline.html` 是尚未缓存页面的离线提示页，不会把缺失页面冒充为首页。`offline-card.svg` 用于未加载过的牌面，不会写入该牌面的缓存条目。

## 缓存规则

Service Worker 位于根目录的 `sw.js`，作用域由自己的 URL 推导，不写死 `/` 或仓库名。缓存名称包含项目路径，避免误删同一域名下其他项目的缓存。

- **程序和页面缓存**：预缓存核心 HTML，以及从它们实际引用中发现的 JS、CSS、manifest、图标；当前合计 38 个资源。其余页面和资源访问后保存。
- **联网读取页面、JS、CSS**：优先检查网络，使用 HTTP 条件请求让未变化文件可以返回 304。已有缓存时，网络超过 1.8 秒则先用缓存，后台继续保存更新；完全离线立即回退。下一次打开会读取保存的新资源。
- **牌面缓存**：独立的 `cards-v1` 缓存。已加载牌面先从本地返回，后台仅检查本次使用的图片；未变化图片可通过 HTTP 304 避免重新传输内容。首次看到的牌联网后保存。
- **参数页面**：`lesson.html?card=…`、`boss.html?stage=…`、`daily_archive.html?date=…` 共用对应的静态 HTML 缓存，浏览器 URL 参数保持不变，由原有 JS 读取。
- **版本查询参数**：静态资源缓存键去掉 `v`，避免同一文件不同版本查询串重复占用缓存。在线请求仍检查当前服务器内容。

安装不会下载整副牌，也没有新增整组牌面预加载。程序升级仅清理本项目旧的程序缓存，保留牌面缓存；不会调用 `localStorage.clear()`、删除 IndexedDB 或清理其他项目的缓存。

当前实际牌组为 `图片/盒子/维特塔罗/0.webp` 至 `77.webp`，牌背是 `back-mobile.webp`，共 79 张，约 3.98 MiB，平均约 51.6 KiB，最大约 92.9 KiB。`decks.js` 控制当前牌组路径、数量、格式和牌背。网页按实际展示或抽取的牌加载图片。本次没有重新转换图片。

## 用户记录

以下是原有业务存储，本次保持 key 和结构不变：

| 存储 | 用途 |
| --- | --- |
| `localStorage.magic_u_daily_records_v1_records` | 每日一牌、正逆位、心情、笔记、解读快照 |
| `localStorage.magic_u_reading_records_v1` | 占卜和解读记录 |
| `localStorage.magic_u_spread_practice_records_v1` | 牌阵练习记录 |
| `localStorage.magic_u_spread_practice_unlocked` | 牌阵练习解锁状态 |
| `localStorage.magic_u_lesson_*_completed` | 各学习关卡进度和结果，第一关使用 `magic_u_lesson_see_completed` |
| `localStorage.magic_u_boss_*_completed` | 三次黑猫考验的完成状态 |
| `sessionStorage.magic_u_lesson_*_draw` | 当前学习关卡的临时抽牌状态 |
| `sessionStorage.magic_u_daily_preview_*` | 开发预览记录，与正式记录隔离 |

没有发现当前业务使用 IndexedDB 或 Cookie 存储。页面初始化读取已有记录；PWA 更新只操作 Cache Storage 中的网页资源。更新不会修改、迁移或清空上述用户存储，也不会强制刷新未保存的输入。

记录依赖浏览器本地存储。清除网站数据、卸载或浏览器回收存储仍可能影响记录，PWA 缓存不能代替数据备份；本次也没有新增跨设备同步。保持同一个网站域名，以便继续读取原有存储。

## 发布与维护

**正常修改后照常 commit / push，不需要手动修改缓存版本号，不需要用户重新安装。** 页面与资源每次联网打开会检查服务器内容；Service Worker 的代码有变化时，浏览器会安装新版，等待打开的页面关闭后启用，避免打断抽牌或正在填写的笔记。没有强制重载按钮或自动重载。

如果刚发布而 GitHub Pages 尚未完成部署，打开的仍会是上一个版本；部署完成后重新打开即可。弱网回退也可能先展示旧资源，后台更新完成后下一次打开使用新版。

- 新增页面：在 `<head>` 加 `<script src="pwa-client.js" defer></script>`，保持 manifest、图标和相对路径。普通页面第一次访问后就会缓存；如果它是必须首次离线可用的核心页面，再加到 `sw.js` 的 `CORE_PAGES` 中。核心页面直接引用的 JS / CSS 会自动加入预缓存。
- 新增 CSS / JS 内动态加载的必要资源：按需缓存支持本作用域内常见静态资源扩展名；如果必须安装时就可用，加入 `CORE_EXTRAS`。核心页面的 CSS 内额外图片或字体也需要按此规则处理。
- 新增牌组：使用网页尺寸的 WebP，修改 `decks.js` 配置和现有业务需要的数据。`图片/` 下的图片都按需缓存，不加入预缓存。
- 替换单张牌：保留原路径并 push。用户再次使用这张牌时后台检查更新；其他牌面不会被整体清空或重下。已缓存旧牌可能先显示一次，下次显示新牌。
- 不要频繁改 manifest 的 `id`、入口地址或 Service Worker 文件名。只有修改缓存结构/策略确实需要时，才调整 `sw.js` 的程序缓存名称；牌面缓存保持独立。

## 手机上安装和验证

iPhone：在 Safari 打开部署后的首页，通过分享菜单添加到主屏幕。Android：在 Chrome 打开首页，使用浏览器提供的安装或添加到主屏幕入口。网站使用 `standalone` 显示，安装入口由浏览器和设备决定。

首次保持联网打开首页，等待核心资源完成缓存，再访问一次需要离线使用的学习、Boss 或牌阵页面。然后开启飞行模式、关闭应用并重新打开，检查首页、手册、本地记录和已加载牌面。没看过的牌面可能显示“牌面尚未缓存”，联网后会正常加载。若完全离线时抽到新牌，可以继续保存抽牌结果，联网后再查看其牌面。

实际验证还应包括：联网保存一条记录，发布更新，重新打开，检查原有记录；观察是否有新的页面或资源没有访问过。

## 自动化验证

`tests/pwa-browser.cjs` 使用 Node + Playwright，启动临时本地 HTTP 服务器和独立浏览器测试上下文，不接触用户实际浏览器或业务记录，不修改源文件来模拟发布。

在 Playwright 可由 Node 解析的环境运行：

```powershell
node tests/pwa-browser.cjs
```

默认使用已安装的 Edge；可通过环境变量 `PWA_BROWSER_CHANNEL=chrome` 改用 Chrome。测试涵盖子路径、manifest、图标尺寸、预缓存范围、断网导航、动态参数、离线写记录、离线抽牌保存、未缓存图片、HTTP 304、弱网回退、同路径 CSS 更新、单张图片更新及新版 worker 激活后的数据与缓存保留。

本地 Edge 实测不能代替 iPhone / Android 实机安装，也没有把本地改动自动部署到 GitHub Pages。

缓存和更新依据：[MDN Service Worker 使用说明](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)、[Chrome Service Worker 生命周期](https://developer.chrome.com/docs/workbox/service-worker-lifecycle)。
