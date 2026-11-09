import { getFeaturedProjects, getSupportingProjects } from "@/lib/projects";
import { ExternalLink } from "./ExternalLink";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

export function ProjectsSection() {
  const featured = getFeaturedProjects();
  const supporting = getSupportingProjects();
  return (
    <Section id="projects" index="03" title="Projects">
      <p className="max-w-2xl leading-relaxed text-muted">
        Each featured project has a short design write-up covering the problem, the approach, the
        trade-offs and what is not done yet. Benchmark numbers are published only once they have been
        measured and can be reproduced.
      </p>
      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>

      <h3 className="mt-16 font-mono text-xs uppercase tracking-widest text-muted">
        Earlier and supporting work
      </h3>
      <ul className="mt-4 divide-y divide-rule border-y border-rule">
        {supporting.map((project) => (
          <li
            key={project.slug}
            className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div>
              <ExternalLink href={project.repo} className="link font-semibold">
                {project.name}
              </ExternalLink>
              <p className="text-sm text-muted">{project.tagline}</p>
            </div>
            <p className="shrink-0 font-mono text-xs text-muted">{project.tags.join(" · ")}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
