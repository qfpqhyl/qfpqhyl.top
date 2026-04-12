export const profile = {
  siteUrl: 'https://qfpqhyl.top',
  title: '秋风飘起黄叶落 | 文章与工具',
  siteName: '秋风飘起黄叶落',
  author: '秋风飘起黄叶落',
  handle: 'qfpqhyl',
  description: '秋风飘起黄叶落的个人主页，集中展示最近文章、GitHub 工具和常用入口。',
  intro: '这里收拢了近来的文章、手边的工具与仍在缓缓生长的项目，像一册随时续写的个人索引。',
  keywords: ['秋风飘起黄叶落', 'qfpqhyl', '个人导航', 'GitHub', '博客', '作品集'],
  blogUrl: 'https://blog.qfpqhyl.top/',
  githubUrl: 'https://github.com/qfpqhyl',
  twitterUrl: 'https://x.com/qfpqhyl',
  avatarUrl: 'https://avatars.githubusercontent.com/u/95489429?v=4',
  faviconPath: '/avatar.png',
  sections: {
    articlesEyebrow: 'Articles',
    articlesTitle: '文章列表',
    articlesDescription: '从博客时间线整理出的最近文章。',
    toolsEyebrow: 'Recent Tools',
    toolsTitle: '最近工具',
    toolsDescription: '根据 GitHub 最近更新时间整理出的公开仓库。',
  },
} as const;

export type Profile = typeof profile;
