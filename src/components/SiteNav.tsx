import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-9 w-23 place-items-center rounded-lg bg-gradient-neon text-sm font-bold text-primary-foreground glow-purple">
            Mansoor.dev
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{
                className:
                  "text-foreground bg-white/5 ring-1 ring-[oklch(0.7_0.25_300/0.5)] shadow-[0_0_20px_oklch(0.7_0.25_300/0.25)]",
              }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="rounded-md px-3 py-1.5 text-sm transition-all"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-background/95 backdrop-blur md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="py-2 text-sm"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
