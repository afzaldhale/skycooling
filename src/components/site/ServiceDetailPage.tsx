import {
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES, SERVICE_MAP, type ServiceItem } from "@/data/services";
import { telLink, whatsappLink } from "@/lib/site";
import { CTASection } from "@/components/site/CTASection";
import { FAQSection } from "@/components/site/FAQSection";
import { AreasWeServe } from "@/components/site/AreasWeServe";
import { BookingForm } from "@/components/site/BookingForm";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ServiceCard } from "@/components/site/ServiceCard";

const trustBadges = [
  "Same Day Service Available",
  "Trusted Technicians",
  "Affordable Pricing",
  "Service Warranty",
];

export function ServiceDetailPage({ service }: { service: ServiceItem }) {
  const relatedServices = service.related
    .map((slug) => SERVICE_MAP[slug])
    .filter(Boolean)
    .slice(0, 4);

  return (
    <>
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: service.shortTitle },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-white ring-1 ring-white/15">
                <service.icon className="h-3.5 w-3.5" />
                {service.badge}
              </div>
              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">
                {service.h1}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/85">
                {service.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={telLink}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3 font-semibold text-cta-foreground shadow-soft"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={whatsappLink(
                    `Hi, I need ${service.title.toLowerCase()} in Pune. Please help me book a technician.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Now
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy"
                >
                  Book Service
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-white/90 ring-1 ring-white/15"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-white/10 p-3 shadow-glow ring-1 ring-white/15">
              <img
                src={service.image}
                alt={service.imageAlt}
                loading="eager"
                width={1280}
                height={960}
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="rounded-[2rem] bg-card p-8 shadow-soft ring-1 ring-border">
            <p className="text-sm font-bold tracking-[0.2em] text-brand">
              SERVICE OVERVIEW
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy">
              {service.heroTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {service.excerpt} We offer doorstep diagnosis, transparent
              pricing, and responsive support for urgent appliance repair
              service near you.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3 rounded-2xl bg-brand-soft/50 p-4 text-sm text-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{problem}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-navy p-8 text-white shadow-soft">
            <p className="text-sm font-bold tracking-[0.2em] text-cta">
              WHY CUSTOMERS CALL US
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Trusted local support in Pune
            </h2>
            <ul className="mt-6 space-y-4">
              {service.whyChooseUs.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-3 text-sm leading-7 text-white/85"
                >
                  <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-cta" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[1.5rem] bg-white/8 p-5 ring-1 ring-white/10">
              <div className="flex items-start gap-3">
                <Wrench className="mt-1 h-5 w-5 shrink-0 text-cta" />
                <div>
                  <p className="font-semibold">
                    Doorstep service with clear communication
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/75">
                    We explain the issue, quote the repair clearly, and focus on
                    practical solutions for households and commercial clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <CTASection
            title={`Need ${service.shortTitle.toLowerCase()} today?`}
            description="Speak with our team for urgent troubleshooting, same-day slot checks, and a quick doorstep service booking."
            serviceTitle={service.title}
          />

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-card p-8 shadow-soft ring-1 ring-border">
              <p className="text-sm font-bold tracking-[0.2em] text-brand">
                SERVICE PROCESS
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy">
                How we handle {service.shortTitle.toLowerCase()}
              </h2>
              <div className="mt-8 space-y-4">
                {service.process.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-border bg-background p-5"
                  >
                    <div className="text-xs font-bold tracking-[0.2em] text-brand">
                      STEP {index + 1}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-foreground/85">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <BookingForm
              defaultService={service.title}
              title="Book this service now"
              description="Share your name, phone, area, and issue details. We use the information to connect you with the nearest available technician."
            />
          </div>

          <CTASection
            title="Emergency cooling or appliance breakdown?"
            description="If the issue is urgent, contact us right away for same-day availability checks across Pune, Baner, Wakad, Hinjewadi, Kharadi, and nearby areas."
            serviceTitle={service.title}
            emergency
          />

          <FAQSection
            faqs={service.faqs}
            title={`${service.shortTitle} FAQs`}
          />
          <AreasWeServe />

          <section className="rounded-[2rem] bg-card p-8 shadow-soft ring-1 ring-border">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold tracking-[0.2em] text-brand">
                  RELATED SERVICES
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-navy">
                  Explore related repair and maintenance solutions
                </h2>
              </div>
              <Link
                to="/services"
                className="text-sm font-semibold text-brand transition hover:text-navy"
              >
                View all services
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {(relatedServices.length
                ? relatedServices
                : SERVICES.slice(0, 4)
              ).map((relatedService) => (
                <ServiceCard
                  key={relatedService.slug}
                  service={relatedService}
                  compact
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
