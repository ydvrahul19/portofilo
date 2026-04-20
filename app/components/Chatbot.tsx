"use client";
import { useState, useRef, useEffect } from "react";

const kb: Record<string, string> = {
  skill: "🚀 Rahul's core skills:\n• Frontend: React.js, Next.js, TypeScript, Tailwind\n• Backend: Node.js, Express, Spring Boot\n• Database: MongoDB, PostgreSQL, MySQL\n• Cloud: AWS, Docker, Firebase\n• AI/ML: OpenAI API, LangChain, RAG\n\nTrue full-stack — handles your entire project end-to-end! 💪",
  rate: "💰 Freelance Rates:\n• Hourly: ₹800–₹1500/hr\n• Fixed Price: MVP from ₹25,000\n• Monthly Retainer: Available for long-term projects\n\n📞 Custom quote? WhatsApp: +91 88900 85616",
  project: "📂 Key Projects:\n• 🏥 DoctorMy — Healthcare consultation platform\n• 📧 Email Sequencer — Marketing automation tool\n• 🧾 Invoice Manager — Billing & finance system\n• 💬 Chatify — Real-time encrypted chat app\n• 👨‍💻 Code Editor — In-browser collaborative IDE\n• ✈️ Travel Buddy — Travel planning app",
  contact: "📞 Ways to reach Rahul:\n• Call: +91 88900 85616\n• WhatsApp: +91 88900 85616\n• Email: rahulkumaryadav@email.com\n• Location: Pune, India (IST timezone)\n\nTypically responds within 2–4 hours! ⚡",
  avail: "⏱ Availability:\nRahul is ✅ Currently Available for:\n• Full-stack web development\n• React/Node.js applications\n• MVP development for startups\n• Long-term freelance partnerships\n• Code reviews & consulting",
  exp: "🏢 Professional \n• Experience:Sparrowhawk System (2023–2025) — Junior Full Stack Developer \n• Oriserve (2025–2026) — Assoc. SDE\n• Freelance (2026–Present) — Full-stack dev\n• AIT Pune (2019–2023) — B.E. IT\n\n3+ years professional experience, 15+ projects shipped!",
  hire: "🤝 Why hire Rahul?\n✅ 2+ years professional experience\n✅ Full-stack (frontend + backend + DB)\n✅ Clean, maintainable code\n✅ On-time delivery\n✅ Excellent communication\n✅ AI/ML integration capabilities",
};

function getBotReply(msg: string): string {
  const m = msg.toLowerCase();
  if (m.match(/skill|tech|know|language|stack/)) return kb.skill;
  if (m.match(/rate|cost|price|charge|money|fee|rupee|₹/)) return kb.rate;
  if (m.match(/project|work|built|portfolio|show/)) return kb.project;
  if (m.match(/contact|reach|phone|call|whatsapp|email/)) return kb.contact;
  if (m.match(/avail|free|time|busy|hire now|start|when/)) return kb.avail;
  if (m.match(/exp|job|work history|oriserve|company|year/)) return kb.exp;
  if (m.match(/why hire|why rahul|recommend|good|best|quality/)) return kb.hire;
  if (m.match(/hi|hello|hey|namaste/)) return "👋 Hey! Great to meet you! I'm Rahul's AI assistant. Ask me about his skills, projects, rates, or how to get in touch!";
  if (m.match(/thank/)) return "😊 You're welcome! Feel free to WhatsApp Rahul: +91 88900 85616 🚀";
  if (m.match(/location|where|pune/)) return "📍 Rahul is based in Pune, Maharashtra, India (IST, UTC+5:30). Works with clients globally!";
  return "🤔 Not sure about that specific detail. Contact Rahul directly:\n📞 +91 88900 85616\n💬 WhatsApp him for a quick reply!";
}

interface Message {
  text: string;
  isUser: boolean;
}

const suggestions = ["💼 What skills?", "💰 Freelance rates?", "📂 Show projects", "📞 How to contact?", "⏱ Availability?"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "👋 Hi! I'm Rahul's AI assistant. Ask me about his skills, experience, projects, or how to hire him!", isUser: false },
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
        aria-label="Toggle chat"
      >
        <span className="text-paper text-xl font-mono">{open ? "✕" : "🤖"}</span>
        {notif && !open && (
          <div
            className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center font-mono text-[0.6rem] font-bold"
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
          width: "360px",
          maxHeight: open ? "520px" : "0px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
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
            🤖
          </div>
          <div className="flex-1">
            <div className="font-mono text-xs font-semibold text-paper">Rahul&apos;s AI Assistant</div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
              <span className="font-mono text-[0.6rem] text-paper/70">Online — Ask me anything!</span>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-paper/70 hover:text-paper font-mono text-sm">✕</button>
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
                className="font-mono text-[0.65rem] px-2.5 py-1 transition-all"
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
            className="flex-1 font-mono text-xs text-ink px-3 py-2 outline-none"
            style={{
              background: "#fefcf9",
              border: "1px solid rgba(74,127,181,0.2)",
              borderRadius: "2px",
            }}
            placeholder="Ask anything about Rahul..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            onFocus={(e) => (e.target.style.borderColor = "#4a7fb5")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(74,127,181,0.2)")}
          />
          <button
            onClick={() => sendMessage()}
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
