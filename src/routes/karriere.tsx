import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Heart, GraduationCap, Globe, Calendar, Coffee, ArrowRight, MapPin, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/karriere")({
  head: () => ({
    meta: [
      { title: "Karriere — Werde ein Contact Hero | hey contact heroes" },
      { name: "description", content: "100% Remote, faire Bezahlung, echte Karriere-Perspektiven. Aktuelle Stellen bei hey contact heroes." },
      { property: "og:title", content: "Karriere — hey contact heroes" },
      { property: "og:description", content: "Werde Teil des modernsten Customer-Service-Teams Deutschlands. Remote, fair, mit Heart." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80" },
    ],
  }),
  component: Page,
});

const benefits = [
  { icon: Home, t: "100% Remote", d: "Arbeite, wo du willst — von Hamburg bis Lissabon." },
  { icon: Calendar, t: "Flexible Zeiten", d: "Schichten, die zu deinem Leben passen." },
  { icon: GraduationCap, t: "Weiterbildung", d: "1.500€ Lern-Budget pro Hero, jedes Jahr." },
  { icon: Heart, t: "Mental Health", d: "Therapie- und Coaching-Zugang via Likeminded." },
  { icon: Globe, t: "Diverse Teams", d: "11 Nationalitäten, 5 Sprachen, 1 Mission." },
  { icon: Coffee, t: "Workation", d: "4 Wochen Workation pro Jahr — innerhalb der EU." },
];

const jobs = [
  { title: "Customer Service Hero (m/w/d)", loc: "Remote DACH", type: "Vollzeit", dept: "Service" },
  { title: "Sales Outbound Hero (m/w/d)", loc: "Remote DACH", type: "Vollzeit", dept: "Sales" },
  { title: "Team Lead Customer Service", loc: "Remote DACH", type: "Vollzeit", dept: "Leadership" },
  { title: "AI / NLP Engineer", loc: "Remote EU", type: "Vollzeit", dept: "Tech" },
  { title: "Quality Coach (m/w/d)", loc: "Remote DACH", type: "Teilzeit", dept: "Quality" },
  { title: "People & Culture Manager", loc: "Hamburg / Hybrid", type: "Vollzeit", dept: "People" },
];

function Page() {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Karriere"
          title="Werde ein Contact Hero."
          subtitle="100% remote. 100% flexibel. 200% Hero-Energie. Komm in unser Team und gestalte mit uns die Zukunft des Kundenservice."
          crumbs={[{ label: "Karriere" }]}
          image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
        />

        <section className="py-20 md:py-24">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto reveal">
              <p className="label-eyebrow mb-3">Benefits</p>
              <h2 className="text-3xl md:text-[40px] font-bold text-heading">Mehr als nur ein Job</h2>
            </div>
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="reveal bg-white border border-border rounded-2xl p-7 card-hover" style={{ transitionDelay: `${i * 60}ms` }}>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[color:var(--color-primary-light)]">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="mt-5 text-[18px] font-bold text-heading">{b.t}</h3>
                    <p className="mt-2 text-[14px] text-light leading-relaxed">{b.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-alt py-20 md:py-24">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto reveal">
              <p className="label-eyebrow mb-3">Offene Stellen</p>
              <h2 className="text-3xl md:text-[40px] font-bold text-heading">Aktuelle Jobs</h2>
              <p className="mt-4 text-[18px] text-light">Sechs offene Heldentaten warten auf dich.</p>
            </div>
            <div className="mt-12 max-w-4xl mx-auto space-y-3">
              {jobs.map((j, i) => (
                <div key={i} className="reveal bg-white border border-border rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary hover:shadow-lg transition-all" style={{ transitionDelay: `${i * 40}ms` }}>
                  <div>
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-primary bg-[color:var(--color-primary-light)] px-2.5 py-1 rounded">{j.dept}</span>
                    <h3 className="mt-2 text-[18px] font-bold text-heading">{j.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-[13px] text-light">
                      <span className="flex items-center gap-1.5"><MapPin size={14} />{j.loc}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14} />{j.type}</span>
                    </div>
                  </div>
                  <Link to="/kontakt" className="btn-primary h-11 px-6 text-[14px] shrink-0">
                    Jetzt bewerben <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <p className="label-eyebrow mb-3">Kultur</p>
              <h2 className="text-3xl md:text-[40px] font-bold text-heading">Das ist uns wichtig.</h2>
              <p className="mt-5 text-[16px] text-body leading-relaxed">
                Wir sind keine klassische Service-Company — und wollen es auch nie werden. Bei uns zählen Eigenverantwortung, Empathie und der Wille, Dinge besser zu machen. Hierarchien sind flach, Wege sind kurz, und Feedback ist ein Geschenk.
              </p>
              <p className="mt-4 text-[16px] text-body leading-relaxed">
                Wir glauben: Wer Heroes will, muss Heroes behandeln wie Heroes.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80" alt="Team" loading="lazy" className="rounded-2xl shadow-card object-cover h-[420px] w-full reveal" />
          </div>
        </section>

        <section className="gradient-brand py-20 text-white">
          <div className="container-x text-center">
            <h2 className="text-3xl md:text-[40px] font-bold">Initiativ bewerben?</h2>
            <p className="mt-4 text-[18px] text-white/85 max-w-xl mx-auto">Auch wenn keine passende Stelle dabei ist — schreib uns. Wir freuen uns auf dich.</p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 mt-8 bg-white text-primary rounded-full h-12 px-7 font-semibold hover:bg-[color:var(--color-bg-alt)] transition-colors">
              Initiativbewerbung <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
