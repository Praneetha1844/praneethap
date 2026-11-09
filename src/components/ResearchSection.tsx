import { researchInterests } from "@/content";
import { Section } from "./Section";

export function ResearchSection() {
  return (
    <Section id="research" index="04" title="Research interests">
      <ul className="grid gap-8 sm:grid-cols-2">
        {researchInterests.map((interest) => (
          <li key={interest.id}>
            <h3 className="text-lg font-semibold tracking-tight">{interest.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{interest.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
