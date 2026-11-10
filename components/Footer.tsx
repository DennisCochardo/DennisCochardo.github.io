import { site } from "@/lib/site";

const links = [
  { label: "Email", href: `mailto:${site.email}`, text: site.email },
  { label: "LinkedIn", href: site.linkedin, text: "in/denniscochardo", external: true },
  { label: "GitHub", href: site.github, text: `@${site.githubHandle}`, external: true },
  { label: "Resume", href: site.resume, text: "Download PDF", download: true },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
        <p className="t-label">Contact</p>
        <h2 className="t-h2 mt-4 max-w-[20ch]">Let&rsquo;s talk about your next hire.</h2>
        <ul className="mt-12 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((l) => (
            <li key={l.label} className="border-t border-border">
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(l.download ? { download: true } : {})}
                className="group flex min-h-16 flex-col justify-center py-3"
              >
                <span className="t-label">{l.label}</span>
                <span className="mt-2 break-words text-[1rem] text-fg transition-colors group-hover:text-accent-text">
                  {l.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-sm text-muted">&copy; 2026 {site.name}. Maryland, USA.</p>
      </div>
    </footer>
  );
}
