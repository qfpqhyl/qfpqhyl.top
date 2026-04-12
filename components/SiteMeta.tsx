import { useEffect } from 'react';
import { profile } from '../config/profile';

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
};

const upsertLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
};

const SiteMeta = () => {
  useEffect(() => {
    document.title = profile.title;

    upsertMeta('meta[name="description"]', { name: 'description', content: profile.description });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: profile.keywords.join(',') });
    upsertMeta('meta[name="author"]', { name: 'author', content: profile.author });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: profile.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: profile.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: profile.siteUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: profile.avatarUrl });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: profile.siteName });
    upsertMeta('meta[name="twitter:site"]', { name: 'twitter:site', content: `@${profile.handle}` });
    upsertMeta('meta[name="twitter:creator"]', { name: 'twitter:creator', content: `@${profile.handle}` });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: profile.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: profile.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: profile.avatarUrl });

    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: profile.siteUrl });
    upsertLink('link[rel="icon"]', { rel: 'icon', href: profile.faviconPath, type: 'image/png' });
    upsertLink('link[rel="apple-touch-icon"]', { rel: 'apple-touch-icon', href: profile.faviconPath });
  }, []);

  return null;
};

export default SiteMeta;
