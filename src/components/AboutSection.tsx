import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

const tags = ["Technical SEO", "On-Page SEO", "AEO", "GEO", "GA4", "Core Web Vitals", "Schema Markup", "Content Strategy"];

const AboutSection = () => {
  return (
    <SectionShell
      id="about"
      number="01"
      heading="ABOUT"
      leftNote={
        <>
          <p>Junior SEO Executive</p>
          <p>Unified Web Services, UK</p>
          <p>Pudukkottai, TN, India 🇮🇳</p>
          <div className="mt-10 space-y-8">
            <Reveal className="stat-block" delay={0.1}>
              <p className="font-heading font-bold text-5xl text-primary leading-none">3+</p>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">UK Clients Served</p>
            </Reveal>
            <Reveal className="stat-block" delay={0.2}>
              <p className="font-heading font-bold text-5xl text-primary leading-none">2x</p>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Google Certified</p>
            </Reveal>
          </div>
        </>
      }
    >
      <Reveal>
        <div className="text-[17px] sm:text-[19px] leading-[1.8] text-foreground/85 space-y-6">
          <p>
            I'm Sheik Abdulla — a Junior SEO Executive at Unified Web Services, a digital marketing agency based in
            Basildon, Essex, UK. My background in Software Development (B.Voc, Alagappa University, 2026) gives me a
            technical edge most SEO professionals don't have — I can read code, run crawl audits, and implement fixes
            directly on site.
          </p>
          <p>
            I specialise in Technical SEO, On-Page Optimisation, Content Strategy, and Answer Engine Optimisation (AEO).
            I've worked with UK clients across fitness, construction SaaS, and digital marketing, producing SEO content
            that ranks.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-wrap gap-3">
          {tags.map((t) => (
            <span key={t} className="tag-pill">{t}</span>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
};

export default AboutSection;
