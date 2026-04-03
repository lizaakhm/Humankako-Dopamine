import { motion } from "framer-motion";
import { Youtube, Instagram } from "lucide-react";
import heroImg from "@/assets/dopamine-hero.jpg";

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-purple to-background" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl sm:text-6xl text-primary text-glow-yellow mb-4">
            JOIN THE RUSH
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Be part of the Dopamine movement. Share your rush with <span className="text-neon-purple font-bold">#DopamineRush</span>
          </p>
        </motion.div>

        {/* Social grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-card border border-border/50 rounded-2xl overflow-hidden group"
          >
            <img src={heroImg} alt="Dopamine Community" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-4">
              <p className="text-muted-foreground text-sm">@humankako • 2.4M views</p>
              <p className="text-foreground font-medium mt-1">The moment I created DOPAMINE 🔥</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="gradient-card border border-border/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center"
          >
            <p className="font-display text-7xl text-primary text-glow-yellow mb-2">1k+</p>
            <p className="text-muted-foreground uppercase tracking-wider text-sm">Cans Sold</p>
            <div className="w-16 h-0.5 bg-neon-purple/50 my-6" />
            <p className="font-display text-7xl text-neon-purple text-glow-purple mb-2">2K+</p>
            <p className="text-muted-foreground uppercase tracking-wider text-sm">Community Members</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="gradient-card border border-border/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center"
          >
            <p className="font-display text-3xl text-foreground mb-6">#DopamineRush</p>
            <p className="text-muted-foreground mb-8">Post your Dopamine moments and get featured!</p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@HumanKako" className="p-3 rounded-xl bg-muted hover:bg-neon-purple/20 text-neon-purple transition-colors">
                <Youtube size={28} />
              </a>
              <a href="https://www.instagram.com/dopamine.energy/" className="p-3 rounded-xl bg-muted hover:bg-primary/20 text-primary transition-colors">
                <Instagram size={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
