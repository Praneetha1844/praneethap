import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "@/components/ExternalLink";
import { getCaseStudySlugs, getProject } from "@/lib/projects";

interface RouteParams {
  slug: string;
}

export const dynamicParams = false;

export function generateStaticParams(): RouteParams[] {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { type: "article", title: project.name, description: project.tagline },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.caseStudy) notFound();

  const { default: Content } = await import(`../../../content/projects/${slug}.mdx`);

  return (
    <article className="mx-auto max-w-page px-6 py-16 md:py-24">
      <p className="font-mono text-xs">
        <Link href="/#projects" className="link">
          ← All projects
        </Link>
      </p>
      <header className="mt-8 max-w-3xl border-b border-rule pb-10">
        <h1 className="font-display text-5xl leading-tight tracking-tight md:text-6xl">
          {project.name}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-muted">{project.tagline}</p>
        <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Status</dt>
            <dd className="mt-1">{project.status}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Source</dt>
            <dd className="mt-1">
              <ExternalLink href={project.repo}>github.com/Praneetha1844/{project.name}</ExternalLink>
            </dd>
          </div>
        </dl>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </header>
      <div className="pb-8">
        <Content />
      </div>
    </article>
  );
}
