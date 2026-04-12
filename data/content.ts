import type { ArticleItem, ToolItem } from '../types';

export interface SiteContent {
  articles: ArticleItem[];
  tools: ToolItem[];
  generatedAt: string;
}

export const siteContent: SiteContent = {
  "generatedAt": "2026-04-12T09:54:07.188Z",
  "articles": [
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
    },
    {
      "title": "读研后悔吗？",
      "href": "https://blog.qfpqhyl.top/2025/11/16/regret-to-read/",
      "date": "2025-11-16"
    }
  ],
  "tools": [
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
    },
    {
      "title": "server-scripts",
      "href": "https://github.com/qfpqhyl/server-scripts",
      "description": "🧰 一站式 Linux 服务器配置与环境部署脚本，面向国内开发者与科研人员。 支持系统初始化、代理安装、Docker、Python 环境与性能优化。 快速构建科研计算与开发服务器，解决「部署慢、网络差、环境乱」等痛点。",
      "updatedAt": "2026-02-14"
    },
    {
      "title": "CUMCM2023B",
      "href": "https://github.com/qfpqhyl/CUMCM2023B",
      "description": "2023年全国大学生数学建模比赛B题（河北省一等奖）",
      "updatedAt": "2026-02-13"
    }
  ]
};
