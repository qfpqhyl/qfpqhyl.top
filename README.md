# 秋风飘起黄叶落

一个基于 React、Vite 和 Base UI 的个人主页模板，默认展示：

- 最近文章
- 最近工具 / GitHub 仓库
- 基础社交入口

需要自己部署可以 fork 后改成自己的个人页面。

## 先改哪里

优先修改 `config/profile.ts`，这里集中放了可替换的个人信息：

- 站点标题、作者名、简介
- GitHub / 博客 / Twitter 链接
- 头像地址与站点图标路径
- 页面区块标题文案

## 本地使用

```bash
npm install
npm run generate:content
npm run dev
```

如果改了博客地址、GitHub 用户名或个人信息，建议重新执行一次：

```bash
npm run generate:content
```

## 数据来源

- 文章列表：从 `config/profile.ts` 中的 `blogUrl` 抓取时间线
- 最近工具：根据 `config/profile.ts` 中的 `handle` 抓取 GitHub 公开仓库
- 生成结果写入：`data/content.ts`

## 部署

推荐 fork 后直接部署到 **Vercel**：

1. Fork 本仓库
2. 修改 `config/profile.ts`
3. 执行 `npm run generate:content`
4. 推送到自己的仓库
5. 在 Vercel 中导入该仓库并部署

GitHub Actions 已内置自动内容刷新流程，会定时更新文章和仓库数据。

## Claude Code Prompt：获取博客时间线

如果你想让 Claude Code 帮你分析并适配博客时间线抓取，可以直接使用下面这段 prompt：

```txt
请帮我获取博客时间线数据，并适配当前项目的生成脚本。

上下文：
- 博客首页地址是：https://blog.qfpqhyl.top/
- 当前项目里生成内容的脚本在：scripts/generate-content.mjs
- 目标是提取博客首页时间线里的最近文章，字段只需要：
  - title
  - href
  - date
- 如果首页没有标准的 <time> 或文章列表标签，请检查页面里的内联 script，看看是否存在类似 `const timelineData = {...}` 的结构。
- 如果找到了 timelineData，请从其中的 posts 数组提取数据。
- 输出时先告诉我：
  1. 时间线数据具体藏在哪
  2. 文章字段是什么结构
  3. 应该如何在脚本里稳定提取
- 然后直接修改 scripts/generate-content.mjs，让它能稳定抓取最近 6 篇文章。
- 修改后运行生成脚本验证结果。
```

对于当前这个博客，时间线数据就在首页内联脚本的 `timelineData.posts` 里。
