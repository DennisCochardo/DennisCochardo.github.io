import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-24 md:px-6 md:py-32">
      <p className="t-label">404</p>
      <h1 className="t-display mt-6">Page not found</h1>
      <p className="measure mt-6 text-lg text-muted">That page doesn&rsquo;t exist or has moved.</p>
      <Link prefetch={false}
        href="/"
        className="mt-10 inline-flex min-h-11 items-center rounded-md bg-accent px-6 text-[0.9375rem] font-medium text-on-accent"
      >
        Back to home
      </Link>
    </section>
  );
}
