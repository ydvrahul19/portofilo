const experiences = [
  {
    company: "Localrizz",
    role: "Full-Stack Developer",
    period: "2026 – Present",
    status: "current",
    desc: [
      "Partnered with clients across diverse domains to architect and deliver custom web applications, MVPs, and admin dashboards — owning the full lifecycle from requirement gathering and system design to deployment.",
      "Built automation tools and scalable full-stack solutions using React, Next.js, and Node.js, reducing manual workflows and accelerating time-to-market for client products.",
      "Managed end-to-end client communication and technical delivery simultaneously, ensuring on-time launches and translating business requirements into production-ready applications.",
    ],
    tags: ["React", "Next.js", "Node.js", "Full-Stack", "Client Work"],
    note: "ongoing",
  },
  {
    company: "Oriserve",
    role: "Associate Software Development Engineer",
    period: "2025 – 2026",
    status: "past",
    desc: [
      "Built and maintained scalable enterprise software used by thousands of users, developing RESTful APIs, optimizing database queries, and contributing to key architectural decisions across core product modules.",
      "Diagnosed and resolved complex software issues end-to-end — reproducing bugs, writing optimized SQL queries for deep database investigation, and delivering timely fixes to maintain uninterrupted system operability.",
      "Consistently met SLAs and KPIs including response time, resolution speed, and software quality benchmarks, directly contributing to high customer satisfaction and product reliability.",
    ],
    tags: ["Node.js", "React", "MongoDB", "REST APIs", "Agile/Scrum"],
    note: "1 years",
  },
  {
    company: "Sparrowhawk System",
    role: "Junior Full Stack Developer",
    period: "2023 – 2025",
    status: "past",
    desc: [
      "Integrated TRPC and Prisma into a Next.js environment, enhancing database interactions, reducing query times by 40% and improving overall app performance by 25% through creating and modifying Prisma models.",
      "Architected scalable backend applications with Next.js, improving server response times by 30% and increasing system throughput by 20%, implementing performance optimization best practices.",
      "Implemented responsive designs and optimized performance.",
    ],
    tags: ["Node.js", "React", "MongoDB", "REST APIs", "Next.js"],
    note: "2 years",
  },
  {
    company: "Army Institute of Technology",
    role: "B.E. — Information Technology",
    period: "2019 – 2023",
    status: "edu",
    desc: "Graduated with a strong foundation in data structures, algorithms, software engineering, and computer networks. Led multiple team projects and participated in hackathons, winning recognition for innovative solutions.",
    tags: ["Data Structures", "Algorithms", "DBMS", "OS", "Networking"],
    note: "4 years",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6"
      style={{ background: "rgba(74,127,181,0.03)", borderTop: "1px solid rgba(74,127,181,0.12)" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="reveal mb-14">
          <div className="flex items-center gap-4 mb-2">
            <div className="field-label">§ 04 — Experience</div>
            <div className="flex-1 border-t border-dashed border-blue-line/20" />
            <div className="annotation text-sm text-accent">work history</div>
          </div>
          <h2
            className="font-display font-bold text-ink"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            Experience
          </h2>
          <p className="text-ink-faint mt-2 font-mono text-sm">
            // Where I&apos;ve made an impact professionally
          </p>
        </div>

        {/* Timeline - engineering style */}
        <div className="relative">
          {/* Vertical spine */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #4a7fb5 60%, transparent)", opacity: 0.4 }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={exp.company} className="reveal relative pl-16">

                {/* Timeline dot - engineering circle */}
                <div
                  className="absolute left-4 top-4 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{
                    background: exp.status === "current" ? "#c4420a" : "#faf7f2",
                    border: `2px solid ${exp.status === "current" ? "#c4420a" : "#4a7fb5"}`,
                    zIndex: 10,
                  }}
                >
                  {exp.status === "current" && (
                    <div className="w-1.5 h-1.5 rounded-full bg-paper animate-pulse" />
                  )}
                </div>

                {/* Horizontal connector */}
                <div
                  className="absolute left-8 top-[22px] w-8 h-px"
                  style={{ background: "rgba(74,127,181,0.3)" }}
                />

                {/* Card - blueprint style */}
                <div
                  className="relative p-6 bracket-corner"
                  style={{
                    background: "#faf7f2",
                    border: "1px solid rgba(74,127,181,0.2)",
                    borderRadius: "2px",
                    boxShadow: "3px 3px 0 rgba(74,127,181,0.06)",
                  }}
                >
                  {/* Entry number annotation */}
                  <div
                    className="absolute -top-2 -left-2 field-label text-[0.6rem] bg-paper px-1"
                    style={{ color: "rgba(74,127,181,0.5)" }}
                  >
                    entry.0{i + 1}
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-ink leading-tight">
                        {exp.company}
                      </h3>
                      <p className="font-mono text-sm text-blueprint mt-0.5">{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div
                        className="font-mono text-xs px-3 py-1"
                        style={{
                          background: "rgba(74,127,181,0.08)",
                          border: "1px solid rgba(74,127,181,0.25)",
                          borderRadius: "2px",
                          color: "#1a3a5c",
                        }}
                      >
                        {exp.period}
                      </div>
                      <div
                        className="annotation text-xs"
                        style={{ color: exp.status === "current" ? "#c4420a" : "#8b7d6b" }}
                      >
                        ← {exp.note}
                      </div>
                    </div>
                  </div>

                  {/* Description on ruled lines */}
                  <div
                    className="mb-4 p-3 pl-4"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(transparent, transparent 22px, rgba(74,127,181,0.1) 23px)",
                      backgroundSize: "100% 23px",
                      borderLeft: "2px solid rgba(74,127,181,0.2)",
                    }}
                  >
                    {Array.isArray(exp.desc) ? (
                      <ul className="flex flex-col gap-2">
                        {exp.desc.map((point, j) => (
                          <li key={j} className="text-ink-light text-sm leading-relaxed flex gap-2">
                            <span className="text-blueprint mt-0.5">—</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-ink-light text-sm leading-relaxed">{exp.desc}</p>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}