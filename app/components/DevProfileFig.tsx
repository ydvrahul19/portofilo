"use client";
import { useEffect, useRef } from "react";

const SKILLS = [
  { n: "React.js",   p: 95, c: "#58a6ff" },
  { n: "Next.js",    p: 90, c: "#d2a8ff" },
  { n: "Node.js",    p: 90, c: "#3fb950" },
  { n: "TypeScript", p: 85, c: "#f0883e" },
  { n: "MongoDB",    p: 88, c: "#ff7b72" },
  { n: "AWS/Docker", p: 75, c: "#a5d6ff" },
];

const BLOCKS = [
  { type: "cmd",   h: `<span class="pr">$</span><span class="tx"> <span class="fn">./profile.sh</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="ok">✓</span> <span class="cm">Booting developer profile...</span></span>` },
  { type: "blank" },
  { type: "line",  h: `<span class="tx"><span class="kw">NAME    </span> <span class="nm">Rahul Kumar Yadav</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="kw">ROLE    </span> <span class="nm">Full-Stack Developer</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="kw">LOCATION</span> <span class="st">Pune, Maharashtra, India</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="kw">DEGREE  </span> <span class="st">B.E. IT — AIT Pune (2022)</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="kw">COMPANY </span> <span class="nm">Oriserve · 2022–2024</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="kw">FREELANC</span> <span class="ok">Available · 2024–Present</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="kw">EXP     </span> <span class="nm">2+ yrs · 15+ projects shipped</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="kw">PHONE   </span> <span class="st">+91 88900 85616</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="kw">STATUS  </span> <span class="ok">✓  OPEN TO WORK</span></span>` },
  { type: "blank" },
  { type: "cmd",   h: `<span class="pr">$</span><span class="tx"> <span class="fn">skills</span> <span class="st">--visual</span></span>` },
  { type: "skills" },
  { type: "blank" },
  { type: "cmd",   h: `<span class="pr">$</span><span class="tx"> <span class="fn">stack</span> <span class="st">--preferred</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="cm">full-stack  </span><span class="nm">React + Node.js + MongoDB</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="cm">modern      </span><span class="nm">Next.js + TypeScript + PostgreSQL</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="cm">ai-powered  </span><span class="nm">Next.js + OpenAI + LangChain</span></span>` },
  { type: "blank" },
  { type: "cmd",   h: `<span class="pr">$</span><span class="tx"> <span class="fn">projects</span> <span class="st">--featured</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="ok">01</span> <span class="nm">DoctorMy</span>        <span class="cm">Healthcare platform</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="ok">02</span> <span class="nm">Email Sequencer</span> <span class="cm">Marketing automation</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="ok">03</span> <span class="nm">Invoice Manager</span> <span class="cm">Billing & finance</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="ok">04</span> <span class="nm">Chatify</span>         <span class="cm">Real-time chat app</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="ok">05</span> <span class="nm">Code Editor</span>     <span class="cm">In-browser IDE</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="ok">06</span> <span class="nm">Travel Buddy</span>    <span class="cm">Travel planning PWA</span></span>` },
  { type: "blank" },
  { type: "cmd",   h: `<span class="pr">$</span><span class="tx"> <span class="fn">contact</span> <span class="st">--all</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="cm">→ WhatsApp  </span><span class="ok">wa.me/918890085616</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="cm">→ Email     </span><span class="ok">rahulkumaryadav@email.com</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="cm">→ GitHub    </span><span class="st">github.com/rahul-ky</span></span>` },
  { type: "line",  h: `<span class="tx"><span class="cm">→ LinkedIn  </span><span class="st">linkedin.com/in/rahul-ky</span></span>` },
  { type: "blank" },
  { type: "divider" },
  { type: "line",  h: `<span class="tx"><span class="cm">// session complete — restarting in 15s...</span></span>` },
  { type: "blank" },
  { type: "cursor" },
];

export default function DevProfileFig() {
  const mtermRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef(true);
  const autoScrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const writePhaseRef = useRef(false);
  const blockIdxRef = useRef(0);
  const lineTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mterm = mtermRef.current;
    if (!mterm) return;

    function addEl(html: string, cls = "t-line") {
      if (!mterm) return document.createElement("div");
      const el = document.createElement("div");
      el.className = cls;
      if (html) el.innerHTML = html;
      mterm.appendChild(el);
      requestAnimationFrame(() => el.classList.add("vis"));
      if (autoScrollRef.current) mterm.scrollTop = mterm.scrollHeight;
      return el;
    }

    function addSkills(cb: () => void) {
      if (!mterm) return;
      const wrap = document.createElement("div");
      mterm.appendChild(wrap);
      let done = 0;
      SKILLS.forEach((s, i) => {
        setTimeout(() => {
          const row = document.createElement("div");
          row.className = "sk-row";
          const uid = `sf-${Date.now()}-${i}`;
          row.innerHTML = `<span class="sk-n">${s.n}</span><div class="sk-b"><div class="sk-f" id="${uid}" style="background:${s.c}"></div></div><span class="sk-p">${s.p}%</span>`;
          wrap.appendChild(row);
          requestAnimationFrame(() => {
            row.classList.add("vis");
            const f = document.getElementById(uid);
            setTimeout(() => { if (f) (f as HTMLElement).style.width = s.p + "%"; }, 60);
          });
          if (autoScrollRef.current && mterm) mterm.scrollTop = mterm.scrollHeight;
          done++;
          if (done === SKILLS.length && cb) setTimeout(cb, 400);
        }, i * 240);
      });
    }

    function writeNextBlock() {
      if (writePhaseRef.current) return;
      writePhaseRef.current = true;
      const item = BLOCKS[blockIdxRef.current];
      blockIdxRef.current = (blockIdxRef.current + 1) % BLOCKS.length;

      function afterBlock() {
        writePhaseRef.current = false;
        const delay =
          item.type === "cursor" ? 15000 :
          item.type === "cmd"    ? 500   : 320;
        lineTimerRef.current = setTimeout(writeNextBlock, delay);
      }

      if (item.type === "blank") {
        addEl("", "t-line");
        afterBlock();
      } else if (item.type === "divider") {
        const hr = document.createElement("hr");
        hr.className = "t-divider";
        mterm?.appendChild(hr);
        if (autoScrollRef.current && mterm) mterm.scrollTop = mterm.scrollHeight;
        afterBlock();
      } else if (item.type === "skills") {
        addSkills(afterBlock);
      } else if (item.type === "cursor") {
        const el = addEl(`<span class="pr">$</span><span class="tx"> <span class="cur"></span></span>`);
        if (autoScrollRef.current && mterm) mterm.scrollTop = mterm.scrollHeight;
        setTimeout(() => { el.remove(); afterBlock(); }, 15000);
      } else {
        addEl(item.h!);
        afterBlock();
      }
    }

    function startAutoScroll() {
      stopAutoScroll();
      autoScrollIntervalRef.current = setInterval(() => {
        if (mterm) mterm.scrollTop += 1;
      }, 40);
    }

    function stopAutoScroll() {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    }

    function setAutoScroll(val: boolean) {
      autoScrollRef.current = val;
      const btn = document.getElementById("rky-btn-auto");
      if (val) {
        btn?.classList.add("active-auto");
        startAutoScroll();
      } else {
        btn?.classList.remove("active-auto");
        stopAutoScroll();
      }
    }

    setAutoScroll(true);
    lineTimerRef.current = setTimeout(writeNextBlock, 600);

    document.getElementById("rky-btn-up")?.addEventListener("click", () => {
      setAutoScroll(false);
      if (mterm) mterm.scrollTop -= 40;
    });
    document.getElementById("rky-btn-dn")?.addEventListener("click", () => {
      setAutoScroll(false);
      if (mterm) mterm.scrollTop += 40;
    });
    document.getElementById("rky-btn-auto")?.addEventListener("click", () => {
      setAutoScroll(!autoScrollRef.current);
    });

    mterm.addEventListener("wheel", () => setAutoScroll(false), { passive: true });
    mterm.addEventListener("touchstart", () => setAutoScroll(false), { passive: true });
    mterm.addEventListener("scroll", () => {
      const atBottom = mterm.scrollHeight - mterm.scrollTop - mterm.clientHeight < 6;
      if (atBottom && !autoScrollRef.current) setAutoScroll(true);
    });

    return () => {
      stopAutoScroll();
      if (lineTimerRef.current) clearTimeout(lineTimerRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        .dpf-root{background:#f0ebe0;border-radius:8px;padding:14px 16px 12px;font-family:'DM Mono',monospace;position:relative;overflow:hidden;}
        .dpf-root::before{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(rgba(74,127,181,0.07) 0,transparent 1px,transparent 28px),repeating-linear-gradient(90deg,rgba(74,127,181,0.07) 0,transparent 1px,transparent 28px);pointer-events:none;z-index:0;}
        .dpf-topbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;position:relative;z-index:1;}
        .dpf-fl{font-size:9px;letter-spacing:.13em;text-transform:uppercase;color:#4a7fb5;}
        .dpf-an{font-family:'Caveat',cursive;color:#c4420a;font-size:13px;}
        .dpf-scene{position:relative;width:100%;height:420px;overflow:hidden;border-radius:5px;border:1px solid rgba(74,127,181,0.2);background:#e2d9c8;}
        .dpf-wall{position:absolute;top:0;left:0;right:0;height:225px;background:#d8cfc0;}
        .dpf-floor{position:absolute;bottom:0;left:0;right:0;height:130px;background:#c2ad90;}
        .dpf-skirting{position:absolute;bottom:130px;left:0;right:0;height:6px;background:#b09878;}
        .dpf-wart{position:absolute;top:28px;left:28px;width:56px;height:54px;background:#eef6ff;border:2px solid #b0c8e0;border-radius:2px;}
        .dpf-shelf{position:absolute;top:56px;right:34px;width:90px;height:8px;background:#b09060;border-radius:2px;}
        .dpf-b1{position:absolute;top:34px;right:36px;width:10px;height:24px;background:#c4420a;border-radius:1px;}
        .dpf-b2{position:absolute;top:36px;right:48px;width:10px;height:22px;background:#4a7fb5;border-radius:1px;}
        .dpf-b3{position:absolute;top:38px;right:60px;width:8px;height:20px;background:#2d7a2d;border-radius:1px;}
        .dpf-pp{position:absolute;bottom:127px;left:28px;width:24px;height:18px;background:#c4793a;border-radius:2px 2px 4px 4px;}
        .dpf-ps{position:absolute;bottom:144px;left:39px;width:3px;height:36px;background:#2a6e2a;}
        .dpf-pl1{position:absolute;bottom:166px;left:24px;width:18px;height:11px;background:#3a9a3a;border-radius:50%;transform:rotate(-28deg);}
        .dpf-pl2{position:absolute;bottom:160px;left:40px;width:16px;height:10px;background:#3a9a3a;border-radius:50%;transform:rotate(22deg);}
        .dpf-pl3{position:absolute;bottom:174px;left:33px;width:13px;height:9px;background:#5ab85a;border-radius:50%;transform:rotate(-5deg);}
        .dpf-desk{position:absolute;bottom:126px;left:60px;right:30px;height:16px;background:#b09060;border-radius:4px 4px 0 0;border-top:3px solid #907840;}
        .dpf-dll{position:absolute;bottom:80px;left:76px;width:8px;height:50px;background:#a08050;border-radius:2px;}
        .dpf-dlr{position:absolute;bottom:80px;right:50px;width:8px;height:50px;background:#a08050;border-radius:2px;}
        .dpf-cb{position:absolute;bottom:140px;left:50%;transform:translateX(-50%) translateX(-30px);width:84px;height:72px;background:#d85218;border-radius:10px 10px 4px 4px;}
        .dpf-cbp{position:absolute;bottom:148px;left:50%;transform:translateX(-50%) translateX(-30px);width:68px;height:56px;background:#e8622a;border-radius:8px 8px 2px 2px;}
        .dpf-cs{position:absolute;bottom:128px;left:50%;transform:translateX(-50%) translateX(-30px);width:100px;height:18px;background:#d85218;border-radius:6px;}
        .dpf-cl1{position:absolute;bottom:98px;left:calc(50% - 68px);width:7px;height:34px;background:#b0b0b0;border-radius:2px;}
        .dpf-cl2{position:absolute;bottom:98px;left:calc(50% + 18px);width:7px;height:34px;background:#b0b0b0;border-radius:2px;}
        .dpf-cw1{position:absolute;bottom:94px;left:calc(50% - 72px);width:14px;height:7px;background:#888;border-radius:50%;}
        .dpf-cw2{position:absolute;bottom:94px;left:calc(50% + 14px);width:14px;height:7px;background:#888;border-radius:50%;}
        .dpf-person{position:absolute;bottom:144px;left:50%;transform:translateX(-50%) translateX(-28px);}
        .dpf-head{width:46px;height:50px;background:#c8855a;border-radius:50% 50% 44% 44%;position:relative;margin:0 auto;}
        .dpf-hair{position:absolute;top:-2px;left:4px;right:4px;height:20px;background:#1a0e06;border-radius:22px 22px 0 0;}
        .dpf-bindi{position:absolute;top:9px;left:50%;transform:translateX(-50%);width:6px;height:6px;background:#c4420a;border-radius:50%;}
        .dpf-eyes{position:absolute;top:18px;left:0;right:0;display:flex;justify-content:center;gap:10px;}
        .dpf-eye{width:5px;height:5px;background:#1a0e06;border-radius:50%;}
        .dpf-beard{position:absolute;bottom:2px;left:6px;right:6px;height:13px;background:#1a0e06;border-radius:0 0 12px 12px;opacity:.82;}
        .dpf-hp{position:absolute;top:-3px;left:-7px;right:-7px;height:26px;border:3px solid #1a1a1a;border-bottom:none;border-radius:22px 22px 0 0;}
        .dpf-hp::before,.dpf-hp::after{content:'';position:absolute;bottom:-5px;width:12px;height:12px;background:#1a1a1a;border-radius:50%;}
        .dpf-hp::before{left:-2px;} .dpf-hp::after{right:-2px;}
        .dpf-body{width:76px;height:66px;background:#12122a;border-radius:8px 8px 4px 4px;margin:0 auto;position:relative;}
        .dpf-col{position:absolute;top:0;left:50%;transform:translateX(-50%);width:20px;height:16px;background:#f0ebe0;border-radius:0 0 4px 4px;}
        .dpf-aml{position:absolute;top:10px;left:-16px;width:18px;height:46px;background:#12122a;border-radius:8px;transform:rotate(26deg);}
        .dpf-amr{position:absolute;top:6px;right:-14px;width:18px;height:50px;background:#12122a;border-radius:8px;transform:rotate(-20deg);}
        .dpf-hand{position:absolute;bottom:-7px;right:-4px;width:14px;height:12px;background:#c8855a;border-radius:50%;}
        .dpf-mstand{position:absolute;bottom:140px;right:50%;transform:translateX(50%) translateX(90px);width:16px;height:30px;background:#777;border-radius:2px;}
        .dpf-mbase{position:absolute;bottom:138px;right:50%;transform:translateX(50%) translateX(90px);width:60px;height:9px;background:#888;border-radius:5px;}
        .dpf-monitor{position:absolute;bottom:170px;right:22px;width:318px;height:218px;background:#0d1117;border-radius:8px;border:3px solid #444;overflow:hidden;display:flex;flex-direction:column;}
        .dpf-mglow{position:absolute;top:5px;right:10px;width:7px;height:7px;border-radius:50%;background:#28c840;z-index:5;}
        .dpf-mbar{background:#161b22;padding:7px 10px;display:flex;align-items:center;gap:5px;flex-shrink:0;}
        .dpf-mdot{width:9px;height:9px;border-radius:50%;}
        .dpf-mtab{background:#1e2d3d;border-radius:4px 4px 0 0;padding:2px 10px;font-size:9px;color:#58a6ff;font-family:'DM Mono',monospace;margin-left:6px;}
        .dpf-scroll-btns{position:absolute;bottom:174px;right:24px;display:flex;flex-direction:column;gap:3px;z-index:20;}
        .dpf-sbtn{width:18px;height:18px;background:rgba(22,27,34,0.85);border:1px solid #444;border-radius:3px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#8b949e;font-size:10px;user-select:none;transition:background .15s;font-family:'DM Mono',monospace;}
        .dpf-sbtn:hover{background:rgba(74,127,181,0.4);color:#fff;}
        .dpf-sbtn.active-auto{background:rgba(196,66,10,0.7);color:#fff;border-color:#c4420a;}
        .dpf-mterm{flex:1;padding:8px 10px;overflow-y:auto;font-family:'DM Mono',monospace;scroll-behavior:smooth;}
        .dpf-mterm::-webkit-scrollbar{width:3px;}
        .dpf-mterm::-webkit-scrollbar-thumb{background:#333;}
        .t-line{min-height:16px;opacity:0;transition:opacity .2s;}
        .t-line.vis{opacity:1;}
        .t-divider{border:none;border-top:1px dashed #30363d;margin:4px 0;}
        .pr{color:#c4420a;font-size:10px;}
        .tx{font-size:10px;line-height:1.6;white-space:pre-wrap;}
        .kw{color:#ff7b72;} .fn{color:#d2a8ff;} .st{color:#a5d6ff;} .nm{color:#f0883e;} .cm{color:#8b949e;} .ok{color:#3fb950;}
        .cur{display:inline-block;width:6px;height:10px;background:#58a6ff;animation:rky-blink .85s step-end infinite;vertical-align:middle;}
        @keyframes rky-blink{0%,100%{opacity:1;}50%{opacity:0;}}
        .sk-row{display:flex;align-items:center;gap:5px;margin:1px 0 1px 6px;opacity:0;transition:opacity .2s;}
        .sk-row.vis{opacity:1;}
        .sk-n{color:#a5d6ff;font-size:9px;width:56px;flex-shrink:0;}
        .sk-b{flex:1;height:4px;background:#21262d;border-radius:2px;overflow:hidden;}
        .sk-f{height:100%;border-radius:2px;width:0;transition:width 1.1s ease;}
        .sk-p{color:#8b949e;font-size:9px;width:22px;text-align:right;}
        .dpf-kbd{position:absolute;bottom:128px;right:50%;transform:translateX(50%) translateX(60px);width:110px;height:13px;background:#c8c0b0;border-radius:3px;border-top:2px solid #b0a890;}
        .dpf-mouse{position:absolute;bottom:128px;right:32px;width:14px;height:20px;background:#c8c0b0;border-radius:7px;}
        .dpf-lb{position:absolute;bottom:142px;left:70px;width:4px;height:28px;background:#a0a0a0;border-radius:2px;}
        .dpf-la{position:absolute;bottom:168px;left:60px;width:22px;height:4px;background:#a0a0a0;border-radius:2px;}
        .dpf-lh{position:absolute;bottom:162px;left:54px;width:20px;height:14px;background:#e8d060;border-radius:4px 4px 10px 10px;opacity:.8;}
        .dpf-botbar{display:flex;justify-content:space-between;align-items:center;margin-top:10px;position:relative;z-index:1;}
        .dpf-sdot{width:7px;height:7px;border-radius:50%;background:#3fb950;display:inline-block;margin-right:5px;animation:rky-blink .85s step-end infinite;}
      `}</style>

      <div className="dpf-root">
        <div className="dpf-topbar">
          <span className="dpf-fl">DEV_PROFILE.fig — rahul kumar yadav</span>
          <span className="dpf-an">fig.01 · infinite terminal</span>
        </div>

        <div className="dpf-scene">
          <div className="dpf-wall" />
          <div className="dpf-floor" />
          <div className="dpf-skirting" />

          {/* Wall art */}
          <div className="dpf-wart">
            <svg width="52" height="50" viewBox="0 0 52 50">
              <circle cx="26" cy="24" r="16" fill="none" stroke="#4a7fb5" strokeWidth="1.2" strokeDasharray="3 2"/>
              <line x1="26" y1="8" x2="26" y2="40" stroke="#4a7fb5" strokeWidth="1"/>
              <line x1="10" y1="24" x2="42" y2="24" stroke="#4a7fb5" strokeWidth="1"/>
              <circle cx="26" cy="24" r="4" fill="#4a7fb5" opacity={0.35}/>
              <text x="26" y="48" textAnchor="middle" fontSize="7" fill="#4a7fb5" fontFamily="monospace">&lt;/&gt;</text>
            </svg>
          </div>

          {/* Shelf + books */}
          <div className="dpf-shelf"/><div className="dpf-b1"/><div className="dpf-b2"/><div className="dpf-b3"/>

          {/* Plant */}
          <div className="dpf-pp"/><div className="dpf-ps"/>
          <div className="dpf-pl1"/><div className="dpf-pl2"/><div className="dpf-pl3"/>

          {/* Lamp */}
          <div className="dpf-lb"/><div className="dpf-la"/><div className="dpf-lh"/>

          {/* Desk */}
          <div className="dpf-dll"/><div className="dpf-dlr"/><div className="dpf-desk"/>

          {/* Monitor stand + base */}
          <div className="dpf-mstand"/><div className="dpf-mbase"/>

          {/* Monitor */}
          <div className="dpf-monitor">
            <div className="dpf-mglow"/>
            <div className="dpf-mbar">
              <div className="dpf-mdot" style={{ background: "#ff5f57" }}/>
              <div className="dpf-mdot" style={{ background: "#febc2e" }}/>
              <div className="dpf-mdot" style={{ background: "#28c840" }}/>
              <span className="dpf-mtab">rahul@dev ~ profile.sh</span>
            </div>
            <div className="dpf-mterm" id="rky-mterm" ref={mtermRef}/>
          </div>

          {/* Scroll controls */}
          <div className="dpf-scroll-btns">
            <div className="dpf-sbtn" id="rky-btn-up">▲</div>
            <div className="dpf-sbtn active-auto" id="rky-btn-auto">⟳</div>
            <div className="dpf-sbtn" id="rky-btn-dn">▼</div>
          </div>

          {/* Keyboard + mouse */}
          <div className="dpf-kbd"/><div className="dpf-mouse"/>

          {/* Chair */}
          <div className="dpf-cb"/><div className="dpf-cbp"/><div className="dpf-cs"/>
          <div className="dpf-cl1"/><div className="dpf-cl2"/>
          <div className="dpf-cw1"/><div className="dpf-cw2"/>

          {/* Person */}
          <div className="dpf-person">
            <div className="dpf-head">
              <div className="dpf-hair"/>
              <div className="dpf-bindi"/>
              <div className="dpf-eyes"><div className="dpf-eye"/><div className="dpf-eye"/></div>
              <div className="dpf-beard"/>
              <div className="dpf-hp"/>
            </div>
            <div className="dpf-body">
              <div className="dpf-col"/>
              <div className="dpf-aml"/>
              <div className="dpf-amr"><div className="dpf-hand"/></div>
            </div>
          </div>

          {/* Corner labels */}
          <div style={{ position:"absolute", bottom:5, left:10, fontSize:8, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(74,127,181,0.38)", fontFamily:"'DM Mono',monospace" }}>fig.01</div>
          <div style={{ position:"absolute", bottom:5, right:10, fontSize:8, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(74,127,181,0.38)", fontFamily:"'DM Mono',monospace" }}>2025</div>
        </div>

        <div className="dpf-botbar">
          <div style={{ display:"flex", alignItems:"center" }}>
            <span className="dpf-sdot"/>
            <span className="dpf-fl">online · available for hire · pune, india</span>
          </div>
          <span className="dpf-an">+91 88900 85616</span>
        </div>
      </div>
    </>
  );
}
