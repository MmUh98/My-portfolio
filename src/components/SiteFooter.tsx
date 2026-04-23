import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-background/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Mansoor ul Haq.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:mansoor@example.com"
            className="rounded-md p-2 text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
