import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Muhammad Mansoor ul Haq" },
      {
        name: "description",
        content:
          "Work experience including Generative AI internship at Pakistan Bureau of Statistics and Web Development at Digital Empowerment Network.",
      },
      { property: "og:title", content: "Experience — Muhammad Mansoor ul Haq" },
      {
        property: "og:description",
        content: "Internships in GenAI and Web Development.",
      },
    ],
  }),
  component: ExperiencePage,
});

const jobs = [
  {
    role: "Generative AI Developer (Intern)",
    company: "Pakistan Bureau of Statistics",
    period: "Jul – Aug 2025 · Islamabad",
    bullets: [
      "Worked on developing a Natural Language to SQL Assistant using Azure GPT-4.1, LangGraph, and LangSmith to enable plain English queries on SQL Server databases.",
      "Built and optimized the backend with Node.js, TypeScript, and Next.js, including features like CSV/Excel export, HTML table rendering, and basic visualizations. ",
      "Gained hands-on experience in Generative AI workflows, prompt engineering, and database integration.",
    ],
    tags: ["Python", "Azure Foundry", "LangGraph", "LangSmith", "React", "TypeScript", "Next.js"],
  },
  {
    role: "Web Developer (Intern)",
    company: "Digital Empowerment Network",
    period: "Jul – Sep 2025 · Remote",
    bullets: [
      "Developed responsive web interfaces for digital literacy initiatives.",
      "Collaborated remotely with a distributed team using modern frontend tooling.",
    ],
    tags: ["TypeScript", "React", "Tailwind"],
  },
];

function ExperiencePage() {
  return (
    <PageShell eyebrow="Experience" title="Work" subtitle="Where I've shipped real things.">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[oklch(0.7_0.25_300)] via-[oklch(0.8_0.18_200)] to-transparent md:left-1/2" />
        <div className="space-y-10">
          {jobs.map((j, i) => (
            <Reveal key={j.role} delay={i * 100}>
              <div className="relative pl-12 md:pl-0">
                <div className="absolute left-2 top-3 h-4 w-4 rounded-full bg-gradient-neon glow-purple md:left-1/2 md:-translate-x-1/2" />
                <div
                  className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"}`}
                >
                  <div className="neon-border rounded-xl glass p-6">
                    <p className="font-mono text-xs text-[oklch(0.8_0.18_200)]">{j.period}</p>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">{j.role}</h3>
                    <p className="text-sm text-gradient font-medium">{j.company}</p>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                      {j.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {j.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-foreground/75"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
