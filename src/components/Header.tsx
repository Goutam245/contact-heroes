import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, Menu, X, Linkedin, Instagram, Facebook, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);

  const nav: { to: string; label: string; caret?: boolean }[] = [
    { to: "/", label: "Startseite" },
    { to: "/leistungen", label: "Leistungen", caret: true },
    { to: "/branchen", label: "Branchenlösungen", caret: true },
    { to: "/ueber-uns", label: "Über uns" },
    { to: "/warum-hch", label: "Warum HCH" },
    { to: "/referenzen", label: "Referenzen" },
    { to: "/karriere", label: "Karriere" },
    { to: "/insights", label: "Insights" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999]">
      {/* Top info bar — always visible */}
      <div className="bg-primary text-primary-foreground h-10">
        <div className="max-w-[1400px] mx-auto h-10 flex items-center justify-between px-6 md:px-10 text-[13px]">
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+4940300961700" className="flex items-center gap-2 hover:opacity-80">
              <Phone className="w-3.5 h-3.5" /> +49 (0)40 – 30 09 6170
            </a>
            <span className="text-white/40">·</span>
            <a href="mailto:jobs@hey-contact-heroes.de" className="flex items-center gap-2 hover:opacity-80">
              <Mail className="w-3.5 h-3.5" /> jobs@hey-contact-heroes.de
            </a>
          </div>
          <div className="flex items-center gap-4 mx-auto md:mx-0">
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70"><Linkedin size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:opacity-70"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="hover:opacity-70"><Facebook size={18} /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-background border-b border-border shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1400px] mx-auto h-[72px] flex items-center justify-between gap-4 px-6 md:px-10">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="hey contact heroes" className="h-11 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to as any}
                className="text-[14px] font-medium text-body whitespace-nowrap px-2.5 py-2 rounded-md flex items-center gap-1 hover:bg-[color:var(--color-bg-alt)] hover:text-primary transition-colors"
                activeProps={{ className: "text-[14px] font-semibold text-primary whitespace-nowrap px-2.5 py-2 rounded-md flex items-center gap-1 bg-[color:var(--color-primary-light)]" }}
              >
                {item.label}
                {item.caret && <ChevronDown className="w-3 h-3" />}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link to={"/kontakt" as any} className="text-primary text-[14px] font-semibold px-3 py-2 hover:text-[color:var(--color-primary-hover)] whitespace-nowrap">
              Kontakt
            </Link>
            <Link to={"/kontakt" as any} className="btn-primary h-10 px-5 text-[14px] whitespace-nowrap">
              Jetzt beraten lassen →
            </Link>
          </div>

          {/* Tablet: show CTA + hamburger */}
          <div className="hidden md:flex lg:hidden items-center gap-3 shrink-0">
            <Link to={"/kontakt" as any} className="btn-primary h-10 px-5 text-[14px] whitespace-nowrap">
              Jetzt beraten lassen →
            </Link>
            <button onClick={() => setOpen(true)} aria-label="Menü">
              <Menu className="w-7 h-7 text-heading" />
            </button>
          </div>

          {/* Mobile: hamburger only */}
          <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Menü">
            <Menu className="w-7 h-7 text-heading" />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[10000] bg-navy text-white animate-fade-in lg:hidden flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <img src={logo} alt="hey contact heroes" className="h-10 w-auto bg-white rounded p-1" />
            <button onClick={() => setOpen(false)} aria-label="Schließen">
              <X className="w-7 h-7" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-stretch px-8 py-8 overflow-y-auto">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to as any}
                onClick={() => setOpen(false)}
                className="text-[22px] font-semibold py-4 border-b border-white/10 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="p-6 border-t border-white/10">
            <Link
              to={"/kontakt" as any}
              onClick={() => setOpen(false)}
              className="btn-primary w-full h-12 text-base"
            >
              Jetzt beraten lassen →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
