import Image from "next/image";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/ilhamasy",
    icon: "/assets/instagram.png",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ilhamasy",
    icon: "/assets/linkedin.png",
  },
  {
    name: "GitHub",
    url: "https://github.com/ilhamasy",
    icon: "/assets/github.png",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-card-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Ilham Asyari. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label={link.name}
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={24}
                  height={24}
                  className="invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
