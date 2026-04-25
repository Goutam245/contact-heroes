import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Cpu, BarChart3, ShieldCheck, Zap, Users, ArrowRight, Check, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/warum-hch")({
  head: () => ({
    meta: [
      { title: "Warum HCH — Unsere 6 Stärken | hey contact heroes" },
      { name: "description", content: "100% remote, KI-gestützt, transparent: Die 6 Gründe, warum führende Marken auf hey contact heroes setzen." },
      { property: "og:title", content: "Warum HCH — hey contact heroes" },
      { property: "og:description", content: "6 handfeste Gründe für hey contact heroes — und ein klarer Vergleich gegenüber klassischen Call-Centern." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" },
    ],
  }),
  component: Page,
});

const usps = [
  { icon: Globe, t: "100% Remote", d: "Talente aus ganz Europa — keine Standortgrenzen, maximale Flexibilität." },
  { icon: Cpu, t: "KI-gestützt", d: "GPT-Co-Piloten, Smart Routing und Sentiment-Analyse — eingebaut, nicht aufgeklebt." },
  { icon: BarChart3, t: "Transparent", d: "Live-Dashboards, KPIs in Echtzeit — Sie sehen alles, jederzeit." },
  { icon: ShieldCheck, t: "Compliance-First", d: "DSGVO, ISO 27001, BaFin — Sicherheit ist die Basis, nicht der Bonus." },
  { icon: Zap, t: "Schnell skaliert", d: "Von 5 auf 80 Heroes in 6 Wochen — bewiesen, nicht versprochen." },
  { icon: Users, t: "Hero-Mindset", d: "Wir investieren mehr in Training & Coaching als jeder klassische BPO-Anbieter." },
];

function Page() {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Warum HCH"
          title="Sechs gute Gründe. Eine klare Entscheidung."
          subtitle="Wir sind kein klassisches Call-Center. Wir sind eine Tech-Service-Plattform mit Heroes im Zentrum."
          crumbs={[{ label: "Warum HCH" }]}
          image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80"
        />

        <section className="py-20 md:py-24">
          <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usps.map((u, i) => {
              const Icon = u.icon;
              return (
                <div key={i} className="reveal bg-white border border-border rounded-2xl p-8 card-hover" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[color:var(--color-primary-light)]">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-[20px] font-bold mt-5 text-heading">{u.t}</h3>
                  <p className="mt-3 text-[15px] text-light leading-relaxed">{u.d}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-alt py-20 md:py-24">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto reveal">
              <p className="label-eyebrow mb-3">Im Vergleich</p>
              <h2 className="text-3xl md:text-[40px] font-bold text-heading">HCH vs. klassisches Call-Center</h2>
            </div>

            <div className="mt-12 reveal overflow-x-auto rounded-2xl border border-border bg-white">
              <table className="w-full text-left min-w-[640px]">
                <thead>
                  <tr className="border-b border-border bg-[color:var(--color-primary-light)]">
                    <th className="py-4 px-6 text-[14px] font-semibold text-heading">Kriterium</th>
                    <th className="py-4 px-6 text-[14px] font-semibold text-primary">hey contact heroes</th>
                    <th className="py-4 px-6 text-[14px] font-semibold text-light">Klassisches Call-Center</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {[
                    ["Standort", "100% Remote, EU-weit", "Großraum-Büros"],
                    ["Onboarding-Zeit", "4–6 Wochen", "3–6 Monate"],
                    ["KI-Integration", "Native, ab Tag 1", "Nicht vorhanden"],
                    ["Reporting", "Live-Dashboard", "Monatliche PDFs"],
                    ["Mitarbeiterfluktuation", "< 12% p.a.", "≥ 35% p.a."],
                    ["Vertragsmodell", "Flexibel & monatlich", "12–24 Monate Bindung"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="py-4 px-6 font-medium text-heading">{row[0]}</td>
                      <td className="py-4 px-6"><span className="inline-flex items-center gap-2 text-body"><Check className="text-primary" size={16} />{row[1]}</span></td>
                      <td className="py-4 px-6"><span className="inline-flex items-center gap-2 text-light"><X className="text-[color:var(--color-accent-pink)]" size={16} />{row[2]}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="gradient-brand py-20 text-white">
          <div className="container-x text-center">
            <h2 className="text-3xl md:text-[40px] font-bold">Überzeugt? Lassen Sie uns reden.</h2>
            <Link to="/kontakt" className="inline-flex items-center gap-2 mt-8 bg-white text-primary rounded-full h-12 px-7 font-semibold hover:bg-[color:var(--color-bg-alt)] transition-colors">
              Erstgespräch buchen <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
