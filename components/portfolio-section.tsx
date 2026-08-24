import { ArrowRight, Github, ExternalLink } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
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
      title: "High-Converting Local Service Web Architecture",
      description:
        "High-performance modern local service platform engineered with React 18, TypeScript, Tailwind CSS, and Lucide icons. Optimized for maximum conversion, instantaneous load times, and perfect 100/100 Lighthouse score.",
      tag: "Frontend Architecture",
      repo: "https://github.com/Kosis0/local-service-landing-page",
      stack: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Lucide"],
      bgColor: "bg-[#8B5CF6]",
      illustration: "/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
    },
  ]

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Featured <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Engineered Systems</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Real production architectures spanning multi-agent AI runtimes, enterprise portals, multi-tenant databases, and embedded robotics.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block bg-black text-white text-xs font-bold px-3.5 py-1 rounded-full w-fit">
                    {project.tag}
                  </span>
                </div>

                <h3 className="text-xl md:text-[28px] font-extrabold mb-3 leading-tight text-black">
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

                <div className="flex items-center gap-4">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-black hover:text-[#2F81F7] transition-colors text-sm md:text-base border-b-2 border-black pb-0.5"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repository
                    <ArrowRight className="w-4 h-4" />
                  </a>
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

        <div className="flex justify-center">
          <a
            href="https://github.com/Kosis0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-base"
          >
            <Github className="w-5 h-5" />
            View all repositories on GitHub (@Kosis0) ↗
          </a>
        </div>
      </div>
    </section>
  )
}
