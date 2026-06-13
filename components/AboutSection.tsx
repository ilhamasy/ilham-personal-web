import Image from "next/image";
import { metrics } from "@/lib/projects";
import ScrollDownArrow from "./ScrollDownArrow";

const aboutCards = [
  {
    title: "4+ Years Experience",
    description: "As IT Business Analyst driving digital transformation",
  },
  {
    title: "Banking & Contact Center",
    description: "Experience in Banking & Contact Center Systems",
  },
  {
    title: "Full-Stack Development",
    description: "Using React, Next.js, Go, and Node.js",
  },
  {
    title: "Requirements & Delivery",
    description: "Experience managing requirements, integration and delivery",
  },
];

const metricItems = [
  { label: "Years of Experience", value: metrics.yearsOfExperience },
  { label: "Total Projects", value: metrics.totalProjects },
  { label: "Client Projects", value: metrics.clientProjects },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-24 relative"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center gap-12">
        <div className="text-center">
          <p className="text-xs text-muted uppercase tracking-widest mb-2">
            — About Me
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Turning Business Needs Into Digital Solutions
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/20 ring-4 ring-white/5 shrink-0">
            <Image
              src="/assets/aal_hero.jpeg"
              alt="Ilham Asyari"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 256px"
            />
          </div>

          <div className="flex flex-col gap-4 md:flex-1">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                className="bg-card border border-card-border rounded-lg p-4"
              >
                <p className="font-semibold text-sm">{card.title}</p>
                <p className="text-xs text-muted mt-1">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
          {metricItems.map((item) => (
            <div
              key={item.label}
              className="bg-card border border-card-border rounded-xl p-6 text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-accent">
                {item.value}+
              </p>
              <p className="text-xs sm:text-sm text-muted mt-1">{item.label}</p>
            </div>
          ))}
        </div>
        <ScrollDownArrow targetId="my-portfolio" />
      </div>
    </section>
  );
}
