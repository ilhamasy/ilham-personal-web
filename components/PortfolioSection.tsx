"use client";

import { useState } from "react";
import { projects, groupProjectsByYear } from "@/lib/projects";
import ScrollDownArrow from "./ScrollDownArrow";

const yearGroups = groupProjectsByYear(projects);
const roleColors: Record<string, string> = {
  "IT BA": "bg-white/10 text-white",
  Developer: "bg-white/10 text-white",
  "Product Owner": "bg-white/10 text-white",
  "Developer, Product Owner": "bg-white/10 text-white",
};

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="border border-zinc-800 rounded-xl p-5 bg-[#111111]/60 hover:border-zinc-600 transition-colors cursor-pointer"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <p className="font-semibold text-sm text-white">{project.name}</p>
      <span
        className={`inline-block text-xs px-2 py-0.5 rounded-full mt-2 ${
          roleColors[project.role] ?? "bg-white/10 text-white"
        }`}
      >
        {project.role}
      </span>

      {expanded && (
        <div className="mt-4 space-y-3 text-xs text-zinc-400 leading-relaxed">
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
  return (
    <section id="my-portfolio" className="min-h-screen px-4 py-24 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16">
          Featured Project
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />

          <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-white -translate-x-1/2 animate-timeline-dot shadow-[0_0_12px_rgba(255,255,255,0.4)]" />

          <div className="flex flex-col gap-16">
            {yearGroups.map(([year, yearProjects]) => (
              <div key={year} className="relative">
                <div className="flex items-center gap-4 mb-6 md:justify-center">
                  <div className="w-3 h-3 rounded-full bg-zinc-700 border-2 border-zinc-800 shrink-0 relative z-10" />
                  <span className="text-sm font-bold text-white tracking-wider">
                    {year}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 md:ml-12 md:mr-0">
                  {yearProjects.map((project, i) => (
                    <ProjectCard
                      key={`${project.name}-${project.role}-${year}-${i}`}
                      project={project}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <ScrollDownArrow targetId="tech-stack" />
      </div>
    </section>
  );
}
