export interface ContactInfo {
  whatsapp: string
  whatsapp_url: string
  phone: string
  tel_href: string
  email: string
  mailto: string
  github_user: string
  github_url: string
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  tag: string
  repo: string
  demoUrl?: string
  stack: string[]
  bgColor: string
  illustration: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  iconName: string
  bgColor: string
}

export interface ExperienceItem {
  period: string
  title: string
  institution: string
  description: string
  badgeColor: string
}

export interface ArticleItem {
  id: string
  title: string
  category: string
  summary: string
  readTime: string
  date: string
  author: string
  image: string
  url?: string
}

export interface TestimonialItem {
  id: string
  quote: string
  author: string
  role: string
  avatar: string
  rating: number
}

export const portfolioData = {
  personalInfo: {
    name: "Kosi Udeh",
    legalName: "Udeh Kosisochukwu Emmanuel",
    branding: "KOSI.DEV",
    headline: "Full-Stack Developer & Systems Architect",
    location: "Nigeria",
    academic: "Afe Babalola University (ABUAD), B.Sc. Computer Science",
    bio: "Computer Science Undergraduate at Afe Babalola University (ABUAD) & Software Engineering Intern at Gokly Oil and Gas Services. Engineering scalable multi-tenant platforms, energy industry web systems, autonomous multi-agent operating systems, and embedded robotics.",
    stats: [
      { label: "Production Architectures", value: "8+" },
      { label: "Industry Experience", value: "Gokly & Rolof" },
      { label: "Academic Standing", value: "ABUAD CS" },
      { label: "Type Safety & Security", value: "100%" },
    ],
  },
  contactInfo: {
    whatsapp: "+2349117950895",
    whatsapp_url: "https://wa.me/2349117950895",
    phone: "+2347071070282",
    tel_href: "tel:+2347071070282",
    email: "kosiudeh627@gmail.com",
    mailto: "mailto:kosiudeh627@gmail.com",
    github_user: "Kosis0",
    github_url: "https://github.com/Kosis0",
  } as ContactInfo,
  techStack: [
    { name: "React 19", logo: "/logos/application.svg" },
    { name: "Next.js", logo: "/logos/company.svg" },
    { name: "FastAPI", logo: "/logos/startup.svg" },
    { name: "Node.js / Express", logo: "/logos/business.svg" },
    { name: "Python", logo: "/logos/business.svg" },
    { name: "TypeScript", logo: "/logos/venture.svg" },
    { name: "Supabase PostgreSQL", logo: "/logos/company.svg" },
    { name: "Arduino C++", logo: "/logos/agency.svg" },
    { name: "Tailwind CSS", logo: "/logos/application.svg" },
  ],
  services: [
    {
      id: "energy-systems",
      title: "Energy & Enterprise Web Portals",
      description: "Full-stack portals for energy, EPCI tracking, MISTDO training compliance workflows, and digital client services with robust Express.js & PostgreSQL backends.",
      iconName: "Server",
      bgColor: "bg-[#F59E0B]",
    },
    {
      id: "multi-tenant",
      title: "Multi-Tenant Platforms",
      description: "Dynamic tenant subrouting (/[tenant]), isolated PostgreSQL database schemas, Stripe NGN/USD checkouts, and flash sale countdown engines.",
      iconName: "Layers",
      bgColor: "bg-[#6366F1]",
    },
    {
      id: "agentic-os",
      title: "Autonomous Multi-Agent OS",
      description: "Wavefront DAG task schedulers, Python FastAPI micro-kernels, 4-tier memory buses (L1 to L3 SQLite vectors), and least-agency HITL governance.",
      iconName: "Terminal",
      bgColor: "bg-[#2F81F7]",
    },
    {
      id: "embedded-robotics",
      title: "Embedded Robotics & Hardware",
      description: "C++ Arduino microcontrollers, ultrasonic sensor arrays for obstacle avoidance, motor PWM drivers, and Python UART telemetry serial logging.",
      iconName: "Cpu",
      bgColor: "bg-[#10B981]",
    },
    {
      id: "cloud-apis",
      title: "Secure Cloud REST APIs",
      description: "FastAPI and Express.js microservices with SQLAlchemy ORM, SQLite/PostgreSQL, JWT token auth, Bcrypt hashing, and automated pytest suites.",
      iconName: "Server",
      bgColor: "bg-[#FF6B7A]",
    },
    {
      id: "ui-engineering",
      title: "Zero-Bloat UI Engineering",
      description: "React 19, Next.js 16, Vite, and Tailwind CSS. Clean component design tokens, instantaneous load times, and 100/100 Lighthouse performance.",
      iconName: "Smartphone",
      bgColor: "bg-[#8B5CF6]",
    },
  ] as ServiceItem[],
  projects: [
    {
      id: "agentic-os",
      title: "Agentic OS v2 — Autonomous Multi-Agent Desktop Shell & Micro-Kernel",
      description:
        "Engineered an event-sourced AI operating system bridging autonomous agent swarms to a low-latency React 19 desktop shell. Implemented a wavefront DAG scheduler for concurrent subagent task orchestration, a 4-tier memory bus (L1 Core cache to L3 SQLite vector embeddings), and an HMAC-SHA256 least-agency Human-in-the-Loop (HITL) approval governance matrix with Model Context Protocol (MCP) tool bindings.",
      tag: "Flagship AI Systems Architecture",
      repo: "https://github.com/Kosis0/agentic-os",
      stack: ["React 19", "FastAPI", "TypeScript", "Wavefront DAG", "SQLite Vectors", "MCP"],
      bgColor: "bg-[#6366F1]",
      illustration: "/images/studio-workspace.svg",
    },
    {
      id: "tradepro",
      title: "TradePro — Multi-Asset Trading Platform & Execution Terminal",
      description:
        "High-performance multi-asset trading terminal engineered for Forex, Equities, Crypto, and CFD execution. Features an interactive trading terminal with live order-book market depth, dynamic leverage and margin requirement calculators, global market screening across major pairs/crypto/indices, and a zero-FOUC design token theme engine with sub-16ms layout rendering.",
      tag: "Fintech & Financial Engineering",
      repo: "https://github.com/Kosis0/tradepro-trading-platform",
      stack: ["JavaScript ES6+", "Order Book Depth", "Leverage Engine", "CSS Design Tokens", "Financial Charts"],
      bgColor: "bg-[#2563eb]",
      illustration: "/images/product-design.svg",
    },
    {
      id: "valence-energy",
      title: "Valence Energy & Infrastructure Intelligence Terminal",
      description:
        "High-density operations terminal engineered for monitoring critical energy grid and infrastructure assets. Features dynamic commodity price feeds, interactive RFP procurement workflows, automated ESG performance scoring, and sub-100ms dashboard re-renders with zero runtime layout shift.",
      tag: "Industrial Telemetry & Analytics",
      repo: "https://github.com/Kosis0/valence-energy-terminal",
      stack: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Recharts", "Telemetry Engine"],
      bgColor: "bg-[#10B981]",
      illustration: "/images/product-design.svg",
    },
    {
      id: "nexus-erp",
      title: "Nexus ERP & ESS Command Center",
      description:
        "Enterprise Employee Self-Service (ESS) platform and HR administration portal engineered with zero UI framework bloat. Features real-time shift clock-in timers, entitlement leave quota approvals, executive workforce analytics, automated client-side PDF payslip generation, and strict role-based access control (RBAC).",
      tag: "Enterprise Systems Architecture",
      repo: "https://github.com/Kosis0/Company-Portal",
      stack: ["React 19", "Vite", "Vanilla CSS Tokens", "RBAC Auth", "PDF Generation", "REST APIs"],
      bgColor: "bg-[#2F81F7]",
      illustration: "/images/venture-workspace.svg",
    },
    {
      id: "mercato",
      title: "Mercato — Scalable Multi-Tenant E-Commerce Platform",
      description:
        "Scalable multi-tenant marketplace platform supporting dynamic subpath tenant routing (/[tenant]) and tenant database schema/RLS isolation in PostgreSQL. Built flash sale countdown engines and integrated dual-currency Stripe checkout handling seamless Naira (₦) and USD ($) transactions with webhook reconciliation.",
      repo: "https://github.com/Kosis0/multi-tenant-ecommerce",
      stack: ["Next.js 16", "Express.js", "Supabase PostgreSQL", "Stripe Webhooks", "Row-Level Security"],
      bgColor: "bg-[#059669]",
      illustration: "/images/ui-ux-design.svg",
    },
    {
      id: "record-keeper",
      title: "Secure Cloud Record Keeping REST API",
      description:
        "Production-ready cloud REST API featuring JWT authentication, Bcrypt password hashing, structured data validation, and SQLAlchemy ORM relations. Delivered 100% automated endpoint test coverage via Pytest with interactive OpenAPI/Swagger documentation.",
      tag: "Backend & Systems Reliability",
      repo: "https://github.com/Kosis0/RecordKeeperAPI",
      stack: ["Python", "FastAPI", "SQLAlchemy ORM", "JWT / Bcrypt", "Pytest CI", "OpenAPI"],
      bgColor: "bg-[#FF6B7A]",
      illustration: "/images/studio-workspace.svg",
    },
    {
      id: "gokly-portal",
      title: "Gokly Oil & Gas Enterprise Platform & Management Portal",
      description:
        "Full-stack industrial web infrastructure and compliance workflow management for Gokly Oil & Gas Services (NUPRC-licensed EPCI contractor and NMDPRA MISTDO safety training consultant). Built client engagement portals, technical service catalog dashboards, and automated compliance record workflows.",
      tag: "Commercial Industrial System",
      repo: "https://github.com/Kosis0",
      stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "MISTDO / NUPRC"],
      bgColor: "bg-[#F59E0B]",
      illustration: "/images/web-design.svg",
    },
    {
      id: "apex-local-service",
      title: "Apex — High-Converting Local Service Platform Architecture",
      description:
        "Editorial-grade local service platform achieving 99+ Lighthouse performance scores. Implemented an interactive before/after image comparison slider, a real-time operating hours status engine, and instant WhatsApp quote dispatch pipelines.",
      tag: "High-Performance Frontend",
      repo: "https://github.com/Kosis0/local-service-landing-page",
      stack: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Core Web Vitals", "Lucide"],
      bgColor: "bg-[#8B5CF6]",
      illustration: "/images/motion-graphics.svg",
    },
    {
      id: "luxury-showrooms",
      title: "QueenGold & Siaca Royalle — Bespoke Luxury Showrooms",
      description:
        "Ultra-refined luxury brand eCommerce showrooms engineered with 60fps micro-interactions, dynamic multi-currency converters (USD/EUR/NGN), instant catalog filtering, and direct VIP concierge integrations.",
      tag: "Luxury Commerce & Interactive UI",
      repo: "https://github.com/Kosis0/queengold-luxury-showroom",
      stack: ["JavaScript ES6+", "Tailwind CSS", "Vite", "Currency Engine", "WhatsApp Concierge"],
      bgColor: "bg-[#EC4899]",
      illustration: "/images/user-research.svg",
    },
    {
      id: "robotics",
      title: "Autonomous Robotics & Microcontroller Telemetry Platform",
      description:
        "Prototyped and programmed autonomous obstacle-avoidance vehicles using Arduino microcontrollers, ultrasonic sensor arrays, and motor PWM drivers. Implemented real-time telemetry streaming over Python UART serial logging for kinematic diagnostic evaluation.",
      tag: "Embedded Systems & Hardware",
      repo: "https://github.com/Kosis0",
      stack: ["C++", "Arduino", "PWM Actuators", "Ultrasonic Arrays", "Python UART Telemetry"],
      bgColor: "bg-[#F59E0B]",
      illustration: "/images/venture-workspace.svg",
    },
  ] as ProjectItem[],
  experiences: [
    {
      period: "2025 - Present",
      title: "Software Engineering & Web Systems Intern",
      institution: "Gokly Oil and Gas Services Limited (Bayelsa / Niger Delta)",
      description: "Developing full-stack web platforms and operational digital tools for Gokly Oil & Gas (NUPRC-licensed EPCI contractor and NMDPRA-accredited MISTDO training consultant). Building client portals, technical services dashboards, and compliance workflows using React, TypeScript, Express.js, and PostgreSQL.",
      badgeColor: "bg-[#F59E0B]",
    },
    {
      period: "2024 - Present",
      title: "Lead Architect & Developer — Agentic OS v2",
      institution: "Independent AI Systems Architecture",
      description: "Engineered Python FastAPI micro-kernel, wavefront DAG task scheduler, 4-tier memory bus, least-agency security governance, and Model Context Protocol (MCP) integrations.",
      badgeColor: "bg-[#2F81F7]",
    },
    {
      period: "2024",
      title: "Software Development & Systems Intern",
      institution: "Rolof Institute of Management & Technology / Rolof Academy (Warri, Delta State)",
      description: "Engaged in hands-on software development, database design, and IT systems infrastructure support at Warri's pioneer NBTE-accredited technology institute. Built web interfaces and assisted in deploying technical educational software.",
      badgeColor: "bg-[#10B981]",
    },
    {
      period: "2024",
      title: "Full-Stack Engineer — Nexus ERP & Mercato",
      institution: "Enterprise & Multi-Tenant Solutions",
      description: "Architected multi-tenant database partitioning, RBAC permissions, live shift clock-in timers, and client-side PDF payslip generators with zero external UI bloat.",
      badgeColor: "bg-[#6366F1]",
    },
    {
      period: "2023 - 2024",
      title: "Robotics & Hardware Prototyping",
      institution: "Microcontroller Engineering",
      description: "Programmed Arduino C++ obstacle avoidance logic, interfaced ultrasonic sensor arrays, tuned motor PWM drivers, and built real-time Python UART telemetry logging scripts.",
      badgeColor: "bg-[#FF6B7A]",
    },
    {
      period: "In Progress",
      title: "B.Sc. in Computer Science",
      institution: "Afe Babalola University (ABUAD), Nigeria",
      description: "Rigorous theoretical and applied computer science curriculum: Data Structures & Algorithms, Software Engineering, Object-Oriented Programming (OOP), Database Systems, Computer Architecture.",
      badgeColor: "bg-[#8B5CF6]",
    },
  ] as ExperienceItem[],
  articles: [
    {
      id: "micro-kernel-dag",
      title: "Event-Sourced Python Micro-Kernels for Multi-Agent OS Runtimes",
      category: "Architecture",
      summary: "Designing deterministic wavefront DAG scheduling, L1-L3 vector memory hierarchies, and HMAC-signed least-agency human-in-the-loop security governance.",
      readTime: "6 min read",
      date: "Feb 14, 2026",
      author: "Kosi Udeh",
      image: "/images/article-design-tools.png",
      url: "https://github.com/Kosis0",
    },
    {
      id: "multi-tenant-isolation",
      title: "Dynamic Tenant Partitioning in Next.js 16 & Supabase PostgreSQL",
      category: "Full-Stack",
      summary: "Architecting zero-bleed multi-tenant data schemas with subrouting (/[tenant]), unified auth tokens, and dual-currency Stripe billing.",
      readTime: "5 min read",
      date: "Jan 22, 2026",
      author: "Kosi Udeh",
      image: "/images/article-font-sizes.png",
      url: "https://github.com/Kosis0/multi-tenant-ecommerce",
    },
    {
      id: "robotics-telemetry",
      title: "Low-Latency UART Telemetry & Obstacle Avoidance on Microcontrollers",
      category: "Embedded Systems",
      summary: "Interfacing ultrasonic sensor arrays, PWM motor drivers, and Python serial streams for real-time hardware telemetry logging.",
      readTime: "4 min read",
      date: "Dec 18, 2025",
      author: "Kosi Udeh",
      image: "/images/article-exercises.png",
      url: "https://github.com/Kosis0",
    },
  ] as ArticleItem[],
  testimonials: [
    {
      id: "t1",
      quote: "Kosi's architectural clarity on the Agentic OS and multi-tenant database partitioning demonstrates world-class systems thinking. Highly recommended for complex engineering challenges.",
      author: "ABUAD CS Faculty & Mentors",
      role: "Department of Computer Science, ABUAD",
      avatar: "/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
      rating: 5,
    },
    {
      id: "t2",
      quote: "The Nexus ERP implementation was delivered with exceptional speed and zero bloated dependencies. Clean, modular, and flawlessly type-safe.",
      author: "Enterprise Project Collaborator",
      role: "Full-Stack Engineering Lead",
      avatar: "/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
      rating: 5,
    },
  ] as TestimonialItem[],
}
