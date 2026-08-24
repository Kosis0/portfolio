import { MessageSquare, ArrowDown, FolderOpen, Mail, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#2F81F7] text-white border-2 border-black px-3.5 py-1 rounded-full font-mono text-xs font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span>AVAILABLE FOR ROLES & COLLABORATIONS</span>
          </div>

          <h1 className="text-[38px] leading-[46px] md:text-[64px] font-extrabold md:leading-[74px] text-black">
            I'm <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Kosi Udeh</span>, Full-Stack Developer & Systems Architect from{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Nigeria</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[32px] max-w-xl">
            Computer Science Undergraduate at <strong>Afe Babalola University (ABUAD)</strong>. Engineering scalable multi-tenant web platforms, autonomous multi-agent operating environments, and embedded robotics.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
            <a
              href="https://wa.me/2349117950895"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white border-4 border-black hover:bg-[#20bd5a] rounded-xl py-4 px-6 md:py-5 md:px-8 text-base md:text-lg font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform active:translate-x-1 active:translate-y-1"
            >
              <MessageSquare className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white border-4 border-black hover:bg-gray-50 rounded-xl py-4 px-6 md:py-5 md:px-8 text-base md:text-lg font-bold text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform active:translate-x-1 active:translate-y-1"
            >
              <FolderOpen className="w-5 h-5" />
              Explore Systems
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-sm font-bold text-gray-700">
            <a href="tel:+2347071070282" className="flex items-center gap-1.5 hover:text-black">
              <Phone className="w-4 h-4 text-[#2F81F7]" />
              +234 707 107 0282
            </a>
            <a href="mailto:kosiudeh627@gmail.com" className="flex items-center gap-1.5 hover:text-black">
              <Mail className="w-4 h-4 text-[#FF6B7A]" />
              kosiudeh627@gmail.com
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
