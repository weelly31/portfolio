// src/entities/Project.js
export const Project = {
  list: async () => [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A Dashboard site to showcase my skills and projects.",
      image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tech_stack: ["React.js", "Material-UI", "Framer Motion"],
      live_url: "https://yourportfolio.com",
      github_url: "https://github.com/yourusername/portfolio"
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for managing products and orders.",
      image_url: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=500&h=300&fit=crop",
      tech_stack: ["Next.js", "Tailwind CSS"],
      live_url: "https://dashboard.example.com",
      github_url: "https://github.com/yourusername/dashboard"
    }
  ]
};
