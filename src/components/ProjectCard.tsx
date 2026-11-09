import Link from "next/link";
import type { Project } from "@/content";
import { ExternalLink } from "./ExternalLink";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col border border-rule bg-surface/40 p-6 transition-colors hover:border-accent">
      <h3 className="font-display text-2xl tracking-tight">
        {project.caseStudy ? (
          <Link href={`/projects/${project.slug}`} className="hover:text-accent">
            {project.name}
          </Link>
        ) : (
          project.name
        )}
      </h3>
      <p className="mt-2 leading-relaxed">{project.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      <p className="mt-5 font-mono text-xs text-muted">Status: {project.status}</p>
      <div className="mt-auto flex gap-5 pt-5 text-sm">
        {project.caseStudy ? (
          <Link href={`/projects/${project.slug}`} className="link">
            Case study
          </Link>
        ) : null}
        <ExternalLink href={project.repo}>Source on GitHub</ExternalLink>
      </div>
    </article>
  );
}
