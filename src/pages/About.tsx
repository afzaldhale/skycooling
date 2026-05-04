import {
  Award,
  HeartHandshake,
  ShieldCheck,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import heroImg from "@/assets/hero-technician.jpg";
import { AreasWeServe } from "@/components/site/AreasWeServe";
import { CTASection } from "@/components/site/CTASection";
import { SEOHead } from "@/components/site/SEOHead";
import { LOCAL_KEYWORDS } from "@/data/locations";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "@/lib/schema";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust First",
    description:
      "We focus on verified technicians, clear communication, and reliable service quality.",
  },
  {
    icon: Wrench,
    title: "Technical Accuracy",
    description:
      "Our repair approach starts with diagnosis, not guesswork, so customers get sensible recommendations.",
  },
  {
    icon: Award,
    title: "Service Quality",
    description:
      "From same-day support to post-service guidance, we aim for a clean and confidence-building experience.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Care",
    description:
      "We write and speak like a local service business that values trust, responsiveness, and respect.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About SkyCooling Pune | Local Appliance Repair Experts in Pune"
        description="Learn about SkyCooling Pune, a local appliance repair and cooling solutions provider serving Pune homes, offices, and commercial clients."
        path="/about"
        image={heroImg}
        keywords={[...LOCAL_KEYWORDS]}
        structuredData={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-bold tracking-[0.2em] text-cta">
            ABOUT SKYCOOLING PUNE
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold sm:text-5xl">
            A local appliance repair brand built around trust, speed, and real
            service support
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
            We help Pune households and businesses with AC repair, refrigerator
            repair, dishwasher support, washing machine service, and commercial
            cooling solutions through a clean, conversion-friendly service
            experience.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <img
            src={heroImg}
            alt="SkyCooling Pune technician assisting a customer"
            loading="lazy"
            width={1536}
            height={1280}
            className="h-full w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div className="rounded-[2rem] bg-card p-8 shadow-soft ring-1 ring-border">
            <p className="text-sm font-bold tracking-[0.2em] text-brand">
              OUR STORY
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy">
              Built for local service searches and real local fulfilment
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              SkyCooling Pune is focused on making appliance repair easier to
              book, easier to trust, and easier to understand for customers
              across Pune. We combine clear service pages, local area coverage,
              quick response, and practical repair workflows to improve both
              customer confidence and business lead quality.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Home appliance repair in Pune",
                "Cooling solutions for commercial clients",
                "Same-day service support in many areas",
                "Transparent pricing and service-first communication",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-2xl bg-brand-soft/50 p-4 text-sm font-semibold text-navy"
                >
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { value: "20+", label: "new service categories" },
                { value: "15", label: "Pune areas served" },
                { value: "1", label: "unified local service brand" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-background p-4 ring-1 ring-border"
                >
                  <p className="text-2xl font-extrabold text-brand">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.2em] text-brand">
              OUR VALUES
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy">
              What shapes the customer experience
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[2rem] bg-card p-6 shadow-soft ring-1 ring-border"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Trusted Technicians",
                text: "Friendly, practical service focused on local customer trust.",
              },
              {
                icon: Target,
                title: "SEO-Aligned Growth",
                text: "Location-aware content that supports Google ranking goals without keyword stuffing.",
              },
              {
                icon: Wrench,
                title: "Scalable Services",
                text: "A structured service setup that makes future category additions easier.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] bg-navy p-6 text-white shadow-soft"
              >
                <item.icon className="h-6 w-6 text-cta" />
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <AreasWeServe />
          <CTASection
            title="Need a local appliance repair partner in Pune?"
            description="From AC repair and fridge service to cold storage and dishwasher support, our service pages are designed to help customers book quickly and confidently."
          />
        </div>
      </section>
    </>
  );
}
