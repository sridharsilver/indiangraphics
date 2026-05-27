import { useDocumentTitle } from "../hooks/use-document-title";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { Target, Eye, Sparkles } from "lucide-react";

const timeline = [
  { year: "2002", title: "Founded in Hyderabad", desc: "Started as a 4-press offset workshop in Secunderabad." },
  { year: "2009", title: "Branding studio launched", desc: "Added in-house design to serve growing retail clients." },
  { year: "2015", title: "Large-format & signage", desc: "Expanded into UV large-format and outdoor signage." },
  { year: "2020", title: "Premium packaging division", desc: "Opened a dedicated packaging unit with finishing line." },
  { year: "2026", title: "PAN-India delivery", desc: "Serving 1,200+ brands across 18 Indian states." },
];

const team = [
  { name: "Rajeev Sharma", role: "Founder & MD", color: "from-blue-500 to-indigo-600" },
  { name: "Priya Iyer", role: "Creative Director", color: "from-pink-500 to-fuchsia-600" },
  { name: "Vikram Rao", role: "Head of Production", color: "from-emerald-500 to-teal-600" },
  { name: "Aisha Khan", role: "Client Partner", color: "from-amber-500 to-orange-600" },
];

export function About() {
  useDocumentTitle("About — Indian Graphics");
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 lg:px-8 lg:pt-24">
        <SectionTitle
          eyebrow="About us"
          title="A Hyderabad printing house with a craftsman's soul"
          subtitle="For over two decades, Indian Graphics has produced the printed work behind some of India's most beloved brands — from neighborhood cafés to listed corporates."
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Our Story", desc: "What began as a 4-press offset workshop is now a full-stack print & branding studio with three units across Hyderabad." },
            { icon: Target, title: "Mission", desc: "To make world-class print accessible to every Indian brand — without compromise on craft or timeline." },
            { icon: Eye, title: "Vision", desc: "Be India's most trusted partner for brand identity, packaging, and the physical experience of brands." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <c.icon size={22} className="text-accent" />
                <h3 className="mt-4 font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Our journey" title="Two decades, one obsession" />
          <div className="mx-auto mt-14 max-w-3xl">
            <ol className="relative border-l border-border pl-8">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <li className="mb-10 last:mb-0">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary" />
                    <span className="text-sm font-semibold text-primary">{t.year}</span>
                    <h4 className="mt-1 font-display text-lg font-semibold">{t.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionTitle eyebrow="Team" title="The people behind the press" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className={`aspect-square bg-gradient-to-br ${m.color}`} />
                <div className="p-5">
                  <p className="font-display font-semibold">{m.name}</p>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
