import { motion } from "framer-motion";

interface TempleDividerProps {
  className?: string;
  dark?: boolean;
}

const TempleDivider = ({ className = "" }: TempleDividerProps) => (
  <motion.div
    className={`temple-divider py-4 ${className}`}
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <span className="text-xl">✦</span>
    <span className="text-2xl">🪔</span>
    <span className="text-xl">✦</span>
  </motion.div>
);

export default TempleDivider;
