import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Award } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Muhammad Mansoor ul Haq" },
      {
        name: "description",
        content:
          "Certifications including AWS AI & ML Scholars, Machine Learning Specialization (DeepLearning.AI), IBM Python for Data Science, and more.",
      },
      { property: "og:title", content: "Certifications — Muhammad Mansoor ul Haq" },
      { property: "og:description", content: "Verified credentials in AI, ML, and cloud." },
    ],
  }),
  component: CertsPage,
});

const certs = [
  { title: "AWS AI & ML Scholars 2026", issuer: "Amazon Web Services" },
  { title: "Machine Learning Specialization", issuer: "DeepLearning.AI · Coursera" },
  { title: "AI For Everyone", issuer: "DeepLearning.AI · Coursera" },
  { title: "Python for Data Science", issuer: "IBM" },
  { title: "GitHub Copilot for Beginners", issuer: "GitHub" },
  { title: "ChatGPT for Market Research", issuer: "Coursera" },
  { title: "Deloitte Tech Job Simulation", issuer: "Forage" },
  { title: "AWS PartyRock — Building GenAI Apps", issuer: "AWS" },
  { title: "Introduction to FastAPI", issuer: "Online Course" },
];

function CertsPage() {
  return (
    <PageShell
      eyebrow="Credentials"
      title="Certifications"
      subtitle="A snapshot of formal learning across AI, ML, and cloud."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i * 60}>
            <div className="neon-border group flex h-full items-start gap-4 rounded-xl glass p-5 transition hover:-translate-y-1 hover:glow-cyan">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-neon text-primary-foreground">
                <Award size={18} />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-snug text-foreground">{c.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
