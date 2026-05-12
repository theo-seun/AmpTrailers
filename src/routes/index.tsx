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
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Family-Owned · Est. 1983
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-display font-bold text-primary-foreground text-balance leading-[0.95]">
              Premium Trailers <span className="text-accent">Built to Last</span> Since 1983.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80 text-balance">
              Custom-built landscape, cargo, dump, and equipment trailers for the contractors, businesses, and individuals who can't afford to slow down.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/inventory"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Browse Inventory <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3.5 font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/15"
              >
                Get a Quote
              </Link>
            </div>

            <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs uppercase tracking-widest text-primary-foreground/60">{s.label}</dt>
                  <dd className="mt-1 text-3xl font-display font-bold text-primary-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
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
          {trailers.map((t) => (
            <Link
              key={t.slug}
              to="/trailers/$type"
              params={{ type: t.slug }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-elegant hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={t.image}
                  alt={t.name}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.short}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
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

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Customer Voices</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-balance">
            What our customers say.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="relative rounded-xl border border-border bg-card p-8 shadow-card">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/20" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                — {t.name}
              </figcaption>
            </figure>
          ))}
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
