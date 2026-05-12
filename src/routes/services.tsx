import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Wrench, Disc, Settings, Layers, Hammer, ArrowRight, Phone } from "lucide-react";
import service1 from "@/assets/trailer-equipment.jpg";
import service2 from "@/assets/trailer-utility.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Repairs — AMP Trailers of Florida" },
      { name: "description", content: "Trailer service, maintenance, repairs, parts. Bearings, brakes, tires, axles, aluminum repair. DeLand, FL." },
    ],
  }),
  component: Services,
});

const capabilities = [
  { icon: Disc, title: "Bearings", body: "Repack, replace, and reseal — keep your wheels turning smooth." },
  { icon: Settings, title: "Brakes", body: "Electric brake diagnostics, full assembly replacement, controllers." },
  { icon: Layers, title: "Tires & Wheels", body: "Trailer-rated tires, hubs, spindles, and full wheel swaps." },
  { icon: Wrench, title: "Axle Specialists", body: "Bent axles, alignment, full axle replacement and upgrades." },
  { icon: Hammer, title: "Aluminum Repair", body: "Welding and fabrication on aluminum frames, panels, and decks." },
];

function Services() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 grain text-white/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Service & Parts</div>
          <h1 className="font-display text-6xl md:text-8xl tracking-wide">Service</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 text-lg">
            We don't just build them. We fix them, maintain them, and stock the parts you need.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-3">AMP Trailers Service</div>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide leading-tight">
              We have parts for whatever you need to tackle.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Whether it's a do-it-yourself fix or a full repair you'd rather hand off, we've got you. Our knowledgeable, friendly staff is ready and happy to help with any question. We stock trailers of every type to meet all your hauling needs.
            </p>
            <p className="mt-4 text-foreground font-bold italic">
              And if you don't see what you want… we'll build it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 font-bold uppercase tracking-wider text-accent-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:3867343674" className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-6 py-3.5 font-bold uppercase tracking-wider transition-colors hover:bg-muted">
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid gap-4">
            <div className="overflow-hidden rounded-2xl shadow-elegant aspect-[4/3]">
              <img src={service1} alt="Trailer welding service" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-elegant aspect-[16/9]">
              <img src={service2} alt="Trailer parts and bearings" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-3">What We Handle</div>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide">Trailer Service, Maintenance & Repairs</h2>
            <p className="mt-3 text-muted-foreground">Our technicians are trained and ready to handle any trailer repair need:</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-accent text-accent-foreground shadow-card transition-transform group-hover:rotate-6">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-wide">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl tracking-wide">Need a repair? Let's get it scheduled.</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Drop your trailer off, get a fair quote, and a turnaround you can plan around.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 font-bold uppercase tracking-wider text-accent-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
            Request Service
          </Link>
          <a href="tel:3867343674" className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-6 py-3.5 font-bold uppercase tracking-wider transition-colors hover:bg-muted">
            <Phone className="h-4 w-4" /> (386) 734-3674
          </a>
        </div>
      </section>
    </>
  );
}
