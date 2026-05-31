export interface Project {
  name: string;
  role: "Developer" | "IT Business Analyst" | "Product Owner";
  years: number[];
  description?: string;
  link?: string;
}

export interface PortfolioMetrics {
  yearsOfExperience: number;
  totalProjects: number;
  clientProjects: number;
}

export const metrics: PortfolioMetrics = {
  yearsOfExperience: 7,
  totalProjects: 10,
  clientProjects: 0,
};

export const projects: Project[] = [
  {
    name: "Omnichannel Chat Platform",
    role: "IT Business Analyst",
    years: [2025, 2026],
    description: "Project description coming soon.",
  },
  {
    name: "Chatbot Agent for Customer Service",
    role: "IT Business Analyst",
    years: [2025, 2026],
    description: "Project description coming soon.",
  },
  {
    name: "Telephony Contact Center Migration",
    role: "IT Business Analyst",
    years: [2025],
    description: "Project description coming soon.",
  },
  {
    name: "VOIP Integration for Contact Center",
    role: "IT Business Analyst",
    years: [2025, 2026],
    description: "Project description coming soon.",
  },
  {
    name: "Eform Onboarding System",
    role: "Product Owner",
    years: [2023, 2024],
    description: "Project description coming soon.",
  },
  {
    name: "Video Call System",
    role: "Product Owner",
    years: [2023, 2024],
    description: "Project description coming soon.",
  },
  {
    name: "Face Biometric Authentication System",
    role: "Developer",
    years: [2022, 2023],
    description: "Project description coming soon.",
  },
  {
    name: "Eform Onboarding System",
    role: "Developer",
    years: [2020, 2022],
    description: "Project description coming soon.",
  },
];
