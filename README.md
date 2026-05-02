# FORGECORE Technologies — Enterprise Infrastructure Platform

A dense, information-heavy corporate website built for a fictional enterprise technology company specializing in distributed computing infrastructure, AI systems, and mission-critical platforms.

## Design Philosophy

- **Information over decoration** — No empty space, every section contains meaningful content
- **Industrial aesthetic** — Brutalist design, grid-based layouts, sharp edges
- **NO BLUE** — Color palette uses graphite, ivory, industrial gray, warm stone with burnt orange, oxide red, muted gold, and dark olive accents
- **Editorial typography** — Feels like technical documentation or whitepapers
- **Authority over friendliness** — Serious, precise, engineering-first tone

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS** (custom industrial color system)
- **Framer Motion** (minimal, purposeful animations)

## Features

- ✅ Fully functional dark/light theme toggle with localStorage persistence
- ✅ No flash on reload
- ✅ Fully responsive across all devices
- ✅ 1 Hero + 7 long-form content pages
- ✅ Industrial/brutalist design system
- ✅ Information-dense layout
- ✅ Custom color palette (no blue)
- ✅ SEO-optimized structure
- ✅ Production-ready code

## Pages

1. **Hero** — Editorial-style landing with company metrics
2. **Overview** — Corporate structure, operations, principles
3. **Offerings** — 6 enterprise infrastructure solutions
4. **Systems** — Technical architecture and design philosophy
5. **Applications** — 6 industry-specific implementations
6. **Research** — R&D, engineering standards, AI ethics
7. **Operations** — People, hiring, performance culture
8. **Contact** — Enterprise inquiry form, offices, legal

## Getting Started

### Install Dependencies

\`\`\`bash
npm install
\`\`\`

### Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Color System

### Base Palette
- **Graphite** — Deep charcoal (50-950 scale)
- **Ivory** — Soft off-white (50-900 scale)
- **Industrial** — Cool gray (50-950 scale)
- **Stone** — Warm neutral (50-900 scale)

### Accent Palette
- **Oxide** — Burnt red (primary accent)
- **Burnt** — Burnt orange
- **Gold** — Muted gold
- **Olive** — Dark olive

## Typography

- **Headings** — Lora (serif)
- **Body** — Inter (sans-serif)
- **Code/Mono** — JetBrains Mono

## Theme Toggle

Located in header navigation. Persists across sessions via localStorage. Smooth color transitions, no flash on page load.

## Project Structure

\`\`\`
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Homepage with hero
│   ├── overview/
│   ├── offerings/
│   ├── systems/
│   ├── applications/
│   ├── research/
│   ├── operations/
│   └── contact/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
└── contexts/
    └── ThemeContext.tsx
\`\`\`

## Brand Identity

**Company Name:** FORGECORE Technologies  
**Tagline:** Distributed Infrastructure for Enterprise Computing  
**Established:** 2019  
**Logo:** Brutalist grid geometry with oxide red accent

## License

This is a fictional company website created for demonstration purposes.

---

**Built by GitHub Copilot** — January 2026
