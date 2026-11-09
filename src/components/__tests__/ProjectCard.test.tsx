import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/content";

const featured: Project = {
  slug: "demo",
  name: "Demo",
  tagline: "A demonstration project.",
  summary: "Longer description.",
  kind: "featured",
  status: "Testing",
  repo: "https://github.com/Praneetha1844/Demo",
  tags: ["TypeScript", "Testing"],
  caseStudy: true,
};

describe("ProjectCard", () => {
  it("links the title and a case-study link to the internal page", () => {
    render(<ProjectCard project={featured} />);
    const links = screen.getAllByRole("link", { name: /demo|case study/i });
    const internal = links.filter((link) => link.getAttribute("href") === "/projects/demo");
    expect(internal.length).toBeGreaterThanOrEqual(2);
  });

  it("opens the repository safely in a new tab", () => {
    render(<ProjectCard project={featured} />);
    const link = screen.getByRole("link", { name: /source on github/i });
    expect(link).toHaveAttribute("href", featured.repo);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.getAttribute("rel")).toContain("noopener");
    expect(link).toHaveTextContent("opens in a new tab");
  });

  it("renders tags as a labelled list", () => {
    render(<ProjectCard project={featured} />);
    const list = screen.getByRole("list", { name: "Demo technologies" });
    expect(list.querySelectorAll("li")).toHaveLength(2);
  });

  it("does not link the title when there is no case study", () => {
    render(<ProjectCard project={{ ...featured, caseStudy: false, kind: "supporting" }} />);
    expect(screen.queryByRole("link", { name: /case study/i })).toBeNull();
    expect(screen.getByRole("heading", { name: "Demo" }).querySelector("a")).toBeNull();
  });

  it("shows the status", () => {
    render(<ProjectCard project={featured} />);
    expect(screen.getByText(/Status: Testing/)).toBeInTheDocument();
  });
});
