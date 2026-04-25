import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Sparkles, Target, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns — Wer wir sind | hey contact heroes" },
      { name: "description", content: "Seit 2015 gestalten wir modernen Kundenservice — 100% remote, mit Herz, Hirn und Heroes." },
      { property: "og:title", content: "Über uns — hey contact heroes" },
      { property: "og:description", content: "Lerne unser Team kennen: Heroes, die jeden Kontakt zur Chance machen." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" },
    ],
  }),
  component: Page,
});

const team = [
  { name: "Roman Molch", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Brian Thiel", role: "COO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Susann Schulze", role: "Head of People", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "Mark Becker", role: "Head of Tech & AI", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
  { name: "Lena Brenner", role: "Head of Operations", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Tobias König", role: "Head of Sales", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
];

function Page() {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Über uns"
          title="Wir sind Heroes. Mit Herz, Hirn und Headset."
          subtitle="2015 in Hamburg gegründet. Heute über 200 Heroes in 11 Ländern. Eine Mission: Kundenservice neu denken — menschlich, modern, messbar."
          crumbs={[{ label: "Über uns" }]}
          image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
        />

        <section className="py-20 md:py-24">
          <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <p className="label-eyebrow mb-3">Unsere Geschichte</p>
              <h2 className="text-3xl md:text-[40px] font-bold text-heading">Vom Hamburger Hinterhof zum Remote-Marktführer.</h2>
              <p className="mt-5 text-[16px] text-body leading-relaxed">
                Was 2015 als kleines Team in einem Hamburger Hinterhofbüro begann, ist heute eine der modernsten Customer-Service-Organisationen Europas — vollständig remote, technologiegetrieben und kompromisslos kundenorientiert.
              </p>
              <p className="mt-4 text-[16px] text-body leading-relaxed">
                Wir glauben, dass jeder Kontakt eine Chance ist. Eine Chance, ein Versprechen einzulösen. Eine Chance, einen Fan zu gewinnen. Und genau dafür existieren wir.
              </p>
            </div>
            <div className="reveal grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Team" loading="lazy" className="rounded-2xl object-cover h-64 w-full" />
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="Remote" loading="lazy" className="rounded-2xl object-cover h-64 w-full mt-8" />
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80" alt="Office" loading="lazy" className="rounded-2xl object-cover h-64 w-full -mt-8" />
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80" alt="Service" loading="lazy" className="rounded-2xl object-cover h-64 w-full" />
            </div>
          </div>
        </section>

        <section className="bg-alt py-20 md:py-24">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto reveal">
              <p className="label-eyebrow mb-3">Werte</p>
              <h2 className="text-3xl md:text-[40px] font-bold text-heading">Was uns antreibt</h2>
            </div>
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, t: "Empathie", d: "Wir hören zu, bevor wir lösen." },
                { icon: Sparkles, t: "Innovation", d: "Wir hinterfragen jeden Prozess." },
                { icon: Users, t: "Team-First", d: "Heroes machen Heroes erfolgreich." },
                { icon: Target, t: "Messbar", d: "Bauchgefühl wird durch KPIs validiert." },
              ].map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="reveal bg-white border border-border rounded-2xl p-7 card-hover" style={{ transitionDelay: `${i * 80}ms` }}>
                    <Icon className="text-primary" size={32} />
                    <h3 className="mt-4 text-[18px] font-bold text-heading">{v.t}</h3>
                    <p className="mt-2 text-[14px] text-light leading-relaxed">{v.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto reveal">
              <p className="label-eyebrow mb-3">Team</p>
              <h2 className="text-3xl md:text-[40px] font-bold text-heading">Lernen Sie unsere Heroes kennen</h2>
              <p className="mt-4 text-[18px] text-light">Sechs Köpfe, eine Vision — und über 200 Heroes hinter den Kulissen.</p>
            </div>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {team.map((p, i) => (
                <div key={i} className="reveal text-center" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-[3px] border-primary">
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="mt-4 text-[15px] font-bold text-heading">{p.name}</h4>
                  <p className="text-[13px] text-light">{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gradient-brand py-20 text-white">
          <div className="container-x text-center">
            <h2 className="text-3xl md:text-[40px] font-bold">Werde Teil unserer Story.</h2>
            <p className="mt-4 text-[18px] text-white/85 max-w-xl mx-auto">Wir wachsen — und suchen Heroes, die mitgestalten wollen.</p>
            <Link to="/karriere" className="inline-flex items-center gap-2 mt-8 bg-white text-primary rounded-full h-12 px-7 font-semibold hover:bg-[color:var(--color-bg-alt)] transition-colors">
              Offene Stellen <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
