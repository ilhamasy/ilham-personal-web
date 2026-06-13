import {
  Briefcase,
  Folder,
  Building2,
  Users,
  ArrowUpRight,
} from "lucide-react";
import ScrollDownArrow from "./ScrollDownArrow";

const statCards = [
  {
    icon: Briefcase,
    value: "4+",
    label: "Years Experience",
  },
  {
    icon: Folder,
    value: "7+",
    label: "Enterprise Projects",
  },
  {
    icon: Building2,
    value: "Banking & Fintech",
    label: "Industry Experience",
    isTextValue: true,
  },
  {
    icon: Users,
    value: "20+",
    label: "Stakeholders Collaborated",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-24 relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="border border-zinc-800 bg-[#111111]/30 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-1/2 flex flex-col gap-6">
              <p className="text-xs text-zinc-500 uppercase tracking-widest">
                — ABOUT ME
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Turning Business Needs Into Digital Solutions
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                With 4+ years of experience, I help organizations design and
                deliver scalable digital solutions. As an IT Business Analyst
                and Full Stack Developer, I work across the business and
                technology spectrum — translating complex requirements into
                clear, feasible, and scalable implementations for banking,
                contact center, CRM, and customer engagement platforms.
              </p>
              <a
                href="#my-portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-800 text-sm text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors w-fit"
              >
                More About Me
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {statCards.map((card) => (
                <div
                  key={card.label}
                  className="bg-zinc-900/50 rounded-xl p-6 flex flex-col gap-3"
                >
                  <card.icon className="w-6 h-6 text-white/60" />
                  <div>
                    <p
                      className={
                        card.isTextValue
                          ? "text-base font-bold text-white"
                          : "text-3xl font-bold text-white"
                      }
                    >
                      {card.value}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">{card.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ScrollDownArrow targetId="my-portfolio" />
      </div>
    </section>
  );
}
