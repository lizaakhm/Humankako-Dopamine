import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import dopamineCan from "@/assets/dopamine-can.png";

const products = [
  { name: "Single Can", price: "₾4.99", desc: "Try it out", badge: null },
  { name: "6-Pack", price: "₾24.99", desc: "Save 15%", badge: "POPULAR" },
  { name: "12-Pack", price: "₾44.99", desc: "Save 25%", badge: "BEST VALUE" },
  { name: "24-Pack", price: "₾79.99", desc: "Ultimate bundle", badge: "BULK" },
];

const ShopSection = () => {
  return (
    <section id="shop" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl sm:text-6xl text-primary text-glow-yellow mb-4">
            GET YOURS
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Free shipping on orders over ₾50. No cap.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="gradient-card border border-border/50 rounded-2xl p-6 text-center relative group hover:border-primary/40 transition-colors"
            >
              {p.badge && (
                <span className="absolute top-4 right-4 gradient-cta text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {p.badge}
                </span>
              )}
              <img src={dopamineCan} alt={p.name} className="h-32 mx-auto mb-4 group-hover:scale-105 transition-transform" />
              <h3 className="font-display text-xl text-foreground mb-1">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <p className="font-display text-3xl text-primary mb-4">{p.price}</p>
              <button className="w-full gradient-cta text-primary-foreground py-3 rounded-xl font-bold uppercase tracking-wider hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
