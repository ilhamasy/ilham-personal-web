import HomeSection from "@/components/HomeSection";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <PortfolioSection />
      <section
        id="tech-stack"
        className="min-h-screen flex items-center justify-center px-4"
      />
      <section
        id="contact-me"
        className="min-h-screen flex items-center justify-center px-4"
      />
    </>
  );
}
