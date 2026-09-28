import { motion } from "motion/react";
import { EASE, Magnetic, Reveal, SplitText, Arrow } from "./motion";
import { socials, ext, EMAIL } from "./links";
import avatar from "../assets/avatar.png";

export default function Contact() {
  return (
    <>
      <section className="frame glass contact" id="contact">
        <Reveal as="span" className="pill status" y={20}>
          <span className="dot" />
          Open to Internships &amp; Research
        </Reveal>
        <h2>
          <SplitText text="HAVE A PROBLEM WORTH BUILDING FOR?" by="word" inView stagger={0.07} />
        </h2>
        <Reveal as="p" delay={0.3}>
          I'm open to internships, research collaborations and opportunities where I can learn, build and create
          meaningful impact.
        </Reveal>
        <Reveal delay={0.4}>
          <Magnetic strength={0.4}>
            <a href={`mailto:${EMAIL}`} className="btn lg">
              Contact Me <Arrow />
            </a>
          </Magnetic>
        </Reveal>
        <Reveal className="contact-meta" delay={0.5}>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href="tel:+917558684160">+91 75586 84160</a>
        </Reveal>

        <motion.div
          className="contact-row"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ staggerChildren: 0.08 }}
        >
          {[{ me: true }, ...socials].map((s) => (
            <motion.div
              key={s.me ? "me" : s.label}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
            >
              {s.me ? (
                <a href="#top" className="me">
                  <img src={avatar} alt="" />
                  Sharwil Bhende
                </a>
              ) : (
                <a className="pill" href={s.href} {...ext(s.external)}>
                  <s.Icon />
                  {s.label}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>
      <p className="foot">© {new Date().getFullYear()} Sharwil Bhende. Build · Learn · Impact.</p>
    </>
  );
}
