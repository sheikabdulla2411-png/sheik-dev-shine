import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award, Zap, Search, Shield, FileCheck } from "lucide-react";

const stats = [
  { label: "Performance Score", value: "98", max: "100", color: "text-green-400", icon: Zap },
  { label: "SEO Score", value: "100", max: "100", color: "text-green-400", icon: Search },
];

const checks = [
  { label: "Core Web Vitals", status: "Pass ✅", icon: Shield },
  { label: "Structured Data", status: "Implemented ✅", icon: FileCheck },
];

const certs = ["Google Digital Garage Certified", "HubSpot SEO Certified"];

const CircleScore = ({ value, max, label, icon: Icon, delay }: { value: string; max: string; label: string; icon: any; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const pct = (parseInt(value) / parseInt(max)) * 100;
  const circ = 2 * Math.PI * 45;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative w-28 h-28">
        <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(220 15% 15%)" strokeWidth="6" />
          <motion.circle
            cx="50" cy="50" r="45" fill="none"
            stroke="hsl(142 76% 36%)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={inView ? { strokeDashoffset: circ - (circ * pct) / 100 } : {}}
            transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 6px hsl(142 76% 36% / 0.5))" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon size={16} className="text-green-400 mb-1" />
          <span className="text-xl font-heading font-bold text-green-400">{value}</span>
          <span className="text-[10px] text-muted-foreground">/ {max}</span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground text-center">{label}</span>
    </motion.div>
  );
};

const SEOSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="seo" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            SEO <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-8">
            {stats.map((s, i) => (
              <CircleScore key={s.label} {...s} delay={i * 0.2} />
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {checks.map((c) => (
              <div key={c.label} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                <div>
                  <span className="text-sm text-foreground font-medium">{c.label}</span>
                  <span className="text-xs text-green-400 ml-2">{c.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {certs.map((c) => (
              <span key={c} className="flex items-center gap-2 skill-pill text-xs">
                <Award size={14} /> {c}
              </span>
            ))}
          </div>

          <p className="text-center text-muted-foreground italic text-sm">
            "I don't just build websites. I make them <span className="glow-text font-semibold not-italic">discoverable</span>."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOSection;
