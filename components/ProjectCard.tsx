import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, level = 3 }: { project: Project; level?: 2 | 3 }) {
  const p = project;
  const Heading = level === 2 ? "h2" : "h3";
  return (
    <Link prefetch={false}
      href={`/projects/${p.slug}/`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-muted"
    >
      <div className="aspect-[16/10] overflow-hidden border-b border-border bg-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image.src}
          srcSet={p.image.srcSet}
          sizes="(min-width: 1100px) 538px, (min-width: 768px) 46vw, 100vw"
          alt={p.image.alt}
          width={p.image.width}
          height={p.image.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-4">
          <Heading className="t-h3">{p.title}</Heading>
          <span className="t-label flex shrink-0 items-center gap-2 whitespace-nowrap">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {p.status}
          </span>
        </div>
        <p className="mt-2 text-[0.9375rem] text-muted">{p.line}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools">
          {p.tags.map((t) => (
            <li key={t} className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
