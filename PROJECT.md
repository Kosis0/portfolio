# Project: Kosi Udeh Portfolio — Paperfolio Next.js Tailoring

## Architecture
- **Framework & Runtime**: Next.js 15.5.9 (App Router), React 19.1.0, Node.js v24.19.0.
- **Styling**: Tailwind CSS v4.1.9 (`@tailwindcss/postcss`), Neo-brutalist papercraft design system (heavy 4px black borders, 8px solid black drop shadows, vibrant color accents `#FF6B7A`, `#2F81F7`, `#FFC224`, `#6366F1`, Google Font `Onest`).
- **Data Flow**: Centralized typed data layer (`data/portfolio-data.ts`) feeding React 19 Server/Client Components.
- **Visual Asset Architecture**: 100% vector SVG and illustrated cartoon assets (`public/images/`, `public/logos/`). Strictly ZERO personal photo dependencies.
- **Package Management**: `pnpm` (lockfile `pnpm-lock.yaml`) with `npm` fallback.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Template Extraction | Extract `paperfolio-portfolio-template.zip` to `C:\Users\kosiu\Desktop\portfolio` and `C:\Users\kosiu\Desktop\Work\portfolio` | M1 | Survey / ORIGINAL_REQUEST §R1 |
| 2 | Dependency Installation | Install dependencies via `pnpm install` and verify build scripts | M1 | Survey / ORIGINAL_REQUEST §R1 |
| 3 | Root Layout & SEO Metadata | Set metadata: "Kosi Udeh — Full-Stack Developer & Systems Architect \| KOSI.DEV", OpenGraph tags, Onest font | M2 | Survey / ORIGINAL_REQUEST §R2 |
| 4 | Brand Navigation Header | Neo-brutalist navbar with `KOSI.DEV` brand, active status dot, smooth scroll links, WhatsApp CTA | M2 | Survey / ORIGINAL_REQUEST §R2 |
| 5 | Hero Section Customization | Headline: Kosi Udeh, Full-Stack Developer & Systems Architect (ABUAD), WhatsApp & Portfolio CTAs, illustrated avatar | M2 | Survey / ORIGINAL_REQUEST §R2 |
| 6 | Tech Stack Logo Marquee | Tilted marquee banner showcasing React 19, Next.js, FastAPI, TypeScript, Python, Arduino C++, Supabase, Stripe, MCP | M2 | Survey / ORIGINAL_REQUEST §R2 |
| 7 | Engineering Capabilities Cards | 5 core domains: Full-Stack Web, Systems Architecture & APIs, Multi-Agent AI Systems, Multi-Tenant SaaS, Embedded Robotics + Get in Touch card | M2 | Survey / ORIGINAL_REQUEST §R2 |
| 8 | About Section & Bio | Authentic ABUAD Computer Science bio, systems architecture focus, 6+ production architectures badge, about-me.svg | M2 | Survey / ORIGINAL_REQUEST §R2 |
| 9 | 6 Flagship Project Showcases | Agentic OS v2, Nexus ERP, Mercato, Secure Cloud API, Autonomous Robotics, Local Service Landing with deep architecture summaries | M2 | Survey / ORIGINAL_REQUEST §R2 |
| 10 | Project External Repo Links | Verified external GitHub links (`target="_blank" rel="noopener noreferrer"`) for all 6 projects | M2 | Survey / ORIGINAL_REQUEST §R2 |
| 11 | Experience & Academic Timeline | Timeline: ABUAD CS degree, Open Source Multi-Agent Architect, Enterprise SaaS, Embedded Systems; Resume CTA | M2 | Survey / ORIGINAL_REQUEST §R2 |
| 12 | Testimonials / Endorsements | Peer and architectural endorsements on code quality, strict typing, and system reliability with illustrated avatar | M2 | Survey / ORIGINAL_REQUEST §R2 |
| 13 | Engineering Journal Articles | 3 Technical articles: Multi-Agent OS with FastAPI/React 19, Multi-Tenant Isolation, Microcontroller UART Telemetry | M2 | Survey / ORIGINAL_REQUEST §R2 |
| 14 | Direct Contact Footer | Footer branding `KOSI.DEV`, direct WhatsApp (+2349117950895), Phone (+2347071070282), Email (kosiudeh627@gmail.com), GitHub (Kosis0) | M2 | Survey / ORIGINAL_REQUEST §R2 |
| 15 | Neo-Brutalist Styling & Tokens | Solid black borders, sharp unblurred drop shadows, high contrast colors, rounded pill geometries | M3 | Survey / ORIGINAL_REQUEST §R2 |
| 16 | Zero Personal Photo Aesthetic | 100% vector SVG and illustrated cartoon assets (`public/images/`, `public/logos/`) without real photographs | M3 | Survey / ORIGINAL_REQUEST §R2 |
| 17 | Responsive Layouts & Polish | Mobile navigation, responsive flex/grid wrappers, accessible tap targets (48px+), zero horizontal overflow | M3 | Survey / ORIGINAL_REQUEST §R3 |
| 18 | Production Build Verification | Zero TypeScript compilation errors, zero lint warnings, `pnpm run build` / `npm run build` succeeds | M4 | Survey / ORIGINAL_REQUEST §R3 |
| 19 | Link & Asset Integrity Verification | Zero broken internal anchors or external URLs, zero missing asset 404s, zero placeholder text leaks | M4 | Survey / ORIGINAL_REQUEST §R3 |
| 20 | Adversarial & Forensic Verification | Automated verification across test tiers 1-5 and forensic audit of code authenticity | M4 | Survey / ORIGINAL_REQUEST §R3 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Template Extraction & Dependencies Setup | Extract zip archive to both directories, run pnpm install, verify baseline files | none | PLANNED |
| M2 | Data Layer & Content Customization | Create `data/portfolio-data.ts` and customize all components (layout, nav, hero, marquee, services, about, portfolio, experience, testimonials, articles, footer) with Kosi's authentic data | M1 | PLANNED |
| M3 | Visual Styling, Tokens & Responsiveness | Verify neo-brutalist styling tokens, zero personal photo constraint, mobile navigation, and layout responsiveness | M2 | PLANNED |
| M4 | E2E Testing, Build Verification & Audit | Execute comprehensive test tiers 1-5, verify `pnpm run build` exits 0 with zero TS errors, forensic audit | M3 | PLANNED |

## Interface Contracts
### Data Layer: `data/portfolio-data.ts`
```typescript
export interface ProjectItem {
  id: string
  title: string
  category: string
  description: string
  architecture: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  image: string
  featured: boolean
}

export interface ContactInfo {
  name: string
  legalName: string
  branding: string
  headline: string
  bio: string
  academic: string
  email: string
  phone: string
  whatsapp: string
  whatsappUrl: string
  github: string
  githubUrl: string
  location: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  iconName: string
  color: string
}

export interface ExperienceItem {
  id: string
  period: string
  role: string
  organization: string
  description: string
  skills: string[]
}

export interface ArticleItem {
  id: string
  title: string
  date: string
  readTime: string
  category: string
  summary: string
  author: string
  image: string
}
```

## Code Layout
- `app/layout.tsx`: Root layout, fonts, metadata, OpenGraph tags.
- `app/page.tsx`: Single-page composition of all portfolio sections.
- `app/globals.css`: Tailwind v4 theme, CSS variables, marquee animation.
- `data/portfolio-data.ts`: Centralized typed data source for Kosi Udeh.
- `components/navigation.tsx`: Header navbar with KOSI.DEV branding, links, status dot.
- `components/hero-section.tsx`: Hero introduction, CTA buttons, illustrated avatar.
- `components/logo-marquee.tsx`: Infinite scrolling tech stack marquee.
- `components/services-section.tsx`: 5 core engineering domain cards + Get in touch card.
- `components/about-section.tsx`: Biographical narrative, ABUAD education, engineering stats.
- `components/portfolio-section.tsx`: 6 featured projects with deep architecture & repo links.
- `components/experience-section.tsx`: Career and academic milestones timeline.
- `components/testimonials-section.tsx`: Peer & architectural recommendations.
- `components/articles-section.tsx`: Technical articles and engineering writeups.
- `components/footer.tsx`: Direct contact links (WhatsApp, phone, email, GitHub), copyright.
- `public/images/`, `public/logos/`: Static SVG vectors and cartoon illustrations.
