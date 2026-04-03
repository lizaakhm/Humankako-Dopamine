import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import humankakoLogo from "@/assets/humankako-logo.jpg";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Products", href: "#products" },
  { label: "Story", href: "#story" },
  { label: "Experience", href: "#experience" },
  { label: "Shop", href: "#shop" },
  { label: "Community", href: "#community" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="container flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-3">
          <img src={humankakoLogo} alt="HumanKako" className="w-10 h-10 rounded-full border-2 border-primary object-cover" />
          <span className="font-display text-3xl tracking-wider text-primary text-glow-yellow">DOPAMINE</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
          {/* <a
            href="#shop"
            className="gradient-cta text-primary-foreground px-5 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform"
          >
            Buy Now
          </a> */}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-display tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
