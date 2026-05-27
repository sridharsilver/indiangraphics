import { useDocumentTitle } from "../hooks/use-document-title";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Clock, MessageCircle, Send } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
          <Icon size={18} />
        </div>
        <div>
          <p className="font-display font-semibold">{title}</p>
          {lines.map((l) => (
            <p key={l} className="text-sm text-muted-foreground">{l}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  useDocumentTitle("Contact — Indian Graphics");
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 lg:px-8 lg:pt-24">
        <SectionTitle
          eyebrow="Contact"
          title="Let's print something exceptional"
          subtitle="Tell us about your project. We'll respond within one business day with a quote and a recommendation."
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-7 lg:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" placeholder="Your name" />
                <Field label="Email" type="email" placeholder="you@brand.com" />
                <Field label="Phone" placeholder="+91 ..." />
                <Field label="Company" placeholder="Brand name" />
              </div>
              <div className="mt-5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Project details
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about your project, quantity, and timeline..."
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">
                  We reply within one business day.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  Send Message <Send size={14} />
                </button>
              </div>
              {sent && (
                <p className="mt-4 rounded-md border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
                  Thanks — your message has been queued. We'll be in touch shortly.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              <InfoCard icon={MapPin} title="Hyderabad Office" lines={["Road No. 12, Banjara Hills", "Hyderabad, Telangana 500034"]} />
              <InfoCard icon={Phone} title="Phone" lines={["+91 98765 43210"]} />
              <InfoCard icon={Mail} title="Email" lines={["hello@indiangraphics.in"]} />
              <InfoCard icon={Clock} title="Working hours" lines={["Mon – Sat · 9:30 AM – 7:30 PM", "Sunday closed"]} />
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-emerald-500 transition hover:bg-emerald-500/20"
              >
                <span className="flex items-center gap-3 font-semibold">
                  <MessageCircle size={20} /> Chat on WhatsApp
                </span>
                <span className="text-sm">+91 98765 43210</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="h-72 overflow-hidden rounded-2xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7614.1287084336245!2d78.443408!3d17.408699000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9775069f10b5%3A0xfe5e3c88091512c6!2sINDIAN%20GRAPHICS!5e0!3m2!1sen!2sin!4v1779867096262!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Indian Graphics location"
              className="h-full w-full"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
