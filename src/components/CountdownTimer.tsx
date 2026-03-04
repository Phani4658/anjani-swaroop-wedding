import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TempleDivider from "./TempleDivider";

const WEDDING_DATE = new Date("2026-03-08T08:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (): TimeLeft => {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const UnitBlock = ({
  value,
  label,
  delay,
}: {
  value: number;
  label: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    style={{ willChange: "transform, opacity" }}
    className="flex flex-col items-center"
  >
    <div className="relative gradient-parchment rounded-xl shadow-temple temple-border w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 flex items-center justify-center">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="font-heading text-2xl sm:text-3xl md:text-5xl text-primary tabular-nums"
      >
        {String(value).padStart(2, "0")}
      </motion.span>
    </div>
    <p className="font-body text-[10px] sm:text-xs md:text-sm tracking-[0.15em] md:tracking-[0.25em] uppercase text-temple-gold mt-2 md:mt-3">
      {label}
    </p>
  </motion.div>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);
  const isOver = WEDDING_DATE.getTime() <= Date.now();

  useEffect(() => {
    if (isOver) return;
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, [isOver]);

  return (
    <section className="py-14 md:py-20 gradient-parchment relative overflow-hidden">
      {/* Subtle rangoli background ornament */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5"
        aria-hidden
      >
        <span className="text-[18rem] leading-none select-none text-temple-gold">
          ✦
        </span>
      </div>

      <div className="container max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "transform, opacity" }}
        >
          <p className="font-body text-temple-gold text-sm tracking-[0.35em] uppercase mb-3">
            {isOver ? "The Celebration Has Begun" : "Counting Down To"}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-primary">
            March 08, 2026
          </h2>
          <TempleDivider className="max-w-xs mx-auto mt-4 mb-10" />
        </motion.div>

        {isOver ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-script text-4xl md:text-5xl text-temple-gold animate-gold-shimmer"
          >
            Today is the day! 🪷
          </motion.p>
        ) : (
          <div className="flex items-start justify-center gap-2 sm:gap-4 md:gap-8">
            <UnitBlock value={timeLeft.days} label="Days" delay={0.1} />
            <span className="font-heading text-xl sm:text-3xl md:text-5xl text-temple-gold mt-4 sm:mt-6 md:mt-8 select-none">
              :
            </span>
            <UnitBlock value={timeLeft.hours} label="Hours" delay={0.2} />
            <span className="font-heading text-xl sm:text-3xl md:text-5xl text-temple-gold mt-4 sm:mt-6 md:mt-8 select-none">
              :
            </span>
            <UnitBlock value={timeLeft.minutes} label="Minutes" delay={0.3} />
            <span className="font-heading text-xl sm:text-3xl md:text-5xl text-temple-gold mt-4 sm:mt-6 md:mt-8 select-none">
              :
            </span>
            <UnitBlock value={timeLeft.seconds} label="Seconds" delay={0.4} />
          </div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-muted-foreground italic text-base mt-10"
        >
          "శుభస్య శీఘ్రమ్" — May auspicious things happen swiftly
        </motion.p>
      </div>
    </section>
  );
};

export default CountdownTimer;
