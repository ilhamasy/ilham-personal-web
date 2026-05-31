"use client";

import { useEffect, useRef, useState } from "react";
import { metrics, projects } from "@/lib/projects";
import ScrollDownArrow from "./ScrollDownArrow";

const metricItems = [
  { label: "Years of Experience", value: metrics.yearsOfExperience },
  { label: "Total Projects", value: metrics.totalProjects },
  { label: "Client Projects", value: metrics.clientProjects },
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

function MetricCard({
  label,
  target,
  isActive,
}: {
  label: string;
  target: number;
  isActive: boolean;
}) {
  const count = useCountUp(target, isActive);

  return (
    <div className="bg-card border border-card-border rounded-xl p-6 text-center">
      <p className="text-3xl sm:text-4xl font-bold text-accent">
        {count}+
      </p>
      <p className="text-xs sm:text-sm text-muted mt-1">{label}</p>
    </div>
  );
}

export default function PortfolioSection() {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="my-portfolio" className="min-h-screen px-4 py-24 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          My Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {metricItems.map((item) => (
            <MetricCard
              key={item.label}
              label={item.label}
              target={item.value}
              isActive={isActive}
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={`${project.name}-${project.role}-${index}`}
              className="bg-card border border-card-border rounded-xl p-5 hover:border-accent/30 transition-colors"
            >
              <p className="font-semibold text-sm">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                  {project.role}
                </span>
                <span className="text-xs text-muted">{project.years.join(", ")}</span>
              </div>
              {project.description && (
                <p className="text-xs text-muted mt-2 leading-relaxed font-ubuntu">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <ScrollDownArrow targetId="tech-stack" />
      </div>
    </section>
  );
}
