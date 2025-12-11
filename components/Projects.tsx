import React from 'react';
import { ExternalLink, Github, FolderGit2, ArrowRight } from 'lucide-react';
import { Project } from '../types';

// 基于用户信息的精选项目
const projects: Project[] = [
  {
    id: 1,
    title: 'CodeRunner',
    description: '轻量级在线代码运行与调用工具，支持多种编程语言的在线执行和调试。',
    tags: ['Python', 'React', 'Ant Design Pro'],
    github: 'https://github.com/qfpqhyl/CodeRunner',
    link: 'https://github.com/qfpqhyl/CodeRunner',
    imageUrl: 'https://picsum.photos/seed/coderunner/800/600'
  },
  {
    id: 2,
    title: 'WebMonitor',
    description: '网页内容变动监控通知系统，实时监控网站内容变化并及时推送通知。',
    tags: ['Python', 'React', 'MUI'],
    github: 'https://github.com/qfpqhyl/WebMonitor',
    link: 'https://github.com/qfpqhyl/WebMonitor',
    imageUrl: 'https://picsum.photos/seed/webmonitor/800/600'
  },
  {
    id: 3,
    title: '强化学习研究项目',
    description: '基于深度强化学习的智能决策系统研究，探索多智能体协作与环境交互。',
    tags: ['Python', 'PyTorch', 'OpenAI Gym', 'RL'],
    github: 'https://github.com/qfpqhyl/RL-Research',
    link: 'https://github.com/qfpqhyl/RL-Research',
    imageUrl: 'https://picsum.photos/seed/reinforcement/800/600'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">精选项目</h2>
                <p className="text-muted">一些我的近期项目和开发心得。</p>
            </div>
            <a href="https://github.com/qfpqhyl" target="_blank" rel="noreferrer" className="text-accent hover:text-secondary transition-colors flex items-center gap-2 font-medium">
                在 GitHub 上查看更多 <ArrowRight className="h-4 w-4" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-background rounded-2xl overflow-hidden border border-muted/30 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 flex flex-col h-full"
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-muted text-sm mb-6 line-clamp-3 flex-grow">
                    {project.description}
                </p>
                
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-surface text-xs text-secondary border border-muted/30">
                        {tag}
                        </span>
                    ))}
                    </div>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-muted/30">
                    {project.github && (
                        <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors"
                        >
                        <Github className="h-4 w-4" /> 源码
                        </a>
                    )}
                    {project.link && (
                        <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors"
                        >
                        <ExternalLink className="h-4 w-4" /> 在线演示
                        </a>
                    )}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;