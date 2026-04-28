import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { SITE, telLink, whatsappLink } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{7,15}$/, "Enter a valid phone number"),
  appliance: z.enum(["Refrigerator", "Washing Machine", "Air Conditioner", "Other"]),
  message: z.string().trim().min(5, "Briefly describe the issue").max(600),
});

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const msg = `New service request:\nName: ${d.name}\nPhone: ${d.phone}\nAppliance: ${d.appliance}\nIssue: ${d.message}`;
    window.open(whatsappLink(msg), "_blank");
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <span className="text-sm font-bold tracking-widest text-cta">CONTACT US</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold max-w-3xl">Book a technician in under a minute.</h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl">Call, WhatsApp or send your details — we'll confirm a doorstep slot right away.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 rounded-3xl bg-card ring-1 ring-border shadow-soft p-8">
            <h2 className="font-display text-2xl font-extrabold text-navy">Service Booking Form</h2>
            <p className="mt-1 text-sm text-muted-foreground">We'll route your request to the nearest technician.</p>

            {submitted && (
              <div className="mt-5 flex items-start gap-3 rounded-xl bg-whatsapp/10 text-foreground p-4 ring-1 ring-whatsapp/30">
                <CheckCircle2 className="h-5 w-5 text-whatsapp mt-0.5" />
                <div className="text-sm">Request sent! We've also opened WhatsApp so our team can reach you instantly.</div>
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-5">
              <Field label="Full name" name="name" placeholder="Your name" error={errors.name} />
              <Field label="Phone" name="phone" placeholder="+91 98765 43210" error={errors.phone} />
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-navy mb-1.5">Appliance</label>
                <select name="appliance" defaultValue="Refrigerator" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand">
                  <option>Refrigerator</option>
                  <option>Washing Machine</option>
                  <option>Air Conditioner</option>
                  <option>Other</option>
                </select>
                {errors.appliance && <p className="mt-1 text-xs text-destructive">{errors.appliance}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-navy mb-1.5">Describe the issue</label>
                <textarea name="message" rows={4} placeholder="e.g., AC not cooling, water leaking from indoor unit." maxLength={600} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-3 font-semibold text-cta-foreground shadow-soft hover:opacity-95 transition">
                <Send className="h-4 w-4" /> Send Request
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <a href={telLink} className="block rounded-2xl bg-navy text-white p-6 hover:bg-brand transition shadow-soft">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-cta" /><span className="text-sm font-semibold tracking-wide">CALL US</span></div>
              <div className="mt-2 font-display text-2xl font-extrabold">{SITE.phoneDisplay}</div>
              <div className="text-sm text-white/70">Tap to call from mobile</div>
            </a>
            <a href={whatsappLink()} className="block rounded-2xl bg-whatsapp text-white p-6 hover:opacity-95 transition shadow-soft">
              <div className="flex items-center gap-3"><MessageCircle className="h-5 w-5" /><span className="text-sm font-semibold tracking-wide">WHATSAPP</span></div>
              <div className="mt-2 font-display text-2xl font-extrabold">Chat with us</div>
              <div className="text-sm text-white/85">Replies in minutes</div>
            </a>
            <div className="rounded-2xl bg-card ring-1 ring-border p-6 space-y-3 text-sm">
              <div className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-brand" /><span>{SITE.email}</span></div>
              <div className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-brand" /><span>{SITE.address}</span></div>
              <div className="flex items-start gap-3"><Clock className="h-4 w-4 mt-0.5 text-brand" /><span>{SITE.hours}</span></div>
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-border shadow-soft aspect-video">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Kondhwa,Pune&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, placeholder, error }: { label: string; name: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-1.5">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}