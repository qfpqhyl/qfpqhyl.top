import { Github, Rss, Twitter } from 'lucide-react';
import { profile } from '../config/profile';
import type { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: profile.githubUrl, icon: Github },
  { label: 'Twitter', href: profile.twitterUrl, icon: Twitter },
  { label: 'Blog', href: profile.blogUrl, icon: Rss },
];

const Navbar = () => {
  return (
    <header className="px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between border-b border-line/80 px-1 py-3 sm:px-0">
        <a href={profile.siteUrl} className="text-sm font-semibold tracking-[0.08em] text-text">
          {profile.siteName}
        </a>

        <nav className="hidden items-center gap-3 sm:flex">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-2 text-sm text-muted transition hover:border-line hover:text-text"
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
