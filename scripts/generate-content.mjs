import { writeFile, mkdir } from 'node:fs/promises';
import { profile } from '../config/profile.ts';

const BLOG_URL = profile.blogUrl;
const GITHUB_REPOS_API = `https://api.github.com/users/${profile.handle}/repos?sort=updated&per_page=30`;
const MAX_ARTICLES = 6;
const MAX_TOOLS = 5;

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': `${profile.handle}-content-generator`,
      Accept: 'text/html,application/json;q=0.9,*/*;q=0.8',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': `${profile.handle}-content-generator`,
      Accept: 'application/vnd.github+json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.json();
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function parseArticles(html) {
  const dataMatch = html.match(/const\s+timelineData\s*=\s*(\{[\s\S]*?\})\s*const\s*\{types,\s*posts\}/);

  if (!dataMatch) {
    throw new Error('No timelineData found in blog homepage');
  }

  const timelineData = JSON.parse(dataMatch[1]);
  const items = [];

  for (const post of timelineData.posts || []) {
    const title = decodeHtmlEntities(String(post.title || '').trim());
    const href = new URL(String(post.path || '/'), BLOG_URL).toString();
    const date = String(post.date || '').slice(0, 10);

    if (!title || !date || items.some((item) => item.href === href)) {
      continue;
    }

    items.push({ title, href, date });
    if (items.length >= MAX_ARTICLES) {
      break;
    }
  }

  if (items.length === 0) {
    throw new Error('No articles found in blog timeline');
  }

  return items;
}

function sanitizeDescription(value) {
  return (value || '')
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseTools(repos) {
  return repos
    .filter((repo) => !repo.fork && !repo.private)
    .slice(0, MAX_TOOLS)
    .map((repo) => ({
      title: repo.name,
      href: repo.html_url,
      description: sanitizeDescription(repo.description) || '最近更新的公开仓库。',
      updatedAt: String(repo.updated_at).slice(0, 10),
    }));
}

function toTsModule(content) {
  return `import type { ArticleItem, ToolItem } from '../types';\n\nexport interface SiteContent {\n  articles: ArticleItem[];\n  tools: ToolItem[];\n  generatedAt: string;\n}\n\nexport const siteContent: SiteContent = ${JSON.stringify(content, null, 2)};\n`;
}

async function main() {
  const [blogHtml, repos] = await Promise.all([
    fetchText(BLOG_URL),
    fetchJson(GITHUB_REPOS_API),
  ]);

  const content = {
    generatedAt: new Date().toISOString(),
    articles: parseArticles(blogHtml),
    tools: parseTools(repos),
  };

  await mkdir(new URL('../data/', import.meta.url), { recursive: true });
  await writeFile(new URL('../data/content.ts', import.meta.url), toTsModule(content), 'utf8');
  console.log(`Generated ${content.articles.length} articles and ${content.tools.length} tools.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
