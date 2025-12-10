import React from 'react';
import { Code, Database, Layout, Server, Cpu, Globe } from 'lucide-react';

const skills = [
  { name: '强化学习', icon: Cpu, desc: 'Reinforcement Learning' },
  { name: 'Python', icon: Code, desc: '机器学习' },
  { name: 'React', icon: Layout, desc: '前端开发' },
  { name: 'TypeScript', icon: Code, desc: '类型安全' },
  { name: 'Node.js', icon: Server, desc: '后端开发' },
  { name: '算法研究', icon: Database, desc: 'Algorithm Research' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">关于我</h2>
          <p className="text-muted max-w-2xl mx-auto">
            专注于强化学习领域的研究，同时热衷于开发各种有意思的项目。
            探索技术与生活的结合点，分享开发心得与技术教程。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group p-6 bg-background border border-muted/30 rounded-2xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-surface text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <skill.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-text mb-1">{skill.name}</h3>
              <p className="text-xs text-muted group-hover:text-secondary transition-colors">{skill.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 rounded-3xl bg-background border border-muted/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-text mb-2">学术与开发之路</h3>
                    <p className="text-muted max-w-xl">
                        从对技术的好奇心出发，到现在专注于强化学习的前沿研究，我始终相信技术能够改变世界。
                        在开发中探索乐趣，在研究中追求创新，在博客中分享心得。欢迎访问我的个人博客：blog.qfpqhyl.top
                    </p>
                </div>
                <div className="flex-shrink-0">
                     <span className="font-serif text-6xl font-bold text-secondary select-none opacity-50">2028</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;