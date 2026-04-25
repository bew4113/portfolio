import { useState, useEffect } from 'react';
import { 
  Terminal, Server, Shield, Code, Database, MapPin, Mail, Phone, 
  Linkedin, Github, Menu, X, Award, BookOpen, 
  Lock, ArrowRight, Layers, ArrowUp
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

type Lang = 'th' | 'en';

interface LocalizedText {
  th: string;
  en: string;
}

const UI_COPY: Record<Lang, {
  nav: string[];
  mobileNav: string[];
  roleMini: string;
  hireMe: string;
  availability: string;
  heroTitleTop: string;
  heroTitleMid: string;
  heroTitleBottom: string;
  heroDesc: string;
  viewArchitecture: string;
  contactMe: string;
  chips: string[];
  about: string;
  technicalSkill: string;
  technicalSkillDesc: string;
  skillTitles: string[];
  journey: string;
  projects: string;
  projectsDesc: string;
  education: string;
  certifications: string;
  lets: string;
  collaborate: string;
  contactDesc: string;
  emailAddress: string;
  phoneNumber: string;
  rights: string;
  systemOnline: string;
  languageLabel: string;
}> = {
  th: {
    nav: ['หน้าหลัก', 'เกี่ยวกับ', 'ทักษะ', 'ประสบการณ์', 'โปรเจกต์'],
    mobileNav: ['หน้าหลัก', 'เกี่ยวกับ', 'ทักษะ', 'ประสบการณ์', 'โปรเจกต์', 'ติดต่อ'],
    roleMini: 'วิศวกรระบบ',
    hireMe: 'ติดต่อฉัน',
    availability: 'พร้อมรับโอกาสใหม่',
    heroTitleTop: 'เชื่อมงานความปลอดภัย',
    heroTitleMid: 'ปฏิบัติการ',
    heroTitleBottom: 'กับวิศวกรรมสมัยใหม่',
    heroDesc: 'System Engineer และ Security Architect ที่ออกแบบ data pipeline ประสิทธิภาพสูง, infrastructure ที่ปลอดภัย และแพลตฟอร์ม SIEM รุ่นใหม่สำหรับงานจริง',
    viewArchitecture: 'ดูโครงสร้างระบบ',
    contactMe: 'ติดต่อฉัน',
    chips: ['ความปลอดภัยไซเบอร์', 'ปฏิบัติการข้อมูล', 'ฟูลสแตก'],
    about: 'เกี่ยวกับผม',
    technicalSkill: 'ทักษะเทคนิค',
    technicalSkillDesc: 'ความเชี่ยวชาญของผมครอบคลุมตั้งแต่ infrastructure ระดับลึกไปจนถึง application security ระดับระบบ',
    skillTitles: ['สแต็กความปลอดภัย', 'พัฒนาและเชื่อมต่อ', 'โครงสร้างพื้นฐานและฐานข้อมูล', 'ระบบและการปฏิบัติการ'],
    journey: 'เส้นทางการทำงาน',
    projects: 'โปรเจกต์สำคัญ',
    projectsDesc: 'นวัตกรรมที่ใช้งานได้จริง',
    education: 'การศึกษา',
    certifications: 'ใบรับรอง',
    lets: 'มา',
    collaborate: 'ร่วมงานกัน',
    contactDesc: 'พร้อมช่วยยกระดับความปลอดภัยของระบบ หรือร่วมพัฒนาแพลตฟอร์มรุ่นใหม่สำหรับองค์กร',
    emailAddress: 'อีเมล',
    phoneNumber: 'เบอร์โทร',
    rights: 'สงวนลิขสิทธิ์',
    systemOnline: 'ระบบ: ออนไลน์',
    languageLabel: 'ภาษา'
  },
  en: {
    nav: ['Home', 'About', 'Skills', 'Experience', 'Projects'],
    mobileNav: ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'],
    roleMini: 'System Engineer',
    hireMe: 'Contract Me',
    availability: 'AVAILABLE FOR NEW OPPORTUNITIES',
    heroTitleTop: 'Bridging Security',
    heroTitleMid: 'Operations',
    heroTitleBottom: 'With Modern Engineering',
    heroDesc: 'System Engineer & Security Architect. I build high-performance data pipelines, secure infrastructures, and next-gen SIEM platforms.',
    viewArchitecture: 'View Architecture',
    contactMe: 'Contact Me',
    chips: ['Cyber Security', 'Big Data Ops', 'Full Stack'],
    about: 'About Me',
    technicalSkill: 'Technical Skill',
    technicalSkillDesc: 'My expertise spans from low-level infrastructure to high-level application security.',
    skillTitles: ['Security Stack', 'Dev & Integration', 'Infrastructure & DB', 'System & Operations'],
    journey: 'Professional Journey',
    projects: 'Key Projects',
    projectsDesc: 'Innovation meets Implementation',
    education: 'Education',
    certifications: 'Certifications',
    lets: "Let's",
    collaborate: 'Collaborate',
    contactDesc: 'Ready to secure your infrastructure or build the next-gen platform? I am available for new opportunities and consulting.',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    rights: 'All Rights Reserved.',
    systemOnline: 'System Status: Online',
    languageLabel: 'Language'
  }
};

const t = (value: LocalizedText, lang: Lang) => value[lang];

// --- DATA SECTION (UPDATED FROM CV) ---
const DATA = {
  personal: {
    nameTH: "ภานุพงศ์ นิจบุญ",
    nameEN: "Panupong Nijjaboon",
    role: {
      th: "System Engineer และ Cybersecurity",
      en: "System Engineer & Cybersecurity"
    },
    email: "panupong.nijjaboon@gmail.com",
    phone: "098-276-4341",
    location: {
      th: "สมุทรสาคร, กรุงเทพฯ",
      en: "Samut Sakhon, Bangkok"
    },
    linkedin: "https://www.linkedin.com/in/panupong-nijjaboon-964a8927b/",
    github: "https://github.com/bew4113"
  },
  summary: {
    th: "วิศวกรระบบและความปลอดภัยไซเบอร์ที่เชี่ยวชาญด้านการออกแบบสถาปัตยกรรม SOC และงานอัตโนมัติของโครงสร้างพื้นฐาน มีประสบการณ์บูรณาการโซลูชันความปลอดภัยระดับองค์กรกับ Active Directory และ Microsoft Graph API รวมถึงการจัดการ log ปริมาณสูงด้วย CrowdStrike LogScale และการพัฒนา playbook สำหรับการตอบสนองเหตุการณ์อัตโนมัติ",
    en: "System and Cybersecurity Engineer specialized in SOC platform architecture and infrastructure automation. Expertise in integrating enterprise security solutions with Active Directory and Microsoft Graph API. Experienced in managing high-volume log ingestion using CrowdStrike LogScale and developing automated response playbooks. Specialized in designing secure, automated operational tools with unified identity management."
  },

  skills: {
    core: [
      "CrowdStrike Falcon", "Cortex XDR", "Wazuh (SIEM)", "Vectra AI",
      "Netskope", "Cloudflare WAF", "KnowBe4", "Silverfort",
      "Keyfactor", "Forcepoint DLP", "Horizon3.ai", "wafw00f"
    ],
    security: [
      "Microsoft Graph API", "Active Directory", "Outlook Calendar Mapping",
      "n8n Automation", "TypeScript / JS", "Next.js / NestJS", "Python (Automation)"
    ],
    dev: [
      "VMware ESXi", "Docker", "CrowdStrike LogScale",
      "MinIO", "PostgreSQL", "MongoDB", "ClickHouse", "Vector.dev"
    ],
    dataOps: [
      "OAuth 2.0 / OIDC", "SMTP / Microsoft Exchange", "VPN Management",
      "SSL/TLS Management", "Nginx Proxy Manager",
      "Technical Consulting", "Solution Architecture", "SLA Compliance", "Phishing Awareness"
    ]
  },

  // Tech Stack for Marquee
  techStackMarquee: [
    "CrowdStrike", "Cortex XDR", "Netskope", "Silverfort",
    "ClickHouse", "Vector.dev", "MinIO", "Docker",
    "Next.js", "React", "TypeScript", "Tailwind CSS",
    "Cloudflare WAF", "Nginx", "PostgreSQL", "Microsoft Graph API",
    "Active Directory", "Wazuh", "Keyfactor", "Forcepoint DLP"
  ],

  experience: [
    {
      role: {
        th: "System Engineer",
        en: "System Engineer"
      },
      company: {
        th: "TEN FORWARD CO., LTD. | กรุงเทพฯ",
        en: "TEN FORWARD CO., LTD. | Bangkok"
      },
      period: "Mar 2025 – Present",
      type: {
        th: "ตำแหน่งปัจจุบัน",
        en: "Current Role"
      },
      highlights: [
        {
          th: "สถาปัตยกรรม SOC Platform: ออกแบบแพลตฟอร์ม \"SOC AI\" แบบ SaaS ด้วย Next.js/Express.js และเชื่อมต่อการรับแจ้งเตือนแบบเรียลไทม์จาก CrowdStrike และ Cortex XDR ผ่าน API",
          en: "SOC Platform Architecture: Engineered \"SOC AI\" SaaS platform using Next.js/Express.js, integrating real-time alert ingestion from CrowdStrike and Cortex XDR via APIs."
        },
        {
          th: "การเชื่อมต่อ Microsoft Graph API: นำ Graph API ไปใช้ในแพลตฟอร์มหลัก (SOC AI, PMS) เพื่อรองรับ Outlook Calendar Mapping และยืนยันตัวตนผ่าน Active Directory (AD) สำหรับงาน schedule และ email notification อัตโนมัติ",
          en: "Microsoft Graph API Integration: Implemented Graph API across all core platforms (SOC AI, PMS) to enable Outlook Calendar Mapping and Active Directory (AD) authentication for automated scheduling and email notifications."
        },
        {
          th: "Automated Playbooks: พัฒนา logic ตอบสนองเหตุการณ์อัตโนมัติใน SOC AI รวมถึงฟังก์ชัน Auto-isolate host ผ่าน API เพื่อควบคุมเหตุการณ์ Ransomware ได้รวดเร็ว",
          en: "Automated Playbooks: Developed automated incident response logic within SOC AI, including Auto-isolate host functionality via API for rapid threat containment during Ransomware incidents."
        },
        {
          th: "Pre-sales Discovery: ใช้ wafw00f วิเคราะห์โครงสร้างระบบลูกค้าเพื่อระบุโซลูชัน WAF ที่ใช้งานอยู่และช่องว่างด้านความปลอดภัย เพื่อสนับสนุนกลยุทธ์การขาย",
          en: "Pre-sales Discovery: Utilized wafw00f to perform technical analysis on customer infrastructure to identify WAF solutions and security gaps, supporting sales strategies."
        },
        {
          th: "Log Architecture: ติดตั้งและดูแล CrowdStrike LogScale เป็น LogCollector หลักเพื่อรองรับข้อมูลความปลอดภัยปริมาณสูงระดับองค์กร",
          en: "Log Architecture: Configured and managed CrowdStrike LogScale as a primary LogCollector to handle high-throughput enterprise security data."
        },
        {
          th: "Environment Management: ดูแลระบบเสมือนบน VMware ESXi และบริการแบบคอนเทนเนอร์บน Docker พร้อมใช้งาน MinIO สำหรับ object storage และ PostgreSQL สำหรับการจัดการข้อมูล",
          en: "Environment Management: Managed virtualization on VMware ESXi and containerized services on Docker, utilizing MinIO for object storage and PostgreSQL for data management."
        }
      ]
    },
    {
      role: {
        th: "Cybersecurity Analyst",
        en: "Cybersecurity Analyst"
      },
      company: {
        th: "Cybertron Company Limited | กรุงเทพฯ",
        en: "Cybertron Company Limited | Bangkok"
      },
      period: "Aug 2024 – Feb 2025",
      type: {
        th: "ผู้เชี่ยวชาญ",
        en: "Specialist"
      },
      highlights: [
        {
          th: "Incident Monitoring: เฝ้าระวังและคัดแยกเหตุการณ์ด้านความปลอดภัยไซเบอร์จากหลายสภาพแวดล้อมลูกค้า เพื่อให้ตรวจจับและตอบสนองได้ทันเวลา",
          en: "Incident Monitoring: Monitored and triaged cybersecurity incidents across multiple client environments to ensure timely detection and response."
        },
        {
          th: "Threat Analysis: วิเคราะห์ alerts, indicators และพฤติกรรมการโจมตี เพื่อประเมินระดับความเสี่ยงและกำหนดแนวทางยับยั้งที่เหมาะสม",
          en: "Threat Analysis: Analyzed alerts, indicators, and attack behaviors to identify risk severity and determine appropriate containment actions."
        },
        {
          th: "Prioritization & Escalation: จัดลำดับความสำคัญของการบุกรุกตามผลกระทบทางธุรกิจ และ escalated ภัยคุกคามสำคัญตาม SLA",
          en: "Prioritization & Escalation: Prioritized intrusions based on business impact and escalated critical threats to response teams under SLA timelines."
        },
        {
          th: "Operational Reporting: จัดทำรายงานเหตุการณ์รายวันและรายงานสำหรับผู้บริหาร โดยสรุปภัยคุกคามที่กำลังเกิดขึ้นและความคืบหน้าการตอบสนอง",
          en: "Operational Reporting: Produced daily incident summaries and management-ready reports highlighting active threats and response progress."
        },
        {
          th: "Security Metrics: รวบรวมสถิติแนวโน้มกิจกรรมผิดปกติเพื่อสนับสนุนการตัดสินใจและยกระดับมาตรการป้องกัน",
          en: "Security Metrics: Compiled trend statistics on suspicious activities to support decision-making and improve defensive posture."
        },
        {
          th: "Client Advisory: ให้คำแนะนำเชิงปฏิบัติและคำปรึกษาทางเทคนิคเพื่อลดความเสี่ยงด้านความปลอดภัยที่เกิดซ้ำ",
          en: "Client Advisory: Provided practical recommendations and technical guidance to reduce recurring security risks."
        },
        {
          th: "Process Compliance: ดูแลการปฏิบัติงาน SOC ให้เป็นไปตามขั้นตอน incident response, ticket workflow และ SLA ตามสัญญา",
          en: "Process Compliance: Ensured SOC operations followed incident response procedures, ticket workflows, and contractual SLA requirements."
        },
        {
          th: "Threat Research: ศึกษารูปแบบการโจมตีและเทคนิคของผู้โจมตีที่เกิดใหม่ เพื่อเพิ่มความพร้อมด้านการตรวจจับและตอบสนอง",
          en: "Threat Research: Researched emerging attack vectors and adversary techniques to strengthen detection and response readiness."
        }
      ]
    },
    {
      role: {
        th: "Data Loss Prevention (DLP) Analyst",
        en: "Data Loss Prevention (DLP) Analyst"
      },
      company: {
        th: "Metro Systems Corporation (ประจำ PTT Digital) | กรุงเทพฯ",
        en: "Metro Systems Corporation (at PTT Digital) | Bangkok"
      },
      period: "Aug 2023 – Jul 2024",
      type: {
        th: "นักวิเคราะห์",
        en: "Analyst"
      },
      highlights: [
        {
          th: "Continuous Oversight: เฝ้าระวังเหตุการณ์ระบบตลอด 24/7 โดยใช้ Forcepoint DLP และ Boldon James",
          en: "Continuous Oversight: Monitored system incidents 24/7 leveraging Forcepoint DLP and Boldon James."
        },
        {
          th: "Breach Notification: แจ้งเตือนผู้ใช้งานและทีมที่เกี่ยวข้องอย่างรวดเร็วเมื่อพบเหตุ Data Breach ตามขั้นตอนที่กำหนด",
          en: "Breach Notification: Quickly notified end users and relevant teams regarding data breaches, following established procedures."
        },
        {
          th: "DLP Reporting: จัดทำรายงานเหตุการณ์ DLP และสรุปรายเดือนจากข้อมูลการเฝ้าระวัง",
          en: "DLP Reporting: Created DLP incident reports and monthly summaries derived from DLP incident monitoring."
        },
        {
          th: "Agent Distribution: ดูแลการกระจายและบำรุงรักษา DLP Agent ให้กับผู้ใช้งานปลายทาง",
          en: "Agent Distribution: Handled the distribution and maintenance of DLP agents to end users."
        },
        {
          th: "Coordination: ประสานงานการติดตั้ง Boldon James Agent ไปยังอุปกรณ์ปลายทางให้เป็นไปอย่างต่อเนื่อง",
          en: "Coordination: Coordinated the seamless deployment of Boldon James agents to endpoint devices."
        }
      ]
    },
    {
      role: {
        th: "IT Support (Outsource)",
        en: "IT Support (Outsource)"
      },
      company: {
        th: "Acacia I.T. (ประจำสำนักงานใหญ่ธนาคารกรุงไทย) | กรุงเทพฯ",
        en: "Acacia I.T. (at Krungthai Bank HQ) | Bangkok"
      },
      period: "Jan 2022 – Dec 2022",
      type: {
        th: "สนับสนุนระบบ",
        en: "Support"
      },
      highlights: [
        {
          th: "ให้การสนับสนุนงาน IT ที่สำคัญสำหรับระบบธนาคารและอุปกรณ์ปลายทางภายในสำนักงานใหญ่",
          en: "Provided critical IT support for banking systems and terminal hardware at the headquarters."
        },
        {
          th: "แก้ไขปัญหาการเชื่อมต่อเครือข่ายที่ซับซ้อน (VPN) ให้กับพนักงานธนาคารภายใต้สภาพแวดล้อมที่มีความปลอดภัยสูง",
          en: "Resolved complex network connectivity issues (VPN) for bank personnel in a secure environment."
        }
      ]
    }
  ] as ExperienceItem[],
  projects: [
    {
      name: {
        th: "แพลตฟอร์ม SOC AI แบบ SaaS",
        en: "SOC AI SaaS Platform"
      },
      subtitle: {
        th: "เชื่อมต่อ Graph API และ AD",
        en: "Graph API & AD Integration"
      },
      desc: {
        th: "ออกแบบแพลตฟอร์มความปลอดภัยแบบรวมศูนย์ที่เชื่อมต่อกับ Microsoft Graph API พร้อมพัฒนา logic สำหรับการยืนยันตัวตนผ่าน Active Directory และ Outlook Calendar Mapping อัตโนมัติ เพื่อซิงก์ตารางเวรและเวลาตอบสนองเหตุการณ์สำคัญเข้าสู่บัญชีอีเมลของนักวิเคราะห์",
        en: "Architected a unified security platform integrated with Microsoft Graph API. Developed logic for Active Directory authentication and automated Outlook Calendar Mapping to sync security shifts and critical incident response times directly to analyst email accounts."
      },
      stack: ["Next.js", "Express.js", "Microsoft Graph API", "Active Directory", "CrowdStrike", "Cortex XDR"],
      icon: Shield
    },
    {
      name: {
        th: "ระบบบริหารโครงการและการเรียกเก็บเงิน",
        en: "Project Management & Billing System"
      },
      subtitle: {
        th: "PMS แบบหลายผู้เช่าร่วมกับ Microsoft Exchange",
        en: "Multi-tenant PMS with Microsoft Exchange"
      },
      desc: {
        th: "พัฒนาระบบ PMS แบบ Multi-tenant ที่เชื่อมต่อกับ Microsoft Exchange โดยกำหนดให้ milestone และรายงานทรัพยากรยืนยันตัวตนผ่าน AD และซิงก์กับ Corporate Email และ Outlook Calendar เพื่อให้ทุกฝ่ายมองเห็นข้อมูลชุดเดียวกัน",
        en: "Engineered a multi-tenant PMS integrated with Microsoft Exchange. All milestones and resource reports are AD-authenticated and synchronized with Corporate Email and Outlook Calendars for unified visibility."
      },
      stack: ["Next.js", "NestJS", "Microsoft Exchange", "Active Directory", "PostgreSQL"],
      icon: Layers
    },
    {
      name: {
        th: "ระบบจำลองฟิชชิงแบบพัฒนาเอง",
        en: "Custom Phishing Simulation Engine"
      },
      subtitle: {
        th: "เครื่องมือ Security Awareness ภายในองค์กร",
        en: "Proprietary Security Awareness Tool"
      },
      desc: {
        th: "ก่อนเริ่มใช้งาน KnowBe4 ได้พัฒนาเครื่องมือจำลองฟิชชิงขึ้นเอง พร้อมสร้างแม่แบบ mail-flow อัตโนมัติที่เชื่อมกับระบบอีเมลภายใน เพื่อเก็บสถิติการโต้ตอบและส่ง feedback เชิงการเรียนรู้ให้ผู้ใช้งาน",
        en: "Prior to adopting KnowBe4, developed a proprietary phishing simulation tool. Created automated mail-flow templates integrated with internal email servers to track interaction metrics and educational feedback."
      },
      stack: ["Python", "SMTP", "Mail Templates", "Analytics Dashboard"],
      icon: Lock
    }
  ] as Project[],
  education: [
    {
      degree: {
        th: "ปริญญาตรี เทคโนโลยีวิศวกรรมคอมพิวเตอร์",
        en: "Bachelor's Degree in Computer Engineering Technology"
      },
      uni: {
        th: "มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ",
        en: "Rajamangala University of Technology Krungthep"
      },
      year: "2018 – 2022"
    }
  ],
  certs: [
    "CompTIA Security+",
    "eJPT - Junior Pen Tester (INE)",
    "CrowdStrike Technical Sales Accreditation",
    "CWL - Red Team Analyst (CRTA)",
    "CWL - Multi-Cloud Red Teaming Analyst",
    "CWL - AD Red Team Specialist (AD-RTS)"
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
  name: LocalizedText;
  subtitle: LocalizedText;
  desc: LocalizedText;
  stack: string[];
  icon: LucideIcon;
}

interface ExperienceItem {
  role: LocalizedText;
  company: LocalizedText;
  period: string;
  type: LocalizedText;
  highlights: LocalizedText[];
}

const ProjectCard = ({ project, actionLabel, lang }: { project: Project; actionLabel: string; lang: Lang }) => (
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
          <div className="p-2 hover:bg-slate-800 rounded-full cursor-pointer transition-colors" title={actionLabel}>
            <Layers size={18} className="text-slate-500 hover:text-white" />
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all">
        {t(project.name, lang)}
      </h3>
      <p className="text-sm font-mono text-violet-400 mb-4">{t(project.subtitle, lang)}</p>
      
      <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-slate-800 pl-4">
        {t(project.desc, lang)}
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
const ProfileImage = ({ fallbackHint }: { fallbackHint: string }) => (
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
                 <span class="text-[10px] text-slate-600 mt-1">${fallbackHint}</span>
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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lang, setLang] = useState<Lang>('en');
  const copy = UI_COPY[lang];
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

  useScrollObserver();

  useEffect(() => {
    // Performance Optimization: Use requestAnimationFrame for scroll throttling
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          setShowScrollTop(window.scrollY > 500);
          
          // Smart active section detection
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

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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
                <span className="font-bold text-white tracking-tight text-sm">{lang === 'th' ? DATA.personal.nameTH : DATA.personal.nameEN}</span>
                <span className="text-[10px] text-cyan-400 font-mono tracking-wide">{copy.roleMini}</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1 bg-slate-950/50 p-1 rounded-full border border-slate-800/50 backdrop-blur-sm">
              {copy.nav.map((item, idx) => (
                <button
                  key={item}
                  onClick={() => scrollTo(sections[idx])}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === sections[idx]
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
              <div className="hidden lg:flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-2 py-1 text-xs font-mono text-slate-300">
                <span className="text-slate-500">{copy.languageLabel}</span>
                <button
                  onClick={() => setLang('th')}
                  className={`rounded-full px-2.5 py-1 transition-colors ${lang === 'th' ? 'bg-cyan-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
                >
                  TH
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`rounded-full px-2.5 py-1 transition-colors ${lang === 'en' ? 'bg-cyan-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
                >
                  EN
                </button>
              </div>
              <button 
                onClick={() => scrollTo('contact')}
                className="hidden lg:flex items-center gap-2 px-5 py-2 bg-white text-slate-950 text-sm font-bold rounded-full hover:bg-cyan-50 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                {copy.hireMe}
              </button>
              <button 
                className="lg:hidden text-slate-300 hover:text-white p-2" 
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
          <div className="absolute top-full left-4 right-4 mt-2 p-2 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl lg:hidden animate-reveal z-50">
            <div className="flex flex-col">
              <div className="mb-2 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-2 text-xs font-mono text-slate-400">
                <span>{copy.languageLabel}</span>
                <button
                  onClick={() => setLang((prev) => (prev === 'th' ? 'en' : 'th'))}
                  className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-cyan-300"
                >
                  {lang === 'th' ? 'TH' : 'EN'}
                </button>
              </div>
              {copy.mobileNav.map((item, idx) => (
                <button
                  key={item}
                  onClick={() => scrollTo(sections[idx])}
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
              {copy.availability}
            </div>
            
            <div className="space-y-4 animate-reveal opacity-0" style={{ animationDelay: '100ms' }}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] font-heading">
                {copy.heroTitleTop} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
                  {copy.heroTitleMid}
                </span> <br/>
                {copy.heroTitleBottom}
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                {copy.heroDesc}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 animate-reveal opacity-0" style={{ animationDelay: '200ms' }}>
              <button onClick={() => scrollTo('projects')} className="group px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(8,145,178,0.3)] flex items-center gap-2">
                {copy.viewArchitecture} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo('contact')} className="px-8 py-3.5 bg-slate-900/50 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 rounded-lg font-bold transition-all backdrop-blur-sm">
                {copy.contactMe}
              </button>
            </div>
            
            <div className="pt-8 flex items-center gap-6 text-slate-500 font-mono text-xs sm:text-sm animate-reveal opacity-0" style={{ animationDelay: '300ms' }}>
               <div className="flex items-center gap-2"><Shield size={14} className="text-violet-500"/> {copy.chips[0]}</div>
               <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
               <div className="flex items-center gap-2"><Database size={14} className="text-cyan-500"/> {copy.chips[1]}</div>
               <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
               <div className="flex items-center gap-2"><Code size={14} className="text-fuchsia-500"/> {copy.chips[2]}</div>
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
                <Terminal className="text-cyan-400" /> {copy.about}
              </h2>
            </div>
            
            <div className="bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden group">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <article className="prose prose-invert prose-lg max-w-none">
                <p className="text-slate-300 leading-relaxed font-light text-lg">
                  {t(DATA.summary, lang)}
                </p>
              </article>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-slate-950 rounded-lg border border-slate-800 text-sm text-slate-400 flex items-center gap-2">
                  <MapPin size={16} className="text-cyan-500"/> {t(DATA.personal.location, lang)}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">{copy.technicalSkill}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {copy.technicalSkillDesc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard title={copy.skillTitles[0]} icon={Shield} skills={DATA.skills.core} delay={0} />
            <SkillCard title={copy.skillTitles[1]} icon={Code} skills={DATA.skills.security} delay={100} />
            <SkillCard title={copy.skillTitles[2]} icon={Server} skills={DATA.skills.dev} delay={200} />
            <SkillCard title={copy.skillTitles[3]} icon={Database} skills={DATA.skills.dataOps} delay={300} />
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16 reveal-on-scroll opacity-0 translate-y-8">
            <div className="h-px bg-slate-800 flex-grow"></div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3 font-heading">
              <Award className="text-violet-400" /> {copy.journey}
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
                        {t(job.type, lang)}
                      </div>
                      <div className="md:hidden text-xs text-cyan-500 font-mono mb-2">{job.period}</div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors font-heading">{t(job.role, lang)}</h3>
                      <div className="text-slate-400 font-medium mb-4 flex items-center gap-2 text-sm">
                        <MapPin size={14} /> {t(job.company, lang)}
                      </div>
                      <ul className="space-y-2">
                        {job.highlights.map((h, i) => (
                          <li key={i} className="text-sm text-slate-300 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-600 before:rounded-full group-hover:before:bg-cyan-500 transition-colors">
                            {t(h, lang)}
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-heading">{copy.projects}</h2>
              <p className="text-slate-400">{copy.projectsDesc}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {DATA.projects.map((proj, idx) => (
              <ProjectCard key={idx} project={proj} actionLabel={copy.viewArchitecture} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION & CERTS --- */}
      <section className="py-20 px-4 border-t border-slate-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          
          <div className="reveal-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-heading">
              <BookOpen className="text-cyan-400" /> {copy.education}
            </h3>
            {DATA.education.map((edu, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-xl hover:bg-slate-900/50 transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 font-bold shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{t(edu.degree, lang)}</h4>
                  <p className="text-slate-400">{t(edu.uni, lang)}</p>
                  <p className="text-sm text-slate-500 mt-1 font-mono">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: '100ms' }}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-heading">
              <Lock className="text-violet-400" /> {copy.certifications}
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
              <ProfileImage fallbackHint={lang === 'th' ? 'วางรูปภาพที่ public/' : 'Place image in public/'} />
            </div>

            {/* Right Column: Contact Details */}
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-heading">
                {copy.lets} <span className="text-cyan-400">{copy.collaborate}</span>
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
                {copy.contactDesc}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <a href={`mailto:${DATA.personal.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all group">
                  <div className="p-3 bg-slate-900 rounded-lg text-cyan-500 group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-500 font-mono uppercase">{copy.emailAddress}</div>
                    <div className="text-slate-200 font-medium">{DATA.personal.email}</div>
                  </div>
                </a>

                <a href={`tel:${DATA.personal.phone}`} className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-violet-500/50 hover:bg-slate-900 transition-all group">
                  <div className="p-3 bg-slate-900 rounded-lg text-violet-500 group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-500 font-mono uppercase">{copy.phoneNumber}</div>
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
            <p>© 2026 {lang === 'th' ? DATA.personal.nameTH : DATA.personal.nameEN}. {copy.rights}</p>
            <div className="flex items-center gap-2 text-xs">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {copy.systemOnline}
            </div>
          </footer>
        </div>
      </section>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 rounded-full border border-cyan-500/40 bg-slate-900/90 p-3 text-cyan-300 shadow-lg shadow-cyan-900/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-slate-950 ${showScrollTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default App;