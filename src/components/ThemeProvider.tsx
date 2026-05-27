import { useEffect, type ReactNode } from "react";

const DEFAULTS = {
  primary: "#2563eb",
  accent: "#06b6d4",
  gradientMid: "#2563eb",
  radius: "0.75",
  fontDisplay: "'Space Grotesk', 'Inter', system-ui, sans-serif",
  fontSans: "'Inter', system-ui, sans-serif",
};

const THEME_KEY = "ig_theme";

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
  `;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      const theme = saved ? { ...DEFAULTS, ...JSON.parse(saved) } : DEFAULTS;
      injectThemeStyle(theme);
    } catch {
      injectThemeStyle(DEFAULTS);
    }
  }, []);

  return <>{children}</>;
}
