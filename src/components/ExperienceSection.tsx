import { useState } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const ExperienceSection = () => {
  const [energy, setEnergy] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setEnergy((prev) => Math.min(prev + 8, 100));
    setClickCount((prev) => prev + 1);
  };

  const getLevel = () => {
    if (energy < 25) return { label: "😴 LOW ENERGY", color: "text-muted-foreground" };
    if (energy < 50) return { label: "⚡ WARMING UP", color: "text-neon-blue" };
    if (energy < 75) return { label: "🔥 ON FIRE", color: "text-primary" };
    return { label: "💥 DOPAMINE RUSH!", color: "text-neon-green" };
  };

  const level = getLevel();

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-purple to-background" />
      
      {/* Ambient particles based on energy */}
      {energy > 50 && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: Math.floor(energy / 10) }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary"
              initial={{ x: Math.random() * 100 + "%", y: "100%" }}
              animate={{ y: "-10%", opacity: [0, 1, 0] }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </div>
      )}

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl sm:text-6xl text-primary text-glow-yellow mb-4">
            ENERGY TEST
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-12">
            How much Dopamine can you handle? Tap the button to find out.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          {/* Energy bar */}
          <div className="relative h-8 bg-muted rounded-full overflow-hidden mb-6 border border-border">
            <motion.div
              className="absolute inset-y-0 left-0 gradient-cta rounded-full"
              animate={{ width: `${energy}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          <p className={`font-display text-3xl mb-2 ${level.color}`}>{level.label}</p>
          <p className="text-muted-foreground text-sm mb-8">{clickCount} taps • {energy}% charged</p>

          {/* Tap button */}
          <motion.button
            onClick={handleClick}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className={`relative w-40 h-40 rounded-full font-display text-3xl tracking-wider transition-all duration-300 ${
              energy >= 100
                ? "bg-neon-green text-primary-foreground box-glow-yellow"
                : "gradient-cta text-primary-foreground box-glow-yellow"
            }`}
          >
            <Zap className="inline-block mr-1" size={28} />
            TAP
          </motion.button>

          {energy >= 100 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8"
            >
              <p className="font-display text-4xl text-primary text-glow-yellow mb-2">
                🎉 MAXIMUM DOPAMINE!
              </p>
              <p className="text-muted-foreground">You're officially unstoppable.</p>
              <button
                onClick={() => { setEnergy(0); setClickCount(0); }}
                className="mt-4 text-neon-purple underline hover:no-underline"
              >
                Reset & go again
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
