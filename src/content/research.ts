import type { ResearchInterest } from "./types";

export const researchInterests: ResearchInterest[] = [
  {
    id: "data-intensive",
    title: "Data-intensive systems and DataOps",
    description:
      "How to build pipelines and platforms that stay correct, observable and easy to change as data and teams grow.",
  },
  {
    id: "ai-quality-security",
    title: "AI for software quality and security",
    description:
      "Using models to triage and remediate findings from static and dependency scans, with explanations and human review rather than blind automation.",
  },
  {
    id: "infrastructure",
    title: "Infrastructure as code and reliability",
    description:
      "Repeatable provisioning, stable delivery pipelines and the measurements that show whether they are healthy.",
  },
  {
    id: "networks",
    title: "Network behaviour and congestion control",
    description:
      "Building intuition for queues, loss and fairness by simulating them, starting from my CCNA background.",
  },
];
