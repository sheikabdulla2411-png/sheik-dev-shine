import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Code, Gauge, FileCode, Globe, Database, Terminal, GitBranch, Flame, Cpu, Bug, BarChart3 } from "lucide-react";

const seoSkills = [
  { name: "Core Web Vitals", icon: Gauge, level: 90 },
  { name: "Schema Markup", icon: FileCode, level: 85 },
  { name: "Sitemap & Robots.txt", icon: Globe, level: 95 },
  { name: "Log File Analysis", icon: BarChart3, level: 75 },
  { name: "Page Speed Optimization", icon: Flame, level: 92 },
  { name: "Structured Data", icon: Database, level: 88 },
  { name: "Crawl Budget", icon: Bug, level: 80 },
  { name: "Technical Audits", icon: Search, level: 85 },
];

const devSkills = [
  { name: "React JS", icon: Code, level: 90 },
  { name: "Node.js", icon: Terminal, level: 85 },
  { name: "Express.js", icon: Cpu, level: 82 },
  { name: "MongoDB", icon: Database, level: 80 },
  { name: "Firebase", icon: Flame, level: 78 },
  { name: "Python", icon: Code, level: 75 },
  { name: "HTML / CSS", icon: FileCode, level: 95 },
  { name: "Git & GitHub", icon: GitBranch, level: 88 },
];

const SkillBar = ({ name, icon: Icon, level, delay, color }: { name: string; icon: any; level: number; delay: number; color: "cyan" | "violet" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const pillClass = color === "cyan" ? "skill-pill" : "skill-pill-violet";
  const barColor = color === "cyan" ? "bg-primary" : "bg-accent";
  const barShadow = color === "cyan" ? "shadow-[0_0_10px_hsl(183_100%_50%/0.4)]" : "shadow-[0_0_10px_hsl(263_84%_52%/0.4)]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: color === "cyan" ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className={`${pillClass} flex items-center gap-2`}>
          <Icon size={14} /> {name}
        </span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full ${barColor} ${barShadow}`}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="glass-card p-6 md:p-8 space-y-5">
            <h3 className="font-heading text-lg font-semibold glow-text mb-6 flex items-center gap-2">
              <Search size={20} /> Technical SEO
            </h3>
            {seoSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.08} color="cyan" />
            ))}
          </div>
          <div className="glass-card p-6 md:p-8 space-y-5">
            <h3 className="font-heading text-lg font-semibold glow-text-violet mb-6 flex items-center gap-2">
              <Code size={20} /> Dev Stack
            </h3>
            {devSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.08} color="violet" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
