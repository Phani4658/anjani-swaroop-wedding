import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TempleDivider from "./TempleDivider";

const AnnouncementSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [60, -20]);

  return (
    <section ref={ref} className="py-10 md:py-14 bg-background relative overflow-hidden">

      <motion.div className="container max-w-3xl mx-auto px-4 text-center" style={{ y: contentY }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>

          <p className="text-temple-gold font-body text-lg tracking-[0.4em] uppercase mb-2">
            🙏 With the blessings of the Almighty 🙏
          </p>

          <h2 className="font-heading text-3xl md:text-5xl text-primary mt-6 mb-8">
            Wedding Invitation
          </h2>

          <TempleDivider />

          <div className="my-10 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="gradient-parchment rounded-lg p-6 shadow-temple temple-border">

              <p className="font-body text-muted-foreground text-base uppercase tracking-wider mb-2">
                Daughter of
              </p>
              <p className="font-heading text-xl md:text-2xl text-primary">Sri Kurapati Venkata Rammohan rao

              </p>
              <p className="font-body text-foreground text-lg">& Smt. Aruna Devi

              </p>
              <p className="font-script text-3xl md:text-4xl text-temple-gold mt-3">Anjani Rajeswari

              </p>
            </motion.div>

            <div className="text-4xl text-temple-gold">✦</div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="gradient-parchment rounded-lg p-6 shadow-temple temple-border">

              <p className="font-body text-muted-foreground text-base uppercase tracking-wider mb-2">
                Son of
              </p>
              <p className="font-heading text-xl md:text-2xl text-primary">Sri Rachaputi Gangadhar Rao

              </p>
              <p className="font-body text-foreground text-lg">& Smt. Sailaja

              </p>
              <p className="font-script text-3xl md:text-4xl text-temple-gold mt-3">Jyothi Swaroop

              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-muted-foreground text-lg italic mt-8">

            Request the pleasure of your gracious presence at the wedding ceremony of their beloved children
          </motion.p>
        </motion.div>
      </motion.div>
    </section>);

};

export default AnnouncementSection;