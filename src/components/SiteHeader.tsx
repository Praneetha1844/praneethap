import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#research", label: "Research" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="font-mono text-sm tracking-tight">
          praneetha<span className="text-accent">.</span>p
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
      <nav aria-label="Primary (compact)" className="border-t border-rule md:hidden">
        <ul className="mx-auto flex max-w-page gap-5 overflow-x-auto px-6 py-2 text-sm">
          {NAV.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link href={item.href} className="text-muted hover:text-fg">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
