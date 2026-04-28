import { Link } from "react-router-dom";
import { ShieldCheck, Users, Award, Heart, Target, MapPin, Phone } from "lucide-react";
import { telLink } from "@/lib/site";
import heroImg from "@/assets/hero-technician.jpg";

const stats = [
  { v: "12+", l: "Years of experience" },
  { v: "25k+", l: "Homes serviced" },
  { v: "120+", l: "Expert technicians" },
  { v: "4.9★", l: "Customer rating" },
];

const values = [
  { icon: ShieldCheck, t: "Trust First", d: "Background-verified technicians and genuine spare parts only." },
  { icon: Heart, t: "Customer Care", d: "We treat every home like our own. Politeness, neatness, honesty." },
  { icon: Award, t: "Quality Work", d: "Every repair backed by a 90-day service warranty." },
  { icon: Target, t: "Fair Pricing", d: "Transparent rates, diagnosis upfront, pay only after the fix." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <span className="text-sm font-bold tracking-widest text-cta">ABOUT SKYCOOLINGPUNE</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold max-w-3xl">A repair team your family can trust — for over a decade.</h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl">skycoolingpune was started with one simple promise: to make appliance repair honest, fast and stress-free for every Indian household.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <img src={heroImg} alt="skycoolingpune technician at work" loading="lazy" width={1536} height={1280} className="rounded-3xl shadow-soft w-full h-auto object-cover" />
          <div>
            <span className="text-sm font-bold text-brand tracking-widest">OUR STORY</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-navy">Doorstep repair, done right.</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">From a one-van operation in 2012 to a 120-strong team of certified pros today, skycoolingpune has stayed obsessed with one thing — the customer's experience after we leave the door. That's why we offer a written 90-day warranty, transparent pricing and same-day visits.</p>
            <p className="mt-3 text-foreground/80 leading-relaxed">We service refrigerators, washing machines and air conditioners across all major brands — Samsung, LG, Whirlpool, Bosch, Voltas, Daikin, Hitachi, IFB, Godrej, and more.</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.l} className="rounded-2xl bg-brand-soft p-4 text-center">
                  <div className="font-display text-2xl font-extrabold text-brand">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold text-brand tracking-widest">OUR VALUES</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-navy">What we stand for</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl bg-card p-6 ring-1 ring-border">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-brand-soft text-brand"><v.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 font-display font-bold text-lg text-navy">{v.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-card ring-1 ring-border p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center shadow-soft">
            <div>
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-brand-soft text-brand"><Users className="h-6 w-6" /></div>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-navy">Service areas</h2>
              <p className="mt-3 text-foreground/80">We currently serve Bengaluru, Pune, Mumbai, Delhi NCR, Hyderabad, Chennai and surrounding areas. New cities added every quarter.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Bengaluru","Pune","Mumbai","Delhi NCR","Hyderabad","Chennai","Ahmedabad","Kolkata"].map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft text-brand px-3 py-1 text-xs font-semibold"><MapPin className="h-3 w-3" /> {c}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-hero text-white p-8">
              <h3 className="font-display text-2xl font-extrabold">Need help today?</h3>
              <p className="mt-2 text-white/80">Talk to our team and book a doorstep visit in under a minute.</p>
              <div className="mt-5 flex gap-3 flex-wrap">
                <a href={telLink} className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-5 py-2.5 font-semibold text-cta-foreground"><Phone className="h-4 w-4" /> Call Now</a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-navy">Book Service</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}