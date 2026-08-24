import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kosi Udeh — Full-Stack Developer & Systems Architect",
  description: "Portfolio of Udeh Kosisochukwu Emmanuel (Kosi). Computer Science Undergraduate (ABUAD), Full-Stack Developer, and Systems Architect specializing in multi-tenant platforms, autonomous AI agent runtimes, and embedded robotics.",
  keywords: ["Kosi Udeh", "Udeh Kosisochukwu Emmanuel", "Full-Stack Developer", "Systems Architect", "Next.js", "React 19", "Python FastAPI", "Arduino Robotics", "Nigeria", "ABUAD"],
  authors: [{ name: "Udeh Kosisochukwu Emmanuel" }],
  openGraph: {
    title: "Kosi Udeh — Full-Stack Developer & Systems Architect",
    description: "Explore production multi-tenant platforms, autonomous multi-agent operating systems, and embedded robotics.",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased overflow-x-hidden bg-[#FFFFFF]">
        {children}
      </body>
    </html>
  )
}
