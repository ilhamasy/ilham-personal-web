import {
  Briefcase,
  RefreshCw,
  Atom,
  Server,
  Cloud,
  Lightbulb,
} from "lucide-react";
import ScrollDownArrow from "./ScrollDownArrow";

const skillCategories = [
  {
    title: "Business Analysis",
    icon: Briefcase,
    items: [
      "Requirement Gathering",
      "BRD",
      "FSD",
      "User Story Mapping",
      "UAT Management",
      "Stakeholder Management",
      "Weekly Update",
    ],
  },
  {
    title: "Delivery Methodology",
    icon: RefreshCw,
    items: [
      "Agile Scrum",
      "Waterfall",
      "Sprint Planning",
      "Backlog Grooming",
      "Release Management",
    ],
  },
  {
    title: "Frontend",
    icon: Atom,
    items: [
      "Next.js",
      "React Native",
      "Android Native",
      "Flutter",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      "Java Springboot",
      "Flask Python",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    title: "Infrastructure",
    icon: Cloud,
    items: [
      "Github Action",
      "Docker",
    ],
  },
  {
    title: "Enterprise Solutions",
    icon: Lightbulb,
    items: [
      "CRM Integration",
      "Telephony (VoIP)",
      "Omnichannel",
      "Chatbot",
      "Digital Onboarding",
      "Video Call",
    ],
  },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="min-h-screen px-4 py-24 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#1a1a19] border border-zinc-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-5 h-5 text-white/70" />
                <h3 className="text-base font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-zinc-400 flex items-start gap-2"
                  >
                    <span className="text-white/40 mt-0.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ScrollDownArrow targetId="contact-me" />
      </div>
    </section>
  );
}
