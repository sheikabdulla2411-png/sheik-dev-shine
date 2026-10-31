import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "SEO", href: "#seo" },
  { label: "Blog", href: "https://seotipsforbeginners2026.blogspot.com", external: true },
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card border-b border-border/30 py-3" : "py-5 bg-transparent"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="font-heading text-xl font-bold glow-text">SA</a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" className="md:hidden text-foreground min-h-11 min-w-11 flex items-center justify-center -mr-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden glass-card mx-4 mt-2 p-4 rounded-xl flex flex-col gap-1">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} onClick={() => setOpen(false)} className="text-base text-muted-foreground hover:text-primary transition-colors py-3 px-1 min-h-11 flex items-center">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
