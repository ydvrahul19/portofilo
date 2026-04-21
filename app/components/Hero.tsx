"use client";
import { useEffect, useState } from "react";
import DevProfileFig from "./DevProfileFig";

const roles = [
  "Full-Stack Developer",
  "React Specialist",
  "Node.js Engineer",
  "AI Integrator",
  "Problem Solver",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = roles[roleIdx];
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Blueprint coordinate lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Horizontal reference line */}
        <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-blue-line/20" />
        {/* Vertical center */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-blue-line/20" />

        {/* Corner cross-hairs */}
        {[
          "top-8 left-8", "top-8 right-8", "bottom-8 left-8", "bottom-8 right-8"
        ].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-6 h-6 opacity-30`}>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-line" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-line" />
          </div>
        ))}

        {/* Coordinate labels */}
        <span className="absolute top-10 left-16 field-label opacity-30 text-[0.6rem]">X: 0.00</span>
        <span className="absolute top-10 right-16 field-label opacity-30 text-[0.6rem]">Y: 0.00</span>
        <span className="absolute bottom-16 left-10 field-label opacity-30 text-[0.6rem] rotate-90 origin-left">Z-AXIS</span>

        {/* Large faint circle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ border: "2px solid #4a7fb5" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ border: "1px dashed #4a7fb5" }}
        />

        {/* Annotation arrows */}
        <svg className="absolute top-20 right-1/4 w-40 h-20 opacity-20" viewBox="0 0 160 80">
          <path d="M10 40 Q80 10 150 40" stroke="#4a7fb5" strokeWidth="1" fill="none" strokeDasharray="4 3"/>
          <polygon points="146,36 154,40 146,44" fill="#4a7fb5" opacity="0.6"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 items-center">

          {/* Left: text content */}
          <div>
            {/* Status badge - like a field note */}
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs text-ink-faint tracking-widest uppercase">
                Available for Freelance · Pune, India
              </span>
              <div
                className="stamp ml-2"
                style={{ fontSize: "0.55rem", padding: "2px 8px", transform: "rotate(-1deg)" }}
              >
                Open to Work
              </div>
            </div>

            {/* Name - large, with sketch annotation */}
            <div className="relative mb-4">
              <div
                className="annotation text-sm mb-1 opacity-70"
                style={{ marginLeft: "2px" }}
              >
                // Full name →
              </div>
              <h1
                className="font-display font-bold text-ink leading-tight"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
              >
                Rahul Kumar
                <br />
                <span className="relative inline-block">
                  Yadav
                  {/* Sketch underline on name */}
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                    height="8"
                  >
                    <path
                      d="M0 5 Q25 2 50 5.5 Q75 9 100 5 Q125 1 150 5.5 Q175 9 200 5"
                      stroke="#c4420a"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-blue-line opacity-50" />
              <p className="font-mono text-base text-blueprint tracking-wide">
                <span className="typewriter">{displayed}</span>
              </p>
            </div>

            {/* Description - like a field note */}
            <div
              className="relative mb-8 pl-4 border-l-2 border-blue-line/30"
              style={{ maxWidth: "520px" }}
            >
              <div className="annotation text-xs text-accent mb-1">
                3+ years · 15+ projects
              </div>
              <p className="text-ink-light text-base leading-relaxed">
                Building scalable software solutions from elegant UIs to robust
                backend systems. Turning complex problems into clean, maintainable
                code that actually ships.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent text-paper px-6 py-3 font-mono text-sm font-semibold tracking-wide hover:bg-accent-warm transition-colors duration-200"
                style={{ borderRadius: "2px", transform: "rotate(-0.3deg)", display: "inline-flex" }}
              >
                <span>↗</span> View My Work
              </a>
              <a
                href="tel:+918890085616"
                className="inline-flex items-center gap-2 border border-blue-line/50 text-blueprint px-6 py-3 font-mono text-sm hover:border-blue-line hover:bg-blue-faint/30 transition-all duration-200"
                style={{ borderRadius: "2px" }}
              >
                <span>☎</span> +91 88900 85616
              </a>
              <a
                href="https://wa.me/918890085616"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-green-500/40 text-green-700 px-6 py-3 font-mono text-sm hover:bg-green-50 transition-all duration-200"
                style={{ borderRadius: "2px" }}
              >
                <span>●</span> WhatsApp
              </a>
            </div>

            {/* Stats row - like graph annotations */}
            <div className="flex gap-8 flex-wrap">
              {[
                { n: "3+", l: "Years Exp", note: "since 2023" },
                { n: "15+", l: "Projects", note: "shipped" },
                { n: "10+", l: "Technologies", note: "mastered" },
                { n: "∞", l: "Curiosity", note: "always" },
              ].map((s) => (
                <div key={s.l} className="text-center relative">
                  <div
                    className="font-display font-bold text-2xl text-ink"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {s.n}
                  </div>
                  <div className="field-label text-[0.65rem]">{s.l}</div>
                  <div className="annotation text-[0.6rem] text-ink-faint">{s.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: DEV_PROFILE.fig — infinite terminal workspace */}
          <div className="hidden md:block w-full max-w-lg">
            <DevProfileFig />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="field-label text-[0.6rem]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-blue-line to-transparent animate-bounce" />
      </div>
    </section>
  );
}
