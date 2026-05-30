import { metrics, projects } from "@/lib/projects";

const metricItems = [
  { label: "Years of Experience", value: metrics.yearsOfExperience },
  { label: "Total Projects", value: metrics.totalProjects },
  { label: "Client Projects", value: metrics.clientProjects },
];

export default function PortfolioSection() {
  return (
    <section id="my-portfolio" className="min-h-screen px-4 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          My Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {metricItems.map((item) => (
            <div
              key={item.label}
              className="bg-card border border-card-border rounded-xl p-6 text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-accent">
                {item.value}
              </p>
              <p className="text-xs sm:text-sm text-muted mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
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
                <span className="text-xs text-muted">{project.year}</span>
              </div>
              {project.description && (
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
