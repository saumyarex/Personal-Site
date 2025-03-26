import React, { useState } from "react";

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  demoLink,
  codeLink,
  featured = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition-all duration-500 h-full flex flex-col m-3 ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className={`relative overflow-hidden ${featured ? "md:w-1/2" : ""}`}>
        <div
          className={`aspect-video bg-gray-700 overflow-hidden transition-transform duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        >
          <img
            src={image || "/api/placeholder/600/340"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tags overlay */}
        <div className="absolute top-0 left-0 p-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-900/80 text-gray-200 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        className={`p-6 flex flex-col flex-grow ${featured ? "md:w-1/2" : ""}`}
      >
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

        <p className="text-gray-300 mb-6 flex-grow">{description}</p>

        {/* Actions */}
        <div className="flex gap-4 mt-auto">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-md text-sm font-medium hover:from-blue-700 hover:to-blue-600 transition-colors duration-300"
            >
              Live Demo
            </a>
          )}

          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 text-gray-200 rounded-md text-sm font-medium hover:bg-gray-600 transition-colors duration-300"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
