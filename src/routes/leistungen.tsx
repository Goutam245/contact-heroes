import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone, MessageSquare, Mail, TrendingUp, FileText, Cpu, Headphones,
  ShieldCheck, Clock, Globe, BarChart3, ArrowRight, Check,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — Inbound, Outbound, KI & Back-Office | hey contact heroes" },
      { name: "description", content: "Unser komplettes Leistungsportfolio: Inbound-Service, Outbound-Vertrieb, Back-Office und KI-Automatisierung — 100% remote, mehrsprachig, messbar." },
      { property: "og:title", content: "Leistungen — hey contact heroes" },
      { property: "og:description", content: "Inbound, Outbound, Back-Office, KI-Automation. Skalierbarer Kundenservice für ambitionierte Marken." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80" },
    ],
  }),
  component: Page,
});

const services = [
  {
    icon: Phone, color: "var(--color-primary)",
    title: "Inbound Kundenservice",
    text: "Erstklassige Bearbeitung jedes Kundenkontakts — telefonisch, per Chat oder E-Mail. 24/7, mehrsprachig, mit messbarer NPS-Wirkung.",
    points: ["Telefon, Live-Chat, E-Mail, Social", "Multilingual: DE, EN, FR, NL, PL", "Service-Level ≥ 95%", "CRM- und Helpdesk-Integration"],
  },
  {
    icon: TrendingUp, color: "var(--color-highlight)",
    title: "Outbound & Vertrieb",
    text: "Aktive Kundenansprache, Lead-Qualifizierung und Sales-Kampagnen mit Conversion-First-Mindset.",
    points: ["B2B & B2C Outbound", "Lead Generation & Nurturing", "Up- und Cross-Selling", "Termin- und Demo-Buchung"],
  },
  {
    icon: FileText, color: "var(--color-accent-pink)",
    title: "Back-Office Services",
    text: "Wir entlasten Ihre internen Teams bei Datenpflege, Auftragsbearbeitung und administrativen Routineprozessen.",
    points: ["Auftrags- & Reklamationsmanagement", "Stammdatenpflege", "Rechnungs- und Zahlungsprüfung", "Dokumenten-Workflows"],
  },
  {
    icon: Cpu, color: "var(--color-primary)",
    title: "KI & Automatisierung",
    text: "Voice-Bots, intelligente Routings und LLM-gestützte Co-Piloten — wir verbinden Mensch und Maschine optimal.",
    points: ["Voice- und Chat-Bots", "Sentiment- & Topic-Analyse", "Agent-Assist mit GPT", "Smart Routing & Forecasting"],
  },
  {
    icon: Headphones, color: "var(--color-highlight)",
    title: "Premium Concierge",
    text: "Hochwertige White-Glove-Betreuung für High-End-Marken, Luxury Brands und VIP-Kundensegmente.",
    points: ["Dedizierte Service-Heroes", "Persönliche Tonalität", "Konzierge-Workflows", "Markenkonforme Kommunikation"],
  },
  {
    icon: ShieldCheck, color: "var(--color-accent-pink)",
    title: "Compliance & Qualität",
    text: "DSGVO, ISO 27001, BaFin-konform. Transparente QA-Prozesse und Live-Monitoring inklusive.",
    points: ["DSGVO & ISO 27001", "QA-Coaching & Calibration", "Live-Dashboards", "Audit-fähige Reportings"],
  },
];

function Page() {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Leistungen"
          title="Modernster Kundenservice. Komplett aus einer Hand."
          subtitle="Von Inbound bis KI-Automatisierung — wir kombinieren empathische Service-Heroes mit moderner Technologie zu messbaren Ergebnissen."
          crumbs={[{ label: "Leistungen" }]}
          image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80"
        />

        <section className="py-20 md:py-24">
          <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="reveal bg-white border border-border rounded-2xl p-8 card-hover" style={{ borderTop: `4px solid ${s.color}`, transitionDelay: `${i * 60}ms` }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[color:var(--color-primary-light)]">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-[20px] font-bold mt-5 text-heading">{s.title}</h3>
                  <p className="mt-3 text-[15px] text-light leading-relaxed">{s.text}</p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[14px] text-body">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Process */}
        <section className="bg-alt py-20 md:py-24">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto reveal">
              <p className="label-eyebrow mb-3">Vorgehen</p>
              <h2 className="text-3xl md:text-[40px] font-bold text-heading">In 4 Schritten zum Live-Service</h2>
              <p className="mt-4 text-[18px] text-light">Strukturierter Onboarding-Prozess — typischerweise 4–6 Wochen vom Kickoff bis zum Live-Gang.</p>
            </div>
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { n: "01", t: "Discovery", d: "Wir analysieren Ihre Volumina, Tonalität und Service-Ziele." },
                { n: "02", t: "Setup & Training", d: "Wir bauen Wissensdatenbank und schulen Ihre Service-Heroes." },
                { n: "03", t: "Pilot & Tuning", d: "Live-Pilot mit täglichen Calibrations und KPI-Reviews." },
                { n: "04", t: "Skalierung", d: "Volle Lastübernahme inkl. kontinuierlichem QA-Coaching." },
              ].map((s, i) => (
                <div key={i} className="reveal bg-white rounded-2xl p-7 border border-border" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="font-display text-[44px] font-extrabold text-primary leading-none">{s.n}</div>
                  <h3 className="mt-3 text-[18px] font-bold text-heading">{s.t}</h3>
                  <p className="mt-2 text-[14px] text-light leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="py-20 md:py-24">
          <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <p className="label-eyebrow mb-3">Technologie</p>
              <h2 className="text-3xl md:text-[40px] font-bold text-heading">Wir sprechen jedes System.</h2>
              <p className="mt-5 text-[17px] text-body leading-relaxed">
                Ob Salesforce, Zendesk, Genesys, HubSpot oder Microsoft Dynamics — unser Tech-Team integriert sich nahtlos in Ihre bestehende Landschaft. Wo nichts steht, bauen wir mit Ihnen den passenden Stack auf.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Salesforce", "Zendesk", "Genesys", "HubSpot", "Dynamics 365", "Freshworks", "Twilio", "OpenAI", "AWS Connect"].map((t) => (
                  <span key={t} className="px-4 py-2 rounded-full bg-[color:var(--color-bg-alt)] text-[13px] font-medium text-body border border-border">{t}</span>
                ))}
              </div>
            </div>
            <div className="reveal grid grid-cols-2 gap-4">
              {[
                { icon: Globe, t: "Mehrsprachig", d: "5+ Sprachen nativ" },
                { icon: Clock, t: "24/7", d: "Rund-um-die-Uhr-Verfügbarkeit" },
                { icon: BarChart3, t: "Live-KPIs", d: "Echtzeit-Reporting im Dashboard" },
                { icon: ShieldCheck, t: "Sicher", d: "DSGVO & ISO 27001" },
              ].map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="bg-white border border-border rounded-2xl p-6 card-hover">
                    <Icon className="text-primary" size={28} />
                    <h4 className="mt-4 text-[16px] font-bold text-heading">{b.t}</h4>
                    <p className="mt-1 text-[13px] text-light">{b.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-brand py-20 text-white">
          <div className="container-x text-center">
            <h2 className="text-3xl md:text-[40px] font-bold">Bereit für besseren Kundenservice?</h2>
            <p className="mt-4 text-[18px] text-white/85 max-w-xl mx-auto">Lassen Sie uns über Ihre Use-Cases sprechen — unverbindlich, kostenfrei, in 30 Minuten.</p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 mt-8 bg-white text-primary rounded-full h-12 px-7 font-semibold hover:bg-[color:var(--color-bg-alt)] transition-colors">
              Beratung vereinbaren <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
