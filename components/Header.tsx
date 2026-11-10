import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/lib/site";

const nav = [
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-4 md:px-6">
        <Link prefetch={false} href="/" className="-ml-2 flex min-h-11 items-center px-2 text-[0.9375rem] font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1">
          {nav.map((n) => (
            <Link prefetch={false}
              key={n.href}
              href={n.href}
              className="flex min-h-11 items-center rounded-md px-3 text-[0.9375rem] text-muted transition-colors hover:text-fg"
            >
              {n.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
