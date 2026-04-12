# Fork 修改说明

如果你想把这个页面改成自己的，优先修改：`config/profile.ts`

主要字段：

- `siteName`：页面显示名称
- `author`：作者名
- `handle`：用户名 / GitHub 用户名
- `siteUrl`：部署后的正式域名
- `blogUrl`：博客地址
- `githubUrl`：GitHub 主页
- `twitterUrl`：Twitter / X 地址
- `avatarUrl`：头像地址
- `faviconPath`：站点图标路径
- `title` / `description` / `keywords`：SEO 信息
- `intro`：首页简介
- `sections`：页面区块标题与说明

修改完成后执行：

```bash
npm run generate:content
```

推荐 fork 后部署到 **Vercel**。
