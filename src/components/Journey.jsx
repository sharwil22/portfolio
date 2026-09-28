import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { EASE } from "./motion";
import { SectionHead } from "./Work";
import { experience, miniSvg } from "../content";

export default function Journey() {
  const [art, setArt] = useState(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.5 });
  const y = useSpring(my, { stiffness: 180, damping: 22, mass: 0.5 });

  const track = (e) => {
    mx.set(e.clientX + 140);
    my.set(e.clientY);
  };

  return (
    <section className="frame dark pad" id="experience">
      <SectionHead ghost="JOURNEY" title="/JOURNEY" meta="Education · Hackathons · Awards" align="left" />

      <ul className="xp" onMouseMove={track} onMouseLeave={() => setArt(null)}>
        {experience.map((item, i) => (
          <motion.li
            key={item.org}
            onMouseEnter={() => setArt(item.art)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.07 }}
          >
            <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.3, ease: EASE }}>
              <h4>{item.org}</h4>
              <div className="role">{item.role}</div>
              {item.note && <div className="note">{item.note}</div>}
            </motion.div>
            <div className="when">{item.when}</div>
          </motion.li>
        ))}
      </ul>

      <motion.div className="xp-float" aria-hidden="true" style={{ x, y, left: -110, top: -82 }}>
        <AnimatePresence mode="popLayout">
          {art && (
            <motion.div
              key={art}
              initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              style={{ width: "100%", height: "100%", borderRadius: 4, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,.4)" }}
              dangerouslySetInnerHTML={{ __html: miniSvg(art) }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
