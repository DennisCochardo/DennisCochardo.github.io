import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { facts, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-[1100px] px-4 pb-16 pt-16 md:px-6 md:pb-24 md:pt-24">
        <p className="t-label">{site.title}</p>
        <h1 className="t-display mt-6">{site.name}</h1>
        <p className="mt-6 max-w-[24ch] text-[clamp(1.375rem,2vw+0.75rem,1.875rem)] font-medium leading-snug tracking-tight text-muted">
          {site.pitch}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link prefetch={false}
            href="/projects/"
            className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 text-[0.9375rem] font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            View work
          </Link>
          <a
            href={site.resume}
            download
            className="inline-flex min-h-11 items-center rounded-md border border-border px-6 text-[0.9375rem] font-medium transition-colors hover:border-muted"
          >
            Download resume
          </a>
        </div>
      </section>

      <section aria-label="Quick facts" className="border-y border-border">
        <dl className="mx-auto grid max-w-[1100px] grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col-reverse justify-end gap-3 px-4 py-8 md:px-6 ${i % 2 === 1 ? "border-l border-border" : ""} ${
                i > 0 ? "lg:border-l lg:border-border" : ""
              } ${i > 1 ? "border-t border-border lg:border-t-0" : ""}`}
            >
              <dt className="t-label !leading-snug">{f.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24" aria-labelledby="work">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="t-label">Selected work</p>
            <h2 id="work" className="t-h2 mt-4">
              Projects that run
            </h2>
          </div>
          <Link prefetch={false}
            href="/projects/"
            className="hidden min-h-11 items-center text-[0.9375rem] text-accent-text hover:underline sm:inline-flex"
          >
            All projects
          </Link>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Reveal as="li" key={p.slug}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </ul>
        <Link prefetch={false}
          href="/projects/"
          className="mt-8 inline-flex min-h-11 items-center text-[0.9375rem] text-accent-text hover:underline sm:hidden"
        >
          All projects
        </Link>
      </section>
    </>
  );
}
