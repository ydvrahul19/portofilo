const projects = [
  {
    id: "P001",
    icon: "🏥",
    name: "DoctorMy",
    type: "Healthcare Platform",
    desc: "Connecting patients with doctors for online consultations, appointment booking, and medical records management.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    color: "#4a7fb5",
    status: "deployed",
    complexity: "★★★★",
  },
  {
    id: "P002",
    icon: "📧",
    name: "Email Sequencer",
    type: "Marketing Automation",
    desc: "Automated drip campaign builder with audience segmentation, analytics, and scheduled delivery.",
    tags: ["React", "Express", "Nodemailer", "PostgreSQL"],
    color: "#c4420a",
    status: "deployed",
    complexity: "★★★",
  },
  {
    id: "P003",
    icon: "🧾",
    name: "Invoice Manager",
    type: "Billing & Finance",
    desc: "Full-featured invoice system with PDF generation, payment tracking, client management, and financial dashboard.",
    tags: ["React", "Node.js", "PDF.js", "MySQL"],
    color: "#1a7a4a",
    status: "live",
    complexity: "★★★★",
  },
  {
    id: "P004",
    icon: "💬",
    name: "Chatify",
    type: "Real-Time Chat",
    desc: "Chat application with group rooms, file sharing, emoji support, and end-to-end encryption for secure communication.",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    color: "#7c3aed",
    status: "deployed",
    complexity: "★★★★",
  },
  {
    id: "P005",
    icon: "👨‍💻",
    name: "Code Editor",
    type: "Dev Tool",
    desc: "In-browser code editor with multi-language support, syntax highlighting, live preview, and collaborative sessions.",
    tags: ["React", "Monaco", "WebSockets", "Docker"],
    color: "#0891b2",
    status: "beta",
    complexity: "★★★★★",
  },
  {
    id: "P006",
    icon: "✈️",
    name: "Travel Buddy",
    type: "Travel Planning",
    desc: "Travel discovery app with curated itineraries, local recommendations, budget tracking, and social trip sharing.",
    tags: ["React", "Maps API", "Firebase", "PWA"],
    color: "#b45309",
    status: "live",
    complexity: "★★★",
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
                className="relative h-full flex flex-col"
                style={{
                  background: "#faf7f2",
                  border: "1px solid rgba(74,127,181,0.18)",
                  borderRadius: "2px",
                  boxShadow: "2px 2px 0 rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    `4px 6px 0 ${p.color}30`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translate(-2px,-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "2px 2px 0 rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLDivElement).style.transform = "none";
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
                  <div className="flex items-center gap-2">
                    {/* Blueprint dot - like an LED indicator */}
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background:
                          p.status === "live" || p.status === "deployed"
                            ? "#16a34a"
                            : "#f59e0b",
                        boxShadow:
                          p.status === "live"
                            ? "0 0 6px #16a34a80"
                            : "none",
                      }}
                    />
                    <span className="field-label text-[0.6rem]">{p.id}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-[0.6rem] px-2 py-0.5"
                      style={{
                        border: `1px solid ${p.color}40`,
                        color: p.color,
                        borderRadius: "2px",
                        background: `${p.color}08`,
                      }}
                    >
                      {p.status.toUpperCase()}
                    </span>
                  </div>
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
                      <div className="field-label text-[0.62rem] mt-0.5">{p.type}</div>
                    </div>
                  </div>

                  {/* Complexity rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="field-label text-[0.6rem]">Complexity</span>
                    <span
                      className="annotation text-xs"
                      style={{ color: p.color, letterSpacing: "0.05em" }}
                    >
                      {p.complexity}
                    </span>
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
                        className="font-mono text-[0.65rem] px-1.5 py-0.5"
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

                  {/* Action links - like blueprint action stamps */}
                  <div className="flex gap-2 pt-3" style={{ borderTop: "1px dashed rgba(74,127,181,0.2)" }}>
                    <a
                      href="#"
                      className="flex items-center gap-1 font-mono text-xs text-ink-faint hover:text-ink transition-colors px-3 py-1.5"
                      style={{
                        border: "1px solid rgba(74,127,181,0.2)",
                        borderRadius: "2px",
                        background: "rgba(74,127,181,0.04)",
                      }}
                    >
                      ⌥ GitHub
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-1 font-mono text-xs hover:opacity-90 transition-opacity px-3 py-1.5 text-paper"
                      style={{
                        background: p.color,
                        borderRadius: "2px",
                        opacity: 0.8,
                      }}
                    >
                      ↗ Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
