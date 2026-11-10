import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getProject, projects } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.line,
    alternates: { canonical: `/projects/${p.slug}/` },
    openGraph: { title: p.title, description: p.line, type: "article", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(i + 1) % projects.length];

  return (
    <article className="mx-auto max-w-[1100px] px-4 py-12 md:px-6 md:py-20">
      <Link prefetch={false} href="/projects/" className="-ml-1 inline-flex min-h-11 items-center px-1 text-[0.9375rem] text-muted hover:text-fg">
        <span aria-hidden="true" className="mr-2">&larr;</span> All projects
      </Link>

      <header className="mt-6">
        <p className="t-label flex items-center gap-2">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {p.status}
        </p>
        <h1 className="t-display mt-6">{p.title}</h1>
        <p className="measure mt-6 text-xl text-muted">{p.line}</p>
      </header>

      <div className="mt-12 overflow-hidden rounded-lg border border-border bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image.src}
          srcSet={p.image.srcSet}
          sizes="(min-width: 1148px) 1100px, 100vw"
          alt={p.image.alt}
          width={p.image.width}
          height={p.image.height}
          className="max-h-[560px] w-full object-cover"
          fetchPriority="high"
        />
      </div>

      <dl className="mt-12 grid gap-8 border-y border-border py-8 md:grid-cols-[1fr_2fr]">
        <div>
          <dt className="t-label">My role</dt>
          <dd className="mt-3 text-[1rem]">{p.role}</dd>
        </div>
        <div>
          <dt className="t-label">Tools</dt>
          <dd className="mt-3">
            <ul className="flex flex-wrap gap-2">
              {p.tools.map((t) => (
                <li key={t} className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      <div className="mt-16 grid gap-16 md:mt-24">
        <Reveal as="section" className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-12">
          <h2 className="t-label pt-2">Problem</h2>
          <p className="measure text-[1.125rem]">{p.problem}</p>
        </Reveal>

        <Reveal as="section" className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-12">
          <h2 className="t-label pt-2">Process</h2>
          <ol className="grid gap-10">
            {p.process.map((s, n) => (
              <li key={s.title} className="grid grid-cols-[2.25rem_1fr] gap-2">
                <span className="font-mono text-sm text-muted">{String(n + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="t-h3">{s.title}</h3>
                  <p className="measure mt-2 text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="section" className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-12">
          <h2 className="t-label pt-2">Outcome</h2>
          <p className="measure text-[1.125rem]">{p.outcome}</p>
        </Reveal>

        {p.figures.length > 0 && (
          <Reveal as="section" className="grid gap-6">
            <h2 className="t-label">Diagrams</h2>
            <div className="grid gap-12">
              {p.figures.map((f) => (
                <figure key={f.src}>
                  <div className="overflow-hidden rounded-lg border border-border bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.src} alt={f.alt} loading="lazy" decoding="async" className="h-auto w-full" />
                  </div>
                  <figcaption className="mt-3 text-sm text-muted">{f.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        )}

        {p.links.length > 0 && (
          <Reveal as="section" className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-12">
            <h2 className="t-label pt-2">Links</h2>
            <ul className="grid gap-3">
              {p.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    {...(l.download ? { download: true } : {})}
                    className="inline-flex min-h-11 items-center rounded-md border border-border px-5 text-[0.9375rem] font-medium transition-colors hover:border-muted"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>

      <nav aria-label="Next project" className="mt-24 border-t border-border pt-8">
        <p className="t-label">Next project</p>
        <Link prefetch={false} href={`/projects/${next.slug}/`} className="group mt-3 inline-flex min-h-11 items-center gap-3">
          <span className="t-h2 group-hover:text-accent-text">{next.title}</span>
          <span aria-hidden="true" className="text-2xl text-muted">&rarr;</span>
        </Link>
      </nav>
    </article>
  );
}
