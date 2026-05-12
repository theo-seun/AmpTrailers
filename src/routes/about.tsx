import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, Hammer, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AMP Trailers of Florida" },
      { name: "description", content: "Family-owned trailer manufacturer in DeLand, Florida. Building quality, custom trailers since 1983." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Our Story</div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-balance">Built by a family. Trusted by Florida.</h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/80 text-lg">
            Since 1983, AMP Trailers has been welding, fabricating, and finishing trailers right here in DeLand. Four decades later we're still family-run — and still answering the phone ourselves.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 prose-invert">
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">Forty-three years and counting.</h2>
            <p className="text-muted-foreground leading-relaxed">
              AMP started in 1983 with a simple idea: build trailers that hold up, and treat people the way you'd want to be treated. We've grown a lot since then, but those two rules haven't changed. Every trailer that rolls off our lot is built by people who know your name.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold mb-4">Our mission.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Manufacture the most durable, dependable trailers in Florida — and back them up with the kind of personal service that's becoming hard to find. When you buy from AMP, you get a trailer and a relationship.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 mt-16">
          {[
            { icon: Award, title: "Expertise", body: "Custom builds, repairs, and parts — all under one roof." },
            { icon: Heart, title: "Family-Owned", body: "Three generations of trailer-makers and counting." },
            { icon: Hammer, title: "Quick Turnarounds", body: "We respect your timeline. Repairs done when promised." },
            { icon: Users, title: "Fair Pricing", body: "Honest quotes, no surprises, no upsell pressure." },
          ].map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-card p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-3">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-lg">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-gradient-hero p-10 text-center shadow-elegant">
          <h2 className="text-3xl font-display font-bold text-primary-foreground">Ready to work with us?</h2>
          <p className="mt-3 text-primary-foreground/80">Tell us about your project and we'll put together a quote.</p>
          <Link to="/contact" className="mt-6 inline-flex rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
