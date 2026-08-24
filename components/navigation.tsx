import { MessageSquare, Phone, Mail, Github } from "lucide-react"

export function Navigation() {
  return (
    <header className="sticky top-4 z-50 container mx-auto px-4 pt-4 pb-2">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-4xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <a href="#home" className="flex items-center gap-2 font-black text-xl tracking-tight text-black hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center text-white font-mono font-bold text-sm">
            K
          </div>
          <span>KOSI.DEV</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-[17px] font-bold hover:text-[#2F81F7] transition-colors">
            Home
          </a>
          <a href="#about" className="text-[17px] font-bold hover:text-[#2F81F7] transition-colors">
            About
          </a>
          <a href="#services" className="text-[17px] font-bold hover:text-[#2F81F7] transition-colors">
            Domains
          </a>
          <a href="#portfolio" className="text-[17px] font-bold hover:text-[#2F81F7] transition-colors">
            Systems
          </a>
          <a href="#experience" className="text-[17px] font-bold hover:text-[#2F81F7] transition-colors">
            Education
          </a>
          <a href="#contact" className="text-[17px] font-bold hover:text-[#2F81F7] transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Kosis0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white border-2 border-black rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            title="GitHub: @Kosis0"
          >
            <Github className="w-5 h-5 text-black" />
          </a>
          <a
            href="https://wa.me/2349117950895"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white border-2 border-black rounded-lg px-4 h-10 flex items-center justify-center gap-1.5 font-bold text-sm hover:opacity-90 transition-opacity shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
