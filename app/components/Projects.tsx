import { SITE } from "../site";

type Project = { id: string; icon: string; name: string; type: string; desc: string; tags: string[]; color: string; github: string; demo: string };

const projects: Project[] = [
  {
    id: "P001",
    icon: "🏥",
    name: "DoctorMy",
    type: "Healthcare Appointment Platform",
    desc: "Full-stack appointment booking across 20+ medical specialties with JWT authentication, protected routes and interactive doctor profiles. REST API and data layer for real-time booking; page load time cut by 40% with lazy loading and code splitting.",
    tags: ["React", "Node.js", "JWT", "Tailwind CSS", "Framer Motion"],
    color: "#4a7fb5",
    github: "",
    demo: "https://doctormyin.vercel.app/",
  },
  {
    id: "P002",
    icon: "📧",
    name: "Email Sequencer",
    type: "Marketing Automation",
    desc: "Automated drip campaign builder with audience segmentation, analytics, and scheduled delivery.",
    tags: ["React", "Express", "Nodemailer", "PostgreSQL"],
    color: "#c4420a",
    github: "", // e.g. "https://github.com/ydvrahul06/your-repo"
    demo: "",   // e.g. "https://doctormy.vercel.app"
  },
  {
    id: "P003",
    icon: "🧾",
    name: "Invoice Manager",
    type: "Billing & Finance",
    desc: "Full-featured invoice system with PDF generation, payment tracking, client management, and financial dashboard.",
    tags: ["React", "Node.js", "PDF.js", "MySQL"],
    color: "#1a7a4a",
    github: "", // e.g. "https://github.com/ydvrahul06/your-repo"
    demo: "",   // e.g. "https://doctormy.vercel.app"
  },
  {
    id: "P004",
    icon: "💬",
    name: "Chatify",
    type: "Real-Time Chat",
    desc: "Chat application with group rooms, file sharing, emoji support, and end-to-end encryption for secure communication.",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    color: "#7c3aed",
    github: "", // e.g. "https://github.com/ydvrahul06/your-repo"
    demo: "",   // e.g. "https://doctormy.vercel.app"
  },
  {
    id: "P005",
    icon: "👨‍💻",
    name: "Code Editor",
    type: "Dev Tool",
    desc: "In-browser code editor with multi-language support, syntax highlighting, live preview, and collaborative sessions.",
    tags: ["React", "Monaco", "WebSockets", "Docker"],
    color: "#0891b2",
    github: "", // e.g. "https://github.com/ydvrahul06/your-repo"
    demo: "",   // e.g. "https://doctormy.vercel.app"
  },
  {
    id: "P006",
    icon: "✈️",
    name: "Travel Buddy",
    type: "Travel Planning",
    desc: "Travel discovery app with curated itineraries, local recommendations, budget tracking, and social trip sharing.",
    tags: ["React", "Maps API", "Firebase", "PWA"],
    color: "#b45309",
    github: "", // e.g. "https://github.com/ydvrahul06/your-repo"
    demo: "",   // e.g. "https://doctormy.vercel.app"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="reveal mb-14">
          <div className="flex items-center gap-4 mb-2">
            <div className="field-label">§ 05 — Projects</div>
            <div className="flex-1 border-t border-dashed border-blue-line/20" />
            <div className="annotation text-sm text-accent">featured builds</div>
          </div>
          <h2
            className="font-display font-bold text-ink"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            Featured Projects
          </h2>
          <p className="text-ink-faint mt-2 font-mono text-sm">
            // A selection of things I&apos;ve built with care
          </p>
        </div>

        {/* Projects grid - spec sheet style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="reveal group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className="project-card relative h-full flex flex-col"
                style={{
                  background: "#faf7f2",
                  border: "1px solid rgba(74,127,181,0.18)",
                  borderRadius: "2px",
                  ["--c" as string]: p.color,
                }}
              >
                {/* Spec header bar */}
                <div
                  className="flex items-center justify-between px-4 py-2"
                  style={{
                    background: `${p.color}10`,
                    borderBottom: `1px solid ${p.color}25`,
                  }}
                >
                  <span className="field-label text-[0.7rem]">{p.id}</span>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  {/* Icon + name */}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-10 h-10 flex items-center justify-center text-xl flex-shrink-0"
                      style={{
                        background: `${p.color}10`,
                        border: `1px dashed ${p.color}40`,
                        borderRadius: "2px",
                      }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-base text-ink leading-tight">
                        {p.name}
                      </h3>
                      <div className="field-label text-[0.72rem] mt-0.5">{p.type}</div>
                    </div>
                  </div>

                  {/* Desc - ruled */}
                  <p className="text-ink-light text-sm leading-relaxed mb-4 flex-1">
                    {p.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.72rem] px-1.5 py-0.5"
                        style={{
                          border: `1px solid ${p.color}30`,
                          color: p.color,
                          background: `${p.color}06`,
                          borderRadius: "2px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(p.github || p.demo) && (
                    <div className="flex gap-2 pt-3" style={{ borderTop: "1px dashed rgba(74,127,181,0.2)" }}>
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 font-mono text-xs text-ink-faint hover:text-ink transition-colors px-3 py-1.5"
                          style={{ border: "1px solid rgba(74,127,181,0.2)", borderRadius: "2px", background: "rgba(74,127,181,0.04)" }}
                        >
                          ⌥ GitHub
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 font-mono text-xs hover:opacity-90 transition-opacity px-3 py-1.5 text-paper"
                          style={{ background: p.color, borderRadius: "2px" }}
                        >
                          ↗ Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-blueprint border border-blue-line/40 px-5 py-2.5 hover:bg-blue-faint/30 transition-colors"
            style={{ borderRadius: "2px" }}
          >
            ⌥ See more on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
