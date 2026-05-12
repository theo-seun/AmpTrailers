import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Mail, Clock, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { trailers } from "@/lib/trailers";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AMP Trailers of Florida" },
      { name: "description", content: "Get in touch with AMP Trailers in DeLand, FL. Request a quote or ask a question — we answer personally." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  inquiryType: z.string().min(1, "Please choose what you're contacting us about"),
  trailerType: z.string().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const inquiryTypes = [
  { value: "quote", label: "Get a quote on a trailer", icon: "💵" },
  { value: "custom", label: "Custom build inquiry", icon: "🛠️" },
  { value: "service", label: "Service or repair", icon: "🔧" },
  { value: "financing", label: "Financing question", icon: "📋" },
  { value: "employment", label: "Employment / careers", icon: "💼" },
  { value: "general", label: "General question", icon: "💬" },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inquiry, setInquiry] = useState("quote");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      inquiryType: inquiry,
      trailerType: fd.get("trailerType"),
      message: fd.get("message"),
    });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Please check your inputs");
      return;
    }
    const inqLabel = inquiryTypes.find((i) => i.value === result.data.inquiryType)?.label ?? result.data.inquiryType;
    const subject = `[${inqLabel}] from ${result.data.name}`;
    const body = `Inquiry: ${inqLabel}\nName: ${result.data.name}\nEmail: ${result.data.email}\nPhone: ${result.data.phone ?? ""}\nTrailer type: ${result.data.trailerType ?? ""}\n\n${result.data.message}`;
    window.location.href = `mailto:sales@amptrailers.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 grain text-white/[0.04]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Get in Touch</div>
          <h1 className="font-display text-6xl md:text-8xl tracking-wide">Let's talk trailers.</h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80 text-lg">
            Tell us what you need — quote, service, financing, or even a job application. We answer personally, usually same-day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display font-bold text-2xl mb-6">Visit the shop</h2>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">421 N Spring Garden Ave</div>
                    <div className="text-sm text-muted-foreground">DeLand, FL 32720</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Email us</div>
                    <a href="mailto:sales@amptrailers.com" className="text-sm text-accent hover:underline">sales@amptrailers.com</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-sm text-muted-foreground">Mon–Fri · 8:00am–5:00pm</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl border border-border shadow-card">
              <iframe
                title="AMP Trailers location"
                src="https://www.google.com/maps?q=421+N+Spring+Garden+Ave,+DeLand,+FL+32720&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-card space-y-5">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                  <h3 className="font-display text-2xl font-bold">Thanks — your message is on the way.</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm">Your email client should be opening. We'll reply personally as soon as we can.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold">Request a quote</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Name *</label>
                      <input name="name" required maxLength={100} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phone</label>
                      <input name="phone" type="tel" maxLength={40} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email *</label>
                    <input name="email" type="email" required maxLength={255} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Trailer type</label>
                    <select name="trailerType" className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                      <option value="">Select a type (optional)</option>
                      {trailers.map((t) => <option key={t.slug} value={t.name}>{t.name}</option>)}
                      <option value="Custom">Custom build</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">How can we help? *</label>
                    <textarea name="message" required maxLength={1000} rows={5} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <button type="submit" className="w-full rounded-md bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5">
                    Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
