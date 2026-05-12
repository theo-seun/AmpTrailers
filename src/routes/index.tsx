import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Wrench, Users, Award, Phone } from "lucide-react";
import heroImg from "@/assets/hero-trailer.jpg";
import { trailers } from "@/lib/trailers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMP Trailers of Florida — Premium Trailers Built to Last Since 1983" },
      { name: "description", content: "Custom-built landscape, cargo, dump, equipment, utility, tiny home, and car hauler trailers. Family-owned in DeLand, FL since 1983." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "43+", label: "Years in Business" },
  { value: "7", label: "Trailer Categories" },
  { value: "100%", label: "Family Owned" },
  { value: "5★", label: "Customer Rated" },
];

const benefits = [
  { icon: Award, title: "43 Years of Expertise", body: "Four decades of perfecting our craft, one trailer at a time." },
  { icon: Users, title: "Family-Owned Quality", body: "Three generations of pride in every weld, panel, and finish." },
  { icon: Wrench, title: "Service That Goes Further", body: "Repairs, parts, and follow-through — long after the sale." },
  { icon: Shield, title: "Custom Solutions", body: "We build what you need, not just what's on the lot." },
];

const testimonials = [
  {
    initial: "K",
    name: "Ken Foldy",
    when: "2 years ago",
    color: "bg-blue-500",
    quote: "These guys are great. They have a great selection of parts if you need it. I needed 2 wheels and tires for a trailer that was stranded on I-4. Even though it was a drive there, they had what I needed at a great price.",
  },
  {
    initial: "B",
    name: "Brian Gutierrez",
    when: "2 years ago",
    color: "bg-orange-500",
    quote: "Highly recommended. I had specific requests of what I needed for my custom trailer build. Roger went above and beyond to make sure I got everything I needed.",
  },
  {
    initial: "B",
    name: "Brett Mathew",
    when: "2 years ago",
    color: "bg-emerald-600",
    quote: "These guys are simply the best in trailer building!!",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary">
        <img
          src={heroImg}
          alt="Heavy-duty AMP trailer at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-5">
              Family-Owned · Est. 1983
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-wide text-primary-foreground text-balance leading-[1]">
              Premium trailers <span className="text-accent">built to last.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base md:text-lg text-primary-foreground/75">
              Custom-built for the contractors and businesses who can't afford to slow down.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/inventory"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-4 font-bold uppercase tracking-wider text-accent-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Browse Inventory <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-4 font-bold uppercase tracking-wider text-primary-foreground backdrop-blur transition-colors hover:bg-white/15"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trailer Solutions */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Our Lineup</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-balance">
              Trailers for every job on the list.
            </h2>
          </div>
          <Link to="/inventory" className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors">
            View full inventory <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trailers.map((t, i) => (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            >
              <Link
                to="/trailers/$type"
                params={{ type: t.slug }}
                className="group block relative overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-elegant hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={t.image}
                    alt={t.name}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-wide text-foreground">{t.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.short}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-accent">
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why AMP */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Why AMP</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-balance">
              Four decades of doing the job right.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="group">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-accent text-accent-foreground shadow-card mb-5 transition-transform group-hover:-rotate-6">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-display font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — Google reviews */}
      <section className="relative isolate overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 grain text-white/[0.04]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-3">★★★★★ Google Reviews</div>
            <h2 className="font-display text-5xl md:text-6xl tracking-wide">Testimonials</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl bg-card text-card-foreground p-6 shadow-elegant"
              >
                <div className="flex items-center gap-3">
                  <div className={`h-12 w-12 rounded-full ${t.color} text-white grid place-items-center font-bold text-lg`}>{t.initial}</div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.when}</div>
                  </div>
                  <svg viewBox="0 0 48 48" className="ml-auto h-7 w-7" aria-label="Google">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  </svg>
                </div>
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed">{t.quote}</blockquote>
              </motion.figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="tel:3867343674" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 font-bold uppercase tracking-wider text-accent-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
              <Phone className="h-4 w-4" /> (386) 734-3674
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-12 md:p-20 text-center shadow-elegant">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground text-balance">
              Ready to find the perfect trailer?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-primary-foreground/80">
              Browse what's on the lot or talk to us about a custom build. We answer every inquiry personally.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/inventory" className="rounded-md bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5">
                View Inventory
              </Link>
              <Link to="/contact" className="rounded-md border border-primary-foreground/30 bg-primary-foreground/5 backdrop-blur px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/15">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
