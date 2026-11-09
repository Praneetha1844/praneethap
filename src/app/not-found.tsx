import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-page px-6 py-32">
      <p className="font-mono text-xs text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        The page you are looking for does not exist or has moved.
      </p>
      <p className="mt-8">
        <Link href="/" className="link">
          Back to the home page
        </Link>
      </p>
    </section>
  );
}
