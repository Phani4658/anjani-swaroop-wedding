import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-10 bg-maroon-deep text-center relative overflow-hidden">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-3xl mb-4">🪔</div>
          <p className="font-script text-4xl md:text-5xl text-temple-gold-light mb-4">
            Anjani & Swaroop
          </p>
          <p className="font-body text-primary-foreground/60 text-lg mb-6">
            March 8, 2026 • Nellore, Andhra Pradesh
          </p>

          <div className="temple-divider max-w-xs mx-auto mb-6">
            <span className="text-xs">✦</span>
          </div>

          <p className="font-body text-primary-foreground/50 text-sm tracking-widest uppercase mb-1">
            Share your blessings & memories
          </p>
          <p className="animate-gold-shimmer font-heading text-3xl md:text-4xl tracking-[0.2em] mb-6">
            #SWAN
          </p>

          <div className="temple-divider max-w-xs mx-auto mb-6">
            <span className="text-xs">✦</span>
          </div>

          <p className="font-body text-primary-foreground/40 text-sm italic">
            "ధర్మేచ అర్థేచ కామేచ నాతిచరామి"
          </p>
          <p className="font-body text-primary-foreground/30 text-xs mt-1">
            In Dharma, Artha, and Kama, I shall never forsake you
          </p>

          <div className="mt-8 flex justify-center gap-3 text-2xl">
            <span className="animate-diya-glow inline-block rounded-full p-2">🪔</span>
            <span>🌺</span>
            <span className="animate-diya-glow inline-block rounded-full p-2">🪔</span>
          </div>

          <div className="mt-10 pt-8 border-t border-temple-gold/20">
            <p className="font-body text-temple-gold-light text-sm md:text-base mb-3 font-medium">
              Invited by Sri Lakshmi Lavanya Jewellery and Sri Lakshmi Lavanya Gold Palace
            </p>
            <p className="font-body text-primary-foreground/60 text-sm md:text-base">
              Created by{" "}
              <a 
                href="https://www.instagram.com/snap.celebrate/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-temple-gold hover:text-temple-gold-light transition-colors font-medium underline decoration-temple-gold/30 hover:decoration-temple-gold-light"
              >
                @snap.celebrate
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
