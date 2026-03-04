import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: "jasmine" | "marigold";
}

const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return; // skip petals on mobile entirely
    const count = 6;
    const generated: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 8 + Math.random() * 14,
      type: Math.random() > 0.5 ? "jasmine" : "marigold",
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: petal.size,
            height: petal.size,
            transform: 'translateZ(0)',
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                petal.type === "jasmine"
                  ? "radial-gradient(circle, #fff9e6, #fff3cc)"
                  : "radial-gradient(circle, #ff9933, #ff6600)",
              opacity: 0.8,
              borderRadius: petal.type === "jasmine" ? "50% 50% 50% 0" : "50%",
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden' as const,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;
