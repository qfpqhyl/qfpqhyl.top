import type { ArticleItem, ToolItem } from '../types';

export interface SiteContent {
  articles: ArticleItem[];
  tools: ToolItem[];
  generatedAt: string;
}

export const siteContent: SiteContent = {
  "generatedAt": "2026-06-02T02:47:30.147Z",
  "articles": [
    {
      "title": "我是怎么把 GitHub Actions 用成个人主页内容编辑器的",
      "href": "https://blog.qfpqhyl.top/2026/04/13/github-actions-refresh-content/",
      "date": "2026-04-13"
    },
    {
      "title": "如何使用Cloudflare Tunnel",
      "href": "https://blog.qfpqhyl.top/2026/01/24/how-to-use-Cloudflare-Tunnel/",
      "date": "2026-01-24"
    },
    {
      "title": "2025年「且行且歌」",
      "href": "https://blog.qfpqhyl.top/2025/12/31/year1/",
      "date": "2025-12-31"
    },
    {
      "title": "周记第三篇：考试？不要复习了哇",
      "href": "https://blog.qfpqhyl.top/2025/12/14/week3/",
      "date": "2025-12-14"
    },
    {
      "title": "周记第二篇：再见了横向，我要学习！",
      "href": "https://blog.qfpqhyl.top/2025/11/26/week2/",
      "date": "2025-11-26"
    },
    {
      "title": "周记第一篇：重新出发",
      "href": "https://blog.qfpqhyl.top/2025/11/17/week1/",
      "date": "2025-11-17"
    }
  ],
  "tools": [
    {
      "title": "qfpqhyl.top",
      "href": "https://github.com/qfpqhyl/qfpqhyl.top",
      "description": "一个使用 React、Vite 和 Base UI 搭建的个人主页，展示最近文章与工具。「没错，正是这个页面，Github Action每天都会抓取最新的文章和仓库。」",
      "updatedAt": "2026-06-01"
    },
    {
      "title": "Yanshan-University-learning-materials-sharing",
      "href": "https://github.com/qfpqhyl/Yanshan-University-learning-materials-sharing",
      "description": "大学，学了吗？如学。",
      "updatedAt": "2026-05-30"
    },
    {
      "title": "WebMonitor",
      "href": "https://github.com/qfpqhyl/WebMonitor",
      "description": "🐍 基于 Python 的网页内容自动监控及邮件通知工具，适用于检测网页指定区域内容的变化，并在发生变动时通过邮件进行提醒。 | 🐍 A Python-based web content monitoring and email notification tool, designed to detect changes in specific sections of a webpage and send email alerts when updates occur.",
      "updatedAt": "2026-05-25"
    },
    {
      "title": "local_img2bed_img",
      "href": "https://github.com/qfpqhyl/local_img2bed_img",
      "description": "将⌈*.md⌋中的本地图片一键上传到图床并替换⌈*.md⌋中的路径引用。",
      "updatedAt": "2026-05-10"
    },
    {
      "title": "ISCC_Tools",
      "href": "https://github.com/qfpqhyl/ISCC_Tools",
      "description": "一些关于ISCC平台的实用脚本",
      "updatedAt": "2026-05-10"
    }
  ]
};
