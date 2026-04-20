"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Hire Me", cta: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-paper/95 shadow-sm border-b border-blue-line/20"
          : "py-4 bg-transparent"
      }`}
      style={{ backdropFilter: scrolled ? "blur(12px)" : "none" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo - like a drafting stamp */}
        <a href="#home" className="group flex items-center gap-2">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full">
              <rect x="2" y="2" width="36" height="36" rx="4"
                fill="none" stroke="#4a7fb5" strokeWidth="1.5"
                strokeDasharray="4 2" opacity="0.6"
              />
            </svg>
            <span className="font-mono text-xs font-bold text-blueprint leading-none">RKY</span>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-semibold text-sm text-ink">Rahul Kumar Yadav</span>
            <span className="field-label text-[0.6rem]">Full-Stack Developer</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-4 py-2 text-sm font-mono tracking-wide transition-colors duration-200 ${
                  link.cta
                    ? "ml-3 px-5 py-2 bg-accent text-paper font-semibold rounded-sm hover:bg-accent-warm"
                    : "text-ink-light hover:text-accent"
                }`}
                style={link.cta ? { transform: "rotate(-0.5deg)", display: "inline-block" } : {}}
              >
                {link.label}
                {!link.cta && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-ink transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-paper/98 border-t border-blue-line/20 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 font-mono text-sm text-ink-light border-b border-blue-line/10 last:border-0 hover:text-accent"
              onClick={() => setOpen(false)}
            >
              <span className="text-blue-line mr-2">→</span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
