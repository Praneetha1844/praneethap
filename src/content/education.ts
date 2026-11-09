import type { Certification, EducationEntry } from "./types";

export const education: EducationEntry[] = [
  {
    id: "btech",
    institution: "ACE Engineering College",
    credential: "B.Tech, Computer & Data Science",
    period: "Nov 2022 – Nov 2025",
    score: "8.9 / 10",
    location: "Hyderabad",
  },
  {
    id: "diploma",
    institution: "Government Institute of Electronics",
    credential: "Diploma in Embedded Systems",
    period: "Jun 2019 – Mar 2022",
    score: "9.9 / 10",
    location: "Hyderabad",
  },
  {
    id: "ssc",
    institution: "Sri Chaitanya High School",
    credential: "SSC",
    period: "Completed Mar 2019",
    score: "9.8 / 10",
    location: "Hyderabad",
  },
];

export const certifications: Certification[] = [
  { name: "CCNA: Enterprise Networking, Security & Automation" },
  { name: "Excel Fundamentals for Data Analysis", issuer: "Macquarie University (Coursera)" },
  { name: "UiPath RPA Citizen Developer Foundation", issuer: "UiPath Academy" },
  { name: "Introduction to Git and GitHub" },
];
