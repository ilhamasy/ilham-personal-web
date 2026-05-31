import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TechStackSection from "@/components/TechStackSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <TechStackSection />
      <section
        id="contact-me"
        className="min-h-screen flex items-center justify-center px-4"
      />
    </>
  );
}
