import { useMemo, useState } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import { SERVICES } from "@/data/services";
import { whatsappLink } from "@/lib/site";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,15}$/, "Enter a valid phone number"),
  location: z.string().trim().min(2, "Please enter your location").max(120),
  serviceType: z.string().trim().min(2, "Please choose a service"),
  message: z
    .string()
    .trim()
    .min(5, "Please share a brief issue summary")
    .max(600),
});

type BookingFormProps = {
  defaultService?: string;
  title?: string;
  description?: string;
  className?: string;
};

export function BookingForm({
  defaultService,
  title = "Quick booking form",
  description = "Share your service need and we will route it to the nearest technician.",
  className = "",
}: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceTitles = useMemo(
    () => SERVICES.map((service) => service.title),
    [],
  );
  const defaultValue =
    defaultService && serviceTitles.includes(defaultService)
      ? defaultService
      : serviceTitles[0];

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const parsed = bookingSchema.safeParse(Object.fromEntries(formData));

    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        nextErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(nextErrors);
      return;
    }

    const data = parsed.data;
    const message = [
      "New service request",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Location: ${data.location}`,
      `Service: ${data.serviceType}`,
      `Message: ${data.message}`,
    ].join("\n");

    setErrors({});
    setSubmitted(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
  };

  return (
    <section
      className={`rounded-[2rem] bg-card p-8 shadow-soft ring-1 ring-border ${className}`}
    >
      <div className="max-w-2xl">
        <p className="text-sm font-bold tracking-[0.2em] text-brand">
          BOOK SERVICE
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-navy">{title}</h2>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          {description}
        </p>
      </div>

      {submitted ? (
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-whatsapp/10 p-4 text-sm text-foreground ring-1 ring-whatsapp/25">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-whatsapp" />
          <div>
            <p className="font-semibold text-navy">
              Thank you for your request.
            </p>
            <p className="mt-1 text-muted-foreground">
              Your details were prepared for WhatsApp so our team can respond
              quickly with a booking confirmation.
            </p>
          </div>
        </div>
      ) : null}

      <form onSubmit={onSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
        <Field
          label="Name"
          name="name"
          placeholder="Your full name"
          error={errors.name}
        />
        <Field
          label="Phone"
          name="phone"
          placeholder="+91 98765 43210"
          error={errors.phone}
        />
        <Field
          label="Location"
          name="location"
          placeholder="Pune or your area"
          error={errors.location}
        />
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy">
            Service type
          </label>
          <select
            name="serviceType"
            defaultValue={defaultValue}
            className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-brand"
          >
            {serviceTitles.map((serviceTitle) => (
              <option key={serviceTitle} value={serviceTitle}>
                {serviceTitle}
              </option>
            ))}
          </select>
          {errors.serviceType ? (
            <p className="mt-1 text-xs text-destructive">
              {errors.serviceType}
            </p>
          ) : null}
        </div>
        <div className="md:col-span-2">
          <label className="mb-1.5 block text-sm font-semibold text-navy">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us what issue you are facing, preferred timing, or urgency."
            className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-brand"
          />
          {errors.message ? (
            <p className="mt-1 text-xs text-destructive">{errors.message}</p>
          ) : null}
        </div>
        <div className="md:col-span-2 flex flex-wrap gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-3 font-semibold text-cta-foreground shadow-soft"
          >
            <Send className="h-4 w-4" />
            Book Service
          </button>
          <a
            href={whatsappLink(
              "Hi, I want to book appliance repair service in Pune.",
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Now
          </a>
        </div>
      </form>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-brand"
      />
      {error ? <p className="mt-1 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
