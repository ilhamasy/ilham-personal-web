export interface Project {
  name: string;
  role: "Developer" | "IT Business Analyst";
  year: number;
  description?: string;
  link?: string;
}

export interface PortfolioMetrics {
  yearsOfExperience: number;
  totalProjects: number;
  clientProjects: number;
  latestProject: {
    name: string;
    description: string;
  };
}

export const metrics: PortfolioMetrics = {
  yearsOfExperience: 0,
  totalProjects: 0,
  clientProjects: 0,
  latestProject: {
    name: "Placeholder Project",
    description: "Project description coming soon.",
  },
};

export const projects: Project[] = [
  {
    name: "Placeholder Project 1",
    role: "Developer",
    year: 2026,
    description: "Project description coming soon.",
  },
  {
    name: "Placeholder Project 2",
    role: "IT Business Analyst",
    year: 2026,
    description: "Project description coming soon.",
  },
  {
    name: "Placeholder Project 3",
    role: "Developer",
    year: 2025,
    description: "Project description coming soon.",
  },
  {
    name: "Placeholder Project 4",
    role: "IT Business Analyst",
    year: 2025,
    description: "Project description coming soon.",
  },
];
