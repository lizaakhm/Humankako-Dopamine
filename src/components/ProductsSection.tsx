import { motion } from "framer-motion";
import dopamineCan from "@/assets/dopamine-can.png";

const flavors = [
  { name: "DOPAMINE", tagline: "NIKORA", color: "from-neon-purple to-accent", price: "₾3.90" },
  { name: "DOPAMINE", tagline: "NIKORA & LIBRE", color: "from-primary to-neon-green", price: "₾3.90" },
  { name: "DOPAMINE", tagline: "LIBRE", color: "from-neon-blue to-neon-purple", price: "3.90" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl sm:text-6xl text-primary text-glow-yellow mb-4">
            PICK YOUR POISON
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
           One mission. Unlimited energy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {flavors.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="gradient-card border border-border/50 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className={`relative h-64 bg-gradient-to-br ${f.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-background/40" />
                <motion.img
                  src={dopamineCan}
                  alt={`Dopamine ${f.name}`}
                  className="relative z-10 h-48 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl tracking-wider text-foreground mb-1">{f.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{f.tagline}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-primary">{f.price}</span>
                  {/* <button className="gradient-cta text-primary-foreground px-5 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform">
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nutrition facts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 gradient-card border border-border/50 rounded-2xl p-8"
        >
          <h3 className="font-display text-3xl text-primary mb-6 text-center">NUTRITION FACTS</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: "Calories", value: "100kcal" },
              { label: "Caffeine", value: "80mg" },
              { label: "Sugar", value: "25g" },
              { label: "B-Vitamins", value: "100% " },
            ].map((n) => (
              <div key={n.label} className="p-4">
                <p className="font-display text-4xl text-neon-purple text-glow-purple">{n.value}</p>
                <p className="text-muted-foreground text-sm mt-1 uppercase tracking-wider">{n.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
