import { Link, NavLink } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE, telLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-lg text-navy">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-hero text-brand-foreground shadow-soft">SC</span>
          <span>skycoolingpune</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-brand ${isActive ? "text-brand" : "text-foreground/80"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={telLink}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-cta px-4 py-2 text-sm font-semibold text-cta-foreground shadow-soft hover:opacity-95 transition"
          >
            <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
          </a>
          <button
            className="md:hidden p-2 rounded-md text-navy"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-semibold text-foreground/85"
              >
                {n.label}
              </Link>
            ))}
            <a href={telLink} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-4 py-3 text-sm font-semibold text-cta-foreground">
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}