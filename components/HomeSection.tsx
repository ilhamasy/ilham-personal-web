"use client";

import Image from "next/image";
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
      className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 relative bg-black"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center">
        <div className="flex flex-col gap-6 text-center md:text-left md:w-1/2 py-8">
          <h4 className="text-lg sm:text-xl text-muted font-medium">
            Hi, I&apos;m Ilham Asyari
          </h4>
          <TypingAnimation
            words={["IT Business Analyst", "Full Stack Developer"]}
            loop
            pauseDelay={2000}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            as="h1"
          />
          <p className="text-base sm:text-lg text-muted">
            Who bridges business needs and technology solutions.
          </p>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors cursor-pointer mx-auto md:mx-0 w-fit"
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
            src="/assets/ilham-porto.png"
            alt="Ilham Asyari"
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            priority
            sizes="(max-width: 768px) 320px, 50vw"
          />
        </div>
        <ScrollDownArrow targetId="about" />
      </div>
    </section>
  );
}
