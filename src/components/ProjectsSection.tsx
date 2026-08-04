import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SEO Tips for Beginners — Live SEO Blog",
    stack: "Blogger, Google Search Console, GA4, Ubersuggest",
    description: "My live SEO blog where I apply everything I learn — connected to Google Search Console and GA4, with real technical fixes documented: sitemap error resolution (indexed pages grew from 4 to 7), on-page optimization, and PageSpeed improvements (mobile score 71 to 96).",
    tags: ["Blogger", "GSC", "GA4", "Ubersuggest", "Technical SEO"],
    badge: "Featured",
    showDemo: true,
    showGithub: false,
    demoLink: "https://seotipsforbeginners2026.blogspot.com",
    githubLink: "#",
  },
  {
    title: "Urban-Rural Village Development & Citizen Feedback System",
    stack: "MERN Stack (React, Node.js, Express, MongoDB)",
    description: "A MERN stack web application for urban-rural village development and citizen feedback management. Features include complaint tracking, feedback system, and admin dashboard.",
    tags: ["MongoDB", "React", "Node.js", "REST API"],
    badge: null,
    showDemo: true,
    showGithub: true,
    demoLink: "https://urban-village-frontend.netlify.app",
    githubLink: "https://github.com/sheikabdulla2411-png/urban-village-frontend",
  },
  {
    title: "Live Bus Tracking System",
    stack: "Android, Firebase, Google Maps API",
    description: "Built for academic purposes using Android Studio, Firebase, and Google Maps API. System architecture and documentation completed.",
    tags: ["Firebase", "Android", "Google Maps", "Real-time"],
    badge: "Academic Project",
    showDemo: false,
    showGithub: false,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Object Detection Smart Glass (Hackathon)",
    stack: "Python, OpenCV, YOLO, MediaPipe",
    description: "Software prototype built for hackathon using Python, OpenCV, YOLO, and MediaPipe. Hardware implementation not included.",
    tags: ["Python", "YOLO", "OpenCV", "MediaPipe", "AI/ML"],
    badge: "Academic Project",
    showDemo: false,
    showGithub: false,
    demoLink: "#",
    githubLink: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-hover p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{p.stack}</span>
                {p.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-semibold uppercase tracking-wider">{p.badge}</span>
                )}
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                {p.showGithub && (
                  <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="btn-outline-glow text-xs py-2 px-4 flex items-center gap-1.5">
                    <Github size={14} /> GitHub
                  </a>
                )}
                {p.showDemo && (
                  <a href={p.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary-glow text-xs py-2 px-4 flex items-center gap-1.5">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
