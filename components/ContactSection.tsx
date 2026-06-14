import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { TypingAnimation } from "./TypingAnimation";

const socialLinks = [
  {
    name: "Gmail",
    url: `mailto:${SITE_CONFIG.email}`,
    icon: "/assets/gmail.png",
    isMail: true,
  },
  {
    name: "LinkedIn",
    url: SITE_CONFIG.socials.linkedin,
    icon: "/assets/linkedin.png",
  },
  {
    name: "Instagram",
    url: SITE_CONFIG.socials.instagram,
    icon: "/assets/instagram.png",
  },
];

export default function ContactSection() {
  return (
    <section id="contact-me" className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-lg mx-auto w-full">
        <div className="text-center mb-12">
          <TypingAnimation
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white block text-center"
            as="h1"
          >
            Let&apos;s Build Something Together
          </TypingAnimation>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            Whether you&apos;re looking for a Business Analyst, need a website,
            or want to integrate enterprise systems, I&apos;d love to hear about
            your ideas.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.isMail ? undefined : "_blank"}
              rel={link.isMail ? undefined : "noopener noreferrer"}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200"
              aria-label={`Visit ${link.name} profile`}
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={36}
                height={36}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
