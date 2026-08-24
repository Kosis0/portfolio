import { User, Code2, Cpu, Database, Mail, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/about-me.svg" alt="About Kosi Udeh" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Architecting solid software & <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">physical computing</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              I am a Computer Science undergraduate at <strong>Afe Babalola University (ABUAD)</strong> with proven experience engineering full-stack platforms, autonomous multi-agent operating systems, and embedded robotics.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border-3 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-[#2F81F7]">6+</div>
              <div className="text-xs font-bold text-gray-700 uppercase">Production Systems</div>
            </div>
            <div className="bg-white border-3 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-[#10B981]">100%</div>
              <div className="text-xs font-bold text-gray-700 uppercase">Type Safety & Test Pass</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-white border-3 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-8 h-8 bg-[#6366F1] border-2 border-black rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold mb-1">Full-Stack & Multi-Tenant Architecture</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Next.js 16, React 19, FastAPI, Express.js 5, and Supabase PostgreSQL with strict tenant data isolation, dynamic subrouting, and RBAC auth.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white border-3 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-8 h-8 bg-[#FF6B7A] border-2 border-black rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold mb-1">Multi-Agent Runtimes & Embedded Robotics</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Wavefront DAG task schedulers with 4-tier memory buses, plus microcontroller C++ programming for Arduino sensor arrays and UART telemetry.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="mailto:kosiudeh627@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-[#0B0B0B] text-white hover:bg-black/90 rounded-xl py-4 px-8 text-base font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black"
            >
              <Mail className="w-5 h-5" />
              Email Kosi
            </a>
            <a
              href="https://wa.me/2349117950895"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:opacity-90 rounded-xl py-4 px-8 text-base font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black"
            >
              WhatsApp (+234 911 795 0895)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
