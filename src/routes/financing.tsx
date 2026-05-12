import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/financing")({
  head: () => ({
    meta: [
      { title: "Financing — AMP Trailers of Florida" },
      { name: "description", content: "Apply for trailer financing through Sheffield Financial, Trailer Solutions Financial, or ClickLease. Multiple options to fit your budget." },
    ],
  }),
  component: Financing,
});

const lenders = [
  {
    name: "Sheffield Financial",
    tagline: "Apply for a New Loan Today",
    color: "from-emerald-700 to-emerald-900",
    cta: "Customer Application",
    description: "Personal service, fast approvals. A division of TBSF Financial.",
    href: "https://www.sheffieldfinancial.com/",
  },
  {
    name: "Trailer Solutions Financial",
    tagline: "Click to Apply Now",
    color: "from-blue-800 to-blue-950",
    cta: "Apply Online",
    description: "Specialty trailer lender — competitive rates and flexible terms.",
    href: "https://www.trailersolutionsfinancial.com/",
  },
  {
    name: "ClickLease",
    tagline: "Apply Now — Lease Options",
    color: "from-sky-500 to-sky-700",
    cta: "Lease Application",
    description: "Lease-to-own programs perfect for businesses building credit.",
    href: "https://www.clicklease.com/",
  },
];

function Financing() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 grain text-white/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Make It Yours</div>
          <h1 className="font-display text-6xl md:text-8xl tracking-wide">Financing</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 text-lg">
            Three trusted lending partners. One easy goal — get you on the road with the right trailer at terms that work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-3">Trailer Finance Options</div>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">Choose your lender. Apply in minutes.</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {lenders.map((l, i) => (
            <motion.a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-elegant transition-all hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${l.color} text-white p-5 text-center`}>
                <div className="text-xs uppercase tracking-[0.25em] font-bold opacity-90">Click to Apply Now</div>
              </div>
              <div className="p-8 text-center">
                <div className="h-24 flex items-center justify-center font-display text-3xl tracking-wide text-foreground">
                  {l.name}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{l.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-transform group-hover:-translate-y-0.5">
                  {l.cta} <ExternalLink className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-2xl text-center text-sm text-muted-foreground bg-muted/40 rounded-xl p-5 border border-border">
          <strong className="text-foreground">Heads up:</strong> Trailer must be on the approved vendor list. Call us before applying with any questions.
        </div>
      </section>

      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide italic">
            We're eager to help you secure the best deal for your new trailer.
          </h2>
          <p className="mt-6 text-primary-foreground/80 max-w-3xl mx-auto">
            Our team is ready to assist you every step of the way. To ensure we hold the trailer for you, please give us a call at <strong className="text-accent">386-734-3674</strong> to let us know you've completed your application. We look forward to helping you with all your hauling needs!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="tel:3867343674" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 font-bold uppercase tracking-wider text-accent-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
              <Phone className="h-4 w-4" /> Call (386) 734-3674
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur px-6 py-3.5 font-bold uppercase tracking-wider transition-colors hover:bg-white/15">
              Contact Us
            </Link>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-3 text-sm">
            {["Same-day responses", "Approved vendor list", "Competitive rates"].map((x) => (
              <li key={x} className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-accent" /> {x}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
