import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
            <span className="font-mono font-bold text-xl text-text">
              qfpqhyl<span className="text-accent">.top</span>
            </span>
            <p className="text-muted text-sm mt-2">
              © {currentYear} 秋风飘起黄叶落. All rights reserved.
            </p>
        </div>

        <div className="flex gap-6">
            <a href="https://github.com/qfpqhyl" target="_blank" rel="noreferrer" className="text-muted hover:text-accent text-sm transition-colors">GitHub</a>
            <a href="https://blog.qfpqhyl.top" target="_blank" rel="noreferrer" className="text-muted hover:text-accent text-sm transition-colors">博客</a>
            <a href="mailto:qfpqhyl@gmail.com" className="text-muted hover:text-accent text-sm transition-colors">邮件</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;