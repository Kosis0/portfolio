import { MessageSquare, Phone, Mail, Github, ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0B0B0B] text-white py-16 border-t-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Quick Reach Banner */}
          <div className="bg-[#FFC224] border-4 border-black rounded-3xl p-8 md:p-12 mb-14 text-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-black mb-2">Have a project, role, or collaboration?</h3>
                <p className="text-gray-900 font-medium text-base">
                  Available for full-time software engineering, systems architecture, and embedded systems roles.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 w-full md:w-auto">
                <a
                  href="https://wa.me/2349117950895"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white font-bold px-6 py-3.5 rounded-xl border-2 border-black hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  WhatsApp
                </a>
                <a
                  href="tel:+2347071070282"
                  className="bg-white text-black font-bold px-6 py-3.5 rounded-xl border-2 border-black hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Phone className="w-4 h-4 text-[#2F81F7]" />
                  Call Direct
                </a>
              </div>
            </div>
          </div>

          {/* Grid Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4 font-mono font-bold text-xl">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black text-sm">
                  K
                </div>
                <span>KOSI.DEV</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Udeh Kosisochukwu Emmanuel (Kosi). Computer Science Undergraduate (ABUAD), Full-Stack Developer & Systems Architect.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://github.com/Kosis0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2F81F7] transition-colors border border-gray-700"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/2349117950895"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#25D366] transition-colors border border-gray-700"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="mailto:kosiudeh627@gmail.com"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF6B7A] transition-colors border border-gray-700"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-base">Direct Channels</h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li>
                  <a href="https://wa.me/2349117950895" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2">
                    <span className="text-[#25D366]">●</span> +234 911 795 0895 (WhatsApp)
                  </a>
                </li>
                <li>
                  <a href="tel:+2347071070282" className="hover:text-white flex items-center gap-2">
                    <span className="text-[#2F81F7]">●</span> +234 707 107 0282 (Phone)
                  </a>
                </li>
                <li>
                  <a href="mailto:kosiudeh627@gmail.com" className="hover:text-white flex items-center gap-2">
                    <span className="text-[#FF6B7A]">●</span> kosiudeh627@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Kosis0" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2">
                    <span className="text-white">●</span> github.com/Kosis0
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-base">Featured Work</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://github.com/Kosis0" target="_blank" rel="noopener noreferrer" className="hover:text-white">Agentic OS v2</a></li>
                <li><a href="https://github.com/Kosis0/Company-Portal" target="_blank" rel="noopener noreferrer" className="hover:text-white">Nexus ERP & ESS</a></li>
                <li><a href="https://github.com/Kosis0/multi-tenant-ecommerce" target="_blank" rel="noopener noreferrer" className="hover:text-white">Mercato E-Commerce</a></li>
                <li><a href="https://github.com/Kosis0/RecordKeeperAPI" target="_blank" rel="noopener noreferrer" className="hover:text-white">RecordKeeper API</a></li>
                <li><a href="https://github.com/Kosis0/local-service-landing-page" target="_blank" rel="noopener noreferrer" className="hover:text-white">Local Service Landing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-base">Location & Time</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Nigeria (West Africa Time / UTC+1). Open for full-time remote engineering positions worldwide.
              </p>
              <div className="inline-flex items-center gap-1.5 font-mono text-xs text-[#10b981] bg-gray-900 border border-gray-800 px-2.5 py-1 rounded-md">
                <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                <span>Active & Ready to Deploy</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div>
              © 2026 Udeh Kosisochukwu Emmanuel. Engineered with Paperfolio Next.js & Tailwind CSS.
            </div>
            <a href="#home" className="flex items-center gap-1 hover:text-white transition-colors">
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
