import { afterEach, describe, expect, it, vi } from "vitest";
import { getCaseStudySlugs } from "@/lib/projects";
import { getSiteUrl } from "@/lib/site";
import { applyTheme, readTheme, themeInitScript } from "@/lib/theme";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

afterEach(() => {
  vi.unstubAllEnvs();
  document.documentElement.removeAttribute("data-theme");
  localStorage.clear();
});

describe("getSiteUrl", () => {
  it("falls back to the default site when unset or blank", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    expect(getSiteUrl()).toBe("https://praneethap.vercel.app");
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "   ");
    expect(getSiteUrl()).toBe("https://praneethap.vercel.app");
  });

  it("uses the configured value and strips trailing slashes", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.test//");
    expect(getSiteUrl()).toBe("https://example.test");
  });
});

describe("sitemap and robots", () => {
  it("lists the home page and every case study exactly once", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.test");
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toContain("https://example.test/");
    for (const slug of getCaseStudySlugs()) {
      expect(urls).toContain(`https://example.test/projects/${slug}`);
    }
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("points robots at the sitemap", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.test");
    expect(robots().sitemap).toBe("https://example.test/sitemap.xml");
  });
});

describe("theme", () => {
  it("applies and reads the theme and persists the choice", () => {
    applyTheme("dark");
    expect(readTheme()).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    applyTheme("light");
    expect(readTheme()).toBe("light");
  });

  it("defaults to light when the attribute is missing", () => {
    expect(readTheme()).toBe("light");
  });

  it("the pre-paint script prefers a stored choice over the system preference", () => {
    localStorage.setItem("theme", "dark");
    new Function(themeInitScript)();
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});
