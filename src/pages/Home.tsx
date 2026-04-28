import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Wrench,
  BadgeIndianRupee,
  Home,
  Zap,
  Star,
  ArrowRight,
  CheckCircle2,
  Snowflake,
  Refrigerator,
  WashingMachine,
} from "lucide-react";
import heroImg from "@/assets/hero-technician.jpg";
import fridgeImg from "@/assets/service-fridge.jpg";
import washerImg from "@/assets/service-washer.jpg";
import acImg from "@/assets/service-ac.jpg";
import { SITE, telLink, whatsappLink } from "@/lib/site";

const features = [
  {
    icon: Clock,
    title: "Same Day Service",
    desc: "Book today, fixed today — most jobs done within hours.",
  },
  {
    icon: Wrench,
    title: "Expert Technicians",
    desc: "Trained, background-verified pros with 5+ years experience.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    desc: "Transparent rates. No hidden charges. Pay after the fix.",
  },
  {
    icon: ShieldCheck,
    title: "60-Day Warranty",
    desc: "Every repair backed by a 90-day service warranty.",
  },
  {
    icon: Home,
    title: "Doorstep Repair",
    desc: "We come to you. No hauling appliances anywhere.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    desc: "Average response time under 60 minutes in city limits.",
  },
];

const services = [
  {
    icon: Refrigerator,
    title: "Refrigerator Repair",
    img: fridgeImg,
    points: [
      "Cooling & gas refill",
      "Compressor repair",
      "Water leakage fix",
      "Noise & door seal",
    ],
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Repair",
    img: washerImg,
    points: [
      "Drum & motor repair",
      "Drainage issues",
      "Top & front-load expert",
      "Automatic & semi-auto",
    ],
  },
  {
    icon: Snowflake,
    title: "AC Repair & Service",
    img: acImg,
    points: [
      "Cooling problems",
      "Gas refill & leak fix",
      "Installation & uninstall",
      "AMC & deep cleaning",
    ],
  },
];

const steps = [
  { n: "01", t: "Contact Us", d: "Call, WhatsApp or fill the booking form." },
  { n: "02", t: "Book a Slot", d: "Pick a time that fits your day." },
  { n: "03", t: "Doorstep Visit", d: "Verified technician arrives on time." },
  { n: "04", t: "Fixed & Happy", d: "Pay after the repair. 90-day warranty." },
];

const reviews = [
  {
    name: "Priya Sharma",
    role: "Bengaluru",
    text: "Fridge stopped cooling at 9pm. Technician came next morning, fixed the gas leak in 40 minutes. Honest pricing!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Pune",
    text: "Washing machine drum was making horrible noise. skycoolingpune replaced the bearing same day. Like new!",
    rating: 5,
  },
  {
    name: "Anjali Verma",
    role: "Mumbai",
    text: "Got my AC serviced before summer. Deep clean + gas top-up at a great price. Very professional team.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wide ring-1 ring-white/20">
              <Zap className="h-3.5 w-3.5" /> SAME-DAY SERVICE · 60-DAY WARRANTY
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Fast & Reliable <span className="text-cta">Home Appliance</span>{" "}
              Repair Services
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-xl">
              We repair refrigerators, washing machines and air conditioners at
              your doorstep — with expert technicians and genuine spare parts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3 font-semibold text-cta-foreground shadow-glow hover:opacity-95 transition"
              >
                Book Service <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy hover:bg-white/90 transition"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={whatsappLink()}
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white hover:opacity-95 transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm">
              <div>
                <div className="text-2xl font-bold">12+</div>
                <div className="text-white/70">Years Trusted</div>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <div className="text-2xl font-bold">25k+</div>
                <div className="text-white/70">Happy Homes</div>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-white/70">Avg Rating</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-glow ring-1 ring-white/20">
              <img
                src={heroImg}
                alt="skycoolingpune technician repairing an air conditioner at a customer's home"
                width={1536}
                height={1280}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-navy rounded-2xl shadow-soft px-5 py-4 flex items-center gap-3">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-brand-soft text-brand">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold">60-Day Warranty</div>
                <div className="text-xs text-muted-foreground">
                  On every repair
                </div>
              </div>
            </div>
            <div className="absolute -top-5 -right-3 bg-white text-navy rounded-2xl shadow-soft px-5 py-4 flex items-center gap-3">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-brand-soft text-brand">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold">60-Min Response</div>
                <div className="text-xs text-muted-foreground">
                  In city limits
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold text-brand tracking-widest">
              WHY SKYCOOLINGPUNE
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-navy">
              Your appliances deserve the best hands
            </h2>
            <p className="mt-3 text-muted-foreground">
              Six reasons thousands of homes call us first.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl bg-card p-6 ring-1 ring-border hover:ring-brand/40 hover:shadow-soft transition"
              >
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-brand-soft text-brand group-hover:bg-gradient-hero group-hover:text-brand-foreground transition">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-navy">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-sm font-bold text-brand tracking-widest">
                OUR SERVICES
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-navy">
                All major appliances. One trusted team.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
            >
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-3xl overflow-hidden bg-card ring-1 ring-border hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 grid place-items-center h-11 w-11 rounded-xl bg-white text-brand shadow-soft">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-navy">
                    {s.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />{" "}
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={telLink}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand transition"
                  >
                    <Phone className="h-4 w-4" /> Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold text-cta tracking-widest">
              HOW IT WORKS
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold">
              Get your appliance fixed in 4 easy steps
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
              >
                <div className="font-display text-5xl font-extrabold text-cta">
                  {s.n}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-1.5 text-sm text-white/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold text-brand tracking-widest">
              CUSTOMER STORIES
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-navy">
              Loved by 25,000+ homes
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl bg-card p-7 ring-1 ring-border shadow-soft"
              >
                <div className="flex gap-0.5 text-cta">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-foreground/85 leading-relaxed">
                  "{r.text}"
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-hero text-white grid place-items-center font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-navy">{r.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {r.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-hero text-white p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-glow overflow-hidden relative">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cta/30 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold max-w-xl">
                Appliance broken? Get help in the next 60 minutes.
              </h2>
              <p className="mt-3 text-white/80 max-w-xl">
                Emergency repair support — call now and a verified technician
                will be on the way.
              </p>
            </div>
            <div className="relative flex flex-wrap gap-3">
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3 font-semibold text-cta-foreground shadow-soft"
              >
                <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
              </a>
              <a
                href={whatsappLink()}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
