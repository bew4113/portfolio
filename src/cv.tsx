import { useState, useEffect } from 'react';
import { 
  Terminal, Server, Shield, Code, Database, MapPin, Mail, Phone, 
  Linkedin, Github, Menu, X, Award, BookOpen, 
  Lock, ArrowRight, Layers
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// --- DATA SECTION (UPDATED FROM PDF & CV) ---
const DATA = {
  personal: {
    nameTH: "ภานุพงศ์ นิจบุญ",
    nameEN: "Panupong Nijjaboon",
    role: "System Engineer | Security Architect | Full Stack Developer",
    email: "panupong.nijjaboon@gmail.com",
    phone: "098-276-4341",
    location: "Bangkok / Samut Sakhon",
    linkedin: "https://www.linkedin.com/in/panupong-nijjaboon-964a8927b/",
    github: "https://github.com/bew4113"
  },
  summary: `วิศวกรระบบ (System Engineer) และ Security Architect ที่ไม่ได้มองแค่ Infrastructure แต่เข้าใจลึกซึ้งถึง Application Layer และ Data Pipeline. เชี่ยวชาญการออกแบบระบบ Centralized Log Management ประสิทธิภาพสูง (High-Performance Computing) โดยใช้ ClickHouse และ Vector รองรับข้อมูลมหาศาล

  ปัจจุบันมุ่งเน้นการสร้าง "Unified Cybersecurity Platform" ที่ผสานการทำงานของ Security Tools (CrowdStrike, Cortex XDR, Netskope) เข้ากับ Modern Web Stack (Next.js, Three.js) เพื่อสร้าง Dashboard ที่ไม่ใช่แค่สวยงาม แต่ใช้งานได้จริงในศูนย์ SOC ระดับ Enterprise`,
  
  skills: {
    core: [
      "System Architecture", "High-Performance Computing", "Log Engineering", "Containerization (Docker)"
    ],
    security: [
      "SIEM Design", "Threat Intelligence", "EDR Integration (CrowdStrike/Cortex)", "WAF/DDoS Protection (Cloudflare)", "Security Compliance"
    ],
    dev: [
      "Next.js 14 (SSR)", "TypeScript", "Zod", "Shadcn UI", "Three.js/Globe.gl"
    ],
    dataOps: [
      "ClickHouse (Big Data)", "Vector (Log Pipeline)", "MinIO (Object Storage)", "PostgreSQL"
    ]
  },

  // Tech Stack สำหรับตัววิ่ง (Marquee)
  techStackMarquee: [
    "CrowdStrike", "Cortex XDR", "Netskope", "Silverfort", 
    "ClickHouse", "Vector.dev", "MinIO", "Docker", "Kubernetes", 
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", 
    "Cloudflare", "Nginx", "PostgreSQL", "Uptime Kuma", "Zod", "Redis"
  ],

  experience: [
    {
      role: "System Engineer",
      company: "TEN FORWARD CO., LTD.",
      period: "Mar 2025 – Present",
      type: "Current Role",
      highlights: [
        "Architected TENCYBER Platform: ออกแบบระบบ Next-Gen SIEM รองรับ Log หลักล้าน/วินาที ด้วย ClickHouse & Vector",
        "Pipeline Optimization: ใช้ Vector Transform Log และบีบอัด LZ4 ลด Storage Cost ได้ 80%",
        "Infrastructure: ดูแล Docker Swarm/Kubernetes และ Storage Strategy (Hot/Cold Data)",
        "Security Ops: บริหารจัดการ CrowdStrike, Netskope, Silverfort และทำ Automation Policy"
      ]
    },
    {
      role: "Cybersecurity Analyst",
      company: "Cybertron Co., Ltd.",
      period: "Aug 2024 – Feb 2025",
      type: "Specialist",
      highlights: [
        "Threat Hunting: วิเคราะห์ภัยคุกคาม 24/7 และทำ Incident Response Plan",
        "Vulnerability Research: ศึกษา Zero-day และปรับจูน Detection Rules",
        "Report: จัดทำสรุปความเสี่ยงและแนวทางแก้ไข (Remediation) ให้ลูกค้า Enterprise"
      ]
    },
    {
      role: "DLP Officer",
      company: "Metro Systems Corp.",
      period: "Aug 2023 – Jul 2024",
      type: "Officer",
      highlights: [
        "Data Protection: ดูแล Forcepoint DLP และ Boldon James ให้ PTT Digital",
        "Policy Tuning: ปรับแต่ง Policy เพื่อลด False Positive และรักษา SLA"
      ]
    }
  ],
  projects: [
    {
      name: "TENCYBER Platform",
      subtitle: "Unified Cybersecurity Platform & SIEM",
      desc: "ระบบ Centralized Log Management และ SIEM ประสิทธิภาพสูง ออกแบบตามหลักการ Single Pane of Glass รองรับ Log มหาศาลด้วย ClickHouse (Hot Tier) และ MinIO (Cold Tier) พร้อมหน้า Dashboard 3D Visualization",
      stack: ["Next.js 14", "ClickHouse", "Vector", "MinIO", "Three.js", "Zod"],
      icon: Shield
    },
    {
      name: "Smart Log Pipeline",
      subtitle: "High-Throughput Ingestion Architecture",
      desc: "ออกแบบ Pipeline การไหลของข้อมูลด้วย Vector.dev เพื่อทำ ETL (Extract, Transform, Load) ข้อมูล Log จาก EDR/Firewall ก่อนบันทึกลง Database ช่วยลดภาระ Server และประหยัดพื้นที่จัดเก็บด้วย LZ4 Compression",
      stack: ["Vector", "Lua Script", "Docker", "Linux Optimization"],
      icon: Database
    },
    {
      name: "Secure Gateway & Auth",
      subtitle: "5-Layer Security Architecture",
      desc: "วางระบบความปลอดภัย 5 ชั้น (Network, App, Auth, System, Data) ตั้งแต่ Cloudflare WAF, Nginx Rate Limiting ไปจนถึง 2FA/TOTP และ RBAC เพื่อป้องกันการโจมตีทางไซเบอร์ครบวงจร",
      stack: ["Nginx", "Cloudflare", "JWT", "Redis", "Helmet.js"],
      icon: Lock
    }
  ],
  education: [
    {
      degree: "ปริญญาตรี, เทคโนโลยีวิศวกรรมคอมพิวเตอร์",
      uni: "มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ",
      year: "2022"
    }
  ],
  certs: [
    "eJPT (Junior Penetration Tester)",
    "CompTIA Security+"
  ]
};

// --- UTILS & HOOKS ---

const useScrollObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, { threshold: 0.15 }); // Increased threshold slightly for better effect

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

// --- COMPONENTS ---

const BackgroundGrid = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
    {/* Base Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.1]"></div>
    
    {/* Radial Mask */}
    <div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,black_100%)]"></div>
    
    {/* Floating Orbs - Optimized blur */}
    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
  </div>
);

const TechMarquee = ({ items }: { items: string[] }) => {
  return (
    <div className="w-full bg-slate-900/50 border-y border-slate-800 py-6 overflow-hidden relative backdrop-blur-sm">
      {/* Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent z-10 pointer-events-none"></div>
      
      {/* Marquee Container */}
      <div className="flex">
        {/* First copy - animated */}
        <div className="flex shrink-0 animate-marquee-infinite">
          {items.map((tech, i) => (
            <div key={`a-${i}`} className="mx-8 flex items-center gap-3 group cursor-default shrink-0">
              <div className="w-2 h-2 bg-cyan-500/30 rounded-full group-hover:bg-cyan-400 transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
              <span className="text-slate-400 font-mono text-lg font-bold uppercase tracking-wider group-hover:text-cyan-300 transition-all duration-300">
                {tech}
              </span>
              <div className="w-px h-4 bg-slate-800 group-hover:bg-cyan-500/30 transition-colors"></div>
            </div>
          ))}
        </div>
        {/* Second copy - animated (creates seamless loop) */}
        <div className="flex shrink-0 animate-marquee-infinite">
          {items.map((tech, i) => (
            <div key={`b-${i}`} className="mx-8 flex items-center gap-3 group cursor-default shrink-0">
              <div className="w-2 h-2 bg-cyan-500/30 rounded-full group-hover:bg-cyan-400 transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
              <span className="text-slate-400 font-mono text-lg font-bold uppercase tracking-wider group-hover:text-cyan-300 transition-all duration-300">
                {tech}
              </span>
              <div className="w-px h-4 bg-slate-800 group-hover:bg-cyan-500/30 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-infinite {
          animation: marquee-infinite 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
  delay: number;
}

const SkillCard = ({ title, skills, icon: Icon, delay }: SkillCardProps) => (
  <div 
    className="reveal-on-scroll opacity-0 translate-y-8 bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/30 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-cyan-900/10 transition-all duration-500 group h-full"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-3 mb-5 border-b border-slate-800/50 pb-3">
      <div className="p-2.5 rounded-lg bg-slate-800/80 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-950/50 transition-all duration-300">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-slate-100 font-heading group-hover:text-cyan-300 transition-colors">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill: string, idx: number) => (
        <span key={idx} className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-950 border border-slate-800 rounded-md hover:border-cyan-500/40 hover:text-cyan-200 transition-colors cursor-default">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

interface Project {
  name: string;
  subtitle: string;
  desc: string;
  stack: string[];
  icon: LucideIcon;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="reveal-on-scroll opacity-0 translate-y-8 group relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-900/10 flex flex-col h-full">
    {/* Card Header Gradient */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-20 p-8 flex flex-col h-full">
      <div className="mb-6 flex justify-between items-start">
        <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 group-hover:border-violet-500/30 group-hover:bg-violet-900/20 transition-all">
          <project.icon className="w-8 h-8 text-slate-300 group-hover:text-violet-300 transition-colors" />
        </div>
        <div className="flex gap-2">
          {/* Mock Actions */}
          <div className="p-2 hover:bg-slate-800 rounded-full cursor-pointer transition-colors" title="View Architecture">
            <Layers size={18} className="text-slate-500 hover:text-white" />
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all">
        {project.name}
      </h3>
      <p className="text-sm font-mono text-violet-400 mb-4">{project.subtitle}</p>
      
      <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-slate-800 pl-4">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50 mt-auto">
        {project.stack.map((t: string, i: number) => (
          <span key={i} className="text-[11px] px-2 py-1 rounded bg-slate-950 text-slate-400 font-mono border border-slate-800 uppercase tracking-tight hover:border-violet-500/30 transition-colors">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// New Component: Profile Image Holder
const ProfileImage = () => (
  <div className="relative group w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0">
    {/* Animated Border */}
    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
    
    {/* Image Container */}
    <div className="relative w-full h-full bg-slate-900 rounded-xl border border-slate-700 overflow-hidden flex items-center justify-center">
       {/* Profile Image - Using Panupong.jpg */}
       <img 
         src="/Panupong.jpg" 
         alt="Panupong Nijjaboon - Security Architect" 
         className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
         onError={(e) => {
           // Fallback if image not found
           const target = e.target as HTMLImageElement;
           target.style.display = 'none';
           const parent = target.parentElement;
           if (parent) {
             parent.innerHTML = `
               <div class="flex flex-col items-center justify-center text-center p-4 w-full h-full">
                 <svg class="w-12 h-12 text-slate-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
                 <span class="text-xs text-slate-500 font-mono">Panupong.jpg</span>
                 <span class="text-[10px] text-slate-600 mt-1">วางรูปภาพที่ public/</span>
               </div>
             `;
           }
         }}
       />
    </div>

    {/* Decorative Corners */}
    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500 rounded-tl-sm"></div>
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-violet-500 rounded-br-sm"></div>
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useScrollObserver();

  useEffect(() => {
    // Performance Optimization: Use requestAnimationFrame for scroll throttling
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          
          // Smart active section detection
          const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 200 && rect.bottom >= 200) {
                setActiveSection(section);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden">
      
      {/* --- FONTS INJECTION --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@300;400;600;700&display=swap');
        
        :root {
          --font-sans: 'Outfit', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }
        
        body { font-family: var(--font-sans); }
        .font-mono { font-family: var(--font-mono); }
        .font-heading { font-family: var(--font-sans); }
        
        .animate-reveal { animation: reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        @keyframes reveal { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>

      {/* --- SEO META TAGS (Simulated) --- */}
      {/* <Head>
          <title>Panupong Nijjaboon | Security Architect</title>
          <meta name="description" content="Portfolio of Panupong Nijjaboon - System Engineer & Security Architect specializing in SIEM, ClickHouse, and Secure Infrastructure." />
        </Head> 
      */}

      <BackgroundGrid />

      {/* --- NAVBAR --- */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className={`
            relative flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300
            ${scrolled 
              ? 'bg-slate-900/90 backdrop-blur-md border-slate-800 shadow-2xl shadow-black/50' 
              : 'bg-transparent border-transparent'}
          `}>
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group" 
              onClick={() => scrollTo('home')}
            >
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-600 to-violet-700 rounded-lg flex items-center justify-center text-white font-bold font-mono text-lg shadow-lg group-hover:rotate-12 transition-transform">
                P.
              </div>
              <div className="hidden sm:flex flex-col leading-tight gap-0.5">
                <span className="font-bold text-white tracking-tight text-sm">Panupong Nijjaboon</span>
                <span className="text-[10px] text-cyan-400 font-mono tracking-wide">System Engineer</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1 bg-slate-950/50 p-1 rounded-full border border-slate-800/50 backdrop-blur-sm">
              {['Home', 'About', 'Skills', 'Experience', 'Projects'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === item.toLowerCase() 
                      ? 'bg-slate-800 text-cyan-400 shadow-sm' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => scrollTo('contact')}
                className="hidden md:flex items-center gap-2 px-5 py-2 bg-white text-slate-950 text-sm font-bold rounded-full hover:bg-cyan-50 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                Hire Me
              </button>
              <button 
                className="md:hidden text-slate-300 hover:text-white p-2" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 p-2 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl md:hidden animate-reveal z-50">
            <div className="flex flex-col">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-left px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center flex-grow">
          
          <div className="space-y-8 relative z-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide animate-reveal opacity-0">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>
            
            <div className="space-y-4 animate-reveal opacity-0" style={{ animationDelay: '100ms' }}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] font-heading">
                Bridging Security <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
                  Operations
                </span> With <br/>
                Modern Engineering
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                System Engineer & Security Architect. I build high-performance data pipelines, secure infrastructures, and next-gen SIEM platforms.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 animate-reveal opacity-0" style={{ animationDelay: '200ms' }}>
              <button onClick={() => scrollTo('projects')} className="group px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(8,145,178,0.3)] flex items-center gap-2">
                View Architecture <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo('contact')} className="px-8 py-3.5 bg-slate-900/50 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 rounded-lg font-bold transition-all backdrop-blur-sm">
                Contact Me
              </button>
            </div>
            
            <div className="pt-8 flex items-center gap-6 text-slate-500 font-mono text-xs sm:text-sm animate-reveal opacity-0" style={{ animationDelay: '300ms' }}>
               <div className="flex items-center gap-2"><Shield size={14} className="text-violet-500"/> Cyber Security</div>
               <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
               <div className="flex items-center gap-2"><Database size={14} className="text-cyan-500"/> Big Data Ops</div>
               <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
               <div className="flex items-center gap-2"><Code size={14} className="text-fuchsia-500"/> Full Stack</div>
            </div>
          </div>

          {/* Hero Graphic - TENCYBER Architecture Viz */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-reveal opacity-0" style={{ animationDelay: '400ms' }}>
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated Rings */}
              <div className="absolute inset-0 border border-slate-800/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute inset-12 border border-slate-800/30 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
              <div className="absolute inset-24 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite] border-dashed"></div>
              
              {/* Central Code Block */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 bg-slate-950/90 backdrop-blur-xl border border-slate-800 rounded-lg p-5 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    </div>
                    <div className="text-[10px] font-mono text-slate-500">pipeline.yml</div>
                  </div>
                  
                  <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
                    <div className="text-slate-500"># Log Ingestion Pipeline</div>
                    <div><span className="text-violet-400">source</span>:</div>
                    <div className="pl-4 text-cyan-300">type: <span className="text-white">vector</span></div>
                    <div className="pl-4 text-cyan-300">port: <span className="text-yellow-300">8686</span></div>
                    
                    <div><span className="text-violet-400">transforms</span>:</div>
                    <div className="pl-4 text-cyan-300">enrich: <span className="text-green-400">"geo_ip"</span></div>
                    <div className="pl-4 text-cyan-300">compress: <span className="text-green-400">"lz4"</span></div>

                    <div><span className="text-violet-400">sinks</span>:</div>
                    <div className="pl-4 text-cyan-300">hot_tier: <span className="text-green-400">"clickhouse"</span></div>
                    <div className="pl-4 text-cyan-300">cold_tier: <span className="text-green-400">"minio"</span></div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                     <div className="flex items-center gap-2 text-[10px] text-green-400">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        Pipeline Active
                     </div>
                     <span className="text-[10px] text-slate-600">2.4M Events/s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- INFINITE TECH MARQUEE --- */}
        <div className="w-full mt-12 lg:mt-0">
          <TechMarquee items={DATA.techStackMarquee} />
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="reveal-on-scroll opacity-0 translate-y-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4 inline-flex items-center gap-3 font-heading">
                <Terminal className="text-cyan-400" /> About Me
              </h2>
            </div>
            
            <div className="bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden group">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <article className="prose prose-invert prose-lg max-w-none">
                <p className="text-slate-300 leading-relaxed font-light text-lg">
                  {DATA.summary}
                </p>
              </article>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-slate-950 rounded-lg border border-slate-800 text-sm text-slate-400 flex items-center gap-2">
                  <MapPin size={16} className="text-cyan-500"/> {DATA.personal.location}
                </div>
                <div className="px-4 py-2 bg-slate-950 rounded-lg border border-slate-800 text-sm text-slate-400 flex items-center gap-2">
                  <Mail size={16} className="text-violet-500"/> {DATA.personal.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-24 px-4 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Technical Skill</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              My expertise spans from low-level infrastructure to high-level application security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard title="Core Infrastructure" icon={Server} skills={DATA.skills.core} delay={0} />
            <SkillCard title="Cybersecurity" icon={Shield} skills={DATA.skills.security} delay={100} />
            <SkillCard title="Full Stack Dev" icon={Code} skills={DATA.skills.dev} delay={200} />
            <SkillCard title="Data & DevOps" icon={Database} skills={DATA.skills.dataOps} delay={300} />
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16 reveal-on-scroll opacity-0 translate-y-8">
            <div className="h-px bg-slate-800 flex-grow"></div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3 font-heading">
              <Award className="text-violet-400" /> Professional Journey
            </h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="space-y-12">
            {DATA.experience.map((job, idx) => (
              <div key={idx} className="group reveal-on-scroll opacity-0 translate-y-8 relative pl-8 md:pl-0" style={{ transitionDelay: `${idx * 100}ms` }}>
                
                {/* Timeline Lines */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 group-last:bottom-auto group-last:h-full"></div>
                <div className="md:hidden absolute left-[11px] top-0 bottom-0 w-px bg-slate-800 group-last:h-full"></div>

                <div className={`md:flex items-center justify-between gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-slate-950 border-4 border-slate-700 rounded-full translate-y-1.5 md:-translate-x-1/2 md:translate-y-0 z-10 group-hover:border-cyan-500 group-hover:scale-125 transition-all duration-300"></div>

                  <div className={`hidden md:block w-1/2 text-slate-500 font-mono text-sm ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {job.period}
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-violet-500/40 transition-all hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group-hover:bg-slate-900/50">
                      <div className="absolute top-0 right-0 px-3 py-1 bg-slate-900 text-[10px] font-bold uppercase text-slate-500 rounded-bl-xl border-l border-b border-slate-800">
                        {job.type}
                      </div>
                      <div className="md:hidden text-xs text-cyan-500 font-mono mb-2">{job.period}</div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors font-heading">{job.role}</h3>
                      <div className="text-slate-400 font-medium mb-4 flex items-center gap-2 text-sm">
                        <MapPin size={14} /> {job.company}
                      </div>
                      <ul className="space-y-2">
                        {job.highlights.map((h, i) => (
                          <li key={i} className="text-sm text-slate-300 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-600 before:rounded-full group-hover:before:bg-cyan-500 transition-colors">
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-4 relative bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-on-scroll opacity-0 translate-y-8 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-heading">Key Projects</h2>
              <p className="text-slate-400">Innovation meets Implementation</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {DATA.projects.map((proj, idx) => (
              <ProjectCard key={idx} project={proj} />
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION & CERTS --- */}
      <section className="py-20 px-4 border-t border-slate-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          
          <div className="reveal-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-heading">
              <BookOpen className="text-cyan-400" /> Education
            </h3>
            {DATA.education.map((edu, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-xl hover:bg-slate-900/50 transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 font-bold shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{edu.degree}</h4>
                  <p className="text-slate-400">{edu.uni}</p>
                  <p className="text-sm text-slate-500 mt-1 font-mono">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: '100ms' }}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-heading">
              <Lock className="text-violet-400" /> Certifications
            </h3>
            <div className="space-y-3">
              {DATA.certs.map((cert, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-violet-500/50 transition-colors group">
                   <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] group-hover:animate-pulse"></div>
                   <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- REVISED CONTACT SECTION / FOOTER --- */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden bg-slate-950 border-t border-slate-900">
        {/* Footer Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-cyan-900/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-800/50 flex flex-col md:flex-row items-center gap-12 reveal-on-scroll opacity-0">
            
            {/* Left Column: Image & Identity */}
            <div className="flex-shrink-0">
              <ProfileImage />
            </div>

            {/* Right Column: Contact Details */}
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-heading">
                Let's <span className="text-cyan-400">Collaborate</span>
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
                Ready to secure your infrastructure or build the next-gen platform? 
                I'm available for new opportunities and consulting.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <a href={`mailto:${DATA.personal.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all group">
                  <div className="p-3 bg-slate-900 rounded-lg text-cyan-500 group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-500 font-mono uppercase">Email Address</div>
                    <div className="text-slate-200 font-medium">{DATA.personal.email}</div>
                  </div>
                </a>

                <a href={`tel:${DATA.personal.phone}`} className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-violet-500/50 hover:bg-slate-900 transition-all group">
                  <div className="p-3 bg-slate-900 rounded-lg text-violet-500 group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-500 font-mono uppercase">Phone Number</div>
                    <div className="text-slate-200 font-medium">{DATA.personal.phone}</div>
                  </div>
                </a>
              </div>

              <div className="flex gap-3 items-center justify-center md:justify-start">
                <a href={DATA.personal.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-600 transition-colors">
                  <Github size={20} />
                </a>
                <a href={DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-600 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

          </div>

          <footer className="mt-16 text-center text-slate-600 text-sm font-mono flex flex-col md:flex-row justify-between items-center gap-4 border-t border-slate-900 pt-8">
            <p>© 2025 Panupong Nijjaboon. All Rights Reserved.</p>
            <div className="flex items-center gap-2 text-xs">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               System Status: Online
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default App;