"use client";
import { useState, useRef, useEffect } from "react";

const CONTACT = "ydvrahul5616@gmail.com";

const kb: Record<string, string> = {
  skill: "Rahul's core skills:\n• Backend: Node.js, REST APIs, tRPC, Prisma, JWT auth\n• Frontend: React, Next.js, Material UI, Tailwind CSS\n• Databases: PostgreSQL, MySQL, MongoDB\n• Cloud/DevOps: AWS, Git/GitHub, CI/CD, Agile\n• Languages: TypeScript, JavaScript, Java, C/C++, SQL\n\nSee the Skills section for more.",
  project: "Featured projects:\n• DoctorMy — healthcare appointment platform (live)\n• Email Sequencer, Invoice Manager, Chatify, Code Editor, Travel Buddy\n\nMore on GitHub: github.com/ydvrahul06",
  contact: `Best ways to reach Rahul:\n• Email: ${CONTACT}\n• WhatsApp: use the button in the Contact section\n• LinkedIn: linkedin.com/in/rahul-yadav-679193190`,
  avail: "Rahul currently works at Accenture and is open to new opportunities and select freelance projects. Send a short note about your project through the Contact form or email and he'll reply.",
  freelance: `For freelance or project work, email ${CONTACT} with a short description, timeline and budget range, and Rahul will reply with next steps.`,
  exp: "Experience:\n• Accenture — Software Development Engineer, Full Stack (Feb 2026–Present)\n• Oriserve, Noida — Associate SDE (2025–2026)\n• Sparrowhawk System, Pune — Junior Full Stack Developer (2023–2025)\n• B.E. IT, Army Institute of Technology, Pune (2019–2023, CGPA 8.80)",
  location: "Rahul is based in Ahmedabad, Gujarat, India (IST, UTC+5:30).",
  resume: "You can download Rahul's resume with the “Download Resume” button at the top of the page.",
  hire: "Why hire Rahul?\n• 3+ years of professional full-stack experience\n• Node.js/TypeScript backends + React/Next.js frontends, PostgreSQL/MongoDB\n• Clean, maintainable, tested code\n• Comfortable working in Agile teams",
};

function getBotReply(msg: string): string {
  const m = msg.toLowerCase();
  if (/\b(resume|cv)\b/.test(m)) return kb.resume;
  if (/\b(freelance|rate|rates|price|pricing|quote|cost|budget|charge)\b/.test(m)) return kb.freelance;
  if (/\b(contact|reach|phone|call|whatsapp|email|mail|linkedin)\b/.test(m)) return kb.contact;
  if (/\b(skill|skills|tech|stack|language|languages|know|technologies)\b/.test(m)) return kb.skill;
  if (/\b(project|projects|portfolio|built|build)\b/.test(m)) return kb.project;
  if (/\b(avail|available|availability|hire|hiring|opportunit\w*)\b/.test(m)) return kb.avail;
  if (/\b(experience|job|jobs|company|companies|accenture|oriserve|sparrowhawk|education|degree)\b/.test(m)) return kb.exp;
  if (/\b(location|where|based|city|ahmedabad|timezone)\b/.test(m)) return kb.location;
  if (/\bwhy\b/.test(m)) return kb.hire;
  if (/\bthank(s| you)?\b/.test(m)) return "You're welcome! Feel free to reach out by email anytime.";
  if (/^\s*(hi|hello|hey|namaste)\b/.test(m)) return "Hi! I'm an automated FAQ helper for Rahul's portfolio. Ask about his skills, projects, experience or how to get in touch.";
  return `I only know the basics from this portfolio. For anything else, email Rahul at ${CONTACT}.`;
}

interface Message {
  text: string;
  isUser: boolean;
}

const suggestions = ["💼 What skills?", "🛠 Freelance work?", "📂 Show projects", "📞 How to contact?", "⏱ Availability?"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm a simple FAQ helper. Ask about Rahul's skills, experience, projects, or how to contact him.", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [notif, setNotif] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");
    setShowSuggestions(false);
    setMessages((prev) => [...prev, { text: msg, isUser: true }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { text: getBotReply(msg), isUser: false }]);
    }, 800 + Math.random() * 500);
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => { setOpen(!open); setNotif(false); }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center transition-transform hover:scale-110"
        style={{
          background: "#c4420a",
          borderRadius: "2px",
          boxShadow: "4px 4px 0 rgba(0,0,0,0.15)",
          transform: open ? "rotate(45deg)" : "none",
        }}
        aria-label={open ? "Close FAQ chat" : "Open FAQ chat"}
        aria-expanded={open}
      >
        <span className="text-paper text-xl font-mono" aria-hidden="true">{open ? "✕" : "💬"}</span>
        {notif && !open && (
          <div
            className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center font-mono text-[0.72rem] font-bold"
            style={{ background: "#f59e0b", borderRadius: "2px", color: "#000" }}
          >
            1
          </div>
        )}
      </button>

      {/* Chat window */}
      <div
        className="fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden transition-all duration-300"
        style={{
          width: "min(360px, calc(100vw - 2rem))",
          maxHeight: open ? "520px" : "0px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          visibility: open ? "visible" : "hidden",
          background: "#faf7f2",
          border: "1px solid rgba(74,127,181,0.25)",
          borderRadius: "2px",
          boxShadow: "6px 6px 0 rgba(74,127,181,0.1)",
          transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
          style={{ background: "#c4420a", borderBottom: "1px solid rgba(0,0,0,0.1)" }}
        >
          <div
            className="w-8 h-8 flex items-center justify-center text-sm"
            style={{ background: "rgba(255,255,255,0.2)", borderRadius: "2px" }}
          >
            💬
          </div>
          <div className="flex-1">
            <div className="font-mono text-xs font-semibold text-paper">Portfolio FAQ</div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
              <span className="font-mono text-[0.72rem] text-paper/70">Automated answers</span>
            </div>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-paper/70 hover:text-paper font-mono text-sm">✕</button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ maxHeight: "340px" }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-2 ${msg.isUser ? "flex-row-reverse" : ""}`}>
              {!msg.isUser && (
                <div
                  className="w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 text-paper font-mono font-bold"
                  style={{ background: "#c4420a", borderRadius: "2px" }}
                >
                  R
                </div>
              )}
              <div
                className="font-mono text-xs leading-relaxed whitespace-pre-line px-3 py-2 max-w-[80%]"
                style={{
                  background: msg.isUser ? "#c4420a" : "rgba(74,127,181,0.08)",
                  border: msg.isUser ? "none" : "1px solid rgba(74,127,181,0.18)",
                  borderRadius: "2px",
                  color: msg.isUser ? "#faf7f2" : "#1a1510",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex gap-2">
              <div className="w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 text-paper font-mono font-bold"
                style={{ background: "#c4420a", borderRadius: "2px" }}>R</div>
              <div className="flex gap-1 items-center px-3 py-2"
                style={{ background: "rgba(74,127,181,0.08)", border: "1px solid rgba(74,127,181,0.18)", borderRadius: "2px" }}>
                {[0, 1, 2].map((j) => (
                  <div key={j} className="w-1.5 h-1.5 rounded-full bg-blue-line/50 animate-bounce"
                    style={{ animationDelay: `${j * 0.15}s` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {showSuggestions && (
          <div className="px-4 pb-2 flex flex-wrap gap-1.5 flex-shrink-0">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s.replace(/^[^\s]+ /, ""))}
                className="font-mono text-[0.72rem] px-2.5 py-1 transition-all"
                style={{
                  background: "rgba(74,127,181,0.07)",
                  border: "1px solid rgba(74,127,181,0.25)",
                  borderRadius: "2px",
                  color: "#1a3a5c",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(74,127,181,0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(74,127,181,0.07)")}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div
          className="flex gap-2 px-4 py-3 flex-shrink-0"
          style={{ borderTop: "1px solid rgba(74,127,181,0.15)" }}
        >
          <input
            aria-label="Ask a question"
            className="flex-1 font-mono text-xs text-ink px-3 py-2 "
            style={{
              background: "#fefcf9",
              border: "1px solid rgba(74,127,181,0.2)",
              borderRadius: "2px",
            }}
            placeholder="Ask about Rahul..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            onFocus={(e) => (e.target.style.borderColor = "#4a7fb5")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(74,127,181,0.2)")}
          />
          <button
            onClick={() => sendMessage()}
            aria-label="Send message"
            className="w-9 h-9 flex items-center justify-center text-paper text-sm transition-opacity hover:opacity-85 flex-shrink-0"
            style={{ background: "#c4420a", borderRadius: "2px" }}
          >
            ✈
          </button>
        </div>
      </div>
    </>
  );
}
