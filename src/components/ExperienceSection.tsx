import { experience } from "@/content";
import { Section } from "./Section";

export function ExperienceSection() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="space-y-12">
        {experience.map((entry) => (
          <li key={entry.id}>
            <article>
              <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold tracking-tight">
                  {entry.role}
                  <span className="font-normal text-muted"> · {entry.organisation}</span>
                </h3>
                <p className="font-mono text-xs text-muted">
                  {entry.period}
                  {entry.current ? <span className="sr-only"> (current role)</span> : null}
                </p>
              </header>
              {entry.location ? <p className="mt-1 text-sm text-muted">{entry.location}</p> : null}
              <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-accent">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="max-w-3xl leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
