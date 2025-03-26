import React from "react";
//import projectUploadServices from "../appwrite/projectUpload";
import { ProjectCard } from "./";

function AllPosts({ className = "" }) {
  //const allPosts = projectUploadServices.getAllProjectsInfo();
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
      featured: false,
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
      featured: false,
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

  return (
    <div
      className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
    >
      {projects.map((post) => (
        <div key={post.title}>
          <ProjectCard
            title={post.title}
            description={post.description}
            image={post.image}
            tags={post.tags}
            demoLink={post.demoLink}
            codeLink={post.codeLink}
            featured={post.featured}
          />
        </div>
      ))}
    </div>
  );
}

export default AllPosts;
