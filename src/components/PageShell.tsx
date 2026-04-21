import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function PageShell({ eyebrow, title, subtitle, children }: PageShellProps) {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <Reveal>
        <div className="mb-12 text-center md:mb-16">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[oklch(0.8_0.18_200)]">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">{title}</span>
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </Reveal>
      {children}
    </main>
  );
}
