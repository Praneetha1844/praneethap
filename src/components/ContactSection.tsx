import { profile } from "@/content";
import { ExternalLink } from "./ExternalLink";
import { Section } from "./Section";

export function ContactSection() {
  return (
    <Section id="contact" index="07" title="Contact">
      <p className="max-w-xl text-lg leading-relaxed">
        The quickest way to reach me is by e-mail. I am also on LinkedIn and GitHub.
      </p>
      <p className="mt-6 font-display text-3xl tracking-tight md:text-4xl">
        <a href={`mailto:${profile.email}`} className="link">
          {profile.email}
        </a>
      </p>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {profile.links
          .filter((link) => link.label !== "Email")
          .map((link) => (
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
    </Section>
  );
}
