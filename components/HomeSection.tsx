import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

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
    name: "GitHub",
    url: SITE_CONFIG.socials.github,
    icon: "/assets/github.png",
  },
];

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center gap-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full">
          <div className="flex flex-col gap-4 text-center md:text-left md:flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-lg sm:text-xl text-accent font-medium">
              {SITE_CONFIG.role}
            </p>
            <p className="text-xs sm:text-sm text-muted max-w-xl leading-relaxed font-sans">
              {SITE_CONFIG.about}
            </p>
          </div>

          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-accent/30 ring-4 ring-accent/10 shrink-0">
            <Image
              src="/assets/aal_hero.jpeg"
              alt="Ilham Asyari"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
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
    </section>
  );
}
