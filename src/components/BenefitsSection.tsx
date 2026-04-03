import { motion } from "framer-motion";
import { Zap, Brain, Battery } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "PURE ENERGY",
    description: "32mg/100ml of natural caffeine to ignite your grind. incredible power.",
    color: "text-primary",
    glow: "text-glow-yellow",
  },
  {
    icon: Brain,
    title: "LASER FOCUS",
    description: "C,B3,B5,B6,B2,Mg -vitamins for crystal clear concentration when you need it most.",
    color: "text-neon-purple",
    glow: "text-glow-purple",
  },
  {
    icon: Battery,
    title: "NO CRASH",
    description: "energy that lasts for hours. No regrets.",
    color: "text-neon-green",
    glow: "",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-purple to-background" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl sm:text-6xl text-primary text-glow-yellow mb-4">
            WHY DOPAMINE?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Not just another energy drink. It's a state of mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="gradient-card border border-border/50 rounded-2xl p-8 text-center hover:border-neon-purple/50 transition-all duration-500 group"
            >
              <div className={`inline-flex p-4 rounded-xl bg-muted mb-6 ${b.color} group-hover:scale-110 transition-transform`}>
                <b.icon size={32} />
              </div>
              <h3 className={`font-display text-2xl tracking-wider mb-3 ${b.color} ${b.glow}`}>
                {b.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
