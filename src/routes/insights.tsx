import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Blog, News & Studien | hey contact heroes" },
      { name: "description", content: "Aktuelle Artikel, Studien und News rund um Kundenservice, KI und Customer Experience." },
      { property: "og:title", content: "Insights — hey contact heroes" },
      { property: "og:description", content: "Wissen aus erster Hand: Blog, News & Studien zum Thema modernen Kundenservice." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80" },
    ],
  }),
  component: Page,
});

const posts = [
  { cat: "Blog", title: "KI im Kundenservice: 7 Use Cases die wirklich funktionieren", excerpt: "Wie moderne KI-Systeme heute schon Service-Teams entlasten und CX-Kennzahlen verbessern.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", author: "Roman Molch", date: "12. Apr 2026", read: "8 min" },
  { cat: "News", title: "hey contact heroes auf der CCW 2026 in Berlin", excerpt: "Wir präsentieren unsere neuesten Lösungen rund um KI und hybride Service-Modelle.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", author: "Brian Thiel", date: "28. Mär 2026", read: "3 min" },
  { cat: "Studie", title: "Benchmark Report: Kundenservice in DACH 2026", excerpt: "Unser jährlicher Report mit über 200 untersuchten Unternehmen — kostenlos zum Download.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", author: "Susann Schulze", date: "10. Mär 2026", read: "12 min" },
  { cat: "Blog", title: "Remote Service: Was nach 10 Jahren Praxis wirklich funktioniert", excerpt: "Lessons Learned aus einer Dekade Remote-Operations — und warum Hybrid keine Lösung ist.", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80", author: "Lena Brenner", date: "02. Mär 2026", read: "6 min" },
  { cat: "Blog", title: "Voicebots in Aktion: Wie wir 1 Mio. Calls automatisieren", excerpt: "Praxisbeispiel einer Voicebot-Implementierung im Banking-Sektor.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80", author: "Mark Becker", date: "21. Feb 2026", read: "9 min" },
  { cat: "News", title: "Wir wachsen: 50 neue Heroes in Q2 2026", excerpt: "hey contact heroes setzt auf weiteres Wachstum — bewirb dich jetzt.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", author: "Susann Schulze", date: "10. Feb 2026", read: "2 min" },
];

const cats = ["Alle", "Blog", "News", "Studie"];

function Page() {
  useReveal();
  const [filter, setFilter] = useState("Alle");
  const filtered = filter === "Alle" ? posts : posts.filter((p) => p.cat === filter);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Insights"
          title="Wissen aus der Welt des Kundenservice."
          subtitle="Blog-Artikel, Studien, News und Praxiseinblicke — frisch aus dem Herzen unseres Hero-Teams."
          crumbs={[{ label: "Insights" }]}
          image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80"
        />

        <section className="py-12 border-b border-border">
          <div className="container-x flex items-center justify-center gap-2 flex-wrap">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all ${
                  filter === c
                    ? "bg-primary text-white shadow-cta"
                    : "bg-[color:var(--color-bg-alt)] text-body hover:bg-[color:var(--color-primary-light)] hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((p, i) => (
              <article key={i} className="reveal bg-white border border-border rounded-2xl overflow-hidden card-hover" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="h-48 overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-primary bg-[color:var(--color-primary-light)] px-2.5 py-1 rounded">{p.cat}</span>
                  <h3 className="mt-3 text-[18px] font-bold text-heading leading-snug line-clamp-2">{p.title}</h3>
                  <p className="mt-2 text-[14px] text-light leading-relaxed line-clamp-2">{p.excerpt}</p>
                  <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-[12px] text-light">
                    <span className="flex items-center gap-1.5"><User size={12} />{p.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={12} />{p.date}</span>
                    <span>{p.read}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-alt py-20">
          <div className="container-x max-w-2xl mx-auto text-center">
            <p className="label-eyebrow mb-3">Newsletter</p>
            <h2 className="text-3xl md:text-[36px] font-bold text-heading">Wissen direkt ins Postfach</h2>
            <p className="mt-4 text-[17px] text-light">Einmal im Monat. Nur das Wichtigste. Kein Spam, versprochen.</p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 h-12 px-5 rounded-full border border-border bg-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-[15px]"
              />
              <button className="btn-primary h-12 px-7 text-[14px]">
                Abonnieren <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
