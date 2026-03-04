import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import TempleDivider from "./TempleDivider";

const RSVPSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const formY = useTransform(scrollYProgress, [0, 1], [60, -20]);

  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    attending: "yes",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowFireworks(true);
    setTimeout(() => {
      setSubmitted(true);
      setShowFireworks(false);
    }, 2000);
  };

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 gradient-temple" style={{ y: bgY, scaleY: 1.4 }} />

      {/* Fireworks animation */}
      {showFireworks && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="text-6xl md:text-8xl animate-bounce">🎆</div>
          <div className="text-5xl md:text-7xl animate-ping absolute">✨</div>
          <div className="text-4xl md:text-6xl animate-pulse absolute top-1/3 left-1/4">🎇</div>
          <div className="text-4xl md:text-6xl animate-pulse absolute top-1/3 right-1/4">🎇</div>
        </div>
      )}

      <div className="container max-w-2xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-temple-gold-light/70 text-lg tracking-[0.4em] uppercase mb-2">
            We'd Love Your Presence
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground">
            RSVP
          </h2>
          <TempleDivider className="max-w-xs mx-auto" />
        </motion.div>

        <motion.div style={{ y: formY }}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 bg-maroon-deep/60 backdrop-blur-sm border border-temple-gold/30 rounded-lg p-10"
            >
              <div className="text-5xl mb-4">🙏</div>
              <h3 className="font-heading text-2xl text-temple-gold-light mb-2">
                Thank You!
              </h3>
              <p className="font-body text-primary-foreground/80 text-lg">
                Your presence will make our special day even more auspicious.
                We look forward to celebrating with you!
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="mt-12 bg-maroon-deep/60 backdrop-blur-sm border border-temple-gold/20 rounded-lg p-8 md:p-10 text-left space-y-6"
            >
              <div className="text-center mb-4">
                <p className="font-body text-temple-gold-light/60 text-sm italic">
                  ~ Kindly inscribe your attendance ~
                </p>
              </div>

              <div>
                <label className="font-body text-temple-gold-light text-sm uppercase tracking-wider block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-maroon-deep/50 border border-temple-gold/30 rounded-lg px-4 py-3 font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-temple-gold/60 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-temple-gold-light text-sm uppercase tracking-wider block mb-2">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-maroon-deep/50 border border-temple-gold/30 rounded-lg px-4 py-3 font-body text-primary-foreground focus:outline-none focus:border-temple-gold/60 transition-colors"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n} className="bg-maroon-deep text-primary-foreground">
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-body text-temple-gold-light text-sm uppercase tracking-wider block mb-2">
                    Will You Attend?
                  </label>
                  <select
                    value={formData.attending}
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                    className="w-full bg-maroon-deep/50 border border-temple-gold/30 rounded-lg px-4 py-3 font-body text-primary-foreground focus:outline-none focus:border-temple-gold/60 transition-colors"
                  >
                    <option value="yes" className="bg-maroon-deep">Joyfully Accepting</option>
                    <option value="no" className="bg-maroon-deep">Regretfully Declining</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-body text-temple-gold-light text-sm uppercase tracking-wider block mb-2">
                  Blessings & Wishes
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full bg-maroon-deep/50 border border-temple-gold/30 rounded-lg px-4 py-3 font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-temple-gold/60 transition-colors resize-none"
                  placeholder="Share your blessings for the couple..."
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-temple-gold text-maroon-deep font-heading text-lg rounded-full shadow-gold hover:scale-105 active:scale-95 transition-transform"
                >
                  <span>🪷</span>
                  Send Blessings
                  <span>🪷</span>
                </button>
              </div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;
