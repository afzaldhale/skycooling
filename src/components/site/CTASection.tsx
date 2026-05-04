import { Link } from "react-router-dom";
import { MessageCircle, Phone, Siren, Wrench } from "lucide-react";
import { SITE, telLink, whatsappLink } from "@/lib/site";

type CTASectionProps = {
  title: string;
  description: string;
  serviceTitle?: string;
  emergency?: boolean;
};

export function CTASection({
  title,
  description,
  serviceTitle,
  emergency = false,
}: CTASectionProps) {
  const whatsappMessage = serviceTitle
    ? `Hi, I need ${serviceTitle.toLowerCase()} in Pune. Please help me book a technician.`
    : "Hi, I need appliance repair service in Pune. Please help me book a technician.";

  return (
    <section className="rounded-[2rem] bg-gradient-hero p-8 text-white shadow-glow lg:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-white/90 ring-1 ring-white/15">
            {emergency ? (
              <Siren className="h-3.5 w-3.5" />
            ) : (
              <Wrench className="h-3.5 w-3.5" />
            )}
            {emergency ? "EMERGENCY REPAIR CTA" : "BOOK A TECHNICIAN"}
          </div>
          <h2 className="mt-4 text-3xl font-extrabold">{title}</h2>
          <p className="mt-3 text-base leading-7 text-white/80">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={telLink}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-5 py-3 font-semibold text-cta-foreground shadow-soft"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Now
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-navy"
          >
            Book Service
          </Link>
        </div>
      </div>
      <p className="mt-5 text-sm text-white/70">
        Same-day doorstep support, trusted technicians, transparent pricing, and
        guided service booking at {SITE.phoneDisplay}.
      </p>
    </section>
  );
}
