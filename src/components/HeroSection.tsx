import { motion } from "framer-motion";

const heroLines = [
  { text: "SEARCH.", style: "text-primary" },
  { text: "OPTIMISE.", style: "text-outline" },
  { text: "RANK.", style: "text-primary" },
];

const HeroSection = () => {
  return (
    <section id="top" className="relative min-h-dvh flex flex-col justify-center overflow-hidden pt-24 pb-10">
      <div className="container-editorial w-full">
        {/* Top meta row */}
        <div className="flex justify-between items-start text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-14">
          <p className="max-w-[60%]">Junior SEO Executive — Unified Web Services, UK</p>
          <p>© 2025</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          {/* Left: giant type */}
          <div className="min-w-0">
            <h1 className="flex flex-col font-heading font-bold leading-[0.95] tracking-tight">
              {heroLines.map((line, i) => (
                <motion.span
                  key={line.text}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                  className={`${line.style} text-[clamp(52px,15vw,170px)]`}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="my-6 sm:my-8 h-px w-40 sm:w-64 origin-left"
              style={{ background: "hsl(var(--primary))" }}
            />

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="max-w-xl text-sm sm:text-base text-foreground/80 leading-relaxed"
            >
              I'm Sheik Abdulla — I don't just recommend SEO fixes, I implement them.
              <span className="text-muted-foreground"> Technical SEO · On-Page Optimisation · Content Strategy · Developer Mindset.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#work" className="btn-gold-outline">
                View My Work <span aria-hidden="true">→</span>
              </a>
              <a href="#contact" className="btn-gold-solid">
                Let's Connect
              </a>
            </motion.div>
          </div>

          {/* Right: circular portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="justify-self-center lg:justify-self-end lg:mt-24"
          >
            <div
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden"
              style={{ border: "3px solid hsl(var(--primary))", boxShadow: "0 0 40px hsl(var(--primary) / 0.25)" }}
            >
              <img
                src="/sheik-abdulla-profile.webp"
                alt="Sheik Abdulla, Junior SEO Executive, professional headshot"
                width={640}
                height={640}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom meta row */}
        <div className="flex justify-between items-end mt-10 sm:mt-16 text-xs sm:text-sm text-muted-foreground">
          <p>📍 Pudukkottai, Tamil Nadu, India</p>
          <a href="#about" className="hidden sm:flex items-center gap-2 hover-underline">
            ↓ <span className="animate-bounce-soft inline-block">Scroll to explore</span>
          </a>
          <a href="#about" className="sm:hidden animate-bounce-soft text-lg" aria-label="Scroll to explore">↓</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
