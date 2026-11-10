export type Status = "Phase 1 complete" | "Complete" | "Design locked" | "Plan done";

export type Figure = { src: string; alt: string; caption: string };

export type Project = {
  slug: string;
  title: string;
  line: string; // one-line summary for cards
  status: Status;
  tags: string[];
  image: { src: string; alt: string; width: number; height: number; srcSet?: string };
  problem: string;
  role: string;
  tools: string[];
  process: { title: string; body: string }[];
  outcome: string;
  figures: Figure[];
  links: { label: string; href: string; download?: boolean }[];
};

export const projects: Project[] = [
  {
    slug: "gym-app",
    title: "Gym App",
    line: "A C# console app that grew into a REST API, with a Raspberry Pi front end next.",
    status: "Phase 1 complete",
    tags: ["C#", ".NET", "ASP.NET Core", "EF Core", "SQLite"],
    image: {
      src: "/images/gym-overview.webp",
      srcSet: "/images/gym-overview-640.webp 640w, /images/gym-overview-1000.webp 1000w, /images/gym-overview.webp 1600w",
      alt: "Flow diagram of the Gym App: main menu leading to the food library, workout and meal builder, and progress tracker",
      width: 1600,
      height: 900,
    },
    problem:
      "I wanted one place to keep a food library, build a workout and meal plan from my goals, and track progress day by day. It was also my way to practice taking a project from an idea to something that runs.",
    role: "Solo: designed, planned with flow diagrams, and built every layer.",
    tools: ["C#", ".NET", "ASP.NET Core Web API", "Entity Framework Core", "SQLite", "Swagger", "Avalonia UI", "Windows Forms"],
    process: [
      {
        title: "Plan with diagrams first",
        body: "Before writing code I mapped the whole app: a main menu leading to a food library, a workout and meal builder, and a progress tracker. The flow diagrams settled the menus, the saved files and the data model.",
      },
      {
        title: "Console app",
        body: "Phase 1 is a C# console app. Foods load from a text file, plans save to a second file, and layered error handling means bad input or a missing file never crashes the app.",
      },
      {
        title: "Cross-platform desktop build",
        body: "I rebuilt the interface in Avalonia (XAML) on the same business logic and published a standalone desktop build.",
      },
      {
        title: "REST API and data layer",
        body: "I wrapped the logic in an ASP.NET Core REST API with full CRUD, Entity Framework Core, SQLite and Swagger, plus a Windows Forms client. A layered design keeps controllers, services and data access separate.",
      },
    ],
    outcome:
      "Phase 1 is complete and working end to end. Phase 2 is a Raspberry Pi front end that talks to the API.",
    figures: [
      {
        src: "/images/gym-master.webp",
        alt: "Master flow diagram of the Gym App showing the start, the main menu loop and each option",
        caption: "Master diagram: start, load foods, then the main menu loop.",
      },
      {
        src: "/images/gym-flow.webp",
        alt: "Flow from plan type (workout, meal or both) to goals, questions, build plan, your plan, and track progress",
        caption: "Plan builder flow: plan type, goals, questions, build, then track.",
      },
      {
        src: "/images/gym-er.webp",
        alt: "Entity relationship diagram with plan request, workout plan, meal plan, progress entry and food",
        caption: "Data model: plans, plan items, foods and progress entries.",
      },
      {
        src: "/images/gym-architecture.webp",
        alt: "Layered architecture: Raspberry Pi app and Swagger send HTTP JSON to API controllers, services, data, and the database",
        caption: "Layered architecture for the API and the planned Raspberry Pi app.",
      },
    ],
    links: [],
  },
  {
    slug: "home-nas",
    title: "Home NAS",
    line: "An old MSI laptop running OpenMediaVault, with four 1 TB drives as one protected photo server.",
    status: "Complete",
    tags: ["OpenMediaVault", "Linux", "Docker", "Tailscale", "SnapRAID"],
    image: {
      src: "/images/nas-hero.jpg",
      srcSet: "/images/nas-hero-640.jpg 640w, /images/nas-hero-1200.jpg 1200w, /images/nas-hero.jpg 1600w",
      alt: "A closed black laptop on a dark desk with Ethernet and power cables, a USB hub and four stacked drives behind it",
      width: 1600,
      height: 900,
    },
    problem:
      "Four spare 1 TB drives were sitting unused, and one of them held the only copy of years of photos. I wanted one shared drive for the whole house, protection against a failed drive, a proper photo app, and safe access from anywhere, built mostly from hardware I already owned.",
    role: "Solo: planned, built, hardened and troubleshot the whole system, October 24 to November 1, 2026.",
    tools: ["OpenMediaVault 8", "Debian 13", "mergerfs", "SnapRAID", "SMB", "Docker Compose", "Immich", "Tailscale"],
    process: [
      {
        title: "Plan, price, pivot",
        body: "The first design was a Raspberry Pi 5 build. When the 8 GB board rose to about $200 (about $307 for the full parts list), I switched to an old MSI gaming laptop and only had to buy a replacement charger. That skipped about $258 of Pi parts.",
      },
      {
        title: "Install and harden for 24/7",
        body: "I installed OpenMediaVault on the laptop's internal drive, set the lid to be ignored, disabled sleep, and reserved a fixed address on the router so the NAS can run closed and always on.",
      },
      {
        title: "Move the photos safely",
        body: "Nothing was wiped until a verified copy existed elsewhere. I copied about 150 GB to a PC and checked every file with robocopy: 10,115 files, 0 missing, 0 mismatched. Only then did I wipe and format the drives.",
      },
      {
        title: "Pool and protect",
        body: "mergerfs pools three drives into one 2.7 TB share. The fourth drive holds SnapRAID parity, so any single failed drive can be rebuilt. A nightly job syncs parity, with a 50-file delete threshold as a safety check, and a weekly scrub catches silent corruption.",
      },
      {
        title: "Photo app and remote access",
        body: "Immich runs in Docker with the existing photos mounted read-only. Tailscale gives encrypted access from anywhere with no router ports open.",
      },
    ],
    outcome:
      "About 2.7 TB of usable, protected storage. 10,115 photo and video files moved with zero lost. Reusing the laptop saved about $258 in parts. A second off-site copy is the next recommended step, because a NAS is not a backup.",
    figures: [
      {
        src: "/images/diagrams/nas-system.svg",
        alt: "System diagram: desktop PC, phone and remote devices reach the home router, which connects to the MSI laptop NAS running OpenMediaVault, with three data drives and one parity drive on a powered USB hub",
        caption: "The finished system. Away from home, Tailscale provides an encrypted link, so no router ports are open.",
      },
      {
        src: "/images/diagrams/nas-storage.svg",
        alt: "Storage design: three data drives pooled by mergerfs into one 2.7 terabyte share, with a fourth drive holding SnapRAID parity",
        caption: "Storage design: three drives pooled, one parity drive outside the pool.",
      },
      {
        src: "/images/diagrams/nas-verify.svg",
        alt: "Safe migration flow: copy photos to a PC, verify with robocopy, then wipe and format drives, then copy back to the pool",
        caption: "Verify, then wipe. The wipe step is the only irreversible one.",
      },
    ],
    links: [{ label: "Download the project overview (PDF)", href: "/Home-NAS-Overview.pdf", download: true }],
  },
  {
    slug: "tv-data-pad",
    title: "TV Data Pad",
    line: "A retro, battery-powered WiFi remote for an LG webOS TV, built around a Raspberry Pi Zero 2 W.",
    status: "Design locked",
    tags: ["Raspberry Pi Zero 2 W", "Python", "LG webOS", "3D printing", "OpenSCAD"],
    image: {
      src: "/images/tv-render.jpg",
      srcSet: "/images/tv-render-800.jpg 800w, /images/tv-render.jpg 1100w",
      alt: "Concept render of the TV Data Pad: olive body, brushed metal faceplate, chrome power toggle, knurled volume knob, number pad and arrow keys",
      width: 1100,
      height: 1005,
    },
    problem:
      "I wanted a physical remote I would actually enjoy holding: solid buttons, a real volume knob and a toggle for power. It talks to the TV over the network, so it works without line of sight, and it runs on a battery so it can sit on the couch or live on its charger.",
    role: "Solo: concept, system design, faceplate layout and build plan.",
    tools: ["Raspberry Pi Zero 2 W", "Python", "LG webOS", "GPIO expander", "OpenSCAD", "3D printing"],
    process: [
      {
        title: "Concept and look",
        body: "A battery-powered, retro-styled square pad, about 3.75 by 3.75 inches, in one 3D-printed case: brushed metal faceplate, olive body, chrome toggle and a knurled volume knob.",
      },
      {
        title: "System design",
        body: "The controls feed the Pi through a GPIO expander because the layout needs more pins than the Pi offers. A UPS HAT powers the Pi from a LiPo battery, and every command reaches the TV over WiFi through a Python webOS library.",
      },
      {
        title: "Decisions locked",
        body: "Tactile push buttons with printed keycaps, a face size confirmed against the CAD model, and a GPIO expander to solve the pin shortage. Printing choices remain open.",
      },
      {
        title: "Build plan",
        body: "Six phases: plan and design (complete), order parts, software bring-up, breadboard the controls, enclosure CAD and print, and final assembly.",
      },
    ],
    outcome: "Design is locked and phase 1 of 6 is complete. The parts order and software bring-up come next.",
    figures: [
      {
        src: "/images/tv-system.webp",
        alt: "System blueprint: faceplate controls connect to a GPIO expander and a Raspberry Pi Zero 2 W, which sends commands over WiFi to the TV, powered by a UPS HAT and battery",
        caption: "System blueprint: power, controls and the TV link.",
      },
      {
        src: "/images/tv-faceplate.webp",
        alt: "Faceplate blueprint, 95 millimeters square, showing the power toggle, volume knob, number pad, arrow keys and a row of six round buttons",
        caption: "Faceplate blueprint, 95 × 95 mm, not to scale.",
      },
    ],
    links: [],
  },
  {
    slug: "pi-hole",
    title: "Pi-hole Ad Blocker",
    line: "Network-wide ad and tracker blocking on a Raspberry Pi, with no software on any device.",
    status: "Plan done",
    tags: ["Raspberry Pi", "Pi-hole", "DNS", "Networking"],
    image: {
      src: "/images/diagrams/pihole.svg",
      alt: "Diagram: devices ask the Pi-hole for DNS through the router; ads and trackers are blocked and everything else passes through",
      width: 1200,
      height: 750,
    },
    problem:
      "Ads and trackers follow every device on the home network, and installing blockers on each one is tedious and incomplete. A DNS-level blocker protects phones, TVs and consoles at once.",
    role: "Solo: researched, scoped and planned the deployment.",
    tools: ["Raspberry Pi", "Pi-hole", "DNS", "Docker (alternative)"],
    process: [
      {
        title: "How it works",
        body: "Devices look up domain names through the Pi-hole. Known ad and tracker domains get no answer, so they never load. Everything else is passed on to a normal DNS provider.",
      },
      {
        title: "Where it runs",
        body: "The plan is a dedicated Raspberry Pi wired to the router. Running it in Docker on the Home NAS laptop is the alternative I evaluated.",
      },
      {
        title: "The known obstacle",
        body: "The ISP's gateway does not let me change the DNS server it hands out to devices, so the deployment needs a workaround, such as pointing devices at the Pi-hole directly or turning on DHCP on the Pi.",
      },
    ],
    outcome: "Plan complete. Next steps are choosing the host and the DNS workaround, then deploying.",
    figures: [],
    links: [],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
