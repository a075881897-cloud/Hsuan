import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  User, Calendar, Mail, BookOpen, FileText, Presentation, Box,
  Briefcase, GraduationCap, Award, Type, Monitor,
  Quote, ChevronRight, Sparkles, MapPin, ExternalLink
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ title, subtitle, number }: { title: string, subtitle?: string, number: string }) => (
  <div className="flex flex-col md:flex-row md:items-end gap-4 mb-16 relative">
    <div className="font-display text-[80px] leading-[0.8] text-white/5 select-none font-bold tracking-tighter absolute -top-10 -left-6 z-0 mix-blend-screen">
      {number}
    </div>
    <div className="relative z-10 flex items-center gap-4">
      <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-xs font-mono text-[#00f0ff] tracking-[0.3em] mt-3 uppercase font-semibold glass-text-glow">{subtitle}</p>}
    </div>
  </div>
);

const AssignmentCard = ({ icon: Icon, date, type, title, link, index }: any) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    className="group block p-8 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 hover:border-[#00f0ff]/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.2)] flex flex-col h-full relative overflow-hidden rounded-[2rem]"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00f0ff]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#00f0ff]/20 transition-colors duration-500" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(112,0,255,0.05)_0%,transparent_50%)] pointer-events-none" />
    
    <div className="flex justify-between items-start mb-auto pb-12 relative z-10">
      <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-[#00f0ff]/10 text-zinc-400 group-hover:text-[#00f0ff] group-hover:border-[#00f0ff]/30 transition-all duration-500">
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-[10px] tracking-widest bg-white/5 border border-white/10 text-zinc-400 px-4 py-1.5 rounded-full font-mono group-hover:border-[#00f0ff]/50 group-hover:text-[#00f0ff] transition-colors font-medium">
        {type}
      </span>
    </div>
    
    <div className="relative z-10">
      <div className="flex items-center gap-2 text-[11px] font-mono font-medium text-zinc-500 mb-3 group-hover:text-[#00f0ff]/70 transition-colors uppercase">
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-bold text-zinc-100 mb-8 group-hover:text-white transition-colors leading-relaxed font-sans">
        {title}
      </h3>
    </div>
    
    <div className="flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-zinc-500 group-hover:text-[#00f0ff] transition-colors pt-6 border-t border-white/10 mt-auto uppercase z-10">
      <span>Access Project</span>
      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00f0ff]/20 transition-colors">
        <ExternalLink className="w-4 h-4" />
      </div>
    </div>
  </motion.a>
);

export default function App() {
  const assignments = [
    { icon: FileText, date: '2026.03.09', type: 'WORD', title: '清明連假旅行規劃', link: 'https://drive.google.com/file/d/1fw7qdT-_L0XICJ4XfZJIBkCbmwjwD1-i/view' },
    { icon: Presentation, date: '2026.03.17', type: 'SLIDE', title: '清明連假旅行規劃', link: 'https://docs.google.com/presentation/d/1ah96SQlHrZtaTVJFVWZmFPAnCZRpnAQKpivA01la6NI/present?slide=id.p1' },
    { icon: FileText, date: '2026.03.23', type: 'AI PDF', title: 'Gamma 清明連假', link: 'https://drive.google.com/file/d/1f27FAJcl_HeY2MD15wfqwWJHovZFGO_8/view' },
    { icon: Presentation, date: '2026.03.23', type: 'AI SLIDE', title: 'Manus 清明連假', link: 'https://drive.google.com/file/d/1ufHWkeiZDmUC8vFBG256pWUhRraeT3Om/view' },
    { icon: FileText, date: '2026.03.23', type: 'AI PDF', title: 'Notebook LM 清明連假', link: 'https://drive.google.com/file/d/1fr0knU9DIZxv2RhPy2MhnBkXp4e9HOhy/view' },
    { icon: Presentation, date: '2026.04.05', type: 'SLIDE', title: '清明連假 PPT', link: 'https://drive.google.com/file/d/1iWbri1niIekE2YaWTMw3Mcjfak9uSmPO/view' },
    { icon: Box, date: '2026.04.13', type: '3D ASSET', title: '3D公仔模型', link: 'https://studio.tripo3d.ai/3d-model/12705dfd-ecfa-4486-a8fe-9091f9c2e1dd?invite_code=5OKBBA' },
  ];

  return (
    <div className="min-h-screen pb-32 overflow-hidden selection:bg-[#00f0ff]/30 selection:text-white">
      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-[#00f0ff]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-[#7000ff]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* Editorial Navigation / Top Bar */}
      <nav className="fixed top-0 w-full z-50 mix-blend-screen text-white/50 p-6 md:p-8 pointer-events-none">
         <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.3em] font-bold uppercase w-full max-w-7xl mx-auto border-b border-white/10 pb-4">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span> SYSTEM: ONLINE</span>
            <span>HY.C // 2026</span>
         </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 relative z-10">
        
        {/* Editorial Hero Section */}
        <header className="flex flex-col mt-10 mb-32 relative">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start z-10"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 mb-10 w-full justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative shrink-0"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full p-[2px] bg-zinc-900 border border-white/10 relative z-10">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <img 
                      src="/profile.jpg?v=2" 
                      alt="陳宣諭 Hsuan Yu Chen" 
                      className="w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700 contrast-125"
                    />
                  </div>
                </div>
              </motion.div>
              
              <div>
                <h2 className="text-xs md:text-sm text-[#00f0ff] font-mono tracking-[0.4em] mb-2 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-[#00f0ff]"></span>
                  Hsuan Yu Chen
                </h2>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  陳宣諭
                </h1>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg text-[11px] text-zinc-300 font-mono tracking-widest hover:border-[#00f0ff]/50 transition-colors">
                <User className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>雙魚座 <span className="text-zinc-600 mx-1">/</span> A型</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg text-[11px] text-zinc-300 font-mono tracking-widest hover:border-[#7000ff]/50 transition-colors">
                <Calendar className="w-3.5 h-3.5 text-[#7000ff]" />
                <span>07.02.28</span>
              </div>
            </div>
            
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl font-light tracking-wide border-l-2 border-[#00f0ff]/30 pl-6">
              <span className="text-[#00f0ff] font-mono text-xs block mb-2 tracking-[0.2em]">{">>"} INIT_PROFILE</span>
              您好，我是陳宣諭，目前就讀大學。<br className="hidden md:block" />個性主動積極，對於學習新事物充滿熱情，樂於與不同人交流合作，在挑戰中成長，持續提升自己能力。
            </p>
          </motion.div>
        </header>

        <div className="space-y-48">
          
          {/* Assignments Section */}
          <section>
            <FadeIn>
               <SectionTitle number="01" title="學期作業" subtitle="Selected Works" />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assignments.map((assignment, index) => (
                <AssignmentCard key={index} {...assignment} index={index} />
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-24 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />
            
            {/* Work Experience Section */}
            <section>
              <FadeIn>
                <SectionTitle number="02" title="工作經歷" subtitle="Experience" />
              </FadeIn>
              <div className="space-y-16 mt-12 pr-0 lg:pr-8 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5" />
                <FadeIn delay={0.2}>
                  <div className="group pl-8 relative">
                    <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]" />
                    <div className="flex items-center gap-3 text-[11px] font-mono font-bold text-[#00f0ff] mb-4 tracking-[0.2em] uppercase">
                      <span>2024.07 — Present</span>
                    </div>
                    <h3 className="text-2xl font-display font-medium text-white mb-2 tracking-wide group-hover:text-[#00f0ff] transition-colors">六合小玲</h3>
                    <p className="text-[10px] font-mono text-zinc-500 mb-6 tracking-[0.2em] border-white/10 pb-4">Service Industry</p>
                    <ul className="space-y-4 text-zinc-400 font-light leading-relaxed bg-[#0a0a0a]/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                      <li className="flex items-start gap-4">
                        <div className="mt-2 text-[#00f0ff] opacity-60">▹</div>
                        <span>協助門市日常營運執行，執行標準化作業流程維護顧客體驗</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-2 text-[#00f0ff] opacity-60">▹</div>
                        <span>負責 POS 操作，飲品調製與現場流程管理</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-2 text-[#00f0ff] opacity-60">▹</div>
                        <span>負責門市營銷執行，包含顧客服務、飲品製作及品質控管，確保出餐效率</span>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <FadeIn delay={0.1}>
                <SectionTitle number="03" title="學歷" subtitle="Education" />
              </FadeIn>
              <div className="space-y-16 mt-12 pl-0 lg:pl-8 relative">
                <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-[1px] bg-white/5" />
                <FadeIn delay={0.3}>
                  <div className="relative group pl-8 lg:pl-16">
                    <div className="absolute left-[-4px] lg:left-[28px] top-1.5 w-2 h-2 rounded-full bg-[#7000ff] shadow-[0_0_10px_#7000ff]" />
                    <div className="flex items-center gap-3 text-[11px] font-mono font-bold text-[#7000ff] mb-4 tracking-[0.2em] uppercase">
                      <span>2022 — Present</span>
                    </div>
                    <h3 className="text-2xl font-display font-medium text-white mb-4 tracking-wide group-hover:text-[#7000ff] transition-colors">國立高雄科技大學</h3>
                    <div className="inline-flex items-center gap-2 mb-6 bg-[#7000ff]/10 border border-[#7000ff]/20 px-4 py-1.5 rounded-md">
                       <MapPin className="w-3.5 h-3.5 text-[#7000ff]" />
                       <p className="text-xs tracking-widest text-white/80 font-mono">航運技術系</p>
                    </div>
                    <p className="text-zinc-400 font-light leading-relaxed text-sm bg-[#0a0a0a]/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">目前就讀五專部四年級。</p>
                  </div>
                </FadeIn>
              </div>
            </section>
          </div>

          {/* Skills & Certifications */}
          <section>
            <FadeIn>
              <SectionTitle number="04" title="技能與證照" subtitle="Skills & Certifications" />
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
              <FadeIn delay={0.1} className="md:col-span-12 lg:col-span-7 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:border-[#00f0ff]/30 transition-colors">
                 <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00f0ff]/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#00f0ff]/20 transition-colors duration-700" />
                 
                 <div className="space-y-12 relative z-10">
                   <div>
                     <div className="flex items-center gap-3 text-zinc-500 mb-6 font-mono tracking-[0.2em] text-[10px] uppercase border-b border-white/5 pb-4">
                       <Type className="w-4 h-4 text-[#00f0ff]" />
                       <span>Language</span>
                     </div>
                     <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-start gap-2 bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-[#00f0ff]/50 transition-colors">
                           <span className="text-white font-medium">英文</span>
                           <span className="text-[10px] font-mono text-zinc-400 tracking-[0.2em]">TOEIC</span>
                        </div>
                        <div className="flex flex-col items-start gap-2 bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-[#00f0ff]/50 transition-colors">
                           <span className="text-white font-medium">中文</span>
                           <span className="text-[10px] font-mono text-[#00f0ff] tracking-[0.2em]">精通</span>
                        </div>
                        <div className="flex flex-col items-start gap-2 bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-[#00f0ff]/50 transition-colors">
                           <span className="text-white font-medium">台語</span>
                           <span className="text-[10px] font-mono text-[#00f0ff] tracking-[0.2em]">精通</span>
                        </div>
                     </div>
                   </div>

                   <div>
                     <div className="flex items-center gap-3 text-zinc-500 mb-6 font-mono tracking-[0.2em] text-[10px] uppercase border-b border-white/5 pb-4">
                       <Monitor className="w-4 h-4 text-[#7000ff]" />
                       <span>Software Utilities</span>
                     </div>
                     <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-[#7000ff]/50 transition-colors">
                           <span className="text-zinc-300 font-light text-sm tracking-wide">Word, Excel, PowerPoint</span>
                           <span className="text-[10px] font-mono text-zinc-400 bg-black/40 px-3 py-1 rounded tracking-[0.1em] w-fit uppercase">辦公應用</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-[#7000ff]/50 transition-colors">
                           <span className="text-zinc-300 font-light text-sm tracking-wide">Google Workspace</span>
                           <span className="text-[10px] font-mono text-zinc-400 bg-black/40 px-3 py-1 rounded tracking-[0.1em] w-fit uppercase">專案雲端</span>
                        </div>
                     </div>
                   </div>
                 </div>
              </FadeIn>

              <FadeIn delay={0.2} className="md:col-span-12 lg:col-span-5 bg-gradient-to-br from-[#0a0a0a]/80 to-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center hover:border-[#7000ff]/30 transition-colors group">
                 <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />
                 <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#7000ff]/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#7000ff]/20 transition-colors duration-700" />
                 
                 <div className="flex items-center gap-3 text-zinc-500 mb-8 font-mono tracking-[0.2em] text-[10px] uppercase border-b border-white/5 pb-4 relative z-10">
                    <Award className="w-4 h-4 text-white" />
                    <span>Certifications</span>
                 </div>
                 
                 <ul className="space-y-6 relative z-10">
                  {[
                    { zh: '進階滅火', en: 'ADVANCED FIRE FIGHTING' },
                    { zh: '基礎訓練', en: 'BASIC SAFETY TRAINING' },
                    { zh: '油輪與化學輪貨物操作基本訓練', en: 'TANKER CARGO OPERATIONS' },
                    { zh: '保全職責', en: 'DESIGNATED SECURITY DUTIES' },
                    { zh: 'APRA', en: 'APRA' }
                  ].map((cert, idx) => (
                    <li key={idx} className="group/item flex items-center gap-4 border border-white/5 bg-black/20 p-3 rounded-xl hover:border-white/20 transition-colors">
                       <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-[#00f0ff] group-hover/item:shadow-[0_0_8px_#00f0ff] transition-all flex-shrink-0" />
                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-1">
                          <p className="text-zinc-200 text-sm tracking-wide">{cert.zh}</p>
                          <p className="text-[8px] font-mono tracking-[0.1em] text-zinc-500 uppercase">{cert.en}</p>
                       </div>
                    </li>
                  ))}
                 </ul>
              </FadeIn>
            </div>
          </section>

          {/* Autobiography Section */}
          <section>
            <FadeIn>
              <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_-20px_rgba(0,240,255,0.1)] rounded-[2rem] p-8 md:p-16 overflow-hidden">
                <Quote className="absolute -top-10 -right-10 w-64 h-64 text-white/[0.02] rotate-12 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent" />
                
                <SectionTitle number="05" title="關於我" subtitle="Autobiography" />
                
                <div className="columns-1 md:columns-2 gap-12 text-zinc-400 font-light leading-relaxed text-sm md:text-base relative z-10 max-w-5xl tracking-wide selection:bg-[#00f0ff]/20 selection:text-white">
                  <p className="mb-6 break-inside-avoid">
                    我目前就讀國立高雄科技大學五專部四年級，在一個氣氛很輕鬆的家庭長大，跟家人相處比較像朋友。很多事情都可以直接說出來討論，而不是用責罵的方式解決。也因為這樣，我習慣先聽別人的想法，再慢慢說出自己的意見，遇到問題時，比起衝動反應，我會先想一想再行動。
                  </p>
                  <p className="mb-6 break-inside-avoid">
                    以前的我其實很愛玩，常常只在意當下開不開心，對未來沒有想太多。但隨著年紀慢慢長大，開始發現時間過得很快，也開始思考自己到底想要什麼樣的生活。
                  </p>
                  <p className="mb-6 break-inside-avoid">
                    這幾年我變得很喜歡去健身房打球，也意識到自己不能只是過一天算一天，而是要為之後的目標慢慢提升實力。這樣的轉變，讓我覺得自己真的有在長大。
                  </p>
                  <p className="mb-6 break-inside-avoid">
                    平常我蠻喜歡散步，對我來說散步不只是運動，而是一種讓自己靜下來的方式。有時候心情很煩，跑一跑反而會想通很多事情。除了這個之外，我也是很喜歡的運動之一，雖然常常會遇到挫折，但每次成功做出新的動作時都會很有成就感。這些興趣讓我學會堅持，也讓我發現很多事情不是一次就能做好。
                  </p>
                  <p className="mb-6 break-inside-avoid">
                    對未來，我希望能找到一份穩定的工作，讓自己有安全感，也能照顧好家人。等到退休之後，如果有機會，我想去環遊世界，去看看不同地方的生活方式。我覺得努力工作不只是為了賺錢，也是為了讓未來有更多選擇。我自己還在成長的過程中，還有很多不足的地方，但我也會慢慢改進，希望在接下來的學習階段能讓自己變得更成熟、更有方向。
                  </p>
                </div>
              </div>
            </FadeIn>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-40 border-t border-white/10 mb-10 pt-16 flex flex-col items-center relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-transparent to-[#00f0ff]/[0.02]">
           <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7000ff]/50 to-transparent" />
           <h3 className="font-display font-medium text-4xl md:text-6xl text-white/10 uppercase tracking-widest mb-12 select-none mix-blend-screen">Access System</h3>
           
           <p className="text-[10px] font-mono tracking-[0.3em] text-[#00f0ff] mb-8 uppercase">Initialize Connection</p>
           
           <a 
            href="mailto:A11182112@NKUST.EDU.TW"
            className="flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/50 transition-all rounded-xl text-xs md:text-sm font-mono tracking-widest group shadow-xl hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.3)] mb-16"
           >
             <span className="w-2 h-2 rounded-full bg-[#00f0ff] group-hover:animate-ping" />
             <span>A11182112@NKUST.EDU.TW</span>
             <ChevronRight className="w-4 h-4 text-[#00f0ff] ml-2 group-hover:translate-x-1 transition-transform" />
           </a>
           
           <div className="flex flex-col items-center gap-2 pb-10">
             <p className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase">
               SYSTEM / 2026 / H.Y.C
             </p>
             <p className="text-[10px] font-mono text-zinc-600 tracking-wider">
               SECURE PORTFOLIO ARCHIVE
             </p>
           </div>
        </footer>

      </div>
    </div>
  );
}
