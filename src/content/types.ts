export interface ProfileLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Profile {
  name: string;
  role: string;
  organisation: string;
  location: string;
  email: string;
  positioning: string;
  about: string[];
  links: ProfileLink[];
  skills: SkillGroup[];
  cvPath: string;
}

export interface ExperienceEntry {
  id: string;
  organisation: string;
  role: string;
  period: string;
  /** Omitted when the source documents do not state one. */
  location?: string;
  current?: boolean;
  highlights: string[];
}

export type ProjectKind = "featured" | "supporting";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  kind: ProjectKind;
  status: string;
  repo: string;
  tags: string[];
  /** True when an MDX case study exists at src/content/projects/<slug>.mdx. */
  caseStudy: boolean;
}

export interface EducationEntry {
  id: string;
  institution: string;
  credential: string;
  period: string;
  score: string;
  location: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface LeadershipEntry {
  id: string;
  title: string;
  detail: string;
}

export interface ResearchInterest {
  id: string;
  title: string;
  description: string;
}
