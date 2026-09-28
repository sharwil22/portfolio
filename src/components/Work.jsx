import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { EASE, Reveal, SplitText, Arrow } from "./motion";
import { projects, cover, GH } from "../content";

/** Big faint word behind the title that drifts sideways as the section scrolls past. */
export function SectionHead({ ghost, title, meta, align = "center" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  return (
    <div className={`head${align === "left" ? " left" : ""}`} ref={ref}>
      <motion.span className="ghost" aria-hidden="true" style={{ x }}>
        {ghost}
      </motion.span>
      <h2>
        <SplitText text={title} by="word" inView stagger={0.08} />
      </h2>
      {meta && (
        <Reveal as="span" className="meta" delay={0.2}>
          {meta}
        </Reveal>
      )}
    </div>
  );
}

const filters = [
  { id: "all", label: "All" },
  { id: "agents", label: "Agentic AI" },
  { id: "cv", label: "Computer Vision" },
  { id: "genai", label: "GenAI" },
  { id: "research", label: "Research" },
];

function Card({ p, index }) {
  const external = p.link.startsWith("http");
  return (
    <motion.a
      layout
      className="card"
      href={p.link}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.25 } }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.8, ease: EASE, delay: (index % 2) * 0.12, layout: { duration: 0.6, ease: EASE } }}
    >
      <div className="cover">
        <div dangerouslySetInnerHTML={{ __html: cover(p.art, p.accent, index) }} style={{ display: "contents" }} />
        <span className="tag">{p.label}</span>
        <span className="num">{String(index + 1).padStart(2, "0")}</span>
        <span className="go">
          <Arrow size={22} />
        </span>
      </div>
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
      <div className="chips">
        {p.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Work() {
  const [filter, setFilter] = useState("all");
  const shown = projects
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => filter === "all" || p.cat.includes(filter));

  return (
    <section className="frame pad" id="work">
      <SectionHead ghost="PORTFOLIO" title="/SELECTED WORK" />
      <Reveal className="work-bar">
        <div className="filters" role="tablist">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={filter === f.id ? "active" : ""}
              onClick={() => setFilter(f.id)}
            >
              {filter === f.id && (
                <motion.span layoutId="filter-bg" className="filter-bg" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
              )}
              <span>{f.label}</span>
            </button>
          ))}
        </div>
        <a className="pill" href={GH} target="_blank" rel="noopener">
          View All Work <Arrow />
        </a>
      </Reveal>

      <motion.div className="grid" layout>
        <AnimatePresence mode="popLayout">
          {shown.map(({ p, i }) => (
            <Card key={p.title} p={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
