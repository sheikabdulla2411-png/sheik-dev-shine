import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Code, Gauge, FileCode, Globe, Database, Terminal, GitBranch, Flame, Cpu, BarChart3, Sparkles, Link2 } from "lucide-react";

type Color = "cyan" | "violet";

const seoCategories: { title: string; icon: any; skills: { name: string; icon: any; level: number }[] }[] = [
  {
    title: "Technical SEO",
    icon: Cpu,
    skills: [
      { name: "Sitemap & crawl error fixes", icon: Globe, level: 90 },
      { name: "Core Web Vitals & PageSpeed", icon: Gauge, level: 90 },
      { name: "Structured data / Schema markup", icon: FileCode, level: 88 },
      { name: "Robots.txt & indexability audits", icon: Search, level: 88 },
    ],
  },
  {
    title: "On-Page SEO",
    icon: FileCode,
    skills: [
      { name: "Meta titles & descriptions", icon: FileCode, level: 92 },
      { name: "Heading structure (H1–H3)", icon: FileCode, level: 90 },
      { name: "Internal linking", icon: Link2, level: 86 },
      { name: "Content optimization", icon: Flame, level: 85 },
    ],
  },
  {
    title: "Keyword Research & Competitor Analysis",
    icon: Search,
    skills: [
      { name: "Keyword research (Google Keyword Planner)", icon: Search, level: 88 },
      { name: "Ubersuggest", icon: BarChart3, level: 85 },
      { name: "Screaming Frog site crawls", icon: Cpu, level: 82 },
      { name: "Competitor gap analysis", icon: GitBranch, level: 80 },
    ],
  },
  {
    title: "Analytics & Reporting",
    icon: BarChart3,
    skills: [
      { name: "Google Search Console", icon: Gauge, level: 90 },
      { name: "Google Analytics 4 (GA4)", icon: BarChart3, level: 85 },
    ],
  },
  {
    title: "Emerging SEO (AEO / LLM SEO)",
    icon: Sparkles,
    skills: [
      { name: "Answer Engine Optimization (AEO)", icon: Sparkles, level: 82 },
      { name: "Optimizing for ChatGPT & Gemini", icon: Sparkles, level: 80 },
      { name: "Google AI Overview optimization", icon: Search, level: 80 },
    ],
  },
];

const devSkills = [
  { name: "React JS", icon: Code, level: 78 },
  { name: "Node.js", icon: Terminal, level: 72 },
  { name: "Python", icon: Code, level: 65 },
  { name: "Express.js", icon: Cpu, level: 70 },
  { name: "MongoDB", icon: Database, level: 68 },
  { name: "Firebase", icon: Flame, level: 66 },
  { name: "HTML / CSS", icon: FileCode, level: 79 },
  { name: "Git & GitHub", icon: GitBranch, level: 75 },
];

const SkillBar = ({ name, icon: Icon, level, delay, color }: { name: string; icon: any; level: number; delay: number; color: Color }) => {
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
      <div className="flex items-center justify-between gap-3">
        <span className={`${pillClass} flex items-center gap-2`}>
          <Icon size={14} /> {name}
        </span>
        <span className="text-xs text-muted-foreground shrink-0">{level}%</span>
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
          className="text-center mb-12"
        >
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
          <p className="text-muted-foreground text-sm md:text-base mt-5 max-w-2xl mx-auto">
            Full-spectrum SEO — technical, on-page, research, analytics and AEO — plus the development skills to implement every fix myself.
          </p>
        </motion.div>

        <h3 className="font-heading text-xl font-semibold glow-text mb-6 flex items-center gap-2">
          <Search size={20} /> SEO Skills
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {seoCategories.map((cat) => (
            <div key={cat.title} className="glass-card p-6 md:p-7 space-y-5">
              <h4 className="font-heading text-base font-semibold text-foreground flex items-center gap-2">
                <cat.icon size={18} className="text-primary" /> {cat.title}
              </h4>
              {cat.skills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.06} color="cyan" />
              ))}
            </div>
          ))}
        </div>

        <h3 className="font-heading text-base font-semibold glow-text-violet mb-4 flex items-center gap-2">
          <Code size={16} /> Supporting Technical Skills
        </h3>
        <div className="glass-card p-5 md:p-6 max-w-3xl">
          <p className="text-xs md:text-sm text-muted-foreground mb-5">
            React &amp; full-stack development — used to implement SEO fixes directly (schema markup, Core Web Vitals, site structure) rather than just recommending them to a dev team.
          </p>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {devSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.06} color="violet" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
