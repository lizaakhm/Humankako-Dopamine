import { motion } from "framer-motion";
import dopamineCan from "@/assets/dopamine-can.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-hero glitch-line overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[128px] pointer-events-none" />

      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-neon-purple font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Energy Redefined
            </p>
            <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl leading-none text-primary text-glow-yellow mb-6">
              FEEL THE<br />DOPAMINE
            </h1>
            <p className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed">
              Dare to be stupid. Dare to feel alive. The energy drink that hits different created by <span className="text-primary font-semibold">HumanKako</span> for those who refuse to slow down.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/dopamine.energy/" target="_blank"
                
                className="gradient-cta text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wider hover:scale-105 transition-transform box-glow-yellow"
              >
                See Now
              </a>
              <a
                  href="https://www.youtube.com/@HumanKako"
  target="_blank"
                className="border-2 border-neon-purple text-neon-purple px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wider hover:bg-neon-purple/10 transition-all box-glow-purple"
              >
                Join the Hype
              </a>
              {/* <a
                href="https://www.youtube.com/@HumanKako"
                className="border border-border text-muted-foreground px-8 py-4 rounded-xl font-medium text-lg hover:text-foreground hover:border-foreground/30 transition-all"
              >
                Join the Hype
              </a> */}
            </div>
          </motion.div>

          {/* Can */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-neon-purple/30 rounded-full blur-[80px] scale-75" />
              <img
                src={dopamineCan}
                alt="Dopamine Energy Drink Can"
                className="relative z-10 w-80 lg:w-[420px] drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse-glow" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
