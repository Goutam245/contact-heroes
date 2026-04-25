import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShoppingBag, HeartPulse, Banknote, Plane, Factory, Building2,
  Lightbulb, GraduationCap, ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/branchen")({
  head: () => ({
    meta: [
      { title: "Branchenlösungen — Maßgeschneiderter Service für Ihre Industrie | hey contact heroes" },
      { name: "description", content: "E-Commerce, Healthcare, Finance, Travel, Industrie und mehr — wir kennen die Anforderungen Ihrer Branche." },
      { property: "og:title", content: "Branchenlösungen — hey contact heroes" },
      { property: "og:description", content: "Spezialisierter Kundenservice für 8 Kernbranchen — von E-Commerce bis Public Sector." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80" },
    ],
  }),
  component: Page,
});

const industries = [
  { icon: ShoppingBag, title: "E-Commerce & Retail", text: "Bestellservice, Reklamation, Retoure, Pre-Sales — von Marketplace bis D2C.", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80", clients: "120+ Brands" },
  { icon: HeartPulse, title: "Healthcare & Pharma", text: "Patientenkommunikation, Termin- und Studienmanagement, Apotheken-Hotlines.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", clients: "30+ Provider" },
  { icon: Banknote, title: "Banking & FinTech", text: "Kundenservice, Onboarding, KYC-Prozesse und Mahnwesen — BaFin-konform.", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80", clients: "15+ Banken" },
  { icon: Plane, title: "Travel & Hospitality", text: "Buchung, Umbuchung, Notfall-Hotlines, Loyalty-Programm-Service.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80", clients: "40+ Travel Brands" },
  { icon: Factory, title: "Industrie & Mobility", text: "B2B-Service, Ersatzteilbestellung, technischer Support, Field-Service-Dispatching.", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", clients: "25+ OEMs" },
  { icon: Building2, title: "Public Sector", text: "Bürgerservice, Hotlines für Kommunen, Krisen- und Krisenstäbe.", img: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&q=80", clients: "10+ Kommunen" },
  { icon: Lightbulb, title: "Energie & Utilities", text: "Tarifberatung, Zählerstand, Umzugsservice, Smart-Meter-Onboarding.", img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80", clients: "12+ EVUs" },
  { icon: GraduationCap, title: "EdTech & Bildung", text: "Student Success, Bewerbungs- und Beratungs-Hotlines, Tutoring-Support.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80", clients: "20+ Plattformen" },
];

function Page() {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Branchenlösungen"
          title="Service, der Ihre Branche versteht."
          subtitle="Wir arbeiten täglich für Marken aus E-Commerce, Healthcare, Finance, Travel und Industrie. Tonalität, Compliance und Prozesse — alles branchenspezifisch."
          crumbs={[{ label: "Branchenlösungen" }]}
          image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
        />

        <section className="py-20 md:py-24">
          <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="reveal bg-white border border-border rounded-2xl overflow-hidden card-hover" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="h-40 overflow-hidden relative">
                    <img src={b.img} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    <div className="absolute top-3 left-3 bg-white rounded-lg p-2">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <span className="absolute bottom-3 left-3 text-white text-[12px] font-semibold uppercase tracking-wider">{b.clients}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[18px] font-bold text-heading">{b.title}</h3>
                    <p className="mt-2 text-[14px] text-light leading-relaxed">{b.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-alt py-20 md:py-24">
          <div className="container-x grid lg:grid-cols-3 gap-10">
            {[
              { n: "+42%", t: "Conversion E-Commerce", d: "Pre-Sales-Chat für eine D2C-Marke." },
              { n: "−63%", t: "Bearbeitungszeit", d: "Mit KI-Co-Piloten im Banking-Service." },
              { n: "98%", t: "First-Contact-Resolution", d: "Travel-Brand mit Premium-Tarif." },
            ].map((m, i) => (
              <div key={i} className="reveal text-center">
                <div className="font-display text-[64px] font-extrabold text-[color:var(--color-highlight)] leading-none">{m.n}</div>
                <h3 className="mt-3 text-[20px] font-bold text-heading">{m.t}</h3>
                <p className="mt-2 text-[15px] text-light">{m.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="gradient-brand py-20 text-white">
          <div className="container-x text-center">
            <h2 className="text-3xl md:text-[40px] font-bold">Ihre Branche fehlt?</h2>
            <p className="mt-4 text-[18px] text-white/85 max-w-xl mx-auto">Wir lieben Spezialfälle. Lassen Sie uns über Ihren Use-Case sprechen.</p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 mt-8 bg-white text-primary rounded-full h-12 px-7 font-semibold hover:bg-[color:var(--color-bg-alt)] transition-colors">
              Branche anfragen <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
