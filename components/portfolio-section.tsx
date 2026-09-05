import { ArrowRight, Github, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      id: "agentic-os",
      title: "Agentic OS v2 — Autonomous Multi-Agent Desktop Shell & Micro-Kernel",
      tag: "Flagship AI Systems Architecture",
      description:
        "Engineered an event-sourced AI operating system bridging autonomous agent swarms to a low-latency React 19 desktop shell. Implemented a wavefront DAG scheduler for concurrent subagent task orchestration, a 4-tier memory bus (L1 Core cache to L3 SQLite vector embeddings), and an HMAC-SHA256 least-agency Human-in-the-Loop (HITL) approval governance matrix with Model Context Protocol (MCP) tool bindings.",
      repo: "https://github.com/Kosis0/agentic-os",
      repoLabel: "Kosis0/agentic-os",
      isLiveRepo: true,
      badge: "Verified Open-Source Core",
      stack: ["React 19", "FastAPI", "TypeScript", "Wavefront DAG", "SQLite Vectors", "MCP"],
      bgColor: "bg-[#6366F1]",
      illustration: "/images/studio-workspace.svg",
    },
    {
      id: "tradepro",
      title: "TradePro — Multi-Asset Trading Platform & Execution Terminal",
      tag: "Fintech & Financial Engineering",
      description:
        "High-performance multi-asset trading terminal engineered for Forex, Equities, Crypto, and CFD execution. Features an interactive trading terminal with live order-book market depth, dynamic leverage and margin requirement calculators, global market screening across major pairs/crypto/indices, and a zero-FOUC design token theme engine with sub-16ms layout rendering.",
      repo: "https://github.com/Kosis0/tradepro-trading-platform",
      repoLabel: "Kosis0/tradepro-trading-platform",
      isLiveRepo: true,
      badge: "Verified Open-Source Core",
      stack: ["JavaScript ES6+", "Order Book Depth", "Leverage Engine", "CSS Design Tokens", "Financial Charts"],
      bgColor: "bg-[#2563eb]",
      illustration: "/images/product-design.svg",
    },
    {
      id: "valence-energy",
      title: "Valence Energy & Infrastructure Intelligence Terminal",
      tag: "Industrial Telemetry & Analytics",
      description:
        "High-density operations terminal engineered for monitoring critical energy grid and infrastructure assets. Features dynamic commodity price feeds, interactive RFP procurement workflows, automated ESG performance scoring, and sub-100ms dashboard re-renders with zero runtime layout shift.",
      repo: "https://github.com/Kosis0/valence-energy-terminal",
      repoLabel: "Kosis0/valence-energy-terminal",
      isLiveRepo: true,
      badge: "Verified Open-Source Core",
      stack: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Recharts", "Telemetry Engine"],
      bgColor: "bg-[#10B981]",
      illustration: "/images/product-design.svg",
    },
    {
      id: "nexus-erp",
      title: "Nexus ERP & ESS Command Center",
      tag: "Enterprise Systems Architecture",
      description:
        "Enterprise Employee Self-Service (ESS) platform and HR administration portal engineered with zero UI framework bloat. Features real-time shift clock-in timers, entitlement leave quota approvals, executive workforce analytics, automated client-side PDF payslip generation, and strict role-based access control (RBAC).",
      repo: "https://github.com/Kosis0/Company-Portal",
      repoLabel: "Kosis0/Company-Portal",
      isLiveRepo: true,
      badge: "Verified Open-Source Core",
      stack: ["React 19", "Vite", "Vanilla CSS Tokens", "RBAC Auth", "PDF Generation", "REST APIs"],
      bgColor: "bg-[#2F81F7]",
      illustration: "/images/venture-workspace.svg",
    },
    {
      id: "mercato",
      title: "Mercato — Scalable Multi-Tenant E-Commerce Platform",
      tag: "Distributed Cloud Architecture",
      description:
        "Scalable multi-tenant marketplace platform supporting dynamic subpath tenant routing (/[tenant]) and tenant database schema/RLS isolation in PostgreSQL. Built flash sale countdown engines and integrated dual-currency Stripe checkout handling seamless Naira (₦) and USD ($) transactions with webhook reconciliation.",
      repo: "https://github.com/Kosis0/multi-tenant-ecommerce",
      repoLabel: "Kosis0/multi-tenant-ecommerce",
      isLiveRepo: true,
      badge: "Verified Open-Source Core",
      stack: ["Next.js 16", "Express.js", "Supabase PostgreSQL", "Stripe Webhooks", "Row-Level Security"],
      bgColor: "bg-[#059669]",
      illustration: "/images/ui-ux-design.svg",
    },
    {
      id: "record-keeper",
      title: "Secure Cloud Record Keeping REST API",
      tag: "Backend & Systems Reliability",
      description:
        "Production-ready cloud REST API featuring JWT authentication, Bcrypt password hashing, structured data validation, and SQLAlchemy ORM relations. Delivered 100% automated endpoint test coverage via Pytest with interactive OpenAPI/Swagger documentation.",
      repo: "https://github.com/Kosis0/RecordKeeperAPI",
      repoLabel: "Kosis0/RecordKeeperAPI",
      isLiveRepo: true,
      badge: "Verified Open-Source Core",
      stack: ["Python", "FastAPI", "SQLAlchemy ORM", "JWT / Bcrypt", "Pytest CI", "OpenAPI"],
      bgColor: "bg-[#FF6B7A]",
      illustration: "/images/studio-workspace.svg",
    },
    {
      id: "gokly-portal",
      title: "Gokly Oil & Gas Enterprise Platform & Management Portal",
      tag: "Commercial Industrial System",
      description:
        "Full-stack industrial web infrastructure and compliance workflow management for Gokly Oil & Gas Services (NUPRC-licensed EPCI contractor and NMDPRA MISTDO safety training consultant). Built client engagement portals, technical service catalog dashboards, and automated compliance record workflows.",
      repo: "https://github.com/Kosis0",
      repoLabel: "Enterprise Production Deployment (Bayelsa, NG)",
      isLiveRepo: false,
      badge: "Commercial Client Deployment",
      stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "MISTDO / NUPRC"],
      bgColor: "bg-[#F59E0B]",
      illustration: "/images/web-design.svg",
    },
    {
      id: "apex-local-service",
      title: "Apex — High-Converting Local Service Platform Architecture",
      tag: "High-Performance Frontend",
      description:
        "Editorial-grade local service platform achieving 99+ Lighthouse performance scores. Implemented an interactive before/after image comparison slider, a real-time operating hours status engine, and instant WhatsApp quote dispatch pipelines.",
      repo: "https://github.com/Kosis0/local-service-landing-page",
      repoLabel: "Kosis0/local-service-landing-page",
      isLiveRepo: true,
      badge: "Verified Open-Source Core",
      stack: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Core Web Vitals", "Lucide"],
      bgColor: "bg-[#8B5CF6]",
      illustration: "/images/motion-graphics.svg",
    },
    {
      id: "luxury-showrooms",
      title: "QueenGold & Siaca Royalle — Bespoke Luxury Showrooms",
      tag: "Luxury Commerce & Interactive UI",
      description:
        "Ultra-refined luxury brand eCommerce showrooms engineered with 60fps micro-interactions, dynamic multi-currency converters (USD/EUR/NGN), instant catalog filtering, and direct VIP concierge integrations.",
      repo: "https://github.com/Kosis0/queengold-luxury-showroom",
      repoLabel: "Kosis0/queengold-luxury-showroom",
      isLiveRepo: true,
      badge: "Verified Open-Source Core",
      stack: ["JavaScript ES6+", "Tailwind CSS", "Vite", "Currency Engine", "WhatsApp Concierge"],
      bgColor: "bg-[#EC4899]",
      illustration: "/images/user-research.svg",
    },
    {
      id: "robotics",
      title: "Autonomous Robotics & Microcontroller Telemetry Platform",
      tag: "Embedded Systems & Hardware",
      description:
        "Prototyped and programmed autonomous obstacle-avoidance vehicles using Arduino microcontrollers, ultrasonic sensor arrays, and motor PWM drivers. Implemented real-time telemetry streaming over Python UART serial logging for kinematic diagnostic evaluation.",
      repo: "https://github.com/Kosis0",
      repoLabel: "Hardware Prototyping (ABUAD Systems Lab)",
      isLiveRepo: false,
      badge: "Academic Hardware Systems",
      stack: ["C++", "Arduino", "PWM Actuators", "Ultrasonic Arrays", "Python UART Telemetry"],
      bgColor: "bg-[#F59E0B]",
      illustration: "/images/venture-workspace.svg",
    },
  ]

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#2F81F7] text-white border-2 border-black px-3.5 py-1 rounded-full font-mono text-xs font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>VERIFIED REPOSITORIES & PRODUCTION RUNTIMES</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Featured <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Engineered Systems</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg font-medium">
            Production-grade architectures spanning multi-agent AI kernels, financial execution terminals, distributed multi-tenant databases, and embedded systems.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-block bg-black text-white text-xs font-bold px-3.5 py-1 rounded-full">
                      {project.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-gray-300">
                      <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-[26px] font-extrabold mb-3 leading-tight text-black">
                    {project.title}
                  </h3>

                  <p className="text-base text-gray-700 mb-6 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((st, i) => (
                      <span key={i} className="font-mono text-xs font-semibold bg-gray-100 border border-gray-300 px-2.5 py-1 rounded-md text-gray-800">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-gray-100 flex flex-wrap items-center justify-between gap-4">
                  {project.isLiveRepo ? (
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-black text-white hover:bg-[#2F81F7] transition-colors text-sm md:text-base font-bold px-5 py-2.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
                      >
                        <Github className="w-4 h-4" />
                        <span>Inspect Repository</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <span className="font-mono text-xs text-gray-600 bg-gray-50 border border-gray-200 px-2 py-1 rounded">
                        {project.repoLabel}
                      </span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-300 text-xs md:text-sm font-semibold px-3.5 py-2 rounded-xl">
                      <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                      <span>{project.repoLabel}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className={`${project.bgColor} relative overflow-hidden min-h-[220px] md:min-h-[400px] flex items-center justify-center p-8 border-t-[3px] md:border-t-0 md:border-l-[3px] border-black`}>
                <img
                  src={project.illustration}
                  alt={project.title}
                  className="w-4/5 h-auto object-contain max-h-[300px] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/Kosis0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-base"
          >
            <Github className="w-5 h-5" />
            Explore All Public Repositories (@Kosis0) ↗
          </a>
        </div>
      </div>
    </section>
  )
}
