export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs before first paint (inlined in <head>) so the page never flashes the wrong theme.
 * It prefers an explicit stored choice, then the operating-system preference, and falls
 * back to light if storage is unavailable.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export function readTheme(root: HTMLElement = document.documentElement): Theme {
  return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export function applyTheme(theme: Theme, root: HTMLElement = document.documentElement): void {
  root.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be blocked (private mode, strict settings); the choice then lasts for the visit only.
  }
}
