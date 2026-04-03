import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-purple to-background" />
      <div className="container relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-5xl sm:text-6xl text-primary text-glow-yellow mb-4">
            HIT US UP
          </h2>
          <p className="text-muted-foreground">
            Collabs, questions, or just want to say what's up? We're here.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="gradient-card border border-primary/30 rounded-2xl p-12 text-center"
          >
            <p className="font-display text-4xl text-primary text-glow-yellow mb-3">SENT! 🚀</p>
            <p className="text-muted-foreground">We'll get back to you faster than a Dopamine rush.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="gradient-card border border-border/50 rounded-2xl p-8 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider block mb-2">Name</label>
                <input
                  required
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider block mb-2">Email</label>
                <input
                  required
                  type="email"
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider block mb-2">Message</label>
              <textarea
                required
                rows={5}
                className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-cta text-primary-foreground py-4 rounded-xl font-bold text-lg uppercase tracking-wider hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
