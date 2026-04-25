import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Phone, TrendingUp, FileText, Cpu, Globe, BarChart3, Star, ArrowRight,
  Quote, Home, DollarSign, Users, ChevronLeft, ChevronRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CountUp } from "@/components/CountUp";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import heroes from "@/assets/heroes-duo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "hey contact heroes — Ihr Kundenservice. Unsere Leidenschaft." },
      { name: "description", content: "Deutschlands führendes Remote Call Center. Inbound, Outbound, Back-Office und KI — 100% remote, messbar erfolgreich." },
      { property: "og:title", content: "hey contact heroes — Modernster Kundenservice aus Deutschland" },
      { property: "og:description", content: "Inbound. Outbound. KI-gestützt. 100% remote. Verwandeln Sie jeden Kontakt in eine Chance." },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <BrandStrip />
        <Services />
        <Stats />
        <WhyHCH />
        <Testimonials />
        <CaseStudy />
        <Insights />
        <CareersTeaser />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ─────────────── HERO ─────────────── */
function Hero() {
  const words = ["Ihr", "Kundenservice."];
  const words2 = ["Unsere"];
  const words3 = ["Leidenschaft."];
  return (
    <section className="bg-navy relative overflow-hidden min-h-[88vh] flex items-center py-20">
      {/* subtle decoration */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-x relative z-10 grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/40 text-primary text-[13px] font-semibold animate-fade-up" style={{ animationDelay: "0.2s" }}>
            🏆 Deutschlands führendes Remote Call Center
          </div>

          <h1 className="font-display font-extrabold text-white mt-6 text-[42px] md:text-[56px] lg:text-[64px] leading-[1.05]">
            <span className="block">
              {words.map((w, i) => (
                <span key={i} className="inline-block animate-word-in mr-3" style={{ animationDelay: `${0.4 + i * 0.08}s` }}>{w}</span>
              ))}
            </span>
            <span className="block">
              {words2.map((w, i) => (
                <span key={i} className="inline-block animate-word-in mr-3" style={{ animationDelay: `${0.6 + i * 0.08}s` }}>{w}</span>
              ))}
            </span>
            <span className="block text-primary">
              {words3.map((w, i) => (
                <span key={i} className="inline-block animate-word-in" style={{ animationDelay: `${0.7 + i * 0.08}s` }}>{w}</span>
              ))}
            </span>
          </h1>

          <p className="mt-6 text-[18px] md:text-[20px] text-white/70 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.9s" }}>
            hey contact heroes verwandelt jeden Kontakt in eine Chance.
            Inbound. Outbound. KI-gestützt. 100% remote.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "1.05s" }}>
            <Link to={"/kontakt" as any} className="btn-primary h-13 px-8 text-base" style={{ height: 52 }}>
              Kostenlos beraten lassen →
            </Link>
            <Link to={"/leistungen" as any} className="inline-flex items-center justify-center rounded-full border-[1.5px] border-white/40 text-white px-8 text-base font-semibold hover:border-white transition-colors" style={{ height: 52 }}>
              Leistungen entdecken
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-4 animate-fade-up" style={{ animationDelay: "1.2s" }}>
            {[
              { icon: <Star className="text-primary" size={20} />, num: "4.9/5", label: "Kundenbewertung" },
              { icon: <BarChart3 className="text-primary" size={20} />, num: "500+", label: "Projekte" },
              { icon: <Globe className="text-primary" size={20} />, num: "Remote", label: "seit 2015" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                {t.icon}
                <div>
                  <div className="text-white font-bold text-[15px] leading-tight">{t.num}</div>
                  <div className="text-white/50 text-[13px]">{t.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: hero image with floating cards */}
        <div className="relative hidden lg:flex items-center justify-center min-h-[480px] animate-fade-up" style={{ animationDelay: "1.4s" }}>
          <img src={heroes} alt="Contact Heroes" className="w-[380px] max-w-full object-contain animate-hero-float drop-shadow-2xl" />

          <FloatingStat
            className="absolute top-4 -left-4"
            rotate={-6}
            delay="0.5s"
            num="98%"
            label="Kundenzufriedenheit"
            color="text-[color:var(--color-highlight)]"
          />
          <FloatingStat
            className="absolute bottom-12 -right-4"
            rotate={4}
            delay="1s"
            num="24/7"
            label="Verfügbarkeit"
            color="text-primary"
          />
          <FloatingStat
            className="absolute top-1/2 -right-8"
            rotate={-3}
            delay="1.5s"
            num="500+"
            label="Projekte"
            color="text-[color:var(--color-accent-pink)]"
          />
        </div>
      </div>
    </section>
  );
}

function FloatingStat({ className = "", rotate = 0, delay = "0s", num, label, color }: { className?: string; rotate?: number; delay?: string; num: string; label: string; color: string; }) {
  return (
    <div
      className={`bg-white rounded-2xl px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.20)] flex items-center gap-3 animate-hero-float ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, animationDelay: delay, animationDuration: "4s" }}
    >
      <div className={`font-display font-extrabold text-3xl ${color}`}>{num}</div>
      <div className="text-text-body text-[13px] max-w-[100px] leading-tight" style={{ color: "var(--color-text-body)" }}>{label}</div>
    </div>
  );
}

/* ─────────────── BRAND STRIP ─────────────── */
function BrandStrip() {
  const brands = ["NorthCommerce", "DesignPro", "NorthBrands AG", "TechWave", "BlueOcean", "Vitalis Health", "Lumen Digital", "Atrius Group"];
  return (
    <section className="bg-background border-y border-border py-6 overflow-hidden">
      <div className="container-x flex items-center gap-8">
        <p className="text-[13px] text-[color:var(--color-text-light)] whitespace-nowrap shrink-0">
          Vertraut von führenden Unternehmen:
        </p>
        <div className="overflow-hidden flex-1">
          <div className="flex animate-marquee whitespace-nowrap gap-8 w-max">
            {[...brands, ...brands].map((b, i) => (
              <span key={i} className="text-[14px] font-medium text-[color:var(--color-text-light)] px-8 py-2 rounded-full bg-[color:var(--color-bg-alt)]">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── SERVICES ─────────────── */
function Services() {
  const cards = [
    { color: "var(--color-primary)", icon: Phone, title: "Inbound Kundenservice", text: "Professionelle Bearbeitung jeder Anfrage per Telefon, Chat und E-Mail." },
    { color: "var(--color-highlight)", icon: TrendingUp, title: "Outbound & Vertrieb", text: "Aktive Kundenansprache, Lead-Generierung und Vertriebskampagnen." },
    { color: "var(--color-accent-pink)", icon: FileText, title: "Back-Office-Services", text: "Datenpflege, Auftragsverarbeitung und administrative Prozesse." },
    { color: "var(--color-primary)", icon: Cpu, title: "KI & Automatisierung", text: "Intelligente Bots und Automatisierung für maximale Effizienz." },
  ];
  return (
    <section className="bg-background py-24 md:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="label-eyebrow mb-4">Leistungen</p>
          <h2 className="font-bold text-3xl md:text-[40px] leading-tight text-heading">Unsere Leistungen im Überblick</h2>
          <p className="mt-4 text-[18px] text-light">Von der ersten Anfrage bis zur nachhaltigen Kundenbindung</p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="reveal bg-white border border-border rounded-2xl p-8 card-hover"
                style={{ borderTop: `4px solid ${c.color}`, transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "var(--color-primary-light)" }}>
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-[20px] font-bold mt-5 text-heading">{c.title}</h3>
                <p className="mt-3 text-[15px] text-light leading-relaxed">{c.text}</p>
                <Link to={"/leistungen" as any} className="inline-flex items-center gap-1 text-primary font-semibold text-[14px] mt-5 hover:underline">
                  Mehr erfahren →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── STATS ─────────────── */
function Stats() {
  const stats = [
    { end: 500, suffix: "+", label: "Erfolgreiche Projekte" },
    { end: 98, suffix: "%", label: "Kundenzufriedenheit" },
    { end: 24, suffix: "/7", label: "Serviceverfügbarkeit" },
    { end: 15, suffix: "+", label: "Jahre Erfahrung" },
  ];
  return (
    <section
      className="bg-navy py-28 md:py-32 text-white relative"
      style={{ clipPath: "polygon(0 4%, 100% 0%, 100% 96%, 0% 100%)" }}
    >
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:divide-x divide-white/10">
        {stats.map((s, i) => (
          <div key={i} className="text-center px-6 reveal">
            <div className="font-display font-extrabold text-[36px] md:text-[68px] leading-none" style={{ color: "var(--color-highlight)" }}>
              <CountUp end={s.end} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-[15px] text-white/60 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── WHY HCH ─────────────── */
function WhyHCH() {
  const usps = [
    { icon: Globe, title: "100% Remote & Flexibel", text: "Unser Team arbeitet ortsunabhängig — maximale Flexibilität für Sie und uns." },
    { icon: Cpu, title: "KI-gestützte Prozesse", text: "Modernste Technologie für schnellere, präzisere und günstigere Ergebnisse." },
    { icon: BarChart3, title: "Transparenz & Performance", text: "Echtzeit-Reporting und messbare KPIs — Sie haben immer den Überblick." },
  ];
  return (
    <section className="bg-background py-24 md:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="label-eyebrow mb-4">Warum HCH</p>
          <h2 className="font-bold text-3xl md:text-[40px] leading-tight text-heading">Drei Gründe, die alles verändern</h2>
          <p className="mt-4 text-[18px] text-light">Was uns zum Partner der Wahl für Marken macht, die wachsen wollen.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {usps.map((u, i) => {
            const Icon = u.icon;
            return (
              <div key={i} className="reveal bg-alt border border-border rounded-2xl p-10 hover:bg-[color:var(--color-primary-light)] hover:border-primary transition-all" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "var(--color-primary-light)" }}>
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-[22px] font-bold mt-6 text-heading">{u.title}</h3>
                <p className="mt-3 text-[15px] text-light leading-relaxed">{u.text}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14 reveal">
          <Link to={"/warum-hch" as any} className="btn-outline h-12 px-8 text-[15px]">
            Alle Vorteile entdecken →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── TESTIMONIALS ─────────────── */
function Testimonials() {
  const items = [
    { quote: "hey contact heroes hat unseren Kundenservice revolutioniert. Die Effizienz stieg um 40%.", name: "Alex Weber", role: "Head of Customer Care, NorthCommerce GmbH" },
    { quote: "Endlich ein Partner, der wirklich versteht, was moderner Service bedeutet.", name: "Marco Schäfer", role: "COO, NorthBrands AG" },
    { quote: "Die Skalierung von 5 auf 80 Agenten lief reibungslos. Wir würden es jederzeit wieder tun.", name: "Lena Brenner", role: "Co-Founderin, DesignPro" },
    { quote: "Die KI-Integration hat unsere durchschnittliche Bearbeitungszeit halbiert.", name: "Sophia Maier", role: "CX Director, Lumen Digital" },
    { quote: "Der reibungslose Onboarding-Prozess hat uns wirklich überzeugt.", name: "Tobias König", role: "VP Operations, TechWave" },
  ];
  const [page, setPage] = useState(0);
  const perPage = 3;
  const maxPage = Math.max(0, items.length - perPage);

  useEffect(() => {
    const t = setInterval(() => setPage((p) => (p >= maxPage ? 0 : p + 1)), 5000);
    return () => clearInterval(t);
  }, [maxPage]);

  const visible = items.slice(page, page + perPage);

  return (
    <section className="bg-alt py-24 md:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="label-eyebrow mb-4">Kundenstimmen</p>
          <h2 className="font-bold text-3xl md:text-[40px] leading-tight text-heading">Das sagen unsere Kunden</h2>
          <p className="mt-4 text-[18px] text-light">Echte Ergebnisse. Echte Unternehmen.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div key={page + "-" + i} className="relative bg-white border border-border rounded-2xl p-9 shadow-[0_4px_20px_rgba(0,0,0,0.05)] animate-fade-up" style={{ borderLeft: "4px solid var(--color-primary)", animationDelay: `${i * 100}ms` }}>
              <Quote className="absolute top-4 right-5 text-primary/15" size={56} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, k) => <Star key={k} size={16} fill="var(--color-highlight)" stroke="var(--color-highlight)" />)}
              </div>
              <p className="text-[16px] italic text-[color:var(--color-text-body)] leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-bold text-[15px] text-heading">{t.name}</div>
                <div className="text-[13px] text-light mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={() => setPage((p) => Math.max(0, p - 1))} className="w-11 h-11 rounded-full border border-border bg-white hover:bg-[color:var(--color-primary-light)] flex items-center justify-center transition-colors" aria-label="Zurück">
            <ChevronLeft className="text-primary" size={20} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: maxPage + 1 }).map((_, i) => (
              <button key={i} onClick={() => setPage(i)} aria-label={`Seite ${i + 1}`} className={`h-2 rounded-full transition-all ${page === i ? "w-8 bg-primary" : "w-2 bg-border"}`} />
            ))}
          </div>
          <button onClick={() => setPage((p) => Math.min(maxPage, p + 1))} className="w-11 h-11 rounded-full border border-border bg-white hover:bg-[color:var(--color-primary-light)] flex items-center justify-center transition-colors" aria-label="Weiter">
            <ChevronRight className="text-primary" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CASE STUDY ─────────────── */
function CaseStudy() {
  return (
    <section
      className="gradient-brand py-28 text-white"
      style={{ clipPath: "polygon(0 0, 100% 4%, 100% 100%, 0 96%)" }}
    >
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="font-display font-extrabold text-[80px] md:text-[96px] leading-none">+300%</div>
          <p className="mt-4 text-[22px] text-white/90">Steigerung der</p>
          <h3 className="text-[28px] md:text-[32px] font-bold text-white">Kundenzufriedenheit</h3>
          <p className="mt-2 text-[18px] text-white/70">bei NorthCommerce AG</p>
        </div>
        <div className="reveal">
          <p className="text-[16px] leading-relaxed text-white/90">
            Innerhalb von 6 Monaten haben wir das Service-Volumen verdreifacht,
            Kosten um 70% reduziert und gleichzeitig den Net Promoter Score auf
            +75 gesteigert — mit unserem Team aus heroischen Mitarbeitern.
          </p>
          <Link to={"/referenzen" as any} className="inline-flex items-center gap-2 mt-8 bg-white text-primary rounded-full h-12 px-7 font-semibold hover:bg-[color:var(--color-bg-alt)] transition-colors">
            Zur vollständigen Fallstudie <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── INSIGHTS ─────────────── */
function Insights() {
  const posts = [
    { cat: "Blog", title: "KI im Kundenservice: 7 Use Cases die wirklich funktionieren", excerpt: "Wie moderne KI-Systeme heute schon Service-Teams entlasten und CX-Kennzahlen verbessern.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", author: "Roman Molch", date: "12. Apr 2026" },
    { cat: "News", title: "hey contact heroes auf der CCW 2026 in Berlin", excerpt: "Wir präsentieren unsere neuesten Lösungen rund um KI und hybride Service-Modelle.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", author: "Brian Thiel", date: "28. Mär 2026" },
    { cat: "Studie", title: "Benchmark Report: Kundenservice in DACH 2026", excerpt: "Unser jährlicher Report mit über 200 untersuchten Unternehmen — kostenlos zum Download.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", author: "Susann Schulze", date: "10. Mär 2026" },
  ];
  return (
    <section className="bg-background py-24 md:py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div className="max-w-xl">
            <p className="label-eyebrow mb-4">Insights</p>
            <h2 className="font-bold text-3xl md:text-[40px] leading-tight text-heading">Aktuelles aus der Welt des Kundenservice</h2>
          </div>
          <Link to={"/insights" as any} className="text-primary font-semibold text-[15px] hover:underline shrink-0">Alle Artikel →</Link>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-7">
          {posts.map((p, i) => (
            <article key={i} className="reveal group bg-white border border-border rounded-2xl overflow-hidden card-hover" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-primary bg-[color:var(--color-primary-light)] rounded-full px-3 py-1">{p.cat}</span>
                <h3 className="text-[18px] font-bold mt-3 text-heading leading-snug line-clamp-2">{p.title}</h3>
                <p className="mt-2 text-[14px] text-light line-clamp-2">{p.excerpt}</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-[13px] text-[color:var(--color-text-light)]">
                  <span>{p.author}</span>
                  <span>{p.date} · 5 min</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CAREERS TEASER ─────────────── */
function CareersTeaser() {
  const benefits = [
    { icon: Home, title: "Remote Work" },
    { icon: DollarSign, title: "Erfolgsbeteiligung" },
    { icon: Users, title: "Diverse Teams" },
  ];
  return (
    <section className="gradient-brand-reverse py-20 md:py-24 text-white">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <h2 className="font-display font-bold text-3xl md:text-[40px] leading-tight text-white">Werde ein Contact Hero!</h2>
          <p className="mt-4 text-[18px] text-white/85 leading-relaxed max-w-lg">
            100% remote. 100% flexibel. Komm in unser Team und gestalte die Zukunft des Kundenservice.
          </p>
          <Link to={"/karriere" as any} className="inline-flex items-center gap-2 mt-8 bg-white text-[color:var(--color-accent-pink)] rounded-full h-12 px-7 font-semibold hover:bg-[color:var(--color-bg-alt)] transition-colors">
            Jobs ansehen <ArrowRight size={18} />
          </Link>
        </div>
        <div className="space-y-4 reveal">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-card" style={{ marginLeft: `${i * 24}px` }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[color:var(--color-primary-light)]">
                  <Icon className="text-primary" size={22} />
                </div>
                <div className="font-bold text-[15px] text-heading">{b.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FINAL CTA ─────────────── */
function FinalCTA() {
  return (
    <section className="bg-background py-28 md:py-32">
      <div className="max-w-2xl mx-auto text-center px-6 reveal">
        <h2 className="font-bold text-3xl md:text-[40px] text-heading leading-tight">
          Bereit, Ihren Kundenservice zu transformieren?
        </h2>
        <p className="mt-4 text-[18px] text-light">
          Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
        </p>
        <Link to={"/kontakt" as any} className="btn-primary inline-flex mt-10 text-[18px]" style={{ height: 56, padding: "0 48px" }}>
          Jetzt Kontakt aufnehmen →
        </Link>
        <p className="mt-6 text-[14px] text-[color:var(--color-text-light)]">
          +49 (0)40 – 30 09 6170 · jobs@hey-contact-heroes.de
        </p>
      </div>
    </section>
  );
}
