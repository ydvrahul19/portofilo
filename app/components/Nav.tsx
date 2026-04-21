"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#home",       label: "Home" },
  { href: "#about",      label: "About" },
  { href: "#skills",     label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects" },
  { href: "#contact",    label: "Hire Me", cta: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

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

        {/* LOGO */}
        <a href="#home" className="group flex items-center gap-2.5">
          <Logo size={44} />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-semibold text-sm text-ink tracking-tight">
              Rahul Kumar Yadav
            </span>
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
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
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
