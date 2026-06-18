"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { TextAnimate } from "./TextAnimate";

export default function ContactSection() {
  return (
    <section id="contact-me" className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-2xl mx-auto w-full px-4">
        <div className="text-center mb-12">
          <TextAnimate
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center"
            as="h1"
            animation="slideLeft"
            by="character"
            once={false}
          >
            Let&apos;s Build
          </TextAnimate>
          <TextAnimate
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center"
            as="h1"
            animation="slideLeft"
            by="character"
            once={false}
            delay={0.5}
          >
            Something Together
          </TextAnimate>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            Whether you&apos;re looking for a Business Analyst, need a website,
            or want to integrate enterprise systems, I&apos;d love to hear about
            your ideas.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:ilham.asyari8@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors"
          >
            Email me
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <p className="text-xs text-zinc-500">or follow my social media</p>

          <div className="flex items-center justify-center gap-6">
            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200"
              aria-label="Visit LinkedIn profile"
            >
              <Image src="/assets/linkedin.png" alt="LinkedIn" width={32} height={32} />
            </a>
            <a
              href={SITE_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200"
              aria-label="Visit Instagram profile"
            >
              <Image src="/assets/instagram.png" alt="Instagram" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
