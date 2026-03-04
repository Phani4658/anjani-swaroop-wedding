import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import TempleDivider from "./TempleDivider";

const photos = [
  { id: 1, src: "/image1.jpeg", alt: "Anjani & Swaroop Photo 1" },
  { id: 2, src: "/image2.jpeg", alt: "Anjani & Swaroop Photo 2" },
  { id: 3, src: "/image3.jpeg", alt: "Anjani & Swaroop Photo 3" },
  { id: 4, src: "/image4.jpeg", alt: "Anjani & Swaroop Photo 4" },
  { id: 5, src: "/image5.jpg", alt: "Anjani & Swaroop Photo 5" },
];

// Duplicate for seamless infinite loop
const loopedPhotos = [...photos, ...photos, ...photos];

const PhotoGallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let lastTimestamp = 0;
    const scrollSpeed = 1.5; // pixels per frame at 60fps

    const autoScroll = (timestamp: number) => {
      if (!isPausedRef.current && scrollContainer) {
        const deltaTime = timestamp - lastTimestamp;

        if (deltaTime > 0) {
          const oneThird = scrollContainer.scrollWidth / 3;
          scrollContainer.scrollLeft += scrollSpeed * Math.min(deltaTime / 16, 3);

          if (scrollContainer.scrollLeft >= oneThird * 2) {
            scrollContainer.scrollLeft -= oneThird;
          }

          lastTimestamp = timestamp;
        }
      } else {
        // Keep lastTimestamp in sync while paused so there's no jump on resume
        lastTimestamp = timestamp;
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    // Resume on pointer/touch release anywhere on the page
    const resume = () => { isPausedRef.current = false; };
    window.addEventListener("pointerup", resume);
    window.addEventListener("touchend", resume);
    window.addEventListener("touchcancel", resume);

    // Reset timestamp after tab switch to avoid a position jump
    const onVisibilityChange = () => {
      if (!document.hidden) lastTimestamp = 0;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("pointerup", resume);
      window.removeEventListener("touchend", resume);
      window.removeEventListener("touchcancel", resume);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <section className="py-10 md:py-14 bg-background overflow-hidden">
      {/* Section heading */}
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: 'transform, opacity' }}
      >
        <p className="font-body text-temple-gold text-sm tracking-[0.35em] uppercase mb-3">
          Our Moments
        </p>
        <h2 className="font-script text-5xl md:text-6xl text-maroon-deep">
          Anjani &amp; Swaroop
        </h2>
        <TempleDivider className="max-w-xs mx-auto mt-4" />
      </motion.div>

      {/* Horizontal scroll strip */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; }}
        onTouchStart={() => { isPausedRef.current = true; }}
        className="flex gap-5 overflow-x-auto px-8 md:px-16 pb-6"
        style={{ scrollbarWidth: "none", scrollBehavior: "auto" }}
      >
        {loopedPhotos.map((photo, index) => (
          <motion.div
            key={`${photo.id}-${index}`}
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            className="flex-none w-72 md:w-96 relative group cursor-pointer"
            style={{ height: "26rem", willChange: 'transform, opacity' }}
          >
            {/* Glow shadow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-temple-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-95" />

            <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-temple-gold/30 group-hover:border-temple-gold/70 transition-colors duration-400 shadow-lg">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl flex items-end justify-center pb-5">
                <span className="text-2xl">🪷</span>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-temple-gold/60 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-temple-gold/60 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-temple-gold/60 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-temple-gold/60 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
