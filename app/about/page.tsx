import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Four years running secure Navy systems, now training as a C#/.NET and Azure developer. Experience, skills and certifications.",
  alternates: { canonical: "/about/" },
};

const experience = [
  {
    role: "Software Developer Trainee",
    org: "Microsoft Software & Systems Academy (MSSA), Cloud Application Development",
    when: "2026 to present",
    note: "Full-time, project-based C#/.NET training sponsored by Microsoft.",
    bullets: [
      "Built a C# fitness app end to end (food library, meal and workout planner, progress tracker), planned with flow diagrams.",
      "Added file-based saving between sessions and layered error handling so bad input or file errors never crash the app.",
      "Rebuilt it as a cross-platform Avalonia (XAML) desktop app on the same business logic and published a standalone build.",
      "Built an ASP.NET Core REST API (full CRUD) with Entity Framework Core, SQLite and Swagger, plus a Windows Forms client for it.",
      "Modeled relational data with EF Core code-first, database-first and migrations on SQL Server LocalDB, including seed data.",
      "Implemented linked lists, stacks, queues, binary search trees, recursion and bubble, selection, merge and quick sort in C#.",
      "Solved weekly challenge labs, group projects and LeetCode problems using generics, delegates, events, LINQ and serialization.",
    ],
  },
  {
    role: "Information Systems Technician (Systems Administrator)",
    org: "U.S. Navy, USS Ronald Reagan",
    when: "Oct 2021 to Dec 2025",
    note: "",
    bullets: [
      "Operated and maintained 25+ VMware virtual machines supporting secure shipboard systems and communications platforms.",
      "Managed 3,000 to 3,500+ end-user accounts in Active Directory, including provisioning, role-based permissions and security administration.",
      "Monitored and validated security compliance across shipboard networks, maintaining 100% adherence to information assurance standards.",
      "Configured and maintained core network infrastructure (routers, switches, communications systems) across multiple shipboard environments.",
      "Sustained continuous, uninterrupted communications for 1,500+ personnel by supporting secure LAN/WAN operations.",
      "Performed system backups, VM recovery and switch restoration procedures, preserving 100% data integrity through all operations.",
      "Led the division as divisional lead, translating senior leadership direction into task assignments and providing technical oversight.",
      "Supervised 50+ personnel as Work Center Supervisor (Team Lead) for preventative maintenance planning, achieving zero mission-critical failures over 3 years.",
    ],
  },
];

const skills = [
  {
    group: "Programming & frameworks",
    items: ["C#", ".NET", "ASP.NET Core Web API", "Entity Framework Core", "LINQ", "SQL (SQL Server, SQLite)", "Avalonia UI", "Windows Forms", ".NET MAUI", "XAML", "Object-oriented programming", "Data structures & algorithms"],
  },
  { group: "Cloud & AI", items: ["Microsoft Azure (compute, storage, networking, identity)", "Azure OpenAI", "Generative AI / LLM integration", "Prompt engineering"] },
  { group: "Systems & administration", items: ["Windows", "Linux", "VMware", "Active Directory", "Microsoft Exchange", "SharePoint"] },
  { group: "Networking & security", items: ["Cisco routers & switches", "Cisco Identity Services Engine", "Cisco Web Security Virtual Appliance", "Information assurance"] },
];

const certs = [
  { name: "CompTIA A+", status: "Earned" },
  { name: "CompTIA Security+", status: "Earned" },
  { name: "Microsoft Azure Fundamentals (AZ-900)", status: "In progress" },
  { name: "Microsoft Azure AI Fundamentals (AI-900)", status: "In progress" },
];

export default function About() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
      <header>
        <p className="t-label">About</p>
        <h1 className="t-display mt-6 max-w-[14ch]">Systems first, now software</h1>
        <div className="measure mt-8 grid gap-5 text-lg">
          <p>
            I spent four years in the U.S. Navy as an Information Systems Technician, running secure shipboard systems for
            1,500+ people. I learned to keep things reliable when failure was not an option.
          </p>
          <p className="text-muted">
            Now I&rsquo;m finishing Microsoft&rsquo;s Cloud Application Development program (C#, .NET, data structures,
            Azure) and building projects that go from an idea to something that runs, documenting every step. I&rsquo;m
            looking for an entry-level software engineering, cloud/Azure, or sysadmin and developer role. Active TS/SCI
            clearance. Based in Maryland; open to remote (US), Virginia or Georgia.
          </p>
        </div>
      </header>

      <Reveal as="section" className="mt-20 md:mt-28" >
        <h2 className="t-label">Experience</h2>
        <ol className="mt-8 grid gap-0 border-t border-border">
          {experience.map((e) => (
            <li key={e.role} className="grid gap-4 border-b border-border py-10 md:grid-cols-[1fr_2fr] md:gap-12">
              <div>
                <p className="font-mono text-sm text-muted">{e.when}</p>
                <h3 className="t-h3 mt-3">{e.role}</h3>
                <p className="mt-1 text-muted">{e.org}</p>
              </div>
              <div>
                {e.note && <p className="measure mb-4 text-muted">{e.note}</p>}
                <ul className="measure grid list-disc gap-3 pl-5 marker:text-muted">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal as="section" className="mt-20 md:mt-28">
        <h2 className="t-label">Skills</h2>
        <div className="mt-8 grid gap-0 border-t border-border">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-4 border-b border-border py-8 md:grid-cols-[1fr_2fr] md:gap-12">
              <h3 className="t-h3">{s.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li key={i} className="rounded-md border border-border px-2.5 py-1 text-sm text-muted">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mt-20 md:mt-28">
        <h2 className="t-label">Certifications</h2>
        <ul className="mt-8 grid gap-0 border-t border-border">
          {certs.map((c) => (
            <li key={c.name} className="flex min-h-14 items-center justify-between gap-4 border-b border-border py-4">
              <span className="font-medium">{c.name}</span>
              <span className="t-label flex items-center gap-2 whitespace-nowrap">
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${c.status === "Earned" ? "bg-accent" : "border border-muted"}`}
                />
                {c.status}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
