export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6"
      style={{ background: "rgba(74,127,181,0.03)", borderTop: "1px solid rgba(74,127,181,0.12)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="reveal mb-14">
          <div className="flex items-center gap-4 mb-2">
            <div className="field-label">§ 02 — About</div>
            <div className="flex-1 border-t border-dashed border-blue-line/20" />
            <div className="annotation text-sm text-accent">personal notes</div>
          </div>
          <h2
            className="font-display font-bold text-ink"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            A Developer Who<br />Loves to Build
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">

          {/* Left: Field notebook card */}
          <div className="reveal">
            {/* Notebook-style card */}
            <div
              className="relative"
              style={{
                background: "#faf7f2",
                border: "1px solid rgba(74,127,181,0.2)",
                borderRadius: "2px",
                boxShadow: "4px 4px 0 rgba(74,127,181,0.08)",
              }}
            >
              {/* Notebook spine */}
              <div
                className="absolute left-0 top-0 bottom-0 w-8 flex flex-col items-center gap-2 py-4"
                style={{ background: "rgba(74,127,181,0.08)", borderRight: "1px solid rgba(74,127,181,0.15)" }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-blue-line/30" />
                ))}
              </div>

              <div className="pl-12 pr-6 py-6">
                <div className="field-label mb-4">PROFILE_NOTES.md</div>

                {/* Avatar placeholder */}
                <div
                  className="w-24 h-24 mx-auto mb-5 flex items-center justify-center sketch-circle"
                  style={{
                    background: "rgba(74,127,181,0.06)",
                    border: "1px dashed rgba(74,127,181,0.3)",
                  }}
                >
                  <span
                    className="font-display font-bold text-2xl text-blueprint/50"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    RKY
                  </span>
                </div>

                {/* Key-value pairs like a spec sheet */}
                {[
                  { k: "Name", v: "Rahul Kumar Yadav" },
                  { k: "Role", v: "Full-Stack Dev" },
                  { k: "Location", v: "Ahmedabad, India" },
                  { k: "Degree", v: "B.E. IT — AIT Pune" },
                  { k: "Company", v: "Oriserve (2025–26)" },
                  { k: "Status", v: "✓ Available Now" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="flex items-baseline gap-2 py-2 border-b border-blue-line/10 last:border-0"
                  >
                    <span className="field-label w-24 flex-shrink-0 text-[0.62rem]">{item.k}</span>
                    <div className="flex-1 border-b border-dotted border-blue-line/20 mx-1" />
                    <span className="font-mono text-xs text-ink">{item.v}</span>
                  </div>
                ))}

                {/* Signature */}
                <div className="mt-4 pt-3 border-t border-blue-line/15 flex items-end justify-between">
                  <span className="annotation text-xl text-ink-light" style={{ transform: "rotate(-2deg)", display: "inline-block" }}>
                    Rahul K.Y.
                  </span>
                  <span className="field-label text-[0.55rem]">2026</span>
                </div>
              </div>
            </div>

            {/* Hobby tags below card */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["🎮 Gaming", "✍ Tech Blogging", "✈ Travelling", "⌨ Open Source", "🧠 Problem Solving"].map(
                (h) => (
                  <span
                    key={h}
                    className="font-sketch text-sm text-ink-light px-3 py-1"
                    style={{ background: "#fff9c4", transform: "rotate(-0.5deg)", display: "inline-block" }}
                  >
                    {h}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Field notes text */}
          <div className="reveal space-y-6">
            {/* Ruled paper note block */}
            <div
              className="relative p-6 pl-16"
              style={{
                background: "#fefcf9",
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 27px, rgba(74,127,181,0.15) 28px)",
                backgroundSize: "100% 28px",
                border: "1px solid rgba(74,127,181,0.15)",
                borderLeft: "4px solid #c4420a",
                borderRadius: "2px",
              }}
            >
              {/* Red margin line */}
              <div
                className="absolute left-12 top-0 bottom-0 w-px"
                style={{ background: "rgba(196,66,10,0.2)" }}
              />

              <p className="text-ink-light leading-7 mb-4">
                Hi! I&apos;m <strong className="text-ink">Rahul Kumar Yadav</strong>, a passionate
                software developer based in <strong className="text-ink">Ahmedabad, India</strong>.
                I hold a Bachelor of Engineering in Information Technology from the Army Institute
                of Technology.
              </p>
              <p className="text-ink-light leading-7 mb-4">
                With <strong className="text-ink">3+ years of professional experience</strong>,
                I&apos;ve honed my skills building scalable, efficient software at Oriserve as an
                Associate Software Development Engineer — contributing to impactful projects
                alongside talented teams.
              </p>
              <p className="text-ink-light leading-7">
                I&apos;m driven by curiosity and love turning complex problems into elegant solutions.
                Whether it&apos;s architecting a backend, crafting a pixel-perfect UI, or integrating
                AI — I bring craftsmanship to everything I build.
              </p>

              {/* Margin annotation */}
              <div
                className="absolute left-2 top-8 annotation text-xs text-accent"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", lineHeight: 1.2 }}
              >
                my story
              </div>
            </div>

            {/* Quote - like a highlighted sticky */}
            <div
              className="relative p-5 pl-8"
              style={{
                background: "rgba(196,66,10,0.04)",
                borderLeft: "3px solid #c4420a",
                borderRadius: "2px",
              }}
            >
              <div className="annotation text-xs text-accent mb-2">— personal motto</div>
              <blockquote className="font-sketch text-xl text-ink-light leading-relaxed">
                "Strive not just to build software, but to create solutions that inspire and make a difference!"
              </blockquote>
            </div>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🎓", title: "Education", detail: "B.E. IT — AIT Pune, 2023" },
                { icon: "💼", title: "Experience", detail: "Sparrowhawk System . 2023–2025" },
                { icon: "💼", title: "Experience", detail: "Oriserve · 2025–2026" },
                { icon: "🚀", title: "Freelance", detail: "Available since 2026" },
                { icon: "📍", title: "Location", detail: "Ahmedabad, Maharashtra, IST" },
              ].map((fact) => (
                <div
                  key={fact.title}
                  className="p-3 bracket-corner"
                  style={{
                    background: "rgba(74,127,181,0.03)",
                    border: "1px solid rgba(74,127,181,0.15)",
                    borderRadius: "2px",
                    padding: "12px 12px 12px 16px",
                  }}
                >
                  <div className="text-lg mb-1">{fact.icon}</div>
                  <div className="field-label text-[0.62rem] mb-0.5">{fact.title}</div>
                  <div className="font-mono text-xs text-ink">{fact.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
