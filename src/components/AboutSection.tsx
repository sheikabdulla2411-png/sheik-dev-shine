import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 relative z-10">
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
          className="glass-card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[3px] border-primary overflow-hidden profile-glow">
              <img
                src="/sheik_img.jpeg.webp"
                alt="Sheik Abdulla profile photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg mb-6">
              Final-year <strong className="text-foreground">B.Voc Software Development</strong> student turned <strong className="glow-text">Technical SEO Developer</strong>. Skilled in MERN stack, React, Node.js, and Python. Passionate about building fast, crawlable, rank-worthy websites that perform at the intersection of code and search.
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
