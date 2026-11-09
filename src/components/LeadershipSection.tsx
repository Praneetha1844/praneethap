import { leadership } from "@/content";
import { Section } from "./Section";

export function LeadershipSection() {
  return (
    <Section id="leadership" index="06" title="Leadership">
      <ul className="space-y-6">
        {leadership.map((entry) => (
          <li key={entry.id}>
            <h3 className="text-lg font-semibold tracking-tight">{entry.title}</h3>
            <p className="mt-1 max-w-3xl leading-relaxed text-muted">{entry.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
