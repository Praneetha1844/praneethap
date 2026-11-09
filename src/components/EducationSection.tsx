import { certifications, education } from "@/content";
import { Section } from "./Section";

export function EducationSection() {
  return (
    <Section id="education" index="05" title="Education & certifications">
      <ol className="space-y-8">
        {education.map((entry) => (
          <li key={entry.id}>
            <article className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{entry.credential}</h3>
                <p className="text-muted">
                  {entry.institution}, {entry.location}
                </p>
              </div>
              <p className="font-mono text-xs text-muted">
                {entry.period} · {entry.score}
              </p>
            </article>
          </li>
        ))}
      </ol>

      <h3 className="mt-14 font-mono text-xs uppercase tracking-widest text-muted">
        Certifications
      </h3>
      <ul className="mt-4 divide-y divide-rule border-y border-rule">
        {certifications.map((certification) => (
          <li key={certification.name} className="py-3">
            {certification.name}
            {certification.issuer ? (
              <span className="text-muted"> · {certification.issuer}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
