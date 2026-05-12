import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { findTrailer, trailers, type TrailerCategory as TC } from "@/lib/trailers";

export const Route = createFileRoute("/trailers/$type")({
  head: ({ params }) => {
    const t = findTrailer(params.type);
    return {
      meta: [
        { title: t ? `${t.name} — AMP Trailers of Florida` : "Trailers — AMP Trailers of Florida" },
        { name: "description", content: t?.description ?? "Custom trailers built in DeLand, FL." },
        ...(t ? [{ property: "og:image" as const, content: t.image }] : []),
      ],
    };
  },
  loader: ({ params }): { trailer: TC } => {
    const trailer = findTrailer(params.type);
    if (!trailer) throw notFound();
    return { trailer };
  },
  component: TrailerCategory,
});

function TrailerCategory() {
  const { trailer } = Route.useLoaderData();
  const others = trailers.filter((t) => t.slug !== trailer.slug).slice(0, 3);

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/inventory" className="text-xs uppercase tracking-[0.25em] text-accent font-semibold hover:underline">
            ← Back to inventory
          </Link>
          <h1 className="mt-4 text-5xl md:text-6xl font-display font-bold text-balance">{trailer.name}</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 text-lg">{trailer.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
            <img src={trailer.image} alt={trailer.name} width={1024} height={768} className="w-full aspect-[4/3] object-cover" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Built for the work</div>
            <h2 className="text-3xl font-display font-bold mb-6">Standard features.</h2>
            <ul className="space-y-3">
              {trailer.features.map((f: string) => (
                <li key={f} className="flex gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl bg-muted p-6">
              <div className="font-display font-bold text-lg">Need something specific?</div>
              <p className="mt-1 text-sm text-muted-foreground">Custom builds are our specialty. Tell us what you need and we'll quote it.</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground">
                Request a custom quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-display font-bold mb-10">Other trailers in our lineup.</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((t) => (
              <Link key={t.slug} to="/trailers/$type" params={{ type: t.slug }} className="group rounded-xl border border-border bg-card overflow-hidden shadow-card transition-all hover:shadow-elegant hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={t.image} alt={t.name} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold">{t.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{t.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
