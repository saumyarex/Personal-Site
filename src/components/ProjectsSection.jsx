import React, { useState } from "react";
import { ProjectCard } from "./";

const ProjectsSection = () => {
  // Project filter categories
  const categories = ["All", "Web App", "Website", "UI/UX", "Mobile"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales tracking features.",
      image:
        "https://wrapmarketusercontent.com/assets/items/full/f0dcf3a6f213a380c2c56616320d3a36bd5f7393dcca1127c5a1363a98fed443.webp?v=1716114319",
      tags: ["React", "Redux", "Tailwind CSS", "Chart.js"],
      category: "Web App",
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/yourusername/project",
      featured: true,
    },
    {
      id: 2,
      title: "Travel Agency Website",
      description:
        "A responsive website for a travel agency featuring destination galleries, booking system, and customer reviews.",
      image:
        "https://www.3iplanet.com/wp-content/uploads/2024/08/Tour-and-Travels-Website-Design-.webp",
      tags: ["React", "Next.js", "GSAP", "Styled Components"],
      category: "Website",
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/yourusername/project",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A Kanban-style task management application with drag-and-drop functionality, user authentication, and team collaboration features.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQEtGYQYQ93XPA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1679503047532?e=2147483647&v=beta&t=9bLZh99hpSVF2qwZF89Fdp9yaY-hS71m0SJjUzfKfII",
      tags: ["React", "Firebase", "Material UI", "React DnD"],
      category: "Web App",
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/yourusername/project",
    },
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my latest web development projects, featuring modern
            technologies and responsive designs.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`${project.featured ? "lg:col-span-2" : ""}`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
                featured={project.featured}
              />
            </div>
          ))}
        </div>

        {/* Show more button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/saumyarex"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border-2 border-gray-600 text-gray-300 font-semibold hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>View More on GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute left-0 w-1/4 h-64 bg-gradient-to-r from-purple-600/10 to-transparent" />
    </section>
  );
};

export default ProjectsSection;
