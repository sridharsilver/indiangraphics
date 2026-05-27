import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Palette } from "lucide-react";

const DEFAULTS = {
  primary: "#2563eb",
  accent: "#06b6d4",
  gradientMid: "#2563eb",
  radius: "0.75",
  fontDisplay: "'Space Grotesk', 'Inter', system-ui, sans-serif",
  fontSans: "'Inter', system-ui, sans-serif",
};

const PRESETS = [
  { label: "Default", primary: "#2563eb", accent: "#06b6d4", gradientMid: "#2563eb" },
  { label: "Emerald", primary: "#059669", accent: "#34d399", gradientMid: "#047857" },
  { label: "Ruby", primary: "#dc2626", accent: "#fb7185", gradientMid: "#be123c" },
  { label: "Amber", primary: "#d97706", accent: "#fbbf24", gradientMid: "#b45309" },
  { label: "Violet", primary: "#7c3aed", accent: "#a78bfa", gradientMid: "#6d28d9" },
  { label: "Midnight", primary: "#1e3a5f", accent: "#38bdf8", gradientMid: "#1e40af" },
  { label: "Rose", primary: "#e11d48", accent: "#f43f5e", gradientMid: "#be123c" },
  { label: "Teal", primary: "#0d9488", accent: "#2dd4bf", gradientMid: "#0f766e" },
];

const FONT_OPTIONS = [
  { label: "Inter + Space Grotesk", display: "'Space Grotesk', 'Inter', system-ui, sans-serif", sans: "'Inter', system-ui, sans-serif" },
  { label: "Geist + system", display: "'Geist', system-ui, sans-serif", sans: "'Inter', system-ui, sans-serif" },
  { label: "system-ui only", display: "system-ui, sans-serif", sans: "system-ui, sans-serif" },
];

const THEME_KEY = "ig_theme";

function loadTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved ? JSON.parse(saved) : { ...DEFAULTS };
  } catch {
    return { ...DEFAULTS };
  }
}

function injectThemeStyle(t: typeof DEFAULTS) {
  let el = document.getElementById("ig-theme-override");
  if (!el) {
    el = document.createElement("style");
    el.id = "ig-theme-override";
    document.head.appendChild(el);
  }
  el.textContent = `
    :root, .dark {
      --primary: ${t.primary} !important;
      --color-primary: ${t.primary} !important;
      --accent: ${t.accent} !important;
      --color-accent: ${t.accent} !important;
      --gradient-mid: ${t.gradientMid} !important;
      --radius: ${t.radius}rem !important;
      --font-display: ${t.fontDisplay} !important;
      --font-sans: ${t.fontSans} !important;
    }
    .gradient-brand {
      --tw-gradient-from: var(--primary) !important;
      --tw-gradient-via: var(--gradient-mid) !important;
      --tw-gradient-to: var(--accent) !important;
      --tw-gradient-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position) !important;
    }
    button:not([class*="rounded-full"]):not(.rounded-full),
    a:not([class*="rounded-full"]):not(.rounded-full)[class*="rounded-"],
    input[type="submit"]:not([class*="rounded-full"]):not(.rounded-full) {
      border-radius: var(--radius) !important;
    }
  `;
}

export function Settings() {
  const [theme, setTheme] = useState(loadTheme);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    injectThemeStyle(theme);
  }, [theme]);

  const update = (key: keyof typeof DEFAULTS, value: string) => {
    const next = { ...theme, [key]: value };
    setTheme(next);
    localStorage.setItem(THEME_KEY, JSON.stringify(next));
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const reset = () => {
    setTheme({ ...DEFAULTS });
    localStorage.removeItem(THEME_KEY);
    injectThemeStyle(DEFAULTS);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Customize the look and feel of your admin panel.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-card p-6 lg:col-span-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                <Palette size={18} />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold">Theme Customizer</h2>
                <p className="text-sm text-muted-foreground">Changes update live and are saved locally.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {saved && (
                <span className="text-xs text-emerald-500 font-medium">Saved</span>
              )}
              <button
                onClick={reset}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition hover:text-foreground"
              >
                <RotateCcw size={14} />
                Reset defaults
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <h3 className="font-display font-semibold">Colors</h3>
          <p className="mt-1 text-xs text-muted-foreground">Pick a preset or choose your own.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => {
                  const next = { ...theme, primary: p.primary, accent: p.accent, gradientMid: p.gradientMid };
                  setTheme(next);
                  localStorage.setItem(THEME_KEY, JSON.stringify(next));
                  injectThemeStyle(next);
                  setSaved(true);
                  setTimeout(() => setSaved(false), 1500);
                }}
                className={`group relative rounded-lg border p-1.5 transition hover:scale-105 ${
                  theme.primary === p.primary && theme.accent === p.accent && theme.gradientMid === p.gradientMid
                    ? "border-foreground"
                    : "border-border"
                }`}
                title={p.label}
              >
                <div className="flex gap-0.5">
                  <div className="h-6 w-6 rounded" style={{ backgroundColor: p.primary }} />
                  <div className="h-6 w-6 rounded" style={{ backgroundColor: p.accent }} />
                  <div className="h-6 w-6 rounded" style={{ backgroundColor: p.gradientMid }} />
                </div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-muted-foreground opacity-0 transition group-hover:opacity-100">
                  {p.label}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium w-20">Primary</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={theme.primary}
                  onChange={(e) => update("primary", e.target.value)}
                  className="h-9 w-9 cursor-pointer rounded-lg border border-border bg-transparent p-0.5"
                />
                <input
                  value={theme.primary}
                  onChange={(e) => update("primary", e.target.value)}
                  className="w-28 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-mono outline-none focus:border-primary"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium w-20">Accent</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={theme.accent}
                  onChange={(e) => update("accent", e.target.value)}
                  className="h-9 w-9 cursor-pointer rounded-lg border border-border bg-transparent p-0.5"
                />
                <input
                  value={theme.accent}
                  onChange={(e) => update("accent", e.target.value)}
                  className="w-28 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-mono outline-none focus:border-primary"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium w-20">Grad Mid</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={theme.gradientMid}
                  onChange={(e) => update("gradientMid", e.target.value)}
                  className="h-9 w-9 cursor-pointer rounded-lg border border-border bg-transparent p-0.5"
                />
                <input
                  value={theme.gradientMid}
                  onChange={(e) => update("gradientMid", e.target.value)}
                  className="w-28 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-mono outline-none focus:border-primary"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium w-20">Radius</label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.125"
                  value={theme.radius}
                  onChange={(e) => update("radius", e.target.value)}
                  className="w-32 accent-foreground"
                />
                <span className="w-12 text-xs font-mono text-muted-foreground">{theme.radius}rem</span>
                <button
                  onClick={() => update("radius", DEFAULTS.radius)}
                  className="rounded-md p-1.5 text-muted-foreground transition hover:text-foreground"
                  title="Reset radius to default"
                >
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <h3 className="font-display font-semibold">Typography</h3>
          <p className="mt-1 text-xs text-muted-foreground">Choose heading and body font families.</p>
          <div className="mt-5 space-y-3">
            {FONT_OPTIONS.map((f) => (
              <button
                key={f.label}
                onClick={() => {
                  const next = { ...theme, fontDisplay: f.display, fontSans: f.sans };
                  setTheme(next);
                  localStorage.setItem(THEME_KEY, JSON.stringify(next));
                  injectThemeStyle(next);
                  setSaved(true);
                  setTimeout(() => setSaved(false), 1500);
                }}
                className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition ${
                  theme.fontDisplay === f.display
                    ? "border-primary/40 bg-primary/5"
                    : "border-border hover:border-primary/20"
                }`}
              >
                <div className={`h-4 w-4 rounded-full border-2 ${theme.fontDisplay === f.display ? "border-primary bg-primary" : "border-muted-foreground"}`} />
                <div>
                  <p className="font-medium">{f.label}</p>
                  <p className="text-xs text-muted-foreground font-mono">{f.display.split(",")[0]}</p>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-2xl border border-border bg-card p-6 lg:col-span-2"
        >
          <h3 className="font-display font-semibold">Preview</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary" />
              <div className="h-10 w-10 rounded-lg bg-accent" />
              <div className="h-10 w-10 rounded-lg bg-foreground" />
              <div className="h-10 w-10 rounded-lg bg-muted" />
              <div className="h-10 w-10 rounded-lg border border-border bg-background" />
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">Primary</span>
              <span className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">Accent</span>
              <span className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background">Foreground</span>
              <span className="rounded-full border border-border px-4 py-1.5 text-sm font-medium">Outline</span>
            </div>
            <p className="text-sm" style={{ fontFamily: theme.fontSans }}>
              Body text: The quick brown fox jumps over the lazy dog.
            </p>
            <p className="text-xl font-bold" style={{ fontFamily: theme.fontDisplay }}>
              Heading: The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
