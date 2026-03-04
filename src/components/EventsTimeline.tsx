import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TempleDivider from "./TempleDivider";

const events = [
  {
    icon: "🪷",
    title: "Pradhanam",
    subtitle: "Sacred Rituals",
    date: "March 7, 2026",
    time: "5:00 PM",
    description: "The auspicious pre-wedding rituals and prayers seeking divine blessings",
  },
  {
    icon: "💐",
    title: "Reception",
    subtitle: "Wedding Reception",
    date: "March 7, 2026",
    time: "8:00 PM",
    description: "Grand reception dinner celebrating the couple at PSR Convention Kalyana Mandapamu",
  },
  {
    icon: "🔔",
    title: "Pelli",
    subtitle: "Wedding Ceremony",
    date: "March 8, 2026",
    time: "8:00 AM – 10:00 AM",
    description: "The sacred wedding ceremony (Shubh Muhurat: 9:15 AM – 9:19 AM)",
  },
];

const EventsTimeline = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-10 md:py-14 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 gradient-temple" style={{ y: bgY, scaleY: 1.3 }} />

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-temple-gold-light/70 text-lg tracking-[0.4em] uppercase mb-2">
            Celebrate With Us
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground">
            Wedding Events
          </h2>
          <TempleDivider className="max-w-xs mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-temple-gold/10 hidden md:block">
            <motion.div className="w-full bg-temple-gold/40 origin-top" style={{ height: lineHeight }} />
          </div>

          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 60, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-maroon-deep/60 backdrop-blur-sm border border-temple-gold/20 rounded-lg p-6 shadow-temple">
                    <div className="text-3xl mb-2">{event.icon}</div>
                    <h3 className="font-heading text-xl md:text-2xl text-temple-gold-light">
                      {event.title}
                    </h3>
                    <p className="font-body text-primary-foreground/60 text-sm uppercase tracking-wider">
                      {event.subtitle}
                    </p>
                    <div className="mt-3 space-y-1">
                      <p className="font-body text-primary-foreground/90 text-base">
                        📅 {event.date}
                      </p>
                      <p className="font-body text-temple-gold text-base font-semibold">
                        🕐 {event.time}
                      </p>
                    </div>
                    <p className="font-body text-primary-foreground/70 text-sm mt-3 italic">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-temple-gold animate-diya-glow z-10 shrink-0" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;
