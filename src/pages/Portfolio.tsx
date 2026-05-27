import { useDocumentTitle } from "../hooks/use-document-title";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { portfolio } from "../data/site";

const images = import.meta.glob<{ default: string }>("/src/assets/portfolio/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

const FILTERS = ["All", "Branding", "Packaging", "Printing", "Signage"] as const;

export function Portfolio() {
  useDocumentTitle("Portfolio — Indian Graphics");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const items = useMemo(
    () => (filter === "All" ? portfolio : portfolio.filter((p) => p.category === filter)),
    [filter],
  );

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + items.length) % items.length : null));
  }, [items.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % items.length : null));
  }, [items.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, prev, next]);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-8 lg:px-8 lg:pt-24">
        <SectionTitle
          eyebrow="Portfolio"
          title="Selected work"
          subtitle="A small sample of the brands we've helped print, package, and brand into something memorable."
        />
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === f
                  ? "bg-foreground text-background"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <motion.div layout className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>div]:mb-6">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card cursor-pointer transition-shadow hover:shadow-xl"
                onClick={() => setLightboxIndex(i)}
              >
                <div className={`overflow-hidden ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-[3/2]"}`}>
                  <img
                    src={images[`/src/assets/portfolio/${p.image}.png`]}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-background shadow-lg">
                      <Plus size={20} />
                    </div>
                  </div>
                </div>
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-background shadow-sm">
                    {p.category}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-12">
                  <h4 className="font-display text-lg font-semibold text-white">
                    {p.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/70"
            >
              <ArrowLeft size={24} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              src={images[`/src/assets/portfolio/${items[lightboxIndex].image}.png`]}
              alt={items[lightboxIndex].title}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/70"
            >
              <ArrowRight size={24} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
              {items[lightboxIndex].title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
