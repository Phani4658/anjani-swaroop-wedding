import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import heroTemple from "@/assets/hero-temple.jpg";

const IMAGE_SRCS = [
  heroTemple,
  "/image1.jpeg",
  "/image2.jpeg",
  "/image3.jpeg",
  "/image4.jpeg",
  "/image5.jpg",
];

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let loaded = 0;
    const total = IMAGE_SRCS.length;
    const minDelay = new Promise<void>((res) => setTimeout(res, 2500));

    const imagesDone = new Promise<void>((res) => {
      IMAGE_SRCS.forEach((src) => {
        const img = new Image();
        img.onload = img.onerror = () => {
          loaded += 1;
          if (loaded >= total) res();
        };
        img.src = src;
      });
    });

    Promise.all([minDelay, imagesDone]).then(() => setVisible(false));
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-maroon-deep overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }}
        >
          {/* Radial gold glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, hsl(43 80% 45% / 0.15), transparent 70%)",
            }}
          />

          {/* Top decorative border */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: "var(--gradient-gold)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Bottom decorative border */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ background: "var(--gradient-gold)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Corner diyas */}
          {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map((pos, i) => (
            <motion.span
              key={i}
              className={`absolute ${pos} text-2xl animate-diya-glow inline-block rounded-full`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              🪔
            </motion.span>
          ))}

          {/* Logo */}
          <motion.img
            src="/logo.png"
            alt="Anjani & Swaroop"
            className="w-40 md:w-52 mb-8 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Gold divider */}
          <motion.div
            className="w-48 h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Hashtag */}
          <motion.p
            className="animate-gold-shimmer font-heading text-4xl md:text-5xl tracking-[0.3em] mb-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            #SWAN
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="font-body text-primary-foreground/50 text-sm tracking-[0.2em] uppercase mt-2 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Swaroop Weds Anjani
          </motion.p>

          {/* Loading dots */}
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-temple-gold/60 inline-block"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
