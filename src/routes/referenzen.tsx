import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: "Referenzen — Echte Marken, echte Ergebnisse | hey contact heroes" },
      { name: "description", content: "Case Studies aus E-Commerce, Travel, Banking und mehr — messbare Erfolge unserer Kunden." },
      { property: "og:title", content: "Referenzen — hey contact heroes" },
      { property: "og:description", content: "Wie wir Marken wie NorthCommerce, DesignPro & Lumen Digital zu besserem Service verholfen haben." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80" },
    ],
  }),
  component: Page,
});

const cases = [
  { brand: "NorthCommerce GmbH", industry: "E-Commerce", result: "+300%", metric: "Kundenzufriedenheit", text: "Wir haben das Service-Volumen verdreifacht und gleichzeitig den NPS auf +75 gesteigert.", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80" },
  { brand: "DesignPro", industry: "D2C Lifestyle", result: "−54%", metric: "Bearbeitungszeit", text: "Skalierung von 5 auf 80 Heroes in 6 Wochen — ohne Qualitätsverlust.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
  { brand: "NorthBrands AG", industry: "Retail-Konzern", result: "98%", metric: "First-Contact-Resolution", text: "Mit KI-Co-Piloten und neuer Wissensdatenbank zum Best-in-Class-Service.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" },
  { brand: "Lumen Digital", industry: "SaaS", result: "+42%", metric: "Conversion im Pre-Sales", text: "Live-Chat-Service mit Sales-DNA — ein Game-Changer für unsere Pipeline.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { brand: "Vitalis Health", industry: "Healthcare", result: "24/7", metric: "Patienten-Hotline", text: "Empathischer Service über alle Kanäle — patientenzentriert und DSGVO-konform.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
  { brand: "TechWave", industry: "FinTech", result: "−63%", metric: "Reklamationsquote", text: "Proaktiver Outbound-Service hat unsere Churn-Rate halbiert.", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80" },
];

const testimonials = [
  { q: "hey contact heroes hat unseren Kundenservice revolutioniert. Die Effizienz stieg um 40%.", n: "Alex Weber", r: "Head of Customer Care, NorthCommerce GmbH" },
  { q: "Endlich ein Partner, der wirklich versteht, was moderner Service bedeutet.", n: "Marco Schäfer", r: "COO, NorthBrands AG" },
  { q: "Die Skalierung von 5 auf 80 Agenten lief reibungslos. Wir würden es jederzeit wieder tun.", n: "Lena Brenner", r: "Co-Founderin, DesignPro" },
];

function Page() {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Referenzen"
          title="Echte Marken. Messbare Ergebnisse."
          subtitle="Über 500 erfolgreiche Projekte seit 2015 — eine Auswahl unserer Lieblings-Cases."
          crumbs={[{ label: "Referenzen" }]}
          image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80"
        />

        <section className="py-20 md:py-24">
          <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <div key={i} className="reveal bg-white border border-border rounded-2xl overflow-hidden card-hover" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="h-48 overflow-hidden">
                  <img src={c.img} alt={c.brand} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-7">
                  <p className="text-[12px] font-semibold text-primary uppercase tracking-wider">{c.industry}</p>
                  <h3 className="mt-2 text-[20px] font-bold text-heading">{c.brand}</h3>
                  <div className="mt-5 flex items-baseline gap-3">
                    <span className="font-display text-[40px] font-extrabold text-[color:var(--color-highlight)] leading-none">{c.result}</span>
                    <span className="text-[14px] text-light">{c.metric}</span>
                  </div>
                  <p className="mt-4 text-[14px] text-body italic leading-relaxed">"{c.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-alt py-16">
          <div className="container-x">
            <p className="text-center text-[13px] text-light uppercase tracking-widest mb-8">Über 500 Marken vertrauen uns</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {["NorthCommerce", "DesignPro", "NorthBrands AG", "TechWave", "BlueOcean", "Vitalis Health", "Lumen Digital", "Atrius Group"].map((b) => (
                <span key={b} className="text-[18px] font-display font-bold text-light/60 hover:text-primary transition-colors">{b}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto reveal">
              <p className="label-eyebrow mb-3">Stimmen</p>
              <h2 className="text-3xl md:text-[40px] font-bold text-heading">Was unsere Kunden sagen</h2>
            </div>
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="reveal relative bg-white border border-border rounded-2xl p-9" style={{ borderLeft: "4px solid var(--color-primary)", transitionDelay: `${i * 80}ms` }}>
                  <Quote className="absolute top-4 right-5 text-primary/15" size={56} />
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, k) => <Star key={k} size={16} fill="var(--color-highlight)" stroke="var(--color-highlight)" />)}
                  </div>
                  <p className="text-[16px] italic text-body leading-relaxed">"{t.q}"</p>
                  <div className="mt-6 pt-5 border-t border-border">
                    <div className="font-bold text-[15px] text-heading">{t.n}</div>
                    <div className="text-[13px] text-light mt-0.5">{t.r}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gradient-brand py-20 text-white">
          <div className="container-x text-center">
            <h2 className="text-3xl md:text-[40px] font-bold">Werden Sie unser nächster Erfolgs-Case.</h2>
            <Link to="/kontakt" className="inline-flex items-center gap-2 mt-8 bg-white text-primary rounded-full h-12 px-7 font-semibold hover:bg-[color:var(--color-bg-alt)] transition-colors">
              Projekt anfragen <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
