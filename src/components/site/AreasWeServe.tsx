import { MapPin } from "lucide-react";
import { AREAS_WE_SERVE } from "@/data/locations";

export function AreasWeServe() {
  return (
    <section className="rounded-[2rem] bg-card p-8 shadow-soft ring-1 ring-border">
      <div className="max-w-3xl">
        <p className="text-sm font-bold tracking-[0.2em] text-brand">
          AREAS WE SERVE
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-navy">
          Fast appliance repair coverage across Pune and nearby areas
        </h2>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          We serve homes, offices, and commercial cooling clients in core Pune
          and surrounding neighbourhoods with same-day support in many
          serviceable pockets.
        </p>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {AREAS_WE_SERVE.map((area) => (
          <div
            key={area}
            className="flex items-center gap-3 rounded-2xl bg-brand-soft/60 px-4 py-3 text-sm font-semibold text-navy"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand shadow-sm">
              <MapPin className="h-4 w-4" />
            </span>
            <span>{area}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
