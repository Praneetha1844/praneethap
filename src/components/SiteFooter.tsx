import { profile } from "@/content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-page flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}. Built with Next.js; no analytics or tracking.
        </p>
        <p className="font-mono text-xs">{profile.location}</p>
      </div>
    </footer>
  );
}
