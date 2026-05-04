import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceItem } from "@/data/services";

export function ServiceCard({
  service,
  compact = false,
}: {
  service: ServiceItem;
  compact?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-[2rem] bg-card shadow-soft ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div
        className={
          compact
            ? "relative h-44 overflow-hidden"
            : "relative h-56 overflow-hidden"
        }
      >
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-brand shadow-soft">
            <service.icon className="h-5 w-5" />
          </div>
          <span className="rounded-full bg-navy/85 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-white backdrop-blur">
            {service.badge}
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
          {service.category.replace("-", " ")}
        </p>
        <h3 className="mt-3 text-2xl font-extrabold text-navy">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {service.excerpt}
        </p>
        <ul className="mt-5 space-y-2">
          {service.problems.slice(0, compact ? 3 : 4).map((problem) => (
            <li
              key={problem}
              className="flex items-start gap-2 text-sm text-foreground/85"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>{problem}</span>
            </li>
          ))}
        </ul>
        <Link
          to={`/services/${service.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3"
        >
          Explore service details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
