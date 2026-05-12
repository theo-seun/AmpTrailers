import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, Filter, Tag, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";
import { trailers } from "@/lib/trailers";

export const Route = createFileRoute("/sold-inventory")({
  head: () => ({
    meta: [
      { title: "Sold Inventory — AMP Trailers of Florida" },
      { name: "description", content: "Recently sold trailers at AMP Trailers — see the quality builds we've delivered to happy customers." },
    ],
  }),
  component: SoldInventory,
});

type Listing = {
  stock: string;
  year: number;
  title: string;
  category: string;
  slug: string;
  price: number;
  badges: string[];
  specs: string[];
};

const listings: Listing[] = [
  { stock: "18113", year: 2026, title: "Giddy Up USA 7X16 ADMIRAL Cargo / Enclosed", category: "Cargo", slug: "cargo", price: 7150, badges: ["Featured", "Sold"], specs: ["Tandem axle", "Charcoal/black-out package", "Electric brakes both axles"] },
  { stock: "128726", year: 2026, title: "Down 2 Earth 82x20 D2E EQ Equipment Trailer", category: "Equipment", slug: "equipment", price: 5600, badges: ["On Special", "Sold"], specs: ["HD channel frame", "(2) 7K axles w/ brakes", "Stand-up ramps"] },
  { stock: "12981", year: 2026, title: "GPS Trailers 82x16 Utility Trailer", category: "Utility", slug: "utility", price: 3700, badges: ["On Special", "Sold"], specs: ["(2) 3500lb axles", "Brakes on all wheels", "Treated wood floor"] },
  { stock: "10422", year: 2025, title: "Big Tex 14LX 14ft Dump Trailer", category: "Dump", slug: "dump", price: 11900, badges: ["Sold"], specs: ["Hydraulic scissor lift", "Tarp kit", "Combo gate"] },
  { stock: "29031", year: 2025, title: "AMP Custom 7x14 Landscape Trailer", category: "Landscape", slug: "landscape", price: 4250, badges: ["Featured", "Sold"], specs: ["Mesh sides", "Spring-assist gate", "Treated floor"] },
  { stock: "55411", year: 2025, title: "PJ 24ft Tilt Car Hauler", category: "Car Hauler", slug: "car-hauler", price: 8400, badges: ["Sold"], specs: ["Power tilt", "D-ring tie downs", "10K GVWR"] },
];

const categories = ["All", ...Array.from(new Set(listings.map((l) => l.category)))];

function SoldInventory() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(
    () => listings.filter((l) =>
      (cat === "All" || l.category === cat) &&
      (l.title.toLowerCase().includes(query.toLowerCase()) || l.stock.includes(query))
    ),
    [query, cat]
  );

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 grain text-white/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Recently Delivered</div>
          <h1 className="font-display text-6xl md:text-8xl tracking-wide">Sold Inventory</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 text-lg">
            A look at trailers that recently rolled off our lot. Don't see what you need? We probably have one just like it — or we'll build it.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-10 rounded-2xl border border-border bg-card p-5 shadow-card">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground">
            <Tag className="h-4 w-4 text-accent" />
            <span className="text-accent text-2xl font-display">{filtered.length}</span> units
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or stock #"
                className="w-full sm:w-72 pl-10 pr-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="appearance-none w-full sm:w-52 pl-10 pr-8 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((l, i) => {
            const trailer = trailers.find((t) => t.slug === l.slug);
            return (
              <motion.article
                key={l.stock}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {trailer && (
                    <img src={trailer.image} alt={l.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {l.badges.map((b) => (
                      <span key={b} className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${b === "Sold" ? "bg-destructive text-destructive-foreground" : b === "Featured" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                        {b}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-3 left-3 text-xs text-white/90 font-mono">Stock #: {l.stock}</div>
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-widest text-accent font-bold">New {l.year} · {l.category}</div>
                  <h3 className="mt-1.5 font-display text-xl tracking-wide leading-tight">{l.title}</h3>
                  <div className="mt-3 text-2xl font-display text-destructive">${l.price.toLocaleString()}.00</div>
                  <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                    {l.specs.map((s) => <li key={s}>• {s}</li>)}
                  </ul>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent group-hover:gap-2.5 transition-all">
                    Find a similar build <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">No matches. Try clearing filters.</div>
        )}
      </section>
    </>
  );
}
