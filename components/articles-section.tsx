import { Pencil, BookOpen, Clock, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ArticlesSection() {
  const articles = [
    {
      title: "Event-Sourced Python Micro-Kernels for Multi-Agent OS Runtimes",
      category: "Systems Architecture",
      summary: "Designing deterministic wavefront DAG scheduling, 4-tier vector memory hierarchies, and HMAC-signed least-agency human-in-the-loop security governance.",
      readTime: "6 min read",
      date: "Feb 14, 2026",
      author: "Kosi Udeh",
      image: "/images/article-design-tools.png",
      url: "https://github.com/Kosis0",
    },
    {
      title: "Dynamic Tenant Partitioning in Next.js 16 & Supabase PostgreSQL",
      category: "Multi-Tenant Cloud",
      summary: "Architecting zero-bleed multi-tenant data schemas with subrouting (/[tenant]), unified auth tokens, and dual-currency Stripe billing.",
      readTime: "5 min read",
      date: "Jan 22, 2026",
      author: "Kosi Udeh",
      image: "/images/article-font-sizes.png",
      url: "https://github.com/Kosis0/multi-tenant-ecommerce",
    },
    {
      title: "Low-Latency UART Telemetry & Obstacle Avoidance on Microcontrollers",
      category: "Embedded Robotics",
      summary: "Interfacing ultrasonic sensor arrays, PWM motor drivers, and Python serial streams for real-time hardware telemetry logging.",
      readTime: "4 min read",
      date: "Dec 18, 2025",
      author: "Kosi Udeh",
      image: "/images/article-exercises.png",
      url: "https://github.com/Kosis0",
    },
  ]

  const featured = articles[0]
  const sideArticles = articles.slice(1)

  return (
    <section id="articles" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black">
              Engineering <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Journal & Insights</span>
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Technical architectural writeups on multi-agent execution, cloud multi-tenancy, and embedded microcontrollers.
            </p>
          </div>
          <a
            href="https://github.com/Kosis0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-[3px] border-black rounded-xl px-5 py-3.5 hover:bg-gray-100 bg-white font-bold text-sm md:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <BookOpen className="w-4 h-4" />
            GitHub Research
          </a>
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-8 mb-16">
          {/* Large featured article card */}
          <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="bg-[#EDEDED] relative min-h-[220px] md:min-h-[280px] m-3 md:m-4 rounded-2xl overflow-hidden border-2 border-black">
                <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg z-10">
                  {featured.category}
                </span>
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-extrabold mb-3 leading-snug text-black">
                  {featured.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-6 font-medium">
                  {featured.summary}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 pt-0 flex items-center justify-between border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FDB927] border-2 border-black rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png"
                    alt="Kosi Udeh"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm text-black">{featured.author}</div>
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <span>{featured.date}</span>
                    <span>•</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </div>

              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm text-[#2F81F7] hover:underline flex items-center gap-1"
              >
                Read Paper <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right side - Two smaller article cards */}
          <div className="space-y-6 flex flex-col justify-between">
            {sideArticles.map((article, idx) => (
              <div
                key={idx}
                className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-md">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {article.date} • {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3 leading-snug text-black">
                    {article.title}
                  </h3>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {article.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-xs font-bold text-gray-600">By {article.author}</span>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xs md:text-sm text-[#2F81F7] hover:underline flex items-center gap-1"
                  >
                    View Code & Architecture <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
