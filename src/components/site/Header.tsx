import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FEATURED_SERVICES } from "@/data/services";
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
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-hero font-display text-sm font-extrabold text-white shadow-soft">
            SC
          </span>
          <div>
            <div className="font-display text-lg font-extrabold text-navy">
              {SITE.name}
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Appliance Repair in Pune
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-brand"
                    : "text-foreground/80 hover:text-brand"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={telLink}
            className="hidden rounded-full bg-gradient-cta px-4 py-2 text-sm font-semibold text-cta-foreground shadow-soft sm:inline-flex sm:items-center sm:gap-2"
          >
            <Phone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          <button
            type="button"
            className="rounded-md p-2 text-navy md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-5 px-4 py-5">
            <div className="flex flex-col gap-3">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-foreground/85"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Popular services
              </p>
              <div className="mt-3 grid gap-2">
                {FEATURED_SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <a
              href={telLink}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-cta px-4 py-3 text-sm font-semibold text-cta-foreground"
            >
              <Phone className="h-4 w-4" />
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
