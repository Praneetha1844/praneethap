import { profile } from "@/content";
import { ExternalLink } from "./ExternalLink";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-backdrop absolute inset-0" />
      <div className="relative mx-auto max-w-page px-6 pb-20 pt-20 md:pb-28 md:pt-32">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {profile.role} · {profile.organisation} · {profile.location}
        </p>
        <h1
          id="hero-heading"
          className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl"
        >
          {profile.name}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {profile.positioning}
        </p>
        <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          {profile.links.map((link) => (
            <li key={link.label}>
              <ExternalLink href={link.href}>{link.label}</ExternalLink>
            </li>
          ))}
          <li>
            <a href={profile.cvPath} className="link" download>
              Curriculum vitae (PDF)
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
