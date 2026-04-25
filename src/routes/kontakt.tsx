import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Sprechen Sie mit uns | hey contact heroes" },
      { name: "description", content: "Kostenloses Erstgespräch vereinbaren. Telefon, E-Mail oder direkt das Formular." },
      { property: "og:title", content: "Kontakt — hey contact heroes" },
      { property: "og:description", content: "Sprechen wir über Ihren Kundenservice. Kostenlos. Unverbindlich. Persönlich." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" },
    ],
  }),
  component: Page,
});

function Page() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Kontakt"
          title="Sprechen wir über Ihren Service."
          subtitle="Wir antworten innerhalb von 24 Stunden — meist sogar schneller. Kostenlos, unverbindlich, ehrlich."
          crumbs={[{ label: "Kontakt" }]}
          image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
        />

        <section className="py-20 md:py-24">
          <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12">
            <div className="reveal space-y-6">
              <InfoCard icon={Phone} title="Telefon">
                <a href="tel:+4940300961700" className="mt-1 block text-[18px] font-semibold text-primary hover:underline">+49 (0)40 – 30 09 6170</a>
                <p className="text-[13px] text-light mt-1">Mo–Fr, 8–18 Uhr</p>
              </InfoCard>
              <InfoCard icon={Mail} title="E-Mail">
                <a href="mailto:hello@hey-contact-heroes.de" className="mt-1 block text-[15px] font-medium text-primary hover:underline break-all">hello@hey-contact-heroes.de</a>
                <a href="mailto:jobs@hey-contact-heroes.de" className="mt-1 block text-[15px] font-medium text-primary hover:underline break-all">jobs@hey-contact-heroes.de</a>
              </InfoCard>
              <InfoCard icon={MapPin} title="Hauptsitz">
                <p className="mt-1 text-[15px] text-body">Am Kaiserkai 45<br />20457 Hamburg<br />Deutschland</p>
              </InfoCard>
              <InfoCard icon={Clock} title="Antwortzeit">
                <p className="mt-1 text-[15px] text-body">⌀ 4 Stunden zu Bürozeiten</p>
              </InfoCard>
            </div>

            <div className="reveal bg-white border border-border rounded-2xl p-8 md:p-10 shadow-card">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[color:var(--color-primary-light)] flex items-center justify-center">
                    <Check className="text-primary" size={32} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-heading">Vielen Dank!</h3>
                  <p className="mt-3 text-[16px] text-light">Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24 Stunden.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-5"
                >
                  <h3 className="text-[22px] font-bold text-heading">Erstgespräch anfragen</h3>
                  <p className="text-[14px] text-light -mt-3">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Vorname" name="firstName" required />
                    <Field label="Nachname" name="lastName" required />
                  </div>
                  <Field label="Unternehmen" name="company" required />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="E-Mail" name="email" type="email" required />
                    <Field label="Telefon" name="phone" type="tel" />
                  </div>

                  <div>
                    <label className="text-[13px] font-semibold text-heading mb-2 block">Interesse</label>
                    <select className="w-full h-12 px-4 rounded-xl border border-border bg-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-[15px]">
                      <option>Inbound Kundenservice</option>
                      <option>Outbound & Vertrieb</option>
                      <option>Back-Office</option>
                      <option>KI & Automatisierung</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[13px] font-semibold text-heading mb-2 block">Ihre Nachricht</label>
                    <textarea
                      rows={5}
                      placeholder="Erzählen Sie uns kurz, worum es geht..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-[15px] resize-none"
                    />
                  </div>

                  <label className="flex items-start gap-2 text-[13px] text-light">
                    <input type="checkbox" required className="mt-1 accent-[color:var(--color-primary)]" />
                    <span>Ich habe die <a href="#" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen und akzeptiert.</span>
                  </label>

                  <button type="submit" className="btn-primary w-full text-base" style={{ height: 52 }}>
                    Anfrage senden <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-border rounded-2xl p-7">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-[color:var(--color-primary-light)] flex items-center justify-center shrink-0">
          <Icon className="text-primary" size={22} />
        </div>
        <div>
          <h3 className="text-[16px] font-bold text-heading">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[13px] font-semibold text-heading mb-2 block">{label}{required && <span className="text-[color:var(--color-accent-pink)]"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full h-12 px-4 rounded-xl border border-border bg-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-[15px]"
      />
    </div>
  );
}
