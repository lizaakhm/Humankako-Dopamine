import { motion } from "framer-motion";
import dopamineCan from "@/assets/dopamine-can.png";
import RedBullCan from "@/assets/RedBull-can.png";
import path from "path";



type Callout = { label: string; side: "left" | "right"; top: string; delay: number };

const redbullCallouts: Callout[] = [
  { label: "115 Calories", side: "left", top: "10%", delay: 0 },
  { label: "11g Sugar / 100ml", side: "left", top: "30%", delay: 0.1 },
  { label: "Vitamin B Only", side: "left", top: "50%", delay: 0.2 },
  { label: "No Magnesium", side: "left", top: "70%", delay: 0.3 },
  { label: "No Guarana", side: "right", top: "20%", delay: 0.15 },
  { label: "₾4.99", side: "right", top: "55%", delay: 0.25 },
];

const dopamineCallouts: Callout[] = [
  { label: "100 Calories", side: "right", top: "10%", delay: 0 },
  { label: "10g Sugar / 100ml", side: "right", top: "30%", delay: 0.1 },
  { label: "Vitamins B & C", side: "right", top: "50%", delay: 0.2 },
  { label: "With Magnesium ✓", side: "right", top: "70%", delay: 0.3 },
  { label: "Guarana Extract ✓", side: "left", top: "20%", delay: 0.15 },
  { label: "₾3.95", side: "left", top: "55%", delay: 0.25 },
];

const FloatingLabel = ({
  label,
  side,
  top,
  delay,
  variant = "default",
}: {
  label: string;
  side: "left" | "right";
  top: string;
  delay: number;
  variant?: "default" | "winner";
}) => {
  const isLeft = side === "left";
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.3, duration: 0.5 }}
      className={`absolute ${isLeft ? "-left-4 sm:-left-8 lg:-left-36" : "-right-4 sm:-right-8 lg:-right-36"} hidden sm:flex items-center gap-2`}
      style={{ top }}
    >
      {isLeft && (
        <span
          className={`text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap px-3 py-1.5 rounded-lg border backdrop-blur-sm ${
            variant === "winner"
              ? "text-primary border-primary/40 bg-primary/10"
              : "text-muted-foreground border-border/50 bg-muted/30"
          }`}
        >
          {label}
        </span>
      )}
      <div
        className={`w-8 sm:w-12 lg:w-16 h-px ${
          variant === "winner" ? "bg-primary/50" : "bg-muted-foreground/30"
        }`}
      />
      {!isLeft && (
        <span
          className={`text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap px-3 py-1.5 rounded-lg border backdrop-blur-sm ${
            variant === "winner"
              ? "text-primary border-primary/40 bg-primary/10"
              : "text-muted-foreground border-border/50 bg-muted/30"
          }`}
        >
          {label}
        </span>
      )}
    </motion.div>
  );
};

// Mobile-only list for small screens
const MobileStats = ({
  title,
  items,
  variant,
}: {
  title: string;
  items: { label: string }[];
  variant: "default" | "winner";
}) => (
  <div className="sm:hidden mt-4">
    <p className={`font-display text-lg mb-2 ${variant === "winner" ? "text-primary" : "text-muted-foreground"}`}>
      {title}
    </p>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item.label}
          className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
            variant === "winner"
              ? "text-primary border-primary/40 bg-primary/10"
              : "text-muted-foreground border-border/50 bg-muted/30"
          }`}
        >
          {item.label}
        </span>
      ))}
    </div>
  </div>
);

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl sm:text-6xl text-primary text-glow-yellow mb-4">
            WHY DOPAMINE?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            See how Dopamine stacks up against the competition.
          </p>
        </motion.div>

        {/* VS Battle layout */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-center">
          {/* Red Bull side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Floating labels */}
              {redbullCallouts.map((c) => (
                <FloatingLabel key={c.label} {...c} variant="default" />
              ))}

              {/* Glow */}
              <div className="absolute inset-0 bg-neon-blue/10 rounded-full blur-[80px] scale-75" />

              <motion.img
                src={RedBullCan}
                alt="Red Bull Energy Drink"
                className="relative z-10 h-72 sm:h-80 lg:h-[420px] drop-shadow-2xl opacity-70"
                whileHover={{ scale: 1.05, opacity: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-3xl text-muted-foreground mt-6"
            >
              RED BULL
            </motion.p>

            <MobileStats
              title="Stats"
              items={redbullCallouts}
              variant="default"
            />
          </motion.div>

          {/* VS badge - inline between columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-20 h-20 rounded-full gradient-cta flex items-center justify-center box-glow-yellow">
              <span className="font-display text-3xl text-primary-foreground">VS</span>
            </div>
          </motion.div>

          {/* Dopamine side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Floating labels */}
              {dopamineCallouts.map((c) => (
                <FloatingLabel key={c.label} {...c} variant="winner" />
              ))}

              {/* Glow */}
              <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px] scale-75" />
              <div className="absolute inset-0 bg-neon-purple/10 rounded-full blur-[100px] scale-90" />

              <motion.img
                src={dopamineCan}
                alt="Dopamine Energy Drink"
                className="relative z-10 h-72 sm:h-80 lg:h-[420px] drop-shadow-2xl"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-3xl text-primary text-glow-yellow mt-6"
            >
              DOPAMINE
            </motion.p>

            <MobileStats
              title="Stats"
              items={dopamineCallouts}
              variant="winner"
            />
          </motion.div>
        </div>


        {/* Bottom verdict */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-display text-3xl sm:text-4xl text-neon-purple text-glow-purple">
            THE CHOICE IS OBVIOUS
          </p>
          <p className="text-muted-foreground mt-2">Better ingredients. Better price. Better energy.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
