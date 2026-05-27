import { useDocumentTitle } from "../hooks/use-document-title";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { posts } from "../data/site";

const gradients = [
  "from-blue-500 to-indigo-600",
  "from-pink-500 to-rose-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
];

export function Blog() {
  useDocumentTitle("Blog — Indian Graphics");
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 lg:px-8 lg:pt-24">
        <SectionTitle
          eyebrow="Journal"
          title="Notes from the print floor"
          subtitle="Trends, technical guides, and case studies from twenty years of producing premium print in Hyderabad."
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/40">
                <div className={`aspect-[16/9] bg-gradient-to-br ${gradients[i % gradients.length]}`} />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.date}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Read article <ArrowUpRight size={14} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
