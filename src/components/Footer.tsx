import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import logoLight from "../assets/ig-logo-lightmode.png";
import logoDark from "../assets/ig-logo-darkmode.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoLight} alt="Indian Graphics" className="h-8 dark:hidden" />
              <img src={logoDark} alt="Indian Graphics" className="hidden h-8 dark:block" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Hyderabad's trusted partner for premium printing, branding, signage, and packaging.
            </p>
            <div className="mt-5 flex gap-3 text-muted-foreground">
              <a href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-foreground"><Facebook size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin size={18} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                ["/about", "About"],
                ["/services", "Services"],
                ["/portfolio", "Portfolio"],
                ["/industries", "Industries"],
                ["/blog", "Blog"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-foreground">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Offset Printing", "Digital Printing", "Packaging", "Signage", "Branding", "Large Format"].map(
                (s) => (
                  <li key={s}>{s}</li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5" /> Banjara Hills, Hyderabad, Telangana, India</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail size={16} /> hello@indiangraphics.in</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Indian Graphics. All rights reserved.</p>
          <p>Crafted in Hyderabad.</p>
        </div>
      </div>
    </footer>
  );
}
