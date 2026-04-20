"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return alert("Please fill all required fields.");
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6"
      style={{ background: "rgba(74,127,181,0.03)", borderTop: "1px solid rgba(74,127,181,0.12)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="reveal mb-14 text-center">
          <div className="flex items-center gap-4 mb-2">
            <div className="flex-1 border-t border-dashed border-blue-line/20" />
            <div className="field-label">§ 06 — Contact</div>
            <div className="flex-1 border-t border-dashed border-blue-line/20" />
          </div>
          <h2
            className="font-display font-bold text-ink"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            Let&apos;s Build Something
            <br />
            <span className="relative inline-block">
              Amazing Together
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" preserveAspectRatio="none" height="8">
                <path d="M0 5 Q37 2 75 5.5 Q112 9 150 5 Q187 1 225 5.5 Q262 9 300 5"
                  stroke="#c4420a" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-ink-faint mt-4 font-mono text-sm">
            // Have a project in mind? Let&apos;s create something great.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10">

          {/* Left: Contact info card */}
          <div className="reveal space-y-5">

            {/* Contact info - spec sheet style */}
            <div
              className="bracket-corner"
              style={{
                background: "#faf7f2",
                border: "1px solid rgba(74,127,181,0.2)",
                borderRadius: "2px",
                boxShadow: "3px 3px 0 rgba(74,127,181,0.06)",
              }}
            >
              <div
                className="px-5 py-3 flex items-center justify-between"
                style={{ borderBottom: "1px solid rgba(74,127,181,0.15)", background: "rgba(74,127,181,0.04)" }}
              >
                <span className="field-label">CONTACT_INFO.spec</span>
                <div className="flex gap-1">
                  {["#c4420a","#f59e0b","#16a34a"].map(c => (
                    <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.7 }} />
                  ))}
                </div>
              </div>

              <div className="px-5 py-4 space-y-0">
                {[
                  { icon: "☎", label: "Phone / Call", value: "+91 88900 85616", href: "tel:+918890085616", color: "#1a7a4a" },
                  { icon: "●", label: "WhatsApp", value: "+91 88900 85616", href: "https://wa.me/918890085616", color: "#16a34a" },
                  { icon: "✉", label: "Email", value: "rahulkumaryadav@email.com", href: "mailto:rahulkumaryadav@email.com", color: "#4a7fb5" },
                  { icon: "◎", label: "Location", value: "Pune, Maharashtra, India", href: null, color: "#7c3aed" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 py-3"
                    style={{ borderBottom: "1px dashed rgba(74,127,181,0.12)" }}
                  >
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0 text-sm"
                      style={{
                        background: `${item.color}12`,
                        border: `1px solid ${item.color}30`,
                        borderRadius: "2px",
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="field-label text-[0.62rem] mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="font-mono text-xs text-ink hover:underline truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-mono text-xs text-ink">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}

                {/* Availability stamp */}
                <div className="pt-3 flex items-center gap-3">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5"
                    style={{
                      border: "2px solid #16a34a",
                      borderRadius: "2px",
                      transform: "rotate(-1deg)",
                      display: "inline-flex",
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-mono text-xs text-green-700 font-semibold tracking-widest uppercase">
                      Available Now
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-2.5">
              <a
                href="tel:+918890085616"
                className="flex items-center justify-center gap-2 w-full py-3 font-mono text-sm font-semibold text-paper transition-opacity hover:opacity-90"
                style={{ background: "#16a34a", borderRadius: "2px" }}
              >
                ☎ Call Now
              </a>
              <a
                href="https://wa.me/918890085616?text=Hi%20Rahul!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 font-mono text-sm font-semibold text-paper transition-opacity hover:opacity-90"
                style={{ background: "#25d366", borderRadius: "2px" }}
              >
                ● Chat on WhatsApp
              </a>
              <a
                href="mailto:rahulkumaryadav@email.com"
                className="flex items-center justify-center gap-2 w-full py-3 font-mono text-sm text-blueprint border border-blue-line/30 hover:bg-blue-faint/20 transition-colors"
                style={{ borderRadius: "2px" }}
              >
                ✉ Send an Email
              </a>
            </div>
          </div>

          {/* Right: Contact form - like a form spec */}
          <div className="reveal">
            <div
              style={{
                background: "#faf7f2",
                border: "1px solid rgba(74,127,181,0.2)",
                borderRadius: "2px",
                boxShadow: "3px 3px 0 rgba(74,127,181,0.06)",
              }}
            >
              {/* Form header */}
              <div
                className="px-6 py-3 flex items-center gap-3"
                style={{ borderBottom: "1px solid rgba(74,127,181,0.15)", background: "rgba(74,127,181,0.04)" }}
              >
                <span className="field-label">SEND_MESSAGE.form</span>
                <div className="flex-1 border-t border-dashed border-blue-line/20" />
                <div className="annotation text-xs text-accent">required *</div>
              </div>

              <div className="p-6 space-y-5">

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "name", label: "Your Name *", placeholder: "John Doe", type: "text" },
                    { id: "email", label: "Your Email *", placeholder: "john@email.com", type: "email" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="field-label text-[0.65rem] block mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className="w-full font-mono text-sm text-ink px-3 py-2.5 outline-none transition-all"
                        style={{
                          background: "#fefcf9",
                          border: "1px solid rgba(74,127,181,0.2)",
                          borderRadius: "2px",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#4a7fb5")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(74,127,181,0.2)")}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="field-label text-[0.65rem] block mb-1.5">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Discussion / Freelance Work"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full font-mono text-sm text-ink px-3 py-2.5 outline-none transition-all"
                    style={{
                      background: "#fefcf9",
                      border: "1px solid rgba(74,127,181,0.2)",
                      borderRadius: "2px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#4a7fb5")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(74,127,181,0.2)")}
                  />
                </div>

                <div>
                  <label className="field-label text-[0.65rem] block mb-1.5">Message *</label>
                  <textarea
                    rows={5}
                    placeholder="Hi Rahul, I'd love to discuss a project with you..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full font-mono text-sm text-ink px-3 py-2.5 outline-none transition-all resize-none"
                    style={{
                      background: "#fefcf9",
                      border: "1px solid rgba(74,127,181,0.2)",
                      borderRadius: "2px",
                      backgroundImage: "repeating-linear-gradient(transparent, transparent 22px, rgba(74,127,181,0.08) 23px)",
                      backgroundSize: "100% 23px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#4a7fb5")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(74,127,181,0.2)")}
                  />
                </div>

                {sent ? (
                  <div
                    className="p-4 text-center"
                    style={{
                      background: "rgba(22,163,74,0.06)",
                      border: "1px solid rgba(22,163,74,0.3)",
                      borderRadius: "2px",
                    }}
                  >
                    <div className="annotation text-lg text-green-700 mb-1">✓ Message sent!</div>
                    <p className="font-mono text-xs text-ink-faint">Rahul will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 font-mono text-sm font-semibold text-paper flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                    style={{ background: "#c4420a", borderRadius: "2px" }}
                  >
                    ✈ Send Message
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
