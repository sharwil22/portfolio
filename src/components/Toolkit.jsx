import { motion } from "motion/react";
import { EASE, Reveal } from "./motion";
import { SectionHead } from "./Work";
import { skills, publications } from "../content";

const chip = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE } },
};

export default function Toolkit() {
  return (
    <section className="frame pad" id="research">
      <SectionHead ghost="TOOLKIT" title="/SKILLS & RESEARCH" />
      <div className="two">
        <div>
          {skills.map((g) => (
            <div className="skills-group" key={g.group}>
              <h5>{g.group}</h5>
              <motion.div
                className="chips"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ staggerChildren: 0.05 }}
              >
                {g.items.map((t) => (
                  <motion.span key={t} variants={chip} whileHover={{ y: -3 }}>
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        <div>
          <div className="skills-group">
            <h5>Publications</h5>
          </div>
          {publications.map((p, i) => (
            <Reveal key={p.title} className="pub" delay={i * 0.1} y={24}>
              <div className="venue">{p.venue}</div>
              <h4>{p.title}</h4>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
