"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/projects";
import ScrollDownArrow from "./ScrollDownArrow";

type Project = (typeof projects)[number];

function groupByLatestYear(list: Project[]) {
  const map = new Map<number, Project[]>();
  for (const p of list) {
    const latest = Math.max(...p.years);
    const group = map.get(latest) ?? [];
    group.push(p);
    map.set(latest, group);
  }
  return Array.from(map.entries()).sort(([a], [b]) => b - a);
}

function formatYears(years: number[]) {
  const sorted = [...years].sort((a, b) => a - b);
  if (sorted.length === 1) return `${sorted[0]}`;
  return `${sorted[0]} — ${sorted[sorted.length - 1]}`;
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="bg-card border border-card-border rounded-xl p-5 hover:border-accent/30 transition-colors cursor-pointer">
        <p className="font-semibold text-sm">{project.name}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
            {project.role}
          </span>
          <span className="text-xs text-muted">{formatYears(project.years)}</span>
        </div>
      </div>

      {expanded && (
        <div className="absolute left-0 right-0 top-full mt-2 z-20 bg-[#1a1a19] border border-zinc-700 rounded-xl p-5 shadow-xl space-y-3 text-xs text-zinc-400 leading-relaxed">
          <div>
            <p className="text-white font-medium mb-1">Problem</p>
            <p>{project.problem}</p>
          </div>
          <div>
            <p className="text-white font-medium mb-1">Solution</p>
            <p>{project.solution}</p>
          </div>
          <div>
            <p className="text-white font-medium mb-1">Result</p>
            <p>{project.result}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PortfolioSection() {
  const yearGroups = useMemo(() => groupByLatestYear(projects), []);

  return (
    <section id="my-portfolio" className="min-h-screen px-4 py-24 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16">
          Featured Project
        </h2>

        <div className="flex flex-col gap-16">
          {yearGroups.map(([year, yearProjects]) => (
            <div key={year}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-bold text-accent tracking-wider">
                  {year}
                </span>
                <div className="flex-1 h-px bg-card-border" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {yearProjects.map((project, i) => (
                  <ProjectCard
                    key={`${project.name}-${project.role}-${i}`}
                    project={project}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <ScrollDownArrow targetId="tech-stack" />
      </div>
    </section>
  );
}
