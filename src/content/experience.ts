import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    id: "hsbc",
    organisation: "HSBC",
    role: "Software Engineer, Cloud & DevOps",
    period: "Jul 2025 – Present",
    location: "Hyderabad, India",
    current: true,
    highlights: [
      "Provision and manage Google Cloud infrastructure with Terraform as part of an 18-member team.",
      "Automated 2 deployments end to end alongside their infrastructure setup, with stable CI/CD pipelines.",
      "Set up the infrastructure for 2 SaaS services, ARIS and Celonis.",
      "Contributed to AI use cases that remediate vulnerabilities reported by open-source (FOSS) and static (SAST) scans.",
    ],
  },
  {
    id: "being-zero",
    organisation: "Being Zero Pvt Ltd",
    role: "Software Developer & Mentor",
    period: "Apr 2024 – Oct 2024",
    location: "India",
    highlights: [
      "Mentored more than 500 students on data structures and algorithms, improving competitive-coding performance by 50%.",
    ],
  },
  {
    id: "ieee-bombay",
    organisation: "IEEE Bombay",
    role: "Full Stack Developer Intern",
    period: "Sep 2023 – Oct 2023",
    location: "Remote",
    highlights: [
      "Integrated REST APIs for a Readability Score Generator that helps writers gauge and adjust the readability of their content.",
    ],
  },
  {
    id: "ananth",
    organisation: "Ananth Technologies Pvt Ltd",
    role: "Embedded Systems Intern",
    period: "Aug 2021 – Jan 2022",
    location: "Hi-Tech City, Hyderabad",
    highlights: ["Designed circuits using OrCAD and completed several embedded systems projects."],
  },
];
