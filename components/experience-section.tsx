import { GraduationCap, Briefcase, Award, CheckCircle2 } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
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
  ]

  return (
    <section id="experience" className="bg-black text-white py-16 md:py-24 border-t-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-8 md:sticky md:top-24 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Academic & <br />
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">Engineering Journey</span>
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-base md:text-lg">
              Grounding practical full-stack and robotics engineering in foundational computer science principles.
            </p>

            <div className="space-y-3 font-medium text-sm text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                <span>B.Sc. Computer Science (ABUAD)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                <span>Open for Global Remote, Hybrid, & Relocation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                <span>Native / Bilingual English Fluency</span>
              </div>
            </div>

            <a
              href="https://wa.me/2349117950895"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 rounded-xl py-4 px-8 text-base font-bold shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] border-2 border-white"
            >
              Get in touch ↗
            </a>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl p-6 md:p-8 text-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-block text-white text-xs font-bold px-3 py-1 rounded-md ${exp.badgeColor}`}>
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-extrabold text-black mb-1">
                  {exp.title}
                </h3>
                <div className="text-sm font-bold text-gray-600 mb-3">
                  {exp.institution}
                </div>

                <div className="border-t-2 border-gray-200 pt-3">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
