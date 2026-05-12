import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "@/assets/amp-logo.png";

const nav = [
  { to: "/financing", label: "Financing" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const inventoryLinks = [
  { to: "/inventory", label: "All Inventory", description: "Browse every trailer we carry" },
  { to: "/sold-inventory", label: "Sold Inventory", description: "Recently delivered builds" },
] as const;

function InventoryDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition-all ${open ? "text-accent bg-white/5" : "text-primary-foreground/80 hover:text-accent hover:bg-white/5"}`}
      >
        Inventory
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full left-0 mt-2 w-56 rounded-xl border border-white/10 bg-primary/95 backdrop-blur-md shadow-elegant overflow-hidden z-50"
        >
          {inventoryLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="group flex items-start gap-3 px-4 py-3.5 hover:bg-white/10 transition-colors"
            >
              <div>
                <div className="text-sm font-semibold text-primary-foreground group-hover:text-accent transition-colors">{l.label}</div>
                <div className="text-xs text-primary-foreground/50 mt-0.5">{l.description}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-primary/95 backdrop-blur-md shadow-elegant" : "bg-primary"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="h-12 w-16 rounded-md bg-white p-1 shadow-card transition-transform group-hover:-rotate-3">
            <img src={logo} alt="AMP Trailers" className="h-full w-full object-contain" />
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-2xl text-primary-foreground tracking-wider">AMP TRAILERS</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-accent">Of Florida · Est. 1983</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <InventoryDropdown />
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-accent bg-white/5" }}
              inactiveProps={{ className: "text-primary-foreground/80 hover:text-accent hover:bg-white/5" }}
              className="px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition-all"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:3867343674"
            className="flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-accent transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            (386) 734-3674
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant"
          >
            Get a Quote <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-primary animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col p-4 gap-1">
            <Link
              to="/inventory"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-primary-foreground py-3 px-2 rounded hover:bg-white/5"
            >
              All Inventory
            </Link>
            <Link
              to="/sold-inventory"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70 py-3 px-2 rounded hover:bg-white/5"
            >
              Sold Inventory
            </Link>
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-primary-foreground py-3 px-2 rounded hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-md bg-accent px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-accent-foreground"
              >
                Get a Quote
              </Link>
              <a
                href="tel:3867343674"
                className="rounded-md border border-white/20 px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Call (386) 734-3674
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
