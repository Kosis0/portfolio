import { MessageSquare, Server, Layers, Cpu, ShieldCheck, Terminal, Smartphone } from "lucide-react"

export function ServicesSection() {
  const domains = [
    {
      title: "Multi-Tenant Platforms",
      description: "Dynamic tenant subrouting (/[tenant]), isolated PostgreSQL database schemas, Stripe NGN/USD checkouts, and flash sale countdown engines.",
      icon: Layers,
      bgColor: "bg-[#6366F1]",
    },
    {
      title: "Autonomous Multi-Agent OS",
      description: "Wavefront DAG task schedulers, Python FastAPI micro-kernels, 4-tier memory buses (L1 to L3 SQLite vectors), and least-agency HITL governance.",
      icon: Terminal,
      bgColor: "bg-[#2F81F7]",
    },
    {
      title: "Embedded Robotics & Hardware",
      description: "C++ Arduino microcontrollers, ultrasonic sensor arrays for obstacle avoidance, motor PWM drivers, and Python UART telemetry serial logging.",
      icon: Cpu,
      bgColor: "bg-[#10B981]",
    },
    {
      title: "Secure Cloud REST APIs",
      description: "FastAPI and Express.js microservices with SQLAlchemy ORM, SQLite/PostgreSQL, JWT token auth, Bcrypt hashing, and automated pytest suites.",
      icon: Server,
      bgColor: "bg-[#FF6B7A]",
    },
    {
      title: "Zero-Bloat UI Engineering",
      description: "React 19, Next.js 16, Vite, and Tailwind CSS. Clean component design tokens, instantaneous load times, and 100/100 Lighthouse performance.",
      icon: Smartphone,
      bgColor: "bg-[#8B5CF6]",
    },
  ]

  return (
    <section id="services" className="bg-[#FAF9F6] py-16 md:py-24 border-y-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-extrabold mb-4">
              Core Technical <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Domains & Skills</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              From full-stack multi-tenant web systems to low-level microcontroller robotics and distributed multi-agent runtimes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => {
              const IconComp = domain.icon
              return (
                <div
                  key={index}
                  className="bg-white border-[3px] border-black rounded-[28px] p-8 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 min-h-[320px]"
                >
                  <div>
                    <div className={`w-14 h-14 ${domain.bgColor} border-2 border-black rounded-2xl flex items-center justify-center text-white mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>
                      <IconComp className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-black">{domain.title}</h3>
                    <p className="text-gray-700 text-base leading-relaxed">{domain.description}</p>
                  </div>
                </div>
              )
            })}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[28px] p-8 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[320px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white mb-4 border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold mb-2 text-black">Let's Connect</h3>
              <p className="text-gray-900 text-sm font-medium mb-6">
                Looking for a full-stack engineer or systems architect? Reach out directly via WhatsApp or phone.
              </p>
              <a
                href="https://wa.me/2349117950895"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white hover:bg-gray-900 rounded-xl px-6 py-3.5 font-bold text-base w-full max-w-[240px] border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]"
              >
                Chat on WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
