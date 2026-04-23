import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { Typewriter } from "@/components/Typewriter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Mansoor ul Haq — GenAI & ML Developer" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Mansoor ul Haq — GenAI / ML developer building LLM-powered apps with Python, LangChain, FastAPI and modern AI tooling.",
      },
      { property: "og:title", content: "Muhammad Mansoor ul Haq — GenAI & ML Developer" },
      {
        property: "og:description",
        content: "Modern AI portfolio: LLMs, agents, FastAPI, and full-stack GenAI projects.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-mesh opacity-80" />
        <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl flex-col items-center justify-center px-5 py-20 text-center">
          <Reveal>
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-neon blur-lg opacity-70 animate-float" />
                <div className="relative grid h-28 w-28 place-items-center rounded-full bg-background ring-2 ring-[oklch(0.7_0.25_300/0.6)]">
                  <img
                    src="/mypic.png"
                    alt="Muhammad Mansoor ul Haq"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-muted-foreground">
              <Sparkles size={12} className="text-[oklch(0.8_0.18_200)]" />
              Available for opportunities
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-balance text-5xl font-bold tracking-tight md:text-7xl">
              Muhammad <span className="text-gradient">Mansoor ul Haq</span>
            </h1>
          </Reveal>

          <Reveal delay={280}>
            <h2 className="mt-5 font-mono text-lg text-muted-foreground md:text-2xl">
              I build{" "}
              <Typewriter
                className="text-gradient font-semibold"
                words={["GenAI Apps", "LLM Agents", "ML Pipelines", "Python APIs", "AI Products"]}
              />
            </h2>
          </Reveal>

          <Reveal delay={360}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-muted-foreground md:text-lg">
              BS Artificial Intelligence student at Air University, building production GenAI
              systems with LangChain, LangGraph, FastAPI, and modern LLM tooling.
            </p>
          </Reveal>

          <Reveal delay={460}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-neon px-5 py-3 text-sm font-semibold text-primary-foreground glow-purple transition hover:scale-[1.02]"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href="/Muhammad_Mansoor_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white/10"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              k: "Focus",
              v: "Generative AI & LLM-powered applications",
              tag: "AI",
            },
            {
              k: "Stack",
              v: "Python · LangChain · LangGraph · FastAPI · Azure",
              tag: "TECH",
            },
            {
              k: "Currently",
              v: "BS AI @ Air University · Open to work / Collaborations",
              tag: "NOW",
            },
          ].map((item, i) => (
            <Reveal key={item.k} delay={i * 120}>
              <div className="group neon-border relative h-full rounded-xl glass p-6 transition hover:-translate-y-1 hover:glow-purple">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[oklch(0.8_0.18_200)]">
                  {item.tag}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.k}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
