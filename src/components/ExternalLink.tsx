import type { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/** Opens in a new tab, never leaks the opener, and tells assistive technology about it. */
export function ExternalLink({ href, children, className = "link" }: ExternalLinkProps) {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      className={className}
      {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
      {isMail ? null : <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
