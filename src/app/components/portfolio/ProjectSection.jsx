"use client";

import React, { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const data = await Project.list();
    setProjects(data);
  };

  const Project = {
    list: async () => [
      {
        id: 1,
        title: "Dashboard Website",
        description: "A Dashboard site to showcase my skills and projects.",
        image_url: "img/dashboard.png",
        tech_stack: ["React.js", "Material-UI", "Framer Motion"],
        live_url: "https://dashboardbywell.netlify.app/dashboard",
        github_url: "https://github.com/weelly31/test",
      },
      {
        id: 2,
        title: "E-Commerce Dashboard",
        description: "Admin dashboard for managing products and orders.",
        image_url: "img/dts.png",
        tech_stack: ["Next.js", "Tailwind CSS"],
        live_url: "https://dashboard.example.com",
        github_url: "https://github.com/yourusername/dashboard",
      },
      {
        id: 3,
        title: "Portfolio Website",
        description: "Personal portfolio to showcase my work and contact info.",
        image_url: "img/portfolio.png",
        tech_stack: ["React.js", "Tailwind CSS"],
        live_url: "https://portfolio.example.com",
        github_url: "https://github.com/yourusername/portfolio",
      },
    ],
  };

  // Get unique tech stacks
  const allTechs = Array.from(
    new Set(projects.flatMap((p) => p.tech_stack))
  ).sort();

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) =>
          project.tech_stack.includes(filter)
        );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Featured Projects</h2>
        <p className="text-gray-600 mb-8 text-center">
          A showcase of my recent work and the technologies I’ve used.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            className={`px-4 py-1 text-sm rounded-full border ${
              filter === "All"
                ? "bg-indigo-600 text-white border-indigo-600"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              className={`px-4 py-1 text-sm rounded-full border ${
                filter === tech
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div
                className="h-40 bg-cover bg-top"
                style={{ backgroundImage: `url(${project.image_url})` }}
              />
              <div className="p-4 flex flex-col justify-between h-[260px]">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 text-xs text-white">
                    {project.tech_stack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="bg-gray-400 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                    
                      <div className="flex gap-2 mt-2">
  <a
    href={project.live_url}
    target="_blank"
    className="flex-1 inline-flex items-center justify-center text-white bg-indigo-600 hover:bg-indigo-700 text-xs py-1.5 px-2 rounded"
  >
    <ExternalLink size={13} className="mr-1" />
    Live Demo
  </a>
  <a
    href={project.github_url}
    target="_blank"
    className="flex-1 inline-flex items-center justify-center border border-gray-300 hover:bg-gray-100 text-xs py-1.5 px-2 rounded"
  >
    <Github size={13} className="mr-1" />
    GitHub
  </a>
</div>

              </div>
            </div>
          ))}
        </div>

        {/* No projects found message */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-12">
            No projects found for selected filter.
          </p>
        )}
      </div>
    </section>
  );
}
