import type { ArticleItem, ToolItem } from '../types';

export interface SiteContent {
  articles: ArticleItem[];
  tools: ToolItem[];
  generatedAt: string;
}

export const siteContent: SiteContent = {
  "generatedAt": "2026-04-13T15:06:02.098Z",
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
      "updatedAt": "2026-04-13"
    },
    {
      "title": "qfpqhyl.github.io",
      "href": "https://github.com/qfpqhyl/qfpqhyl.github.io",
      "description": "最近更新的公开仓库。",
      "updatedAt": "2026-04-13"
    },
    {
      "title": "MindFlow",
      "href": "https://github.com/qfpqhyl/MindFlow",
      "description": "MindFlow 是一个智能工作流应用，将 AI 聊天、知识管理和任务提醒完美整合。通过对话生成文档、自动创建任务并设置邮件提醒，让您的工作流更加高效。",
      "updatedAt": "2026-04-12"
    },
    {
      "title": "WebMonitor",
      "href": "https://github.com/qfpqhyl/WebMonitor",
      "description": "🐍使用 Python 编写的网页内容自动监控及邮件通知工具，适用于检测网页指定区域内容变动并通过邮件提醒。",
      "updatedAt": "2026-03-22"
    },
    {
      "title": "qfpqhyl",
      "href": "https://github.com/qfpqhyl/qfpqhyl",
      "description": "最近更新的公开仓库。",
      "updatedAt": "2026-03-09"
    }
  ]
};
