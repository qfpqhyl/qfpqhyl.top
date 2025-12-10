export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  imageUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
}