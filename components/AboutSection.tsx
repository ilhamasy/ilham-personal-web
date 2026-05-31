import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import ScrollDownArrow from "./ScrollDownArrow";

const socialLinks = [
  {
    name: "Instagram",
    url: SITE_CONFIG.socials.instagram,
    icon: "/assets/instagram.png",
  },
  {
    name: "LinkedIn",
    url: SITE_CONFIG.socials.linkedin,
    icon: "/assets/linkedin.png",
  },
  {
    name: "Gmail",
    url: `mailto:${SITE_CONFIG.email}`,
    icon: "/assets/gmail.png",
    isMail: true,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-24 relative"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center gap-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          About Me
        </h2>

        <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-accent/30 ring-4 ring-accent/10 shrink-0">
            <Image
              src="/assets/aal_hero.jpeg"
              alt="Ilham Asyari"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 md:flex-1">
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-ubuntu">
              {SITE_CONFIG.about}
            </p>

          <div className="flex items-center gap-6 md:justify-start justify-center">
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
                  width={28}
                  height={28}
                />
              </a>
            ))}
          </div>
          </div>
        </div>
        <ScrollDownArrow targetId="my-portfolio" />
      </div>
    </section>
  );
}
