import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FallingPetals from "./FallingPetals";
import heroTemple from "@/assets/hero-temple.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale, willChange: 'transform' }}>
        <img
          src={heroTemple}
          alt="South Indian Temple Gopuram at sunrise"
          className="w-full h-full object-cover"
          style={{ transform: 'translateZ(0)' }} />

        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/60 via-maroon/40 to-maroon-deep/80" />
      </motion.div>

      <FallingPetals />

      {/* Swinging bells */}
      <motion.div style={{ opacity }} className="absolute top-6 left-10 md:left-20 text-4xl md:text-5xl animate-bell-swing z-20 opacity-70">
        🔔
      </motion.div>
      <motion.div style={{ opacity }} className="absolute top-8 right-10 md:right-20 text-3xl md:text-4xl animate-bell-swing z-20 opacity-70">
        🔔
      </motion.div>

      {/* Parallax Content */}
      <motion.div className="relative z-20 text-center px-4 max-w-4xl" style={{ y: contentY, opacity, willChange: 'transform, opacity' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>

          <p className="font-body text-temple-gold-light text-lg md:text-xl tracking-[0.3em] uppercase mb-4">
            Shubh Vivah
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
          style={{ willChange: 'transform, opacity' }}>

          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-tight">Anjani

          </h1>
          <div className="temple-divider my-3 max-w-xs mx-auto">
            <span className="text-temple-gold-light text-sm tracking-[0.5em] font-body">&</span>
          </div>
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-tight">Swaroop

          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}>

          <p className="font-body text-primary-foreground/80 text-lg md:text-xl italic mb-2">
            "సర్వే జనాః సుఖినో భవంతు"
          </p>
          <p className="font-body text-temple-gold-light/70 text-sm md:text-base">
            May all beings be happy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
          style={{ willChange: 'opacity' }}>

          <div className="animate-diya-glow inline-block px-8 py-3 rounded-full border border-temple-gold/50 bg-maroon-deep/50 backdrop-blur-sm">
            <p className="font-heading text-temple-gold-light text-lg md:text-xl tracking-wider">March 08, 2026

            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{ opacity, willChange: 'transform' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] }}>

        <div className="w-6 h-10 rounded-full border-2 border-temple-gold/50 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-temple-gold/70" />
        </div>
      </motion.div>
    </section>);

};

export default HeroSection;