import type { Profile } from "./types";

export const profile: Profile = {
  name: "Praneetha Potharaju",
  role: "Software Engineer, Cloud & DevOps",
  organisation: "HSBC",
  location: "Hyderabad, Telangana, India",
  email: "praneetha1844@gmail.com",
  positioning:
    "Cloud & DevOps engineer building reliable, observable, data-intensive systems; applying AI to software quality and security.",
  about: [
    "I am a software engineer on the Cloud & DevOps team at HSBC in Hyderabad. My day-to-day work is provisioning and managing infrastructure on Google Cloud with Terraform, automating deployments, and keeping CI/CD pipelines stable.",
    "I studied Computer & Data Science. The projects on this site explore related questions: how to make data systems dependable, how to measure them, and where AI can help with software quality and security without being trusted blindly.",
    "Earlier I mentored more than 500 students on data structures and algorithms, interned in full-stack development and embedded systems, and organised a TEDx event at my college and UiPath's Hack-A-Bot as a Student Developer Champion.",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/Praneetha1844" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/praneetha-potharaju/" },
    { label: "Email", href: "mailto:praneetha1844@gmail.com" },
  ],
  skills: [
    { label: "Languages", items: ["Python", "Java", "C", "SQL"] },
    {
      label: "Cloud & DevOps",
      items: ["GCP", "Terraform", "Docker", "Kubernetes", "Jenkins", "Git", "Grafana"],
    },
    { label: "Data & AI", items: ["Machine learning", "Data science", "Flask"] },
    { label: "Quality & practice", items: ["Postman", "Selenium", "Agile"] },
  ],
  cvPath: "/cv.pdf",
};
