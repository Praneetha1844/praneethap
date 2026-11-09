import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

/** A numbered, labelled landmark region with the heading in a left rail on wide screens. */
export function Section({ id, index, title, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-rule py-16 md:py-24">
      <div className="mx-auto grid max-w-page grid-cols-1 gap-8 px-6 md:grid-cols-12">
        <header className="md:col-span-3">
          <p className="font-mono text-xs text-accent">{index}</p>
          <h2 id={headingId} className="mt-2 font-display text-2xl tracking-tight md:text-3xl">
            {title}
          </h2>
        </header>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
