import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const roles = ["Technical SEO Developer", "Full Stack Developer", "MERN Stack Builder"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto w-full">
        <div className="text-center lg:text-left flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-sm md:text-base mb-4 tracking-widest uppercase"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4"
          >
            <span className="gradient-text">Sheik Abdulla</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6"
          >
            <span className="text-xl md:text-2xl font-heading font-semibold glow-text">
              {text}
            </span>
            <span className="inline-block w-0.5 h-6 md:h-8 ml-1 bg-primary animate-typewriter-cursor" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10"
          >
            I build fast websites and make them rank.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
          >
            <a href="#projects" className="btn-primary-glow flex items-center gap-2">
              <ArrowDown size={18} /> View My Work
            </a>
            <a href="https://drive.google.com/file/d/1sreXe6QQNrRZAKbXhMGMxvP0KlyxVvG8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-outline-glow flex items-center gap-2">
              <Download size={18} /> Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-[3px] border-primary overflow-hidden profile-glow">
            <img
              src="/sheik_img.jpeg.webp"
              alt="Sheik Abdulla profile photo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
