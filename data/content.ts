import type { ArticleItem, ToolItem } from '../types';

export interface SiteContent {
  articles: ArticleItem[];
  tools: ToolItem[];
  generatedAt: string;
}

export const siteContent: SiteContent = {
  "generatedAt": "2026-05-11T02:26:45.040Z",
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
    },
    {
      "title": "date2Graduate",
      "href": "https://github.com/qfpqhyl/date2Graduate",
      "description": "距离2026年研究生入学考试还有多少天？",
      "updatedAt": "2026-05-10"
    },
    {
      "title": "ImageWatermarkByVue3",
      "href": "https://github.com/qfpqhyl/ImageWatermarkByVue3",
      "description": "🤗一个基于 Vue 的练手项目，支持在线为图片添加自定义水印并实时预览，还能保存水印预设方便下次使用。",
      "updatedAt": "2026-05-10"
    },
    {
      "title": "Yanshan-University-learning-materials-sharing",
      "href": "https://github.com/qfpqhyl/Yanshan-University-learning-materials-sharing",
      "description": "大学，学了吗？如学。",
      "updatedAt": "2026-05-10"
    }
  ]
};
