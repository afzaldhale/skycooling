import { Link } from "react-router-dom";
import { Refrigerator, WashingMachine, Snowflake, CheckCircle2, Phone, MessageCircle, ArrowRight } from "lucide-react";
import fridgeImg from "@/assets/service-fridge.jpg";
import washerImg from "@/assets/service-washer.jpg";
import acImg from "@/assets/service-ac.jpg";
import { telLink, whatsappLink } from "@/lib/site";

const services = [
  {
    id: "refrigerator", icon: Refrigerator, title: "Refrigerator Repair",
    img: fridgeImg,
    intro: "Single door, double door, side-by-side or French door — we repair every refrigerator type and brand.",
    issues: ["Not cooling / over cooling", "Gas leak & refill", "Compressor / thermostat repair", "Water leakage from base", "Strange noise or vibration", "Door seal / gasket replacement"],
    price: "Diagnosis from ₹299",
  },
  {
    id: "washing-machine", icon: WashingMachine, title: "Washing Machine Repair",
    img: washerImg,
    intro: "Fully automatic, semi-automatic, top-load and front-load — we service every washing machine type.",
    issues: ["Drum not spinning", "Motor & belt repair", "Water not draining", "Inlet / outlet valve issue", "Display / PCB problems", "Excessive noise or shaking"],
    price: "Diagnosis from ₹249",
  },
  {
    id: "ac", icon: Snowflake, title: "AC Repair & Service",
    img: acImg,
    intro: "Window, split or cassette AC — we handle service, repair, gas refill, installation and AMC.",
    issues: ["AC not cooling", "Gas leak detection & refill", "Installation & uninstallation", "Deep cleaning service", "Water leakage from indoor unit", "Annual maintenance contract"],
    price: "Service from ₹399",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <span className="text-sm font-bold tracking-widest text-cta">OUR SERVICES</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold max-w-3xl">Every appliance, expertly repaired at your doorstep.</h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl">Genuine spare parts. Trained technicians. Transparent pricing. Backed by a 90-day warranty.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={1024} className="rounded-3xl shadow-soft w-full h-auto object-cover" />
                <div className="absolute top-4 left-4 grid place-items-center h-12 w-12 rounded-xl bg-white text-brand shadow-soft"><s.icon className="h-6 w-6" /></div>
              </div>
              <div>
                <span className="text-sm font-bold text-brand tracking-widest">{s.price.toUpperCase()}</span>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-navy">{s.title}</h2>
                <p className="mt-4 text-foreground/80 leading-relaxed">{s.intro}</p>
                <h3 className="mt-6 font-semibold text-navy">Common issues we fix</h3>
                <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                  {s.issues.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/85">
                      <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={telLink} className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-5 py-2.5 font-semibold text-cta-foreground shadow-soft">
                    <Phone className="h-4 w-4" /> Get a Quote
                  </a>
                  <a href={whatsappLink(`Hi, I need ${s.title.toLowerCase()}.`)} className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 font-semibold text-white">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 font-semibold text-white">
                    Book Service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}