export interface Project {
  name: string;
  role: "Developer" | "IT BA" | "Product Owner" | "Developer, Product Owner";
  years: number[];
  problem: string;
  solution: string;
  result: string;
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
    role: "IT BA",
    years: [2025, 2026],
    problem:
      "Customer inquiries were coming from multiple channels, making it difficult for agents to manage conversations efficiently.",
    solution:
      "Designed and implemented an omnichannel platform that unified In App Chat, Web Chat, Instagram, Facebook and other social media interactions into a single agent workspace.",
    result:
      "Improved agent productivity through a single interface. Reduced response handling complexity. Enhanced customer experience with consistent communication.",
  },
  {
    name: "AI Chatbot for Customer Service",
    role: "IT BA",
    years: [2025, 2026],
    problem:
      "Customer service teams were handling a large volume of repetitive inquiries, resulting in longer response times.",
    solution:
      "Implemented an AI powered chatbot capable of answering common customer questions and routing complex cases to human agents.",
    result:
      "Reduced workload for customer service agents. Improved first-response time. Increased availability of customer support services.",
  },
  {
    name: "Telephony Contact Center Migration",
    role: "IT BA",
    years: [2025],
    problem:
      "The organization incurred high operational expenses due to maintaining two separate PABX platforms and vendors for Unified Communications and Contact Center services.",
    solution:
      "Conducted business and technical assessments to evaluate telephony platforms capable of supporting both Unified Communications and Contact Center operations within a single solution. Led requirement gathering, stakeholder alignment, vendor evaluation, and migration planning.",
    result:
      "Optimized telephony OPEX through platform consolidation. Reduced vendor dependency and management complexity. Unified UC and Contact Center capabilities under a single platform.",
  },
  {
    name: "VoIP Integration for Contact Center",
    role: "IT BA",
    years: [2026],
    problem:
      "Customers were required to use their mobile airtime when contacting customer service, creating a barrier to engagement. Agents needed to perform manual customer verification during every call.",
    solution:
      "Implemented a VoIP calling feature within the mobile application, allowing customers to contact customer service through the app using internet connectivity. Integrated with CRM and contact center systems.",
    result:
      "Enhanced customer accessibility through in-app VoIP calling. Streamlined customer verification through automated CRM integration. Reduced Average Handling Time. Optimized contact center operating costs.",
  },
  {
    name: "E-Form Onboarding System",
    role: "Developer, Product Owner",
    years: [2020, 2021, 2022, 2023, 2024],
    problem:
      "Manual onboarding processes created delays and increased operational effort.",
    solution:
      "Developed a digital onboarding platform that enabled customers to submit forms and supporting documents electronically.",
    result:
      "Faster onboarding process. Reduced manual paperwork. Improved customer onboarding experience.",
  },
  {
    name: "Video Call System",
    role: "Product Owner",
    years: [2023, 2024],
    problem:
      "Certain customer verification processes required face-to-face interaction, creating operational constraints.",
    solution:
      "Implemented a secure video call platform to support remote customer verification and service interactions.",
    result:
      "Enabled remote customer engagement. Improved operational efficiency. Reduced dependency on physical visits.",
  },
  {
    name: "Face Biometric Authentication System",
    role: "Developer",
    years: [2024],
    problem:
      "Traditional authentication methods increased fraud risks and created friction during agent login to the system.",
    solution:
      "Implemented facial biometric authentication as part of the digital verification journey.",
    result:
      "Strengthened security controls. Reduced identity fraud risks.",
  },
];
