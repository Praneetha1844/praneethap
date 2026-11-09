const FALLBACK_URL = "https://praneethap.vercel.app";

/** Canonical site URL without a trailing slash; override with NEXT_PUBLIC_SITE_URL. */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = configured && configured.length > 0 ? configured : FALLBACK_URL;
  return url.replace(/\/+$/, "");
}
