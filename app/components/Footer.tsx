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
              <div className="field-label text-[0.6rem]">Full-Stack Developer · Pune, India</div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: "GH", label: "GitHub", href: "https://github.com/ydvrahul19" },
              { icon: "LI", label: "LinkedIn", href: "https://www.linkedin.com/in/rahul-yadav-679193190/" },
              { icon: "TW", label: "Twitter", href: "https://twitter.com" },
              { icon: "MD", label: "Medium", href: "https://medium.com" },
              { icon: "WA", label: "WhatsApp", href: "https://wa.me/918890085616", highlight: true },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center font-mono text-xs font-semibold transition-all duration-200"
                style={{
                  background: s.highlight ? "rgba(37,211,102,0.12)" : "rgba(74,127,181,0.06)",
                  border: `1px solid ${s.highlight ? "rgba(37,211,102,0.4)" : "rgba(74,127,181,0.2)"}`,
                  color: s.highlight ? "#16a34a" : "#4a7fb5",
                  borderRadius: "2px",
                }}
                title={s.label}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = s.highlight ? "rgba(37,211,102,0.2)" : "rgba(74,127,181,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = s.highlight ? "rgba(37,211,102,0.12)" : "rgba(74,127,181,0.06)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                }}
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
            Built with ❤️ by <strong className="text-ink">Rahul Kumar Yadav</strong> · Next.js + Tailwind CSS
          </p>
          <div className="flex items-center gap-3">
            <span className="field-label text-[0.6rem]">© 2026 All Rights Reserved</span>
            <div
              className="stamp"
              style={{ fontSize: "0.5rem", padding: "2px 6px", transform: "rotate(-1.5deg)" }}
            >
              v2.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
