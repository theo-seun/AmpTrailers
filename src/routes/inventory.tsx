import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { trailers } from "@/lib/trailers";

export const Route = createFileRoute("/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory — AMP Trailers of Florida" },
      { name: "description", content: "Browse our full lineup of landscape, cargo, dump, equipment, utility, tiny home, and car hauler trailers." },
    ],
  }),
  component: Inventory,
});

function Inventory() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Inventory</div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-balance">Our Trailer Lineup</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Every trailer is built in DeLand with the same care we'd put into our own. Pick a category to explore details, features, and request a quote.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trailers.map((t) => (
            <Link
              key={t.slug}
              to="/trailers/$type"
              params={{ type: t.slug }}
              className="group rounded-xl border border-border bg-card overflow-hidden shadow-card transition-all hover:shadow-elegant hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={t.image} alt={t.name} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.short}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    View details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">In Stock</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
