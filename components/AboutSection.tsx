"use client";

import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Folder,
  Building2,
  Users,
} from "lucide-react";
import ScrollDownArrow from "./ScrollDownArrow";

const statCards = [
  {
    icon: Briefcase,
    value: 6,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Folder,
    value: 10,
    suffix: "+",
    label: "Enterprise Projects",
  },
  {
    icon: Building2,
    textValue: "Banking & Contact Center",
    label: "Industry Experience",
    isTextValue: true,
  },
  {
    icon: Users,
    value: 20,
    suffix: "+",
    label: "Stakeholders Collaborated",
  },
];

function useCountUp(target: number, isActive: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }

    if (target === 0) return;

    const duration = 1000;
    const steps = 30;
    const increment = target / steps;
    const interval = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [target, isActive]);

  return count;
}

function StatCard({
  card,
  isActive,
}: {
  card: (typeof statCards)[number];
  isActive: boolean;
}) {
  const count = !card.isTextValue ? useCountUp(card.value!, isActive) : 0;

  return (
    <div
      className="rounded-xl p-6 flex flex-col gap-3"
      style={{ backgroundColor: "rgb(26, 26, 25)" }}
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
          {card.isTextValue ? card.textValue : `${count}${card.suffix}`}
        </p>
        <p className="text-xs text-zinc-500 mt-1">{card.label}</p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsActive(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="flex items-center justify-center px-4 py-24 relative"
    >
      <div className="max-w-6xl mx-auto w-full -mt-55">
        <div className="border border-zinc-800 rounded-3xl p-8 md:p-12" style={{ backgroundColor: "rgb(15, 15, 14)" }}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-1/2 flex flex-col gap-6">
              <p className="text-xs text-zinc-500 uppercase tracking-widest">
                — ABOUT ME
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Turning Business Needs Into Digital Solutions
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                With 6+ years of experience, I help organizations design and
                deliver scalable digital solutions. As an IT Business Analyst
                and Full Stack Developer, I work across the business and
                technology spectrum translating complex requirements into
                clear, feasible, and scalable implementations for banking,
                contact center, CRM, and customer engagement platforms.
              </p>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4" ref={ref}>
              {statCards.map((card) => (
                <StatCard key={card.label} card={card} isActive={isActive} />
              ))}
            </div>
          </div>
        </div>
        <ScrollDownArrow targetId="my-portfolio" />
      </div>
    </section>
  );
}
