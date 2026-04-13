import { motion } from "framer-motion";
import teamImg from "@/assets/dopamine-team.jpg";
import video from "../assets/humankako-story.mp4";

const StorySection = () => {
  return (
    <section id="story" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-purple to-background" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl sm:text-6xl text-primary text-glow-yellow mb-4">
            THE STORY
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From YouTube fame to your fridge. Meet the brain behind the brand.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden box-glow-purple">
<div className="flex justify-center">
  <video
    src={video}
    autoPlay
    muted
    loop
    playsInline
    className="w-[700px] h-[650px] object-cover rounded-2xl shadow-2xl"
  />
</div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-3xl text-primary">HUMANKAKO</p>
                <p className="text-muted-foreground">Founder & Creator</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-display text-4xl text-neon-purple text-glow-purple">
              DARE TO BE STUPID
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              It started as a joke. A YouTuber with a dream and way too much caffeine. 
              HumanKako — Georgia's most chaotic content creator — decided the energy drink 
              market needed something different. Something real. Something that doesn't take 
              itself too seriously.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dopamine isn't just a drink. It's a movement. Born from late-night editing sessions, 
              fueled by the creativity of a million subscribers, and crafted for anyone who believes 
              that being yourself is the ultimate superpower.
            </p>
            <p className="text-foreground font-semibold text-lg">
              "I wanted to make something that makes you feel as alive as hitting publish on your best video."
            </p>
            <p className="text-primary font-display text-xl tracking-wider">— HUMANKAKO</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img src={teamImg} alt="Dopamine Team" className="w-full object-cover max-h-96" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="font-display text-4xl text-primary text-glow-yellow">DARE TO BE STUPID</p>
            <p className="text-foreground/80 text-lg">The crew behind the chaos.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
