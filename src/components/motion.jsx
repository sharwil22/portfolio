import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1];

/** Fades and lifts children into place the first time they scroll into view. */
export function Reveal({ as = "div", delay = 0, y = 40, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Splits text into masked characters (or words) that slide up in sequence. */
export function SplitText({ text, by = "char", delay = 0, stagger = 0.035, inView = false, className }) {
  const parts = by === "char" ? [...text] : text.split(" ");
  const trigger = inView
    ? { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-40px" } }
    : { initial: "hidden", animate: "show" };
  return (
    <motion.span className={className} aria-label={text} {...trigger} style={{ display: "inline-block" }}>
      {parts.map((p, i) => (
        <span className="mask" key={i} aria-hidden="true">
          <motion.span
            variants={{ hidden: { y: "110%" }, show: { y: 0 } }}
            transition={{ duration: 1, ease: EASE, delay: delay + i * stagger }}
          >
            {p === " " ? " " : p}
            {by === "word" && i < parts.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Pulls its child toward the cursor while hovered, then springs back. */
export function Magnetic({ strength = 0.35, children }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.4 });

  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span ref={ref} className="magnetic" style={{ x, y }} onMouseMove={move} onMouseLeave={leave}>
      {children}
    </motion.span>
  );
}

export const Arrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 12 12 4M5 4h7v7" />
  </svg>
);
