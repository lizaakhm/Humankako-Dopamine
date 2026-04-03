import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much caffeine does Dopamine contain?",
    a: "Each can contains 80mg of natural caffeine — about the same as one cup of coffee. Enough to power your whole afternoon.",
  },
  // {
  //   q: "Is Dopamine sugar-free?",
  //   a: "Yes! Zero sugar, zero artificial sweeteners. Just 10 calories per can. All the energy, none of the guilt.",
  // },
  {
    q: "Where can I buy Dopamine?",
    a: "Available at Libre and Nikora supermarkets.",
  },
  {
    q: "Who is HumanKako?",
    a: "HumanKako is a man full of dopamine, he is one of Georgia's biggest YouTubers — a creator, entertainer, and now the founder of Dopamine Energy. He built this brand to share his energy with the world.",
  },
  {
    q: "Can I collaborate with Dopamine?",
    a: "Absolutely! We love working with creators, athletes, and anyone who vibes with the brand. Hit us up.",
  },
  // {
  //   q: "Do you ship internationally?",
  //   a: "Currently we ship within Georgia. International shipping is coming soon — join our community to be the first to know!",
  // },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl sm:text-6xl text-primary text-glow-yellow mb-4">
            GOT QUESTIONS?
          </h2>
          <p className="text-muted-foreground">We've got answers. Probably.</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="gradient-card border border-border/50 rounded-xl px-6 data-[state=open]:border-neon-purple/40"
            >
              <AccordionTrigger className="font-display text-lg tracking-wider text-foreground hover:text-primary hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
