import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Facebook, ArrowRight } from "lucide-react";
import logo from "@/assets/amp-logo.png";

const trailerLinks = [
  { to: "/trailers/$type", params: { type: "dump" }, label: "Dump Trailers" },
  { to: "/trailers/$type", params: { type: "cargo" }, label: "Cargo Trailers" },
  { to: "/trailers/$type", params: { type: "equipment" }, label: "Equipment" },
  { to: "/trailers/$type", params: { type: "car-hauler" }, label: "Car Haulers" },
  { to: "/trailers/$type", params: { type: "utility" }, label: "Utility Trailers" },
] as const;

const links = [
  { to: "/", label: "Home" },
  { to: "/inventory", label: "All Inventory" },
  { to: "/financing", label: "Financing" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-primary text-primary-foreground mt-24">
      {/* Hero CTA strip */}
      <div className="relative bg-gradient-flag">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-3">Let's Build Something</div>
              <h2 className="font-display text-4xl md:text-6xl tracking-wide text-balance">
                Ready to roll? <span className="text-accent">We're ready to build.</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-4 font-bold uppercase tracking-wider text-accent-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:3867343674" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-4 font-bold uppercase tracking-wider text-primary-foreground backdrop-blur transition-colors hover:bg-white/15">
                <Phone className="h-4 w-4" /> (386) 734-3674
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-3 shadow-elegant inline-block">
              <img src={logo} alt="AMP Trailers" className="h-24 w-auto object-contain" />
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
              Family-owned manufacturer of premium custom trailers since 1983.
            </p>
          </div>

          {/* Trailers */}
          <div>
            <h4 className="font-display text-xl tracking-wider text-accent mb-5">Trailers</h4>
            <ul className="space-y-2.5 text-sm">
              {trailerLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} params={l.params} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl tracking-wider text-accent mb-5">Links</h4>
            <ul className="space-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl tracking-wider text-accent mb-5">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                <a href="tel:3867343674" className="hover:text-accent transition-colors">(386) 734-3674</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                <a href="mailto:sales@amptrailers.com" className="hover:text-accent transition-colors break-all">sales@amptrailers.com</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                <span>421 N Spring Garden Ave<br />DeLand, FL 32720</span>
              </li>
              <li className="flex gap-3">
                <Facebook className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                <a href="#" className="hover:text-accent transition-colors">Follow us</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xl tracking-wider text-accent mb-5">Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-primary-foreground/70">Mon – Fri</span>
                <span className="font-semibold">8:00a – 5:00p</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-primary-foreground/70">Saturday</span>
                <span className="font-semibold">9:00a – 2:00p</span>
              </li>
              <li className="flex justify-between">
                <span className="text-primary-foreground/70">Sunday</span>
                <span className="font-semibold text-accent">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-xs text-primary-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} AMP Trailers of Florida. All rights reserved.</div>
          <div>Built with pride in DeLand, FL · 🇺🇸</div>
        </div>
      </div>
    </footer>
  );
}
