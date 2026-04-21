import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Briefcase, Award, Languages } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Muhammad Mansoor ul Haq" },
      {
        name: "description",
        content:
          "About Muhammad Mansoor ul Haq — BS AI student at Air University with passion for GenAI, LLMs, and agentic systems.",
      },
      { property: "og:title", content: "About — Muhammad Mansoor ul Haq" },
      {
        property: "og:description",
        content: "Get to know Mansoor — AI student, GenAI developer, lifelong learner.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { icon: Briefcase, label: "Internships", value: "2+" },
  { icon: Award, label: "Certifications", value: "10+" },
  { icon: Languages, label: "Languages", value: "3" },
];

function AboutPage() {
  return (
    <PageShell eyebrow="About" title="Hi, I'm Mansoor" subtitle="Curious mind. AI builder. Lifelong learner.">
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="rounded-2xl glass p-8">
            <p className="text-base leading-relaxed text-foreground/90">
              I'm a Bachelor of Science in Artificial Intelligence student at{" "}
              <span className="text-gradient font-semibold">Air University, Islamabad</span>{" "}
              (2023–2027). My focus sits at the intersection of{" "}
              <span className="text-foreground">Generative AI, LLMs, and agentic systems</span>.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I love taking research-grade ideas and shipping them as production tools — turning
              prompts into pipelines and pipelines into products. Recently I built a Natural
              Language → SQL assistant for the Pakistan Bureau of Statistics using Azure GPT-4.1,
              LangGraph, and LangSmith.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring new AI papers, hacking on side
              projects, or playing basketball.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4 md:col-span-2">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className="neon-border flex items-center gap-4 rounded-xl glass p-5 transition hover:glow-cyan">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-neon text-primary-foreground">
                  <s.icon size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </p>
                  <p className="text-2xl font-bold text-gradient">{s.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
