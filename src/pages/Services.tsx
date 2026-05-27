import { useDocumentTitle } from "../hooks/use-document-title";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { services } from "../data/site";

const categories = ["Printing", "Branding", "Packaging", "Signage", "Corporate Materials", "Exhibition Graphics"];

export function Services() {
  useDocumentTitle("Services — Indian Graphics");
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 lg:px-8 lg:pt-24">
        <SectionTitle
          eyebrow="Services"
          title="Everything your brand needs to look unforgettable"
          subtitle="Six disciplines, color-managed end to end, with the speed and reliability of an industrial workflow."
        />
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition hover:border-primary/40">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <Check size={14} className="text-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Request a quote <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
