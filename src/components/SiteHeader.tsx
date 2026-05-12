import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/amp-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/inventory", label: "All Inventory" },
  { to: "/sold-inventory", label: "Sold Inventory" },
  { to: "/financing", label: "Financing" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

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
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-12 w-16 rounded-md bg-white p-1 shadow-card transition-transform group-hover:-rotate-3">
            <img src={logo} alt="AMP Trailers" className="h-full w-full object-contain" />
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-2xl text-primary-foreground tracking-wider">AMP TRAILERS</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-accent">Of Florida · Est. 1983</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
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
          <a
            href="tel:3867343674"
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" /> (386) 734-3674
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-primary animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col p-4 gap-1">
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
            <a
              href="tel:3867343674"
              className="mt-2 rounded-md bg-accent px-4 py-3 text-center text-sm font-bold text-accent-foreground"
            >
              Call (386) 734-3674
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
