import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-shell">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-10"
        >
          <p className="text-foreground/80 leading-relaxed text-base md:text-lg mb-6">
            <strong className="text-foreground">B.Voc Software Development</strong> graduate focused on <strong className="glow-text">SEO and Digital Marketing</strong>, with hands-on experience in technical SEO, on-page optimization, keyword research, competitor analysis and AEO (Answer Engine Optimization) for AI search like ChatGPT, Gemini and Google AI Overview. Backed by full-stack skills in React, Node.js and Python, so I don't just recommend SEO fixes — I build and implement them myself.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap size={16} className="text-primary" />
              <span>Alagappa University (2026)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span>Pudukkottai, Tamil Nadu</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 skill-pill">
            <Sparkles size={14} />
            Fun fact: Viva Survivor 🎓
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
