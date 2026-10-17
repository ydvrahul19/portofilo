import { SITE } from "../site";

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-10 px-6"
      style={{ borderTop: "1px solid rgba(74,127,181,0.18)", background: "#f0ebe0" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ border: "1px dashed rgba(74,127,181,0.4)", borderRadius: "2px" }}
            >
              <span className="font-mono text-xs font-bold text-blueprint">RKY</span>
            </div>
            <div>
              <div className="font-display font-semibold text-sm text-ink">Rahul Kumar Yadav</div>
              <div className="field-label text-[0.72rem]">Full-Stack Engineer · Ahmedabad, India</div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: "GH", label: "GitHub", href: SITE.github },
              { icon: "LI", label: "LinkedIn", href: SITE.linkedin },
              { icon: "@", label: "Email", href: `mailto:${SITE.email}` },
              { icon: "WA", label: "WhatsApp", href: SITE.whatsapp, highlight: true },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                rel="noreferrer"
                className={`social-btn ${s.highlight ? "wa" : ""} w-9 h-9 flex items-center justify-center font-mono text-xs font-semibold`}
                style={{
                  border: `1px solid ${s.highlight ? "rgba(37,211,102,0.4)" : "rgba(74,127,181,0.2)"}`,
                  color: s.highlight ? "#15803d" : "#2f5f93",
                  borderRadius: "2px",
                }}
                title={s.label}
                aria-label={s.label}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider with annotation */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 border-t border-dashed border-blue-line/20" />
          <span className="annotation text-xs text-ink-faint">end of document</span>
          <div className="flex-1 border-t border-dashed border-blue-line/20" />
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-ink-faint">
            Built by <strong className="text-ink">Rahul Kumar Yadav</strong> · Next.js + Tailwind CSS
          </p>
          <div className="flex items-center gap-3">
            <span className="field-label text-[0.72rem]">© 2026 All Rights Reserved</span>
            <div
              className="stamp"
              style={{ fontSize: "0.7rem", padding: "2px 6px", transform: "rotate(-1.5deg)" }}
            >
              v2.1
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
