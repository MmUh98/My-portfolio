import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Muhammad Mansoor ul Haq" },
      {
        name: "description",
        content: "Get in touch with Muhammad Mansoor ul Haq for collaborations and opportunities.",
      },
      { property: "og:title", content: "Contact — Muhammad Mansoor ul Haq" },
      { property: "og:description", content: "Let's build something with AI." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: "mansoor@example.com", href: "mailto:mansoor@example.com" },
  { icon: Phone, label: "Phone", value: "+92 323 0547226", href: "tel:+923230547226" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mansoor",
    href: "https://www.linkedin.com/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mansoor",
    href: "https://github.com/",
  },
  { icon: MapPin, label: "Location", value: "Islamabad, Pakistan", href: "#" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell
      eyebrow="Contact"
      title="Let's talk"
      subtitle="Open to internships, GenAI collaborations, and interesting problems."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="neon-border flex items-center gap-4 rounded-xl glass p-4 transition hover:-translate-y-0.5 hover:glow-cyan"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-neon text-primary-foreground">
                  <c.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="truncate text-sm text-foreground">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
          <Reveal delay={320}>
            <a
              href="/Muhammad_Mansoor_Resume.pdf"
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-neon px-5 py-3 text-sm font-semibold text-primary-foreground glow-purple transition hover:scale-[1.01]"
            >
              <Download size={16} /> Download Resume
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-3" delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="neon-border space-y-4 rounded-2xl glass p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-[oklch(0.7_0.25_300/0.7)] focus:ring-2 focus:ring-[oklch(0.7_0.25_300/0.3)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-[oklch(0.7_0.25_300/0.7)] focus:ring-2 focus:ring-[oklch(0.7_0.25_300/0.3)]"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={6}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-[oklch(0.7_0.25_300/0.7)] focus:ring-2 focus:ring-[oklch(0.7_0.25_300/0.3)]"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-neon px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-purple transition hover:scale-[1.02]"
            >
              <Send size={16} /> Send message
            </button>
            {sent && (
              <p className="font-mono text-xs text-[oklch(0.8_0.18_200)]">
                ✓ Thanks! I'll get back to you soon.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </PageShell>
  );
}
