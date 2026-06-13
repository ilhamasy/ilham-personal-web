"use client";

import { useState } from "react";
import { projects, groupProjectsByYear } from "@/lib/projects";
import ScrollDownArrow from "./ScrollDownArrow";

const yearGroups = groupProjectsByYear(projects);

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-card border border-card-border rounded-xl p-5 hover:border-accent/30 transition-colors cursor-pointer"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <p className="font-semibold text-sm">{project.name}</p>
      <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent mt-2 inline-block">
        {project.role}
      </span>

      {expanded && (
        <div className="mt-4 space-y-3 text-xs text-muted leading-relaxed">
          <div>
            <p className="text-foreground font-medium mb-1">Problem</p>
            <p>{project.problem}</p>
          </div>
          <div>
            <p className="text-foreground font-medium mb-1">Solution</p>
            <p>{project.solution}</p>
          </div>
          <div>
            <p className="text-foreground font-medium mb-1">Result</p>
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
                    key={`${project.name}-${project.role}-${year}-${i}`}
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
