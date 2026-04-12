import type { LucideIcon } from 'lucide-react';

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface ArticleItem {
  title: string;
  href: string;
  date: string;
}

export interface ToolItem {
  title: string;
  href: string;
  description: string;
  updatedAt: string;
}
