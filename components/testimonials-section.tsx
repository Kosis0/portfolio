import Image from "next/image"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Kosi's architectural clarity on the Agentic OS and multi-tenant database partitioning demonstrates world-class systems thinking. Highly recommended for complex engineering challenges.",
      author: "ABUAD CS Faculty & Mentors",
      role: "Department of Computer Science, Afe Babalola University",
      avatar: "/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
      rating: 5,
    },
    {
      quote: "The Nexus ERP implementation was delivered with exceptional precision, real-time payroll calculation, and zero UI bloat. Clean, modular, and flawlessly type-safe.",
      author: "Enterprise Project Collaborator",
      role: "Full-Stack Engineering Peer",
      avatar: "/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="bg-[#FAF9F6] py-16 md:py-24 border-y-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-black">
              Endorsements & <br />
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Engineering Feedback</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
              Feedback from academic mentors, software engineering peers, and enterprise project collaborators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#FDB927] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed font-medium italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-200">
                  <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-[#FDB927] flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-extrabold text-base text-black">{t.author}</div>
                    <div className="text-xs font-bold text-gray-600">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
