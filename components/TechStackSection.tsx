"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { techCategories } from "@/lib/tech-stack";
import ScrollDownArrow from "./ScrollDownArrow";

function ProgressBar({
  percentage,
  isActive,
}: {
  percentage: number;
  isActive: boolean;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setWidth(0);
      return;
    }

    const timer = setTimeout(() => setWidth(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage, isActive]);

  return (
    <div className="w-full h-1.5 bg-foreground/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

function TechItemCard({
  item,
  isActive,
}: {
  item: { name: string; icon: string; percentage: number };
  isActive: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={item.icon}
        alt={item.name}
        width={32}
        height={32}
        className="shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium">{item.name}</span>
          <span className="text-xs text-muted">{item.percentage}%</span>
        </div>
        <ProgressBar percentage={item.percentage} isActive={isActive} />
      </div>
    </div>
  );
}

export default function TechStackSection() {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="tech-stack" className="min-h-screen px-4 py-24 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Tech Stack
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-card-border rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-5 text-accent">
                {category.title}
              </h3>
              <div className="flex flex-col gap-4">
                {category.items.map((item) => (
                  <TechItemCard
                    key={item.name}
                    item={item}
                    isActive={isActive}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollDownArrow targetId="contact-me" />
    </section>
  );
}
