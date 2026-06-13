"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import ScrollDownArrow from "./ScrollDownArrow";
import { TypingAnimation } from "./TypingAnimation";

export default function HomeSection() {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 relative"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center">
        <div className="flex flex-col gap-6 text-center md:text-left md:w-1/2 py-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {SITE_CONFIG.name}
          </h1>
            <TypingAnimation
              words={["Full Stack Developer", "IT Business Analyst", "Tech Enthusiast"]}
              loop
              pauseDelay={2000}
              className="text-lg sm:text-xl text-accent font-large font-ubuntu"
            />
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors cursor-pointer mx-auto md:mx-0 w-fit"
          >
            More about me
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>

        <div className="relative w-full md:w-1/2 aspect-square overflow-hidden shrink-0">
          <Image
            src="/assets/ilham_hero_updated.png"
            alt="Ilham Asyari"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 320px, 50vw"
          />
        </div>
        <ScrollDownArrow targetId="about" />
      </div>
    </section>
  );
}
