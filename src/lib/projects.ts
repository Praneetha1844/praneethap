import { projects } from "@/content/projects";
import type { Project } from "@/content/types";

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.kind === "featured");
}

export function getSupportingProjects(): Project[] {
  return projects.filter((project) => project.kind === "supporting");
}

export function getCaseStudySlugs(): string[] {
  return projects.filter((project) => project.caseStudy).map((project) => project.slug);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
