import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-shell">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">
            Experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-border/50" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative glass-card p-6 md:p-8 ml-10 md:ml-0"
          >
            <span className="hidden md:block absolute -left-[13px] top-8 w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_10px_hsl(183_100%_50%/0.6)]" aria-hidden="true" />
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h3 className="font-heading text-lg md:text-xl font-semibold glow-text flex items-center gap-2">
                <Briefcase size={18} className="text-primary" /> Junior SEO Executive
              </h3>
              <span className="skill-pill text-xs">Sep 2026 – Present</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-2 mb-4">
              <MapPin size={14} className="text-primary shrink-0" /> Chennai, Tamil Nadu, India
            </p>
            <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
              Working on technical SEO, on-page optimisation, content strategy and link building for UK-based clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
