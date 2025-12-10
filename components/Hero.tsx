import React from 'react';
import { Github, Twitter, ArrowRight, MousePointer2, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 opacity-30" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -z-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

        <div className="flex-1 text-center lg:text-left space-y-8">
          <div className="space-y-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-muted/30 text-sm text-accent font-medium mb-4">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                🎓 研究生 & 💻 全栈开发
             </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-text">
              你好 👋 我是
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary whitespace-nowrap">
              秋风飘起黄叶落
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              🤖 专注于强化学习研究<br />
              💻 热衷于有趣的开发项目<br />
              🚀 探索更多可能
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2"
            >
              查看项目 <ArrowRight className="h-4 w-4" />
            </a>

            <div className="flex items-center gap-4 px-6">
              <a
                href="https://github.com/qfpqhyl"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted hover:text-text hover:bg-accent/10 rounded-full transition-all"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/qfpqhyl"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted hover:text-text hover:bg-accent/10 rounded-full transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:qfpqhyl@gmail.com"
                className="p-2 text-muted hover:text-text hover:bg-accent/10 rounded-full transition-all"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
           <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <img
                src="https://avatars.githubusercontent.com/u/95489429?v=4"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-3xl rotate-3 hover:rotate-0 transition-transform duration-500 border border-muted/30 shadow-2xl"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-surface/95 backdrop-blur border border-muted/30 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <MousePointer2 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">当前研究方向</p>
                    <p className="text-sm font-bold text-text">强化学习</p>
                  </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
