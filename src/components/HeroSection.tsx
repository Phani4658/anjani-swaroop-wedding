import { motion } from "framer-motion";
import FallingPetals from "./FallingPetals";
import heroTemple from "@/assets/hero-temple.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroTemple}
          alt="South Indian Temple Gopuram at sunrise"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/60 via-maroon/40 to-maroon-deep/80" />
      </div>

      <FallingPetals />

      {/* Swinging bells */}
      <div className="absolute top-6 left-10 md:left-20 text-4xl md:text-5xl animate-bell-swing z-20 opacity-70">
        🔔
      </div>
      <div className="absolute top-8 right-10 md:right-20 text-3xl md:text-4xl animate-bell-swing z-20 opacity-70">
        🔔
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
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
          className="mb-6">

          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-tight">Anjani</h1>
          <div className="temple-divider my-3 max-w-xs mx-auto">
            <span className="text-temple-gold-light text-sm tracking-[0.5em] font-body">&</span>
          </div>
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-tight">Swaroop</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10">

          <div className="animate-diya-glow inline-block px-8 py-3 rounded-full border border-temple-gold/50 bg-maroon-deep/80">
            <p className="font-heading text-temple-gold-light text-lg md:text-xl tracking-wider">March 08, 2026</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5">
          <p className="animate-gold-shimmer font-heading text-2xl md:text-3xl tracking-[0.2em]">
            #SWAN
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>

        <div className="w-6 h-10 rounded-full border-2 border-temple-gold/50 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-temple-gold/70" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
