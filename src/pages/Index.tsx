import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TickerStrip from "@/components/TickerStrip";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <TickerStrip />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <CertificationsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
