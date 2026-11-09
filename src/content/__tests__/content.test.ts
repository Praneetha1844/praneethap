import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
  certifications,
  education,
  experience,
  leadership,
  profile,
  projects,
  researchInterests,
} from "@/content";

const projectsDir = fileURLToPath(new URL("../projects/", import.meta.url));

function unique(values: string[]): boolean {
  return new Set(values).size === values.length;
}

describe("projects", () => {
  it("have unique slugs", () => {
    expect(unique(projects.map((project) => project.slug))).toBe(true);
  });

  it("have a case study file for every case-study project", () => {
    for (const project of projects.filter((p) => p.caseStudy)) {
      expect(existsSync(`${projectsDir}${project.slug}.mdx`), project.slug).toBe(true);
    }
  });

  it("have no orphaned case study files", () => {
    const slugs = new Set(projects.filter((p) => p.caseStudy).map((p) => p.slug));
    const files = readdirSync(projectsDir).filter((name) => name.endsWith(".mdx"));
    for (const file of files) {
      expect(slugs.has(file.replace(/\.mdx$/, "")), file).toBe(true);
    }
  });

  it("only feature projects that have case studies", () => {
    for (const project of projects) {
      expect(project.caseStudy, project.slug).toBe(project.kind === "featured");
    }
  });

  it("link to repositories under the owner's GitHub account", () => {
    for (const project of projects) {
      expect(project.repo, project.slug).toMatch(/^https:\/\/github\.com\/Praneetha1844\/[\w.-]+$/);
    }
  });

  it("have non-empty descriptive fields and tags", () => {
    for (const project of projects) {
      expect(project.name.trim(), project.slug).not.toBe("");
      expect(project.tagline.trim(), project.slug).not.toBe("");
      expect(project.status.trim(), project.slug).not.toBe("");
      expect(project.tags.length, project.slug).toBeGreaterThan(0);
    }
  });

  it("do not make unmeasured performance claims in featured summaries", () => {
    const numeric = /\d+(\.\d+)?\s?(%|x|ms|k\b|MB|GB|req)/i;
    for (const project of projects.filter((p) => p.kind === "featured")) {
      expect(project.summary, project.slug).not.toMatch(numeric);
    }
  });
});

describe("profile and records", () => {
  it("has a valid e-mail address and https profile links", () => {
    expect(profile.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    for (const link of profile.links.filter((l) => l.label !== "Email")) {
      expect(link.href.startsWith("https://"), link.label).toBe(true);
    }
  });

  it("has unique ids in every record list", () => {
    expect(unique(experience.map((e) => e.id))).toBe(true);
    expect(unique(education.map((e) => e.id))).toBe(true);
    expect(unique(leadership.map((e) => e.id))).toBe(true);
    expect(unique(researchInterests.map((e) => e.id))).toBe(true);
  });

  it("lists experience with at least one highlight each", () => {
    for (const entry of experience) {
      expect(entry.highlights.length, entry.id).toBeGreaterThan(0);
    }
  });

  it("marks exactly one role as current", () => {
    expect(experience.filter((entry) => entry.current)).toHaveLength(1);
  });

  it("has certifications with names", () => {
    expect(certifications.length).toBeGreaterThan(0);
    for (const certification of certifications) {
      expect(certification.name.trim()).not.toBe("");
    }
  });
});
