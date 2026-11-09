import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import { ExternalLink } from "@/components/ExternalLink";

function Anchor({ href = "", children, ...rest }: ComponentPropsWithoutRef<"a">) {
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return <ExternalLink href={href}>{children}</ExternalLink>;
  }
  return (
    <a href={href} className="link" {...rest}>
      {children}
    </a>
  );
}

const components: MDXComponents = {
  h2: (props) => (
    <h2 className="mb-4 mt-14 font-display text-2xl tracking-tight md:text-3xl" {...props} />
  ),
  h3: (props) => <h3 className="mb-3 mt-8 text-lg font-semibold tracking-tight" {...props} />,
  p: (props) => <p className="my-5 max-w-2xl text-lg leading-relaxed" {...props} />,
  ul: (props) => (
    <ul className="my-5 max-w-2xl list-disc space-y-2 pl-6 leading-relaxed marker:text-accent" {...props} />
  ),
  ol: (props) => (
    <ol className="my-5 max-w-2xl list-decimal space-y-2 pl-6 leading-relaxed marker:text-accent" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-8 max-w-2xl border-l-2 border-accent bg-surface/50 px-5 py-3 text-base leading-relaxed text-muted"
      {...props}
    />
  ),
  code: (props) => <code className="rounded-sm bg-surface px-1.5 py-0.5 font-mono text-[0.9em]" {...props} />,
  pre: (props) => (
    <pre
      className="my-6 max-w-3xl overflow-x-auto border border-rule bg-surface p-4 font-mono text-sm leading-relaxed"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-6 max-w-3xl overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  th: (props) => <th className="border-b border-rule py-2 pr-4 font-mono text-xs uppercase tracking-wider text-muted" {...props} />,
  td: (props) => <td className="border-b border-rule py-2 pr-4 align-top" {...props} />,
  a: Anchor,
};

export function useMDXComponents(overrides: MDXComponents): MDXComponents {
  return { ...components, ...overrides };
}
