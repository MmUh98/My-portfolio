
# Muhammad Mansoor ul Haq — Modern Tech Portfolio

A dark, neon-gradient portfolio site with smooth scroll animations and an animated hero — built as a multi-route TanStack site you can publish via Lovable or deploy to Vercel/Netlify from GitHub. (Note: TanStack Start isn't compatible with GitHub Pages directly, since Pages only hosts static files.)

## Look & Feel
- **Theme**: Deep black background (#0a0a0f), purple→cyan neon gradients, glowing accent borders, glassmorphic cards
- **Typography**: Modern sans (Inter) + monospace accent (JetBrains Mono) for code-style touches
- **Animated background**: Subtle gradient mesh + floating particles in hero
- **Motion**: Fade/slide-in on scroll for every section, hover glow on cards, gradient text shimmer

## Pages / Routes
- `/` — Home (hero + brief highlights)
- `/about` — Full bio
- `/skills` — Skills grid
- `/experience` — Timeline
- `/projects` — Project showcase
- `/certifications` — Cert grid
- `/education` — Education timeline
- `/contact` — Contact form + socials

Sticky top nav with active-link glow; each route gets its own SEO meta.

## Section Details

**Hero (/)**
- Monogram avatar "MM" with neon ring placeholder (swappable later)
- Name + animated typewriter rotating: "AI Developer" → "ML Engineer" → "GenAI Builder" → "Python Developer"
- Tagline + two CTAs: "View Projects" + "Download Resume" (PDF)
- Animated gradient mesh background

**About**
- Short bio: BS AI student at Air University (2023–2027), passionate about GenAI, LLMs, agentic systems
- Quick-stat cards: 2 internships, 10+ certifications, 3 languages

**Skills**
- Categorized grid with icon chips: Languages (Python), AI/ML (LLMs, Deep Learning, LangChain, LangGraph), Backend (FastAPI, Streamlit, Node.js, TypeScript, Next.js), Cloud (AWS, Azure), Tools (Git, Docker, Cursor, GitHub Copilot)

**Experience** (vertical timeline with neon connector)
- Generative AI Developer — Pakistan Bureau of Statistics (Jul–Aug 2025): NL→SQL Assistant w/ Azure GPT-4.1, LangGraph, LangSmith
- Web Developer — Digital Empowerment Network (Jul–Sep 2025, Remote)

**Projects**
- Featured: NL-to-SQL Assistant (full description from PBS work, tech stack badges)
- 2–3 placeholder cards you can edit later (each with image, description, tags, links)

**Certifications** (grid of glassmorphic cards w/ provider logo & verify link)
- AWS AI & ML Scholars 2026, Machine Learning Specialization (DeepLearning.AI), AI For Everyone, Python for Data Science (IBM), GitHub Copilot for Beginners, ChatGPT for Market Research, Deloitte Tech Job Simulation (Forage), AWS PartyRock badges, FastAPI Intro

**Education** (timeline)
- Air University — BS AI (2023–2027)
- Military College Jhelum — Pre-Engineering, Grade A (2018–2020)
- Military College Jhelum — Matric, Grade A (2016–2018)
- Activities: House Appointee, Basket House team, 2nd in 9th annual exam

**Contact**
- Form (name/email/message) + direct cards: email, phone (+92 323 0547226), LinkedIn, address (Islamabad)
- Social icons in footer

## Extras
- Resume PDF placed in `/public` with one-click download button in hero & contact
- Smooth-scroll, responsive (mobile-first), accessible focus states
- Footer with copyright + socials

## Deployment Notes
After implementation I'll explain how to publish via Lovable (one-click) or push to GitHub → deploy on Vercel/Netlify. If you specifically need GitHub Pages, that would require rebuilding on a different stack — let me know and we can discuss.
