import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Four solo projects, from a C# fitness app and API to a protected home photo server: what I built, how, and what I learned.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
      <p className="t-label">Projects</p>
      <h1 className="t-display mt-6 max-w-[16ch]">Things I&rsquo;ve built</h1>
      <p className="measure mt-6 text-lg text-muted">
        Four solo projects. Each one is planned, built and documented from the first idea to something that runs.
      </p>
      <ul className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Reveal as="li" key={p.slug}>
            <ProjectCard project={p} level={2} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
