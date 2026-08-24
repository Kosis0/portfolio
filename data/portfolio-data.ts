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
    bio: "Computer Science Undergraduate at Afe Babalola University (ABUAD). Engineering scalable multi-tenant platforms, autonomous multi-agent operating systems, and embedded robotics.",
    stats: [
      { label: "Production Architectures", value: "6+" },
      { label: "Academic Standing", value: "ABUAD CS" },
      { label: "Type Safety & Security", value: "100%" },
      { label: "Engineering Excellence", value: "100%" },
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
    { name: "Python", logo: "/logos/business.svg" },
    { name: "TypeScript", logo: "/logos/venture.svg" },
    { name: "Arduino C++", logo: "/logos/agency.svg" },
    { name: "Supabase PostgreSQL", logo: "/logos/company.svg" },
    { name: "Tailwind CSS", logo: "/logos/application.svg" },
  ],
  services: [
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
      title: "Agentic OS v2 — Multi-Agent Operating System",
      description:
        "LLM-powered multi-agent desktop shell with a Python FastAPI micro-kernel, wavefront DAG task scheduler, 4-tier memory bus (L1 Core to L3 SQLite vector store), and HMAC-signed least-agency HITL governance matrix.",
      tag: "Autonomous AI System",
      repo: "https://github.com/Kosis0",
      stack: ["React 19", "FastAPI", "TypeScript", "SQLite Vectors", "MCP"],
      bgColor: "bg-[#6366F1]",
      illustration: "/images/studio-workspace.svg",
    },
    {
      id: "nexus-erp",
      title: "Nexus ERP & ESS Command Center",
      description:
        "Enterprise Employee Self-Service portal and HR administration command center. Includes real-time shift clock-in timers, entitlement leave managers, automated PDF payslips, and strict role-based access control (RBAC).",
      tag: "Enterprise Portal",
      repo: "https://github.com/Kosis0/Company-Portal",
      stack: ["React 19", "Vite", "Vanilla CSS", "RBAC Auth", "REST APIs"],
      bgColor: "bg-[#2F81F7]",
      illustration: "/images/venture-workspace.svg",
    },
    {
      id: "mercato",
      title: "Mercato — Multi-Tenant E-Commerce Platform",
      description:
        "Performant multi-tenant marketplace featuring dynamic tenant subrouting (/[tenant]), isolated merchant PostgreSQL database partitions, custom categories, flash sales, and dual-currency Stripe checkout (₦ / $).",
      tag: "Multi-Tenant Architecture",
      repo: "https://github.com/Kosis0/multi-tenant-ecommerce",
      stack: ["Next.js 16", "Express.js", "Supabase PostgreSQL", "Stripe"],
      bgColor: "bg-[#10B981]",
      illustration: "/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
    },
    {
      id: "record-keeper",
      title: "Secure Cloud Record Keeping REST API",
      description:
        "Production cloud REST API engineered with FastAPI, SQLAlchemy ORM, SQLite/PostgreSQL, JWT token auth, and Bcrypt password hashing. Fully tested with comprehensive automated test suites and Swagger UI.",
      tag: "Cloud REST API",
      repo: "https://github.com/Kosis0/RecordKeeperAPI",
      stack: ["Python", "FastAPI", "SQLAlchemy", "JWT / Bcrypt", "Pytest"],
      bgColor: "bg-[#FF6B7A]",
      illustration: "/images/studio-workspace.svg",
    },
    {
      id: "robotics",
      title: "Autonomous Robotics & Microcontroller Platform",
      description:
        "Prototyped and programmed autonomous obstacle-avoidance vehicles using Arduino microcontrollers, custom electronic circuits, ultrasonic sensor arrays, motor PWM drivers, and Python UART telemetry scripts.",
      tag: "Embedded & Hardware",
      repo: "https://github.com/Kosis0",
      stack: ["C++", "Arduino", "PWM Actuators", "Python Telemetry", "UART"],
      bgColor: "bg-[#F59E0B]",
      illustration: "/images/venture-workspace.svg",
    },
    {
      id: "local-service",
      title: "High-Converting Local Service Web Architecture",
      description:
        "High-performance modern local service platform engineered with React 18, TypeScript, Tailwind CSS, and Lucide icons. Optimized for maximum conversion, instantaneous load times, and perfect 100/100 Lighthouse score.",
      tag: "Frontend Architecture",
      repo: "https://github.com/Kosis0/local-service-landing-page",
      stack: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Lucide"],
      bgColor: "bg-[#8B5CF6]",
      illustration: "/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
    },
  ] as ProjectItem[],
  experiences: [
    {
      period: "In Progress",
      title: "B.Sc. in Computer Science",
      institution: "Afe Babalola University (ABUAD), Nigeria",
      description: "Rigorous theoretical and applied computer science curriculum: Data Structures & Algorithms, Software Engineering, Object-Oriented Programming (OOP), Database Systems, Computer Architecture.",
      badgeColor: "bg-[#6366F1]",
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
      title: "Full-Stack Engineer — Nexus ERP & Mercato",
      institution: "Enterprise & Multi-Tenant Solutions",
      description: "Architected multi-tenant database partitioning, RBAC permissions, live shift clock-in timers, and client-side PDF payslip generators with zero external UI bloat.",
      badgeColor: "bg-[#10B981]",
    },
    {
      period: "2023 - 2024",
      title: "Robotics & Hardware Prototyping",
      institution: "Microcontroller Engineering",
      description: "Programmed Arduino C++ obstacle avoidance logic, interfaced ultrasonic sensor arrays, tuned motor PWM drivers, and built real-time Python UART telemetry logging scripts.",
      badgeColor: "bg-[#F59E0B]",
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
