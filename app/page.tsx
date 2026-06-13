import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <div className="relative bg-black">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)",
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0",
          }}
        />
        <div className="relative z-10">
          <AboutSection />
          <PortfolioSection />
          <TechStackSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
}
