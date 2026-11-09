import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Hero } from "@/components/Hero";
import { LeadershipSection } from "@/components/LeadershipSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ResearchSection } from "@/components/ResearchSection";
import { profile } from "@/content";
import { getSiteUrl } from "@/lib/site";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    worksFor: { "@type": "Organization", name: profile.organisation },
    url: getSiteUrl(),
    email: profile.email,
    address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
    sameAs: profile.links.filter((link) => link.href.startsWith("https://")).map((link) => link.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <EducationSection />
      <LeadershipSection />
      <ContactSection />
    </>
  );
}
