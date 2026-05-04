import { SERVICES } from "@/data/services";
import { LOCAL_KEYWORDS } from "@/data/locations";
import { AreasWeServe } from "@/components/site/AreasWeServe";
import { BookingForm } from "@/components/site/BookingForm";
import { CTASection } from "@/components/site/CTASection";
import { SEOHead } from "@/components/site/SEOHead";
import { ServiceCard } from "@/components/site/ServiceCard";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "@/lib/schema";

const categoryLabels: Record<string, string> = {
  "air-conditioning": "Air Conditioning Services",
  refrigeration: "Refrigeration Services",
  laundry: "Laundry Appliance Services",
  kitchen: "Kitchen Appliance Services",
  "commercial-cooling": "Commercial Cooling Solutions",
};

export default function ServicesPage() {
  const groupedServices = Object.entries(
    SERVICES.reduce<Record<string, typeof SERVICES>>((accumulator, service) => {
      accumulator[service.category] ??= [];
      accumulator[service.category].push(service);
      return accumulator;
    }, {}),
  );

  return (
    <>
      <SEOHead
        title="Appliance Repair Services in Pune | AC, Fridge, Dishwasher & Cooling Solutions"
        description="Explore appliance repair services in Pune for AC, refrigerator, washing machine, dishwasher, microwave, cold room, chiller, and commercial cooling systems."
        path="/services"
        keywords={[...LOCAL_KEYWORDS]}
        structuredData={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-bold tracking-[0.2em] text-cta">
            OUR SERVICES
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold sm:text-5xl">
            Complete appliance repair and cooling solutions in Pune
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
            From AC repair service in Pune to cold storage repair, dishwasher
            installation, deep freezer repair, and commercial refrigerator
            support, we provide local, doorstep, and business-focused service
            coverage.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Same Day Service Available",
              "Trusted Technicians",
              "Affordable Pricing",
              "Service Warranty",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-white ring-1 ring-white/15"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          {groupedServices.map(([category, services]) => (
            <section key={category}>
              <div className="max-w-3xl">
                <p className="text-sm font-bold tracking-[0.2em] text-brand">
                  {categoryLabels[category]}
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-navy">
                  {categoryLabels[category]}
                </h2>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  Trusted local technicians, fast response, and SEO-ready
                  service pages built for customers searching for{" "}
                  {services[0]?.shortTitle.toLowerCase()} and related help in
                  Pune.
                </p>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </section>
          ))}

          <CTASection
            title="Need emergency appliance or cooling support?"
            description="Call or WhatsApp us for urgent booking help, same-day availability checks, and doorstep service scheduling across Pune and surrounding areas."
          />

          <AreasWeServe />

          <BookingForm
            title="Book any appliance repair service"
            description="Choose your service, share your area, and tell us the issue. We will connect you with the right technician quickly."
          />
        </div>
      </section>
    </>
  );
}
