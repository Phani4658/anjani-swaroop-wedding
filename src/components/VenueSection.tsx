import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TempleDivider from "./TempleDivider";

const VenueSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [80, -30]);
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -15]);

  return (
    <section ref={ref} className="py-10 md:py-14 bg-background relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <motion.div style={{ y: headingY }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <p className="font-body text-temple-gold text-lg tracking-[0.4em] uppercase mb-2">
              Where It All Happens
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-primary">
              The Venue
            </h2>
            <TempleDivider className="max-w-xs mx-auto" />
          </motion.div>
        </motion.div>

        <motion.div style={{ y: cardY }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 gradient-parchment rounded-lg shadow-temple temple-border overflow-hidden"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="p-8 md:p-12">
              <div className="text-4xl mb-4">🛕</div>
               <h3 className="font-heading text-2xl md:text-3xl text-primary mb-2">
                PSR Convention Kalyana Mandapamu
               </h3>
               <p className="font-body text-muted-foreground text-lg mb-1">
                Nellore
               </p>
               <p className="font-body text-muted-foreground text-lg mb-6">
                Andhra Pradesh
               </p>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: "🪷", label: "Muhurtham", value: "9:15 AM" },
                  { icon: "📅", label: "Pelli", value: "March 8, 2026" },
                  { icon: "🍽️", label: "Reception", value: "March 7, 8 PM" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-background/50 rounded-lg p-4 border border-temple-gold/20"
                  >
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <p className="font-body text-muted-foreground text-sm uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="font-heading text-primary text-lg">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Map embed */}
              <div className="rounded-lg overflow-hidden border border-temple-gold/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.0!2d80.001606!3d14.4276861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf33dc78c4593%3A0x96f5b739405588b7!2sPSR+Convention!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PSR Convention Kalyana Mandapamu, Nellore"
                />
              </div>

              {/* Get Directions inside the card */}
              <a
                href="https://maps.app.goo.gl/m5JHEpgm8GR8MQ4g7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-temple-gold text-maroon-deep font-heading text-lg rounded-full shadow-gold hover:scale-105 active:scale-95 transition-transform"
              >
                📍 Get Directions
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default VenueSection;
