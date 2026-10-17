// level: 3 = daily use, 2 = comfortable, 1 = familiar
type Level = 1 | 2 | 3;
const levelLabel: Record<Level, string> = { 3: "Daily use", 2: "Comfortable", 1: "Familiar" };

const skillGroups: { icon: string; title: string; color: string; skills: { name: string; level: Level }[] }[] = [
  {
    icon: "⚡", title: "Languages", color: "#4a7fb5",
    skills: [
      { name: "TypeScript", level: 3 }, { name: "JavaScript", level: 3 },
      { name: "SQL", level: 3 }, { name: "Java", level: 1 }, { name: "C/C++", level: 1 },
    ],
  },
  {
    icon: "🔧", title: "Backend & APIs", color: "#1a7a4a",
    skills: [
      { name: "Node.js", level: 3 }, { name: "REST APIs", level: 3 },
      { name: "tRPC", level: 3 }, { name: "Prisma ORM", level: 3 },
      { name: "JWT Auth", level: 3 },
    ],
  },
  {
    icon: "🎨", title: "Frontend", color: "#c4420a",
    skills: [
      { name: "React.js", level: 3 }, { name: "Next.js", level: 3 },
      { name: "Material UI", level: 3 }, { name: "Tailwind CSS", level: 3 },
      { name: "Framer Motion", level: 2 },
    ],
  },
  {
    icon: "🗄️", title: "Databases", color: "#7c3aed",
    skills: [
      { name: "PostgreSQL", level: 3 }, { name: "MongoDB", level: 3 }, { name: "MySQL", level: 2 },
    ],
  },
  {
    icon: "☁️", title: "Cloud & DevOps", color: "#0891b2",
    skills: [
      { name: "AWS", level: 2 }, { name: "Git/GitHub", level: 3 },
      { name: "CI/CD", level: 2 }, { name: "Agile/Scrum", level: 3 },
    ],
  },
  {
    icon: "📐", title: "Fundamentals", color: "#b45309",
    skills: [
      { name: "Data Structures & Algorithms", level: 3 }, { name: "System Design", level: 2 },
      { name: "OOP", level: 3 }, { name: "Operating Systems", level: 2 },
      { name: "Computer Networks", level: 2 },
    ],
  },
];

function chipStyle(color: string, level: Level): React.CSSProperties {
  if (level === 3) return { background: `${color}1f`, border: `1px solid ${color}`, color: "#1a1510" };
  if (level === 2) return { background: `${color}0d`, border: `1px solid ${color}80`, color: "#3d3530" };
  return { background: "transparent", border: `1px dashed ${color}80`, color: "#3d3530" };
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
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
            // Grouped by how often I use them — solid = daily, light = comfortable, dashed = familiar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <div key={group.title} className="reveal">
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
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg" aria-hidden="true">{group.icon}</span>
                  <h3 className="font-display font-semibold text-sm text-ink">{group.title}</h3>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: `${group.color}30` }} />
                </div>

                <ul className="flex flex-wrap gap-2 pb-4">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="font-mono text-xs px-2.5 py-1"
                      style={{ ...chipStyle(group.color, skill.level), borderRadius: "2px" }}
                      title={levelLabel[skill.level]}
                    >
                      {skill.name}
                      <span className="sr-only"> ({levelLabel[skill.level]})</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-2 right-3 field-label opacity-60" style={{ fontSize: "0.7rem" }}>
                  fig.0{gi + 2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
