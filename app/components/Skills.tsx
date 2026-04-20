"use client";

const skillGroups = [
  {
    icon: "⚡",
    title: "Languages",
    color: "#4a7fb5",
    skills: [
      { name: "JavaScript", pct: 92 },
      { name: "TypeScript", pct: 85 },
      { name: "Python", pct: 72 },
      { name: "Java", pct: 68 },
      { name: "SQL", pct: 80 },
    ],
  },
  {
    icon: "🎨",
    title: "Frontend",
    color: "#c4420a",
    skills: [
      { name: "React.js", pct: 95 },
      { name: "Next.js", pct: 90 },
      { name: "Tailwind", pct: 88 },
      { name: "Framer Motion", pct: 75 },
      { name: "HTML/CSS", pct: 95 },
    ],
  },
  {
    icon: "🔧",
    title: "Backend",
    color: "#1a7a4a",
    skills: [
      { name: "Node.js", pct: 90 },
      { name: "Express.js", pct: 88 },
      { name: "Spring Boot", pct: 72 },
      { name: "GraphQL", pct: 70 },
      { name: "REST APIs", pct: 92 },
    ],
  },
  {
    icon: "🗄️",
    title: "Database & Cloud",
    color: "#7c3aed",
    skills: [
      { name: "MongoDB", pct: 88 },
      { name: "PostgreSQL", pct: 80 },
      { name: "AWS", pct: 70 },
      { name: "Docker", pct: 75 },
      { name: "Firebase", pct: 82 },
    ],
  },
  {
    icon: "🤖",
    title: "AI & Emerging",
    color: "#0891b2",
    skills: [
      { name: "OpenAI API", pct: 85 },
      { name: "LangChain", pct: 78 },
      { name: "RAG", pct: 72 },
      { name: "Prompt Eng.", pct: 88 },
      { name: "Chatbots", pct: 82 },
    ],
  },
  {
    icon: "🛠️",
    title: "Tools",
    color: "#b45309",
    skills: [
      { name: "Git/GitHub", pct: 92 },
      { name: "Postman", pct: 88 },
      { name: "Figma", pct: 72 },
      { name: "Jira", pct: 80 },
      { name: "Linux", pct: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="reveal mb-14">
          <div className="flex items-center gap-4 mb-2">
            <div className="field-label">§ 03 — Skills</div>
            <div className="flex-1 border-t border-dashed border-blue-line/20" />
            <div className="annotation text-sm text-accent">technical toolkit</div>
          </div>
          <h2
            className="font-display font-bold text-ink"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            My Toolkit
          </h2>
          <p className="text-ink-faint mt-2 font-mono text-sm">
            // Technologies and tools — proficiency measured as % mastery
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className="reveal"
              style={{ animationDelay: `${gi * 80}ms` }}
            >
              <div
                className="relative p-5 h-full"
                style={{
                  background: "#faf7f2",
                  border: `1px solid ${group.color}25`,
                  borderTop: `2px solid ${group.color}`,
                  borderRadius: "2px",
                  boxShadow: "2px 2px 0 rgba(0,0,0,0.04)",
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{group.icon}</span>
                  <span className="font-display font-semibold text-sm text-ink">{group.title}</span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: `${group.color}30` }} />
                </div>

                {/* Skill bars - hand-drawn style */}
                <div className="space-y-3 graph-axis pl-4 pb-4">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name} className="relative">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-mono text-xs text-ink-light">{skill.name}</span>
                        <span
                          className="annotation text-xs"
                          style={{ color: group.color, opacity: 0.7 }}
                        >
                          {skill.pct}%
                        </span>
                      </div>
                      {/* Bar track */}
                      <div
                        className="relative h-1.5 rounded-none overflow-hidden"
                        style={{ background: `${group.color}15` }}
                      >
                        {/* Fill bar */}
                        <div
                          className="h-full skill-bar-fill"
                          style={{
                            background: `${group.color}`,
                            opacity: 0.65,
                            width: `${skill.pct}%`,
                            // Slightly uneven top for hand-drawn feel
                            clipPath:
                              si % 2 === 0
                                ? "polygon(0 0, 100% 1px, 100% 100%, 0 100%)"
                                : "polygon(0 1px, 100% 0, 100% 100%, 0 100%)",
                          }}
                        />
                      </div>
                      {/* Tick mark */}
                      <div
                        className="absolute left-0 -bottom-0.5 h-2 w-px"
                        style={{ background: `${group.color}40` }}
                      />
                    </div>
                  ))}
                </div>

                {/* Corner annotation */}
                <div
                  className="absolute bottom-2 right-3 field-label opacity-30"
                  style={{ fontSize: "0.55rem" }}
                >
                  fig.0{gi + 2}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom legend */}
        <div className="reveal mt-8 flex items-center gap-6 justify-center">
          <div className="dashed-line flex-1 max-w-32" />
          <div className="flex items-center gap-6">
            {[
              { pct: "60–75", label: "Familiar" },
              { pct: "76–89", label: "Proficient" },
              { pct: "90+", label: "Expert" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <div
                  className="w-6 h-1.5"
                  style={{ background: "rgba(74,127,181,0.5)", opacity: 0.7 }}
                />
                <span className="font-mono text-[0.65rem] text-ink-faint">
                  {l.pct} — {l.label}
                </span>
              </div>
            ))}
          </div>
          <div className="dashed-line flex-1 max-w-32" />
        </div>
      </div>
    </section>
  );
}
