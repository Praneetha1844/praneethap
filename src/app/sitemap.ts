import type { MetadataRoute } from "next";
import { getCaseStudySlugs } from "@/lib/projects";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const pages = [
    { url: `${base}/`, priority: 1 },
    ...getCaseStudySlugs().map((slug) => ({ url: `${base}/projects/${slug}`, priority: 0.7 })),
  ];
  return pages.map((page) => ({ ...page, changeFrequency: "monthly" as const }));
}
