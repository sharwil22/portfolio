import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { EASE, Magnetic, SplitText, Arrow } from "./motion";
import { socials, ext, EMAIL } from "./links";
import { projects, services, publications } from "../content";
import portrait from "../assets/portrait-bw.png";

const navLinks = [
  { href: "#work", label: "Work", count: projects.length },
  { href: "#service", label: "Focus", count: services.length },
  { href: "#experience", label: "Journey" },
  { href: "#research", label: "Research", count: publications.length },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      className={`nav${open ? " open" : ""}`}
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
    >
      <a href="#contact" className="pill status">
        <span className="dot" />
        Open to AI/ML Internships
      </a>
      <div className="nav-links">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
            {l.count != null && <sup>[{l.count}]</sup>}
          </a>
        ))}
      </div>
      <Magnetic>
        <a href={`mailto:${EMAIL}`} className="btn">
          Let's Talk <Arrow />
        </a>
      </Magnetic>
      <button
        className="menu-btn"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-drawer"
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.25, ease: EASE }}
            style={{ transformOrigin: "top right" }}
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="frame" id="top" ref={ref}>
      <Nav />
      <div className="hero">
        <div className="hero-name" aria-label="Sharwil Bhende">
          <motion.span className="word outline" style={{ x: leftX }}>
            <SplitText text="SHARWIL" delay={0.25} />
          </motion.span>
          <motion.span className="word solid" style={{ x: rightX }}>
            <SplitText text="BHENDE" delay={0.45} />
          </motion.span>
        </div>

        <div className="hero-photo">
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.55 }}
            style={{ scale: photoScale, transformOrigin: "bottom center" }}
          >
            <img src={portrait} alt="Portrait of Sharwil Bhende" />
          </motion.div>
        </div>

        <motion.div className="hero-bottom" style={{ opacity: fade }}>
          <motion.div
            className="hero-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.9 }}
          >
            <h1>AI / ML Engineer</h1>
            <p>
              Computer Engineering student in Nagpur. I build technology around real problems, from accessibility and
              civic systems to mobility and agriculture.
            </p>
            <Magnetic>
              <a href="#contact" className="btn">
                Let's collaborate <Arrow />
              </a>
            </Magnetic>
          </motion.div>

          <div className="socials">
            {socials.map(({ label, href, Icon, external }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 1 + i * 0.08 }}
              >
                <a className="pill" href={href} {...ext(external)}>
                  <Icon />
                  {label}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
