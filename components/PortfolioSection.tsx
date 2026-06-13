"use client";

import { projects } from "@/lib/projects";
import ScrollDownArrow from "./ScrollDownArrow";

export default function PortfolioSection() {
  return (
    <section id="my-portfolio" className="min-h-screen px-4 py-24 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          My Portfolio
        </h2>

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
