import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Code2, Brain, Server, Cloud, Wrench } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Muhammad Mansoor ul Haq" },
      {
        name: "description",
        content:
          "Skills: Python, LLMs, LangChain, LangGraph, FastAPI, Streamlit, AWS, Azure, Docker, Git.",
      },
      { property: "og:title", content: "Skills — Muhammad Mansoor ul Haq" },
      {
        property: "og:description",
        content: "Tech stack across AI/ML, backend, and cloud.",
      },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    icon: Brain,
    title: "AI / ML",
    items: ["LLMs", "Deep Learning", "LangChain", "LangGraph", "LangSmith", "Prompt Engineering"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["FastAPI", "Streamlit", "Node.js", "Next.js", "REST APIs"],
  },
  {
    icon: Cloud,
    title: "Cloud",
    items: ["AWS", "Azure Foundry"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "Docker", "Cursor", "GitHub Copilot", "Linux"],
  },
];

function SkillsPage() {
  return (
    <PageShell eyebrow="Skills" title="Tech Stack" subtitle="The toolkit I use to ship AI products.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 80}>
            <div className="neon-border h-full rounded-xl glass p-6 transition hover:-translate-y-1 hover:glow-purple">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-neon text-primary-foreground">
                  <g.icon size={18} />
                </div>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-foreground/80 transition hover:border-[oklch(0.7_0.25_300/0.6)] hover:text-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
