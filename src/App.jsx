import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig, motion, useScroll, useSpring, useTransform } from "motion/react";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import Journey from "./components/Journey";
import Toolkit from "./components/Toolkit";
import Contact from "./components/Contact";

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    });

    // Route in-page anchor links through Lenis so they glide instead of jump.
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -24, duration: 1.4 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
}

/** Grayscale clouds (a static image) that move at a slower rate than the page. */
function Sky() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  return (
    <div className="sky" aria-hidden="true">
      <motion.div className="sky-layer" style={{ y }} />
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div className="progress" style={{ scaleX }} />;
}

export default function App() {
  useSmoothScroll();
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Sky />
      <Hero />
      <Work />
      <Services />
      <Journey />
      <Toolkit />
      <Contact />
    </MotionConfig>
  );
}
