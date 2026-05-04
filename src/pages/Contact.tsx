import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { AreasWeServe } from "@/components/site/AreasWeServe";
import { BookingForm } from "@/components/site/BookingForm";
import { CTASection } from "@/components/site/CTASection";
import { SEOHead } from "@/components/site/SEOHead";
import { LOCAL_KEYWORDS } from "@/data/locations";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "@/lib/schema";
import { SITE, telLink, whatsappLink } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact SkyCooling Pune | Book Appliance Repair Service in Pune"
        description="Contact SkyCooling Pune to book AC repair, refrigerator repair, washing machine repair, dishwasher service, and cooling solutions across Pune."
        path="/contact"
        keywords={[...LOCAL_KEYWORDS]}
        structuredData={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-bold tracking-[0.2em] text-cta">
            CONTACT US
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold sm:text-5xl">
            Book appliance repair and cooling service in Pune
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Call, WhatsApp, or use the booking form to schedule same-day service
            for home appliances and commercial cooling systems.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <BookingForm
              title="Send your booking request"
              description="Choose your service type, add your location, and tell us what issue you are facing. We use the details to route your request faster."
            />

            <div className="space-y-5">
              <a
                href={telLink}
                className="block rounded-[2rem] bg-navy p-6 text-white shadow-soft transition hover:bg-brand"
              >
                <div className="flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-cta">
                  <Phone className="h-4 w-4" />
                  CALL NOW
                </div>
                <p className="mt-3 text-2xl font-extrabold">
                  {SITE.phoneDisplay}
                </p>
                <p className="mt-2 text-sm text-white/75">
                  Best for urgent AC repair, refrigerator cooling issues, and
                  emergency service bookings.
                </p>
              </a>

              <a
                href={whatsappLink(
                  "Hi, I want to book appliance repair service in Pune.",
                )}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[2rem] bg-whatsapp p-6 text-white shadow-soft"
              >
                <div className="flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-white/90">
                  <MessageCircle className="h-4 w-4" />
                  WHATSAPP NOW
                </div>
                <p className="mt-3 text-2xl font-extrabold">
                  Chat with our team
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Ideal for sharing appliance photos, location details, and
                  preferred visit timing.
                </p>
              </a>

              <div className="rounded-[2rem] bg-card p-6 shadow-soft ring-1 ring-border">
                <h2 className="text-2xl font-extrabold text-navy">
                  Business details
                </h2>
                <div className="mt-5 space-y-4 text-sm text-foreground/85">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{SITE.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{SITE.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{SITE.hours}</span>
                  </div>
                </div>
                <div className="mt-6 overflow-hidden rounded-[1.5rem] ring-1 ring-border">
                  <iframe
                    title="SkyCooling Pune map"
                    src="https://www.google.com/maps?q=Kondhwa,Pune&output=embed"
                    className="h-72 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

          <CTASection
            title="Need emergency repair help today?"
            description="Our team handles urgent AC, fridge, washing machine, dishwasher, microwave, and cooling solution requests with local Pune support."
            emergency
          />

          <AreasWeServe />
        </div>
      </section>
    </>
  );
}
