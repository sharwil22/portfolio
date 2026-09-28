import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE, Reveal, SplitText } from "./motion";
import { services, miniSvg } from "../content";

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section className="frame clear pad" id="service">
      <h2 style={{ fontWeight: 600, fontSize: "clamp(34px,5vw,58px)", letterSpacing: "-.02em", marginBottom: 56 }}>
        <SplitText text="/WHAT I BUILD" by="word" inView stagger={0.08} />
      </h2>

      <ul className="services">
        {services.map((s, i) => {
          const isOpen = open === i;
          return (
            <Reveal as="li" key={s.title} delay={i * 0.06} className={`svc${isOpen ? " open" : ""}`}>
              {isOpen && (
                <motion.div layoutId="svc-bg" className="svc-bg" transition={{ type: "spring", stiffness: 260, damping: 30 }} />
              )}
              <button className="svc-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                <h3>{s.title}</h3>
                <motion.span className="svc-icon" animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.4, ease: EASE }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    {isOpen ? <path d="M5 5l14 14M19 5 5 19" /> : <path d="M6 18 18 6M8 6h10v10" />}
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="svc-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <p>{s.desc}</p>
                    <div className="stack">
                      {s.stack.map((t, j) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 + j * 0.05 }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="svc-visual"
                    initial={{ opacity: 0, scale: 0.6, rotate: -10, y: 40 }}
                    animate={{ opacity: 1, scale: 1, rotate: 8, y: 0 }}
                    exit={{ opacity: 0, scale: 0.7, rotate: 20, y: 20, transition: { duration: 0.25 } }}
                    transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.1 }}
                    dangerouslySetInnerHTML={{ __html: miniSvg(s.art) }}
                  />
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
