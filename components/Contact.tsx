import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-surface to-background rounded-3xl border border-muted/30 p-8 md:p-12 overflow-hidden relative">
          
          {/* Decorative background */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />

          <div className="relative z-10 text-center space-y-6">
            <div className="inline-flex p-3 rounded-full bg-surface/80 text-accent mb-4">
              <MessageSquare className="h-6 w-6" />
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-text">联系方式</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              欢迎访问我的个人博客，或通过邮件与我联系。我会分享生活随笔、开发心得和技术教程。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a 
                href="https://blog.qfpqhyl.top" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                访问博客
              </a>
              <a 
                href="mailto:qfpqhyl@gmail.com" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-background text-text font-semibold hover:bg-surface transition-all border border-muted/30"
              >
                发送邮件
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;