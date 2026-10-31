import AnimatedBackground from "@/components/AnimatedBackground";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SEOSection from "@/components/SEOSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      
      <Navbar />
      <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <SEOSection />
      <ContactSection />
      </main>
      <footer className="relative z-10 py-8 px-4 text-center text-xs text-muted-foreground border-t border-border/30">
        <p>© 2026 Sheik Abdulla · Junior SEO Executive</p>
        <p className="mt-1">From Pudukkottai, Tamil Nadu — Built with passion &amp; SEO in mind.</p>
      </footer>
      <BackToTop />
    </div>
  );
};

export default Index;
