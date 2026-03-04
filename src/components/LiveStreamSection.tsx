import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TempleDivider from "./TempleDivider";

// Replace YOUTUBE_VIDEO_ID with your actual YouTube live stream video ID
// e.g. for https://www.youtube.com/watch?v=abc123, the ID is "abc123"
const YOUTUBE_VIDEO_ID = "YOUR_YOUTUBE_VIDEO_ID";

const LiveStreamSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={ref} className="py-10 md:py-14 relative overflow-hidden">
      <motion.div className="absolute inset-0 gradient-temple" style={{ y: bgY, scaleY: 1.4 }} />

      <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-temple-gold-light/70 text-lg tracking-[0.4em] uppercase mb-2">
            Witness The Ceremony
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground">
            Live Stream
          </h2>
          <TempleDivider className="max-w-xs mx-auto" />
          <p className="font-body text-primary-foreground/70 text-base md:text-lg mt-4 mb-10">
            Can't join us in person? Watch the ceremony live from wherever you are.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border-2 border-temple-gold/30 shadow-2xl bg-maroon-deep/60 backdrop-blur-sm"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=0&rel=0`}
              title="Anjani & Swaroop Wedding Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="px-6 py-4 flex items-center justify-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <p className="font-body text-temple-gold-light text-sm tracking-wider uppercase">
              Live on March 07, 2026
            </p>
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveStreamSection;
