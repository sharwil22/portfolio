/* =========================================================
   Content — edit these arrays to update the site
   ========================================================= */

const GH = "https://github.com/sharwil22";

const projects = [
  {
    title: "Real-Time Indian Sign Language Recognition",
    desc: "MediaPipe landmarks feed a 30-frame GRU sequence model, with a Gemini function-calling fallback for sentence assembly on low-confidence predictions. Built on a signer-independent dataset collected with a partner organisation.",
    tags: ["MediaPipe", "GRU", "Gemini"],
    cat: ["cv", "research"], label: "Flagship · Research", art: "hand", accent: "#fbbf24",
    link: `${GH}/sign-language-detection-isl`,
  },
  {
    title: "AI Revenue Recovery Agent",
    desc: "Razorpay AI Buildathon 2026. An agent that diagnoses failed UPI/card subscription payments and picks recovery actions: 75.7% recovery vs 57.1% for a naive baseline across 140 cases.",
    tags: ["Agentic AI", "Gemini", "Streamlit"],
    cat: ["agents"], label: "Hackathon", art: "revenue", accent: "#a78bfa", link: GH,
  },
  {
    title: "AutoRegent — Self-Healing API Gateway",
    desc: "Gemini X Express Hackathon 2026. A FastAPI gateway that diagnoses and fixes schema drift live, guarded by confidence thresholds, circuit breakers and heal budgets, with a real-time Next.js dashboard.",
    tags: ["FastAPI", "Gemini", "Next.js"],
    cat: ["agents"], label: "Hackathon", art: "gateway", accent: "#22d3ee", link: GH,
  },
  {
    title: "Adaptive Traffic Signal Control",
    desc: "YOLOv8 vehicle detection drives density-based signal timing. Includes a comparison of YOLOv5, YOLOv8, Faster R-CNN and SSD, presented at IICTDS 2025, NMIMS Chandigarh.",
    tags: ["YOLOv8", "OpenCV", "AIoT"],
    cat: ["cv", "research"], label: "Research Presented", art: "traffic", accent: "#34d399",
    link: `${GH}/AIoT-Adaptive-Traffic-Signal-System`,
  },
  {
    title: "CropCure — Cotton Leaf Disease Detection",
    desc: "Mobile app that detects Cotton Leaf Curl Disease from a leaf photo using MobileNetV2 on TensorFlow Lite, with 94.8% classification accuracy. Presented at IC3I.",
    tags: ["MobileNetV2", "TF Lite", "Mobile AI"],
    cat: ["cv", "research"], label: "Research Presented", art: "leaf", accent: "#84cc16",
    link: `${GH}/Cropcure`,
  },
  {
    title: "Banking77 + RAG",
    desc: "Intent classification on the Banking77 dataset combined with retrieval-augmented generation for grounded banking-support answers.",
    tags: ["NLP", "RAG", "LLMs"],
    cat: ["genai"], label: "GenAI", art: "rag", accent: "#60a5fa", link: GH,
  },
  {
    title: "Facial Emotion Recognition",
    desc: "Deep-learning pipeline that detects faces and classifies facial expressions in real time.",
    tags: ["Deep Learning", "CNN", "OpenCV"],
    cat: ["cv"], label: "Computer Vision", art: "face", accent: "#f472b6", link: GH,
  },
  {
    title: "Research Publications",
    desc: "Two papers presented at IC3I and IICTDS 2025, and an Indian Sign Language manuscript targeting a Q1 journal.",
    tags: ["IC3I", "IICTDS 2025", "Q1 Manuscript"],
    cat: ["research"], label: "Research", art: "paper", accent: "#e5e5e5", link: "#research",
  },
];

const services = [
  {
    title: "Agentic AI Systems",
    desc: "Agents that diagnose, decide and act through Gemini function-calling, with bounded, auditable logic and guardrails.",
    stack: ["Gemini", "Function Calling", "LangChain", "LangGraph"],
    art: "agent",
  },
  {
    title: "Computer Vision",
    desc: "Real-time detection and recognition, from YOLO vehicle counting to landmark-based sign language models.",
    stack: ["YOLOv8", "MediaPipe", "OpenCV", "TensorFlow"],
    art: "cv",
  },
  {
    title: "GenAI & RAG",
    desc: "LLM applications grounded in real data: retrieval pipelines, intent routing and evaluation.",
    stack: ["LLMs", "RAG", "Gemini API", "NLP"],
    art: "rag",
  },
  {
    title: "Full-Stack AI Products",
    desc: "Taking models end to end, from database schema to a deployed app with dashboards people can actually use.",
    stack: ["FastAPI", "Flask", "Streamlit", "MongoDB", "Next.js"],
    art: "ml",
  },
];

const experience = [
  { org: "Symbiosis Institute of Technology, Nagpur", role: "B.Tech — Computer Engineering", when: "2023 - 2027", art: "ml" },
  { org: "Razorpay AI Buildathon", role: "Failed-Subscription Revenue Recovery Agent", when: "2026", art: "agent" },
  { org: "Gemini X Express Hackathon", role: "AutoRegent — Self-Healing API Gateway", when: "2026", art: "rag" },
  { org: "Industry Readiness Program", role: "Top Performer", when: "2025 - 2026", art: "ml" },
  { org: "Model United Nations", role: "Secretary-General", note: "Led and coordinated an event with 100+ participants.", when: "Leadership", art: "agent" },
  { org: "Bharatiya Vidya Bhavan", role: "Shri C. Subramaniam Award for Excellence in Character", when: "Award", art: "cv" },
];

const skills = [
  { group: "Languages", items: ["Python", "C / C++", "SQL"] },
  { group: "AI / ML", items: ["Machine Learning", "Deep Learning", "Computer Vision", "Generative AI", "Agentic AI", "NLP"] },
  { group: "LLM Tools", items: ["Gemini API", "Function Calling", "RAG", "LangChain", "LangGraph"] },
  { group: "Frameworks", items: ["TensorFlow", "MediaPipe", "YOLOv8", "FastAPI", "Flask", "Streamlit"] },
  { group: "Core CS", items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"] },
];

const publications = [
  { venue: "IC3I Conference", title: "Enhancing Cotton Yield Through Detection of Cotton Leaf Curl Disease", link: "" },
  { venue: "IICTDS 2025 · NMIMS Chandigarh", title: "Comparative Study of YOLOv5, YOLOv8, Faster R-CNN, SSD for Traffic Detection", link: "" },
  { venue: "Manuscript · Targeting Q1 journal", title: "Deep Learning-Based Indian Sign Language Detection", link: "" },
];

/* =========================================================
   Cover art (inline SVG, 400 × 285)
   ========================================================= */

const grid = (c) => `
  <defs>
    <pattern id="g-${c}" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M20 0H0V20" fill="none" stroke="#fff" stroke-opacity=".05"/>
    </pattern>
    <radialGradient id="r-${c}" cx="50%" cy="60%" r="60%">
      <stop offset="0" stop-color="var(--a)" stop-opacity=".35"/>
      <stop offset="1" stop-color="var(--a)" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="285" fill="#141414"/>
  <rect width="400" height="285" fill="url(#g-${c})"/>
  <rect width="400" height="285" fill="url(#r-${c})"/>`;

const arts = {
  traffic: `
    <rect x="170" y="0" width="60" height="285" fill="#222"/><rect x="0" y="112" width="400" height="60" fill="#222"/>
    <path d="M200 0v100M200 185v100M0 142h158M242 142h158" stroke="#fff" stroke-opacity=".35" stroke-dasharray="8 8"/>
    ${[40, 70, 100].map((x) => `<rect x="${x}" y="148" width="20" height="12" rx="3" fill="#fff" fill-opacity=".8"/>`).join("")}
    ${[205, 235].map((y) => `<rect x="178" y="${y}" width="12" height="20" rx="3" fill="#fff" fill-opacity=".8"/>`).join("")}
    <rect x="240" y="60" width="26" height="62" rx="6" fill="#0b0b0b" stroke="#333"/>
    <circle cx="253" cy="74" r="6" fill="#444"/><circle cx="253" cy="91" r="6" fill="#444"/><circle cx="253" cy="108" r="6" fill="var(--a)"/>
    <g font-family="ui-monospace,monospace" font-size="10" fill="#bbb">
      <rect x="280" y="190" width="100" height="70" rx="8" fill="#0b0b0b" stroke="#333"/>
      <text x="292" y="210">vehicles  14</text><text x="292" y="228">density  HIGH</text><text x="292" y="246" fill="var(--a)">green  +20s</text>
    </g>`,
  face: `
    <ellipse cx="200" cy="140" rx="62" ry="80" fill="none" stroke="#fff" stroke-opacity=".25"/>
    <rect x="128" y="50" width="144" height="180" fill="none" stroke="var(--a)" stroke-width="2"/>
    <rect x="128" y="34" width="92" height="16" fill="var(--a)"/><text x="134" y="46" font-size="10" font-family="ui-monospace,monospace" fill="#111">HAPPY 0.94</text>
    ${[[175,120],[225,120],[168,114],[182,114],[218,114],[232,114],[200,150],[190,160],[210,160],[180,185],[200,192],[220,185],[165,95],[235,95],[200,215],[150,150],[250,150]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.4" fill="#fff"/>`).join("")}
    <path d="M180 185 Q200 200 220 185 M168 114 L182 114 M218 114 L232 114" stroke="#fff" stroke-opacity=".5" fill="none"/>
    <g font-family="ui-monospace,monospace" font-size="9" fill="#999">
      ${["happy", "neutral", "surprise", "sad"].map((e, i) => `<text x="298" y="${80 + i * 26}">${e}</text><rect x="298" y="${84 + i * 26}" width="${[80, 22, 14, 6][i]}" height="5" rx="2" fill="${i ? "#555" : "var(--a)"}"/>`).join("")}
    </g>`,
  rag: `
    <g font-family="Manrope,sans-serif" font-size="10">
      <rect x="30" y="40" width="170" height="36" rx="12" fill="#2a2a2a"/><text x="44" y="62" fill="#ddd">How do I reset my card PIN?</text>
      <rect x="44" y="176" width="190" height="56" rx="12" fill="var(--a)" fill-opacity=".9"/>
      <text x="58" y="198" fill="#0b1220">You can reset it in the app under</text><text x="58" y="214" fill="#0b1220">Cards → Security → Change PIN. [1]</text>
      <rect x="30" y="92" width="118" height="20" rx="10" fill="none" stroke="var(--a)"/><text x="40" y="106" fill="var(--a)" font-family="ui-monospace,monospace" font-size="9">intent: change_pin</text>
    </g>
    ${[0, 1, 2].map((i) => `<g transform="translate(${262 + i * 8} ${46 + i * 36})"><rect width="110" height="70" rx="6" fill="#1e1e1e" stroke="#3a3a3a"/>
      <rect x="10" y="12" width="70" height="5" rx="2" fill="#555"/><rect x="10" y="24" width="88" height="4" rx="2" fill="#333"/><rect x="10" y="34" width="80" height="4" rx="2" fill="#333"/><rect x="10" y="44" width="60" height="4" rx="2" fill="#333"/></g>`).join("")}
    <path d="M150 102 C210 102 220 90 262 82" stroke="var(--a)" stroke-dasharray="4 4" fill="none"/>
    <path d="M270 200 C250 206 245 206 236 204" stroke="var(--a)" stroke-dasharray="4 4" fill="none"/>`,
  hand: (() => {
    const p = { w: [200, 240], t1: [165, 215], t2: [145, 190], t3: [132, 168], i1: [178, 165], i2: [172, 128], i3: [168, 100], m1: [200, 160], m2: [200, 118], m3: [200, 86], r1: [220, 165], r2: [226, 128], r3: [230, 104], p1: [238, 178], p2: [252, 150], p3: [260, 130] };
    const bones = [["w","t1"],["t1","t2"],["t2","t3"],["w","i1"],["i1","i2"],["i2","i3"],["w","m1"],["m1","m2"],["m2","m3"],["w","r1"],["r1","r2"],["r2","r3"],["w","p1"],["p1","p2"],["p2","p3"],["i1","m1"],["m1","r1"],["r1","p1"]];
    return `${bones.map(([a, b]) => `<line x1="${p[a][0]}" y1="${p[a][1]}" x2="${p[b][0]}" y2="${p[b][1]}" stroke="var(--a)" stroke-width="2.5"/>`).join("")}
      ${Object.values(p).map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" fill="#fff"/>`).join("")}
      <rect x="120" y="70" width="160" height="186" fill="none" stroke="#fff" stroke-opacity=".3" stroke-dasharray="5 5"/>
      <g font-family="Manrope,sans-serif"><rect x="130" y="250" width="140" height="26" rx="13" fill="#fff"/><text x="200" y="267" text-anchor="middle" font-size="12" font-weight="700" fill="#111">"HELLO"</text></g>`;
  })(),
  revenue: `
    <path d="M30 220 L90 200 L140 230 L190 240 L230 190 L280 150 L330 110 L370 70" stroke="var(--a)" stroke-width="3" fill="none"/>
    <path d="M30 220 L90 200 L140 230 L190 240 L230 190 L280 150 L330 110 L370 70 V260 H30Z" fill="var(--a)" fill-opacity=".12"/>
    <circle cx="190" cy="240" r="5" fill="#fff"/><text x="160" y="262" font-size="9" fill="#999" font-family="ui-monospace,monospace">failed payments</text>
    <g font-family="Manrope,sans-serif" font-size="10">
      <rect x="30" y="30" width="150" height="80" rx="10" fill="#1e1e1e" stroke="#333"/>
      <text x="44" y="52" fill="#999">Recovery rate</text><text x="44" y="84" fill="#fff" font-size="24" font-weight="700">75.7%</text><text x="44" y="100" fill="#777" font-size="9">vs 57.1% baseline</text>
      ${["Diagnose", "Decide", "Recover"].map((s, i) => `<rect x="${212 + i * 0}" y="${30 + i * 28}" width="150" height="22" rx="11" fill="${i === 2 ? "var(--a)" : "#262626"}"/><text x="226" y="${45 + i * 28}" fill="${i === 2 ? "#111" : "#ccc"}">${i + 1}. ${s}</text>`).join("")}
    </g>`,
  gateway: `
    ${[[60, 60, 1], [60, 224, 1], [340, 60, 0], [340, 224, 1]].map(([x, y, ok]) => `<line x1="200" y1="142" x2="${x}" y2="${y}" stroke="${ok ? "#555" : "#ef4444"}" stroke-dasharray="${ok ? "0" : "4 4"}"/>`).join("")}
    <circle cx="200" cy="142" r="60" fill="none" stroke="var(--a)" stroke-opacity=".3"/><circle cx="200" cy="142" r="78" fill="none" stroke="var(--a)" stroke-opacity=".12"/>
    <circle cx="200" cy="142" r="44" fill="#1b1b1b" stroke="var(--a)" stroke-width="2"/>
    <text x="200" y="146" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Manrope,sans-serif">GATEWAY</text>
    ${[[60, 60, "auth", 1], [60, 224, "orders", 1], [340, 60, "payments", 0], [340, 224, "search", 1]].map(([x, y, n, ok]) => `
      <rect x="${x - 42}" y="${y - 15}" width="84" height="30" rx="15" fill="#1e1e1e" stroke="${ok ? "#3a3a3a" : "#ef4444"}"/>
      <circle cx="${x - 28}" cy="${y}" r="4" fill="${ok ? "#22c55e" : "#ef4444"}"/>
      <text x="${x - 18}" y="${y + 4}" font-size="10" fill="#ddd" font-family="ui-monospace,monospace">${n}</text>`).join("")}
    <g font-family="ui-monospace,monospace" font-size="9"><rect x="252" y="130" width="138" height="22" rx="4" fill="var(--a)"/><text x="260" y="144" fill="#111">↻ schema drift · healed</text></g>`,
  leaf: `
    <path d="M200 250 C120 220 110 110 200 40 C290 110 280 220 200 250Z" fill="#2a3a1a" stroke="var(--a)" stroke-width="2"/>
    <path d="M200 250 V60 M200 110 L160 90 M200 140 L150 120 M200 170 L155 158 M200 110 L240 90 M200 140 L250 120 M200 170 L245 158" stroke="var(--a)" stroke-opacity=".6" fill="none"/>
    ${[[170, 130, 9], [230, 170, 12], [185, 190, 7], [222, 115, 6]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#8b5a2b" fill-opacity=".85"/>`).join("")}
    <rect x="155" y="100" width="90" height="105" fill="none" stroke="#fff" stroke-width="1.5"/>
    <rect x="155" y="84" width="118" height="16" fill="#fff"/><text x="161" y="96" font-size="9.5" fill="#111" font-family="ui-monospace,monospace">Leaf Curl · 0.95</text>
    <g font-family="Manrope,sans-serif" font-size="10"><rect x="276" y="200" width="104" height="54" rx="8" fill="#1e1e1e" stroke="#333"/><text x="288" y="220" fill="#999">Model</text><text x="288" y="240" fill="#fff">MobileNetV2</text></g>`,
  paper: `
    ${[2, 1, 0].map((i) => `<g transform="translate(${130 + i * 26} ${36 + i * 14}) rotate(${(i - 1) * 6})">
      <rect width="130" height="175" rx="3" fill="${i ? "#cfcfcf" : "#f5f5f5"}"/>
      <rect x="14" y="16" width="102" height="8" rx="2" fill="#222"/><rect x="30" y="30" width="70" height="4" rx="2" fill="#888"/>
      ${[0, 1, 2, 3, 4, 5, 6, 7].map((l) => `<rect x="14" y="${50 + l * 9}" width="${l === 7 ? 60 : 102}" height="3" rx="1.5" fill="#aaa"/>`).join("")}
      <rect x="14" y="128" width="46" height="32" fill="#ddd"/><path d="M16 156 L28 144 L38 150 L58 132" stroke="#333" fill="none"/>
      <rect x="66" y="130" width="50" height="3" rx="1.5" fill="#aaa"/><rect x="66" y="139" width="50" height="3" rx="1.5" fill="#aaa"/><rect x="66" y="148" width="40" height="3" rx="1.5" fill="#aaa"/>
    </g>`).join("")}`,
};

const cover = (key, accent, id) =>
  `<svg class="art" viewBox="0 0 400 285" preserveAspectRatio="xMidYMid slice" style="--a:${accent}" aria-hidden="true">${grid(id)}${arts[key]}</svg>`;

// Light mock visuals for the service cards & experience hover
const mini = {
  ml: `<rect width="300" height="225" fill="#eef1f6"/>${[40, 80, 120, 160, 200, 240].map((x, i) => `<rect x="${x}" y="${170 - [40, 70, 55, 100, 85, 130][i]}" width="26" height="${[40, 70, 55, 100, 85, 130][i]}" rx="4" fill="${i === 5 ? "#1a1a1a" : "#b9c3d6"}"/>`).join("")}<text x="40" y="200" font-family="Manrope" font-size="12" fill="#333">Validation accuracy</text>`,
  rag: `<rect width="300" height="225" fill="#eef1f6"/><rect x="30" y="30" width="170" height="34" rx="12" fill="#fff"/><rect x="100" y="80" width="170" height="54" rx="12" fill="#1a1a1a"/><rect x="30" y="150" width="140" height="34" rx="12" fill="#fff"/><rect x="44" y="44" width="110" height="6" rx="3" fill="#bbb"/><rect x="114" y="96" width="130" height="6" rx="3" fill="#666"/><rect x="114" y="110" width="100" height="6" rx="3" fill="#666"/><rect x="44" y="164" width="90" height="6" rx="3" fill="#bbb"/>`,
  cv: `<rect width="300" height="225" fill="#eef1f6"/><circle cx="150" cy="112" r="56" fill="#cfd6e3"/><rect x="88" y="50" width="124" height="124" fill="none" stroke="#1a1a1a" stroke-width="3"/><rect x="88" y="32" width="84" height="18" fill="#1a1a1a"/><text x="94" y="45" font-size="11" fill="#fff" font-family="monospace">person 0.98</text>`,
  agent: `<rect width="300" height="225" fill="#eef1f6"/>${[[70, 60], [230, 60], [70, 170], [230, 170]].map(([x, y]) => `<line x1="150" y1="112" x2="${x}" y2="${y}" stroke="#9aa6bb" stroke-width="2"/><circle cx="${x}" cy="${y}" r="18" fill="#fff" stroke="#9aa6bb"/>`).join("")}<circle cx="150" cy="112" r="30" fill="#1a1a1a"/><text x="150" y="117" text-anchor="middle" font-size="12" fill="#fff" font-family="Manrope" font-weight="700">AI</text>`,
};
const miniSvg = (k) => `<svg viewBox="0 0 300 225" preserveAspectRatio="xMidYMid slice">${mini[k]}</svg>`;

/* =========================================================
   Render
   ========================================================= */

const arrow = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12 12 4M5 4h7v7"/></svg>`;
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

document.getElementById("grid").innerHTML = projects
  .map((p, i) => {
    const ext = p.link.startsWith("http");
    return `<a class="card reveal" data-cat="${p.cat.join(" ")}" href="${p.link}" ${ext ? 'target="_blank" rel="noopener"' : ""}>
      <div class="cover">${cover(p.art, p.accent, i)}
        <span class="tag">${esc(p.label)}</span><span class="num">${String(i + 1).padStart(2, "0")}</span>
        <span class="go">${arrow}</span>
      </div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="chips">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
    </a>`;
  })
  .join("");
document.getElementById("work-count").textContent = projects.length;

document.getElementById("services").innerHTML = services
  .map((s, i) => `<li class="svc reveal${i === 0 ? " open" : ""}">
      <button class="svc-head" aria-expanded="${i === 0}">
        <h3>${esc(s.title)}</h3>
        <span class="svc-icon">
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 18 18 6M8 6h10v10"/></svg>
          <svg class="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 5l14 14M19 5 5 19"/></svg>
        </span>
      </button>
      <div class="svc-body"><div>
        <p>${esc(s.desc)}</p>
        <div class="stack">${s.stack.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </div></div>
      <div class="svc-visual">${miniSvg(s.art)}</div>
    </li>`)
  .join("");

document.getElementById("xp").innerHTML = experience
  .map((x) => `<li class="reveal" data-art="${x.art}">
      <div><h4>${esc(x.org)}</h4><div class="role">${esc(x.role)}</div>${x.note ? `<div class="note">${esc(x.note)}</div>` : ""}</div>
      <div class="when">${esc(x.when)}</div>
    </li>`)
  .join("");

document.getElementById("skills").innerHTML = skills
  .map((g) => `<div class="skills-group"><h5>${esc(g.group)}</h5><div class="chips">${g.items.map((t) => `<span>${esc(t)}</span>`).join("")}</div></div>`)
  .join("");

document.getElementById("pubs").innerHTML =
  `<div class="skills-group"><h5>Publications</h5></div>` +
  publications
    .map((p) => {
      const inner = `<div class="venue">${esc(p.venue)}</div><h4>${esc(p.title)}</h4>`;
      return p.link ? `<a class="pub" href="${p.link}" target="_blank" rel="noopener" style="display:block">${inner}</a>` : `<div class="pub">${inner}</div>`;
    })
    .join("");

document.getElementById("year").textContent = new Date().getFullYear();

/* =========================================================
   Interactions
   ========================================================= */

// Work filters
document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  document.querySelectorAll("#filters button").forEach((b) => b.classList.toggle("active", b === btn));
  const f = btn.dataset.filter;
  document.querySelectorAll(".card").forEach((c) => {
    c.classList.toggle("hide", f !== "all" && !c.dataset.cat.split(" ").includes(f));
  });
});

// Service accordion (one open at a time)
document.getElementById("services").addEventListener("click", (e) => {
  const head = e.target.closest(".svc-head");
  if (!head) return;
  const item = head.parentElement;
  const wasOpen = item.classList.contains("open");
  document.querySelectorAll(".svc").forEach((s) => {
    s.classList.remove("open");
    s.querySelector(".svc-head").setAttribute("aria-expanded", "false");
  });
  if (!wasOpen) {
    item.classList.add("open");
    head.setAttribute("aria-expanded", "true");
  }
});

// Experience hover preview that follows the cursor
const float = document.getElementById("xp-float");
document.querySelectorAll("#xp li").forEach((li) => {
  li.addEventListener("mouseenter", () => {
    float.innerHTML = miniSvg(li.dataset.art);
    float.classList.add("on");
  });
  li.addEventListener("mouseleave", () => float.classList.remove("on"));
  li.addEventListener("mousemove", (e) => {
    float.style.left = e.clientX + 140 + "px";
    float.style.top = e.clientY + "px";
  });
});

// Mobile menu
const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

// Scroll reveal
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add("in");
      io.unobserve(en.target);
    }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
