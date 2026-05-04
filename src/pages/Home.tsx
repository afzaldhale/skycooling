import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeIndianRupee,
  CheckCircle2,
  Clock,
  Home as HomeIcon,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-technician.jpg";
import { AreasWeServe } from "@/components/site/AreasWeServe";
import { BookingForm } from "@/components/site/BookingForm";
import { CTASection } from "@/components/site/CTASection";
import { SEOHead } from "@/components/site/SEOHead";
import { ServiceCard } from "@/components/site/ServiceCard";
import { FEATURED_SERVICES, SERVICES } from "@/data/services";
import { LOCAL_KEYWORDS } from "@/data/locations";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { SITE, telLink, whatsappLink } from "@/lib/site";

const trustFeatures = [
  {
    icon: Clock,
    title: "Same Day Service",
    description:
      "Priority response for urgent AC, refrigerator, and appliance repair requests across Pune.",
  },
  {
    icon: Wrench,
    title: "Trusted Technicians",
    description:
      "Experienced local technicians for home appliances and commercial cooling systems.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    description:
      "Clear diagnosis, practical repair recommendations, and transparent pricing with no surprise charges.",
  },
  {
    icon: ShieldCheck,
    title: "Service Warranty",
    description:
      "Every completed repair is backed by service support for customer confidence and peace of mind.",
  },
  {
    icon: HomeIcon,
    title: "Doorstep Convenience",
    description:
      "We come to your home, office, shop, or site so your service experience stays simple and fast.",
  },
  {
    icon: Sparkles,
    title: "Local SEO Content, Real Local Service",
    description:
      "Pages are tailored for Pune searches, and the service team is aligned to local area coverage.",
  },
];

const process = [
  "Choose a service and share your issue by call, WhatsApp, or booking form.",
  "We confirm your Pune location, appliance type, and preferred slot.",
  "A technician visits for diagnosis, shares pricing, and starts after approval.",
  "Your appliance is tested, explained, and handed over with service guidance.",
];

export default function HomePage() {
  return (
    <>
      <SEOHead
        title={SITE.title}
        description={SITE.description}
        path="/"
        image={heroImg}
        keywords={[...LOCAL_KEYWORDS]}
        structuredData={[buildLocalBusinessSchema()]}
      />

      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-white ring-1 ring-white/15">
              <Clock className="h-3.5 w-3.5" />
              SAME-DAY SERVICE AVAILABLE
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              AC repair, appliance repair, and cooling solutions built for Pune
              customers
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
              SkyCooling Pune provides doorstep help for AC repair service in
              Pune, refrigerator repair, washing machine repair, dishwasher
              service, microwave repair, deep freezer support, and commercial
              cooling systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3 font-semibold text-cta-foreground shadow-soft"
              >
                Book Service
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy"
              >
                Call Now
              </a>
              <a
                href={whatsappLink(
                  "Hi, I need appliance repair service in Pune.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white"
              >
                WhatsApp Now
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Trusted Technicians",
                "Affordable Pricing",
                "Doorstep Service",
                "Emergency Repair CTA",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-white ring-1 ring-white/15"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] bg-white/10 p-3 shadow-glow ring-1 ring-white/15">
              <img
                src={heroImg}
                alt="Technician repairing a home appliance for a Pune customer"
                width={1536}
                height={1280}
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white px-5 py-4 text-navy shadow-soft">
              <p className="text-sm font-bold">Local service coverage</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Pune, Wakad, Baner, Hinjewadi, Kharadi, Aundh, and nearby areas
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.2em] text-brand">
              WHY CHOOSE US
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy">
              Local service built for trust, speed, and conversion
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[2rem] bg-card p-6 shadow-soft ring-1 ring-border"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold tracking-[0.2em] text-brand">
                FEATURED SERVICES
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy">
                High-demand services for homes and businesses in Pune
              </h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Explore our most requested local appliance repair and cooling
                services, then move into related detail pages for
                service-specific SEO content and FAQs.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3"
            >
              View all {SERVICES.length} services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {FEATURED_SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <CTASection
            title="Need emergency appliance repair service near you?"
            description="We support urgent AC cooling issues, refrigerator breakdowns, washing machine faults, and commercial cooling problems across Pune and nearby service zones."
          />

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] bg-card p-8 shadow-soft ring-1 ring-border">
              <p className="text-sm font-bold tracking-[0.2em] text-brand">
                HOW IT WORKS
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy">
                Simple booking flow that helps customers convert faster
              </h2>
              <div className="mt-8 space-y-4">
                {process.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-2xl border border-border bg-background p-5"
                  >
                    <span className="text-sm font-bold tracking-[0.2em] text-brand">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-foreground/85">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[1.5rem] bg-brand-soft/50 p-5">
                <p className="text-sm font-semibold text-navy">
                  Same-day service, expert technicians, transparent pricing, and
                  doorstep support are built into every booking path.
                </p>
              </div>
            </div>

            <BookingForm
              title="Quick booking form for Pune customers"
              description="Select your appliance service, share your area, and tell us the problem. We will direct the request to the right technician."
            />
          </div>

          <AreasWeServe />
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-card p-8 shadow-soft ring-1 ring-border lg:p-10">
            <p className="text-sm font-bold tracking-[0.2em] text-brand">
              GOOGLE-READY CONTENT
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy">
              Local search keywords supported naturally across the site
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {LOCAL_KEYWORDS.slice(0, 12).map((keyword) => (
                <div
                  key={keyword}
                  className="flex items-start gap-3 rounded-2xl bg-background p-4 text-sm text-foreground ring-1 ring-border"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{keyword}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
