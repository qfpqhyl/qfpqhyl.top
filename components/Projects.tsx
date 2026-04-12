import { Separator } from '@base-ui/react';
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/content';

const { articles, tools } = siteContent;

const Projects = () => {
  return (
    <section className="grid gap-10 py-2 lg:grid-cols-2 lg:gap-12">
      <div className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">Articles</p>
          <h2 className="text-2xl font-semibold tracking-tight text-text">文章列表</h2>
          <p className="text-sm leading-7 text-muted">从博客时间线整理出的最近文章。</p>
        </div>

        <Separator className="h-px w-full bg-line" />

        <div>
          {articles.map((article, index) => (
            <div key={article.href}>
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 py-4"
              >
                <div className="min-w-0">
                  <h3 className="text-sm font-medium leading-7 text-text transition group-hover:text-muted">
                    {article.title}
                  </h3>
                </div>
                <div className="flex shrink-0 items-center gap-4 text-xs text-muted">
                  <span>{article.date}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>
              {index < articles.length - 1 && <Separator className="h-px w-full bg-line/70" />}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">Recent Tools</p>
          <h2 className="text-2xl font-semibold tracking-tight text-text">最近工具</h2>
          <p className="text-sm leading-7 text-muted">根据 GitHub 最近更新时间整理出的公开仓库。</p>
        </div>

        <Separator className="h-px w-full bg-line" />

        <div>
          {tools.map((tool, index) => (
            <div key={tool.href}>
              <a
                href={tool.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 py-4"
              >
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-medium leading-7 text-text transition group-hover:text-muted">
                      {tool.title}
                    </h3>
                    <span className="text-xs text-muted">{tool.updatedAt}</span>
                  </div>
                  <p className="text-sm leading-7 text-muted">{tool.description}</p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted" />
              </a>
              {index < tools.length - 1 && <Separator className="h-px w-full bg-line/70" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
