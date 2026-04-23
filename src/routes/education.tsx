import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Muhammad Mansoor ul Haq" },
      {
        name: "description",
        content:
          "Education timeline: BS AI at Air University, Pre-Engineering and Matric at Military College Jhelum.",
      },
      { property: "og:title", content: "Education — Muhammad Mansoor ul Haq" },
      { property: "og:description", content: "Academic journey and activities." },
    ],
  }),
  component: EducationPage,
});

const items = [
  {
    period: "2023 – 2027",
    school: "Air University, Islamabad",
    degree: "BS Artificial Intelligence",
    notes: "Focus on GenAI, LLMs, deep learning, and agentic systems.",
  },
  {
    period: "2018 – 2020",
    school: "Military College Jhelum",
    degree: "Pre-Engineering · Grade A",
    
  },
  {
    period: "2016 – 2018",
    school: "Military College Jhelum",
    degree: "Matriculation · Grade A",
    notes: "House Appointee",
  },
];

function EducationPage() {
  return (
    <PageShell eyebrow="Education" title="Academic Journey" subtitle="Foundations that shaped the way I build.">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[oklch(0.7_0.25_300)] via-[oklch(0.8_0.18_200)] to-transparent" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <Reveal key={it.school + it.period} delay={i * 100}>
              <div className="relative pl-12">
                <div className="absolute left-2 top-3 grid h-4 w-4 place-items-center rounded-full bg-gradient-neon glow-purple">
                  <GraduationCap size={10} className="text-primary-foreground" />
                </div>
                <div className="neon-border rounded-xl glass p-6">
                  <p className="font-mono text-xs text-[oklch(0.8_0.18_200)]">{it.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{it.degree}</h3>
                  <p className="text-sm text-gradient font-medium">{it.school}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{it.notes}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
