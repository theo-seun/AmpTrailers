import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-accent font-display font-bold text-lg">A</div>
              <div className="font-display font-bold tracking-tight">AMP TRAILERS</div>
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Family-owned manufacturer of premium custom trailers in DeLand, Florida. Building quality you can trust since 1983.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/inventory" className="hover:text-accent transition-colors">Inventory</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4">Visit Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" /><span>421 N Spring Garden Ave<br />DeLand, FL 32720</span></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" /><a href="mailto:sales@amptrailers.com" className="hover:text-accent">sales@amptrailers.com</a></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" /><span>Mon–Fri · 8am–5pm</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-xs text-primary-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} AMP Trailers of Florida. All rights reserved.</div>
          <div>Built with pride in DeLand, FL.</div>
        </div>
      </div>
    </footer>
  );
}
