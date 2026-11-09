import { profile } from "@/content";
import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section id="about" index="01" title="About">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <dl className="mt-12 grid gap-6 sm:grid-cols-2">
        {profile.skills.map((group) => (
          <div key={group.label}>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">{group.label}</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
