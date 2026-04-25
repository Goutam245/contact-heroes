import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; to?: string }

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  image?: string;
}) {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {image && (
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl" />

      <div className="container-x relative z-10 py-20 md:py-28">
        {crumbs.length > 0 && (
          <nav className="flex items-center flex-wrap gap-1 text-[13px] text-white/60 mb-6">
            <Link to="/" className="hover:text-primary">Startseite</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight size={14} className="opacity-50" />
                {c.to ? (
                  <Link to={c.to as any} className="hover:text-primary">{c.label}</Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <p className="label-eyebrow text-primary mb-4">{eyebrow}</p>
        <h1 className="font-display font-extrabold text-white text-[36px] md:text-[56px] leading-[1.1] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-[18px] md:text-[20px] text-white/75 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
