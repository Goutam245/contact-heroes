import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy text-white border-t-[3px] border-primary">
      <div className="container-x py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="hey contact heroes" className="h-10 w-auto bg-white rounded-md p-1" />
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Ihr Partner für modernen Kundenservice
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook" className="text-white hover:text-primary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[15px] font-bold text-white mb-5">Leistungen</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to={"/leistungen" as any} className="hover:text-white">Inbound Kundenservice</Link></li>
              <li><Link to={"/leistungen" as any} className="hover:text-white">Outbound & Vertrieb</Link></li>
              <li><Link to={"/leistungen" as any} className="hover:text-white">Back-Office-Services</Link></li>
              <li><Link to={"/leistungen" as any} className="hover:text-white">KI & Automatisierung</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-bold text-white mb-5">Unternehmen</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to={"/ueber-uns" as any} className="hover:text-white">Über uns</Link></li>
              <li><Link to={"/warum-hch" as any} className="hover:text-white">Warum HCH</Link></li>
              <li><Link to={"/referenzen" as any} className="hover:text-white">Referenzen</Link></li>
              <li><Link to={"/karriere" as any} className="hover:text-white">Karriere</Link></li>
              <li><Link to={"/insights" as any} className="hover:text-white">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-bold text-white mb-5">Kontakt</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Am Kaiserkai 45, 20457 Hamburg</li>
              <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> +49 (0)40 – 30 09 6170</li>
              <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" /> <a href="mailto:jobs@hey-contact-heroes.de" className="text-primary hover:underline">jobs@hey-contact-heroes.de</a></li>
            </ul>

            <div className="mt-6">
              <p className="text-[13px] text-white mb-2">Newsletter:</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  className="flex-1 h-10 px-4 text-sm bg-[#1E3A5F] text-white placeholder:text-white/40 rounded-l-lg outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="h-10 w-10 bg-primary hover:bg-[color:var(--color-primary-hover)] rounded-r-lg flex items-center justify-center transition-colors" aria-label="Abonnieren">
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-sm text-white/50">
          <div>
            © 2025 hey contact heroes GmbH · <a href="#" className="hover:text-white">Impressum</a> · <a href="#" className="hover:text-white">Datenschutz</a> · <a href="#" className="hover:text-white">AGB</a>
          </div>
          <div>Made with ❤️ in Hamburg 🇩🇪</div>
        </div>
      </div>
    </footer>
  );
}
