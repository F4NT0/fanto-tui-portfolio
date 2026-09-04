export interface ThemeColorPalette {
  bgMain: string;
  bgCard: string;
  bgCardHover: string;
  fgMain: string;
  fgDim: string;
  fgBright: string;
  accent: string;
  accentSecondary: string;
  borderColor: string;
  borderActive: string;
  glowColor: string;
  selectionBg: string;
  selectionFg: string;
  statusBarBg: string;
}

export interface ThemeConfig {
  id: string;
  name: string;
  emoji: string;
  description: string;
  colors: ThemeColorPalette;
}

/**
 * Built-in Retro Themes
 */
export const BUILTIN_THEMES: ThemeConfig[] = [
  {
    id: "mono",
    name: "Monochrome",
    emoji: "⚪",
    description: "Minimalist high-contrast monochrome paper",
    colors: {
      bgMain: "#0f0f0f",
      bgCard: "#191919",
      bgCardHover: "#252525",
      fgMain: "#eeeeee",
      fgDim: "#888888",
      fgBright: "#ffffff",
      accent: "#00e5ff",
      accentSecondary: "#aaaaaa",
      borderColor: "#333333",
      borderActive: "#eeeeee",
      glowColor: "rgba(255, 255, 255, 0.15)",
      selectionBg: "#333333",
      selectionFg: "#ffffff",
      statusBarBg: "#080808",
    },
  },
];

/**
 * 🌟 ADD YOUR CUSTOM THEMES HERE!
 * Users can easily define custom color themes by adding objects to this array.
 */
export const CUSTOM_THEMES: ThemeConfig[] = [];

/**
 * Combined list of all available themes (Built-in + Custom)
 */
export const ALL_THEMES: ThemeConfig[] = [...BUILTIN_THEMES, ...CUSTOM_THEMES];

/**
 * Helper utility to apply theme CSS variables to the document root element
 */
export function applyTheme(themeId: string) {
  const theme = ALL_THEMES.find((t) => t.id === themeId) || BUILTIN_THEMES[0];
  const root = document.documentElement;

  root.setAttribute("data-theme", theme.id);

  // Dynamically set CSS variables for custom themes
  const c = theme.colors;
  root.style.setProperty("--bg-main", c.bgMain);
  root.style.setProperty("--bg-card", c.bgCard);
  root.style.setProperty("--bg-card-hover", c.bgCardHover);
  root.style.setProperty("--fg-main", c.fgMain);
  root.style.setProperty("--fg-dim", c.fgDim);
  root.style.setProperty("--fg-bright", c.fgBright);
  root.style.setProperty("--accent", c.accent);
  root.style.setProperty("--accent-secondary", c.accentSecondary);
  root.style.setProperty("--border-color", c.borderColor);
  root.style.setProperty("--border-active", c.borderActive);
  root.style.setProperty("--glow-color", c.glowColor);
  root.style.setProperty("--selection-bg", c.selectionBg);
  root.style.setProperty("--selection-fg", c.selectionFg);
  root.style.setProperty("--status-bar-bg", c.statusBarBg);
}
