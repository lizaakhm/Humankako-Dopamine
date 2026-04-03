const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-3xl text-primary text-glow-yellow">DOPAMINE</p>
            <p className="text-muted-foreground text-sm mt-1">Energy for the fearless. By HumanKako.</p>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-muted-foreground text-xs">© 2026 Dopamine Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
