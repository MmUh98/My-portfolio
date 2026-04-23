import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Muhammad Mansoor ul Haq" },
      {
        name: "description",
        content: "Featured AI and full-stack projects including a GenAI NL-to-SQL Assistant.",
      },
      { property: "og:title", content: "Projects — Muhammad Mansoor ul Haq" },
      { property: "og:description", content: "GenAI and full-stack project showcase." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    featured: true,
    title: "NL-to-SQL Assistant",
    description:
      "Conversational analytics tool turning plain-English questions into SQL queries over national statistics datasets. Built with Azure Foundry, LangGraph agent flows, and LangSmith tracing.",
    tags: ["Azure Foundry", "LangGraph", "LangSmith", "Node.js", "TypeScript", "Next.js"],
    links: [{ label: "Git Repository", href: "https://github.com/MmUh98/nl2sql-agent.git", icon: ExternalLink }],
  },
  {
    title: "Portfolio v1",
    description:
      "This site — modern dark/neon portfolio built with TanStack Start, React 19, Tailwind v4, and lots of glassmorphism.",
    tags: ["Lovable", "TanStack", "React", "Tailwind"],
    links: [{ label: "Live", href: "/", icon: ExternalLink }],
  },
];

function ProjectsPage() {
  return (
    <PageShell eyebrow="Projects" title="Selected Work" subtitle="A mix of GenAI builds and full-stack experiments.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div
              className={`neon-border group relative h-full overflow-hidden rounded-xl glass p-6 transition hover:-translate-y-1 ${
                p.featured ? "md:col-span-2 hover:glow-purple" : "hover:glow-cyan"
              }`}
            >
              {p.featured && (
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-neon px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                  <Sparkles size={10} /> Featured
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-foreground/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="inline-flex items-center gap-1.5 text-sm text-[oklch(0.8_0.18_200)] hover:text-foreground"
                  >
                    <l.icon size={14} /> {l.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
