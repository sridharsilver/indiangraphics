import { useDocumentTitle } from "../hooks/use-document-title";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Plus, Star } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { services, whyUs, process, testimonials, portfolio } from "../data/site";
import heroImg from "../assets/hero.png";
import heroBg from "../assets/hero-bg.jpg";

const portfolioImages = import.meta.glob<{ default: string }>("/src/assets/portfolio/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col overflow-x-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>
      <div className="blob h-[420px] w-[420px] bg-primary -left-32 -top-32" />
      <div className="blob h-[520px] w-[520px] bg-accent right-[-180px] top-20" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-5 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Hyderabad · Established 2002
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Premium <span className="gradient-text">Printing & Branding</span>
              <br className="hidden sm:block" /> Solutions in Hyderabad
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              From offset presses to packaging, signage to brand identity — we engineer print
              experiences that make India's most ambitious brands feel inevitable.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                View Services <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold transition hover:bg-card"
              >
                Get Quote <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground">
              {[
                ["20+", "Years"],
                ["1,200+", "Brands"],
                ["50M+", "Prints/year"],
                ["4.9★", "Client rating"],
              ].map(([k, v]) => (
                <div key={v} className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-foreground">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden sm:block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <img
                src={heroImg}
                alt="Premium printing showcase"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["bg-blue-500", "bg-pink-500", "bg-emerald-500"].map((c) => (
                      <div key={c} className={`h-8 w-8 rounded-full border-2 border-background ${c}`} />
                    ))}
                  </div>
                  <div className="text-sm text-white">
                    <p className="font-semibold">Trusted by 1,200+ brands</p>
                    <p className="text-white/70">PAN-India delivery</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blob h-48 w-48 bg-accent/30 -bottom-8 -left-8" />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionTitle
        eyebrow="What we do"
        title="A full-stack print & branding studio"
        subtitle="Six disciplines, one studio. Built to take a brand from sketch to shelf without a single handoff."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <div className="group h-full rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/40">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">
                Learn more <ArrowRight size={14} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="border-y border-border bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Why us"
          title="The most reliable print partner in Hyderabad"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-background p-6">
                <w.icon size={22} className="text-accent" />
                <h4 className="mt-4 font-display text-base font-semibold">{w.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWorks() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionTitle eyebrow="Featured work" title="Recent projects" />
      <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>a]:mb-6 [&>div]:mb-6">
        {portfolio.slice(0, 6).map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <Link to="/portfolio" className="group relative overflow-hidden rounded-2xl border border-border bg-card block transition-shadow hover:shadow-xl">
              <div className={`overflow-hidden ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-[3/2]"}`}>
                <img
                  src={portfolioImages[`/src/assets/portfolio/${p.image}.png`]}
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
                <h4 className="font-display text-lg font-semibold text-white">{p.title}</h4>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
          See full portfolio <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section className="border-y border-border bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Process" title="How we work" />
        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08}>
              <div className="relative rounded-2xl border border-border bg-background p-6">
                <span className="font-display text-4xl font-bold text-muted-foreground/40">
                  {p.step}
                </span>
                <h4 className="mt-2 font-display text-lg font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionTitle eyebrow="Clients" title="Loved by brands across India" />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-card p-7">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br gradient-brand p-10 text-white lg:p-16">
        <div className="blob h-72 w-72 bg-white/30 right-[-60px] top-[-40px]" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Have a project in mind? Let's print it beautifully.
          </h2>
          <p className="mt-4 text-white/90">
            Free consultation. Free quotation. Delivery across Hyderabad and PAN India.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold"
            >
              Explore Services
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
            {["No setup fees", "Free design consult", "Pan-India delivery"].map((x) => (
              <li key={x} className="flex items-center gap-1.5">
                <Check size={14} /> {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  useDocumentTitle("Indian Graphics — Premium Printing & Branding in Hyderabad");
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <FeaturedWorks />
      <ProcessTimeline />
      <Testimonials />
      <CTABanner />
    </>
  );
}
