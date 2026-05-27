import { useDocumentTitle } from "../hooks/use-document-title";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { industries } from "../data/site";

export function Industries() {
  useDocumentTitle("Industries — Indian Graphics");
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 lg:px-8 lg:pt-24">
        <SectionTitle
          eyebrow="Industries"
          title="Trusted across sectors"
          subtitle="From neighborhood restaurants to enterprise hospital networks — our print, branding, and signage work shows up everywhere brands meet people."
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i, idx) => (
            <Reveal key={i.title} delay={idx * 0.04}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/40">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                  <i.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{i.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
