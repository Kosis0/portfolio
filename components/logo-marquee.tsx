export function LogoMarquee() {
  const stackItems = [
    { name: "React 19", tag: "Frontend", logo: "/logos/application.svg" },
    { name: "Next.js", tag: "Full-Stack", logo: "/logos/company.svg" },
    { name: "FastAPI", tag: "Micro-kernel", logo: "/logos/startup.svg" },
    { name: "Python", tag: "Backend/AI", logo: "/logos/business.svg" },
    { name: "TypeScript", tag: "Language", logo: "/logos/venture.svg" },
    { name: "Arduino C++", tag: "Hardware", logo: "/logos/agency.svg" },
    { name: "Supabase", tag: "PostgreSQL", logo: "/logos/company.svg" },
    { name: "Tailwind CSS", tag: "Styling", logo: "/logos/application.svg" },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-12 -rotate-[3deg] mt-16 mb-16 min-w-[120vw] -mx-[10vw] left-0 border-y-4 border-black shadow-[0_8px_0_0_rgba(0,0,0,1)]">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {[...stackItems, ...stackItems, ...stackItems, ...stackItems].map((item, index) => (
            <div key={index} className="inline-flex items-center gap-3 bg-gray-900 border-2 border-gray-700 px-5 py-2.5 rounded-xl">
              <img src={item.logo || "/placeholder.svg"} alt={item.name} className="h-6 w-auto invert" />
              <span className="text-white font-extrabold font-mono text-base tracking-wide">{item.name}</span>
              <span className="text-xs bg-[#2F81F7] text-white px-2 py-0.5 rounded-md font-bold">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
