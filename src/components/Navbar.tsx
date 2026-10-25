import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md py-4" : "py-6 bg-transparent"
        }`}
        style={scrolled ? { background: "rgba(11, 26, 26, 0.75)" } : undefined}
      >
        <div className="container-editorial flex items-center justify-between">
          <a href="#top" className="font-heading text-2xl font-bold text-primary" aria-label="Sheik Abdulla — home">
            SA
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover-underline text-sm text-foreground/90 transition-colors duration-300 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <span className="pill-badge">
              <span className="mint-dot" />
              Open to Freelance
            </span>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="md:hidden text-foreground min-h-11 min-w-11 flex items-center justify-center"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] md:hidden flex flex-col"
            style={{ background: "#0b1a1a" }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="container-editorial flex items-center justify-between py-6">
              <span className="font-heading text-2xl font-bold text-primary">SA</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-foreground min-h-11 min-w-11 flex items-center justify-center"
              >
                <X size={26} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-2 px-8">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="font-heading font-bold text-4xl py-3 text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <span className="pill-badge mt-6">
                <span className="mint-dot" />
                Open to Freelance
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
