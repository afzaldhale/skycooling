import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { SITE, telLink, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 font-display font-extrabold text-lg text-white">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-cta">
              SC
            </span>
            skycoolingpune
          </div>

          <p className="mt-4 text-sm leading-relaxed">
            Trusted doorstep repair for refrigerators, washing machines & ACs.
            Fast response, expert technicians, fair pricing.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-white">
                Refrigerator Repair
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Washing Machine Repair
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                AC Repair & Service
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                AC Installation & AMC
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <a href={telLink} className="hover:text-white">
                Book a Technician
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <a href={telLink}>{SITE.phoneDisplay}</a>
            </li>

            <li className="flex gap-2">
              <MessageCircle className="h-4 w-4 mt-0.5 shrink-0" />
              <a href={whatsappLink()}>WhatsApp Support</a>
            </li>

            <li className="flex gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{SITE.email}</span>
            </li>

            <li className="flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{SITE.address}</span>
            </li>

            <li className="flex gap-2">
              <Clock className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.{" "}
        <a
          href="https://vtechnex.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold hover:text-blue-400 transition duration-300"
        >
          Developed by Vtechnex
        </a>
      </div>
    </footer>
  );
}
