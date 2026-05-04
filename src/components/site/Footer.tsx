import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { AREAS_WE_SERVE } from "@/data/locations";
import { SERVICES } from "@/data/services";
import { SITE, telLink, whatsappLink } from "@/lib/site";

const footerServices = SERVICES.slice(0, 6);

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-cta font-display text-sm font-extrabold">
              SC
            </span>
            <div>
              <div className="font-display text-lg font-extrabold">
                {SITE.name}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                Appliance Repair in Pune
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Local AC repair, home appliance repair, and commercial cooling
            solutions across Pune with responsive booking support and doorstep
            service.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Popular Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {footerServices.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="transition hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/about" className="transition hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition hover:text-white">
                All Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <a href={telLink} className="transition hover:text-white">
                Book a Technician
              </a>
            </li>
          </ul>
          <h4 className="mt-6 font-semibold text-white">Areas We Serve</h4>
          <p className="mt-3 text-sm leading-7 text-white/70">
            {AREAS_WE_SERVE.slice(0, 8).join(", ")} and nearby Pune areas.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={telLink}>{SITE.phoneDisplay}</a>
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={whatsappLink()}>WhatsApp Support</a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{SITE.email}</span>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        Copyright {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
