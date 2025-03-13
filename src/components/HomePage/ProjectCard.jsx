import { Heart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
const ProjectCard = ({ project, toggleFavorite, favorites }) => {
  //   console.log(project);
  return (
    <div className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg shadow-indigo-300 hover:scale-[102%] transition-all duration-300 overflow-hidden relative">
      <div className="p-6 ">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-indigo-500 text-indigo-100">
            {project.icon}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(project.name);
            }}
            className="text-indigo-400 hover:text-red-500 transition-colors duration-200"
          >
            <Heart
              size={20}
              fill={favorites.includes(project.name) ? "currentColor" : "none"}
              className={favorites.includes(project.name) ? "text-red-500" : ""}
            />
          </button>
        </div>
        <h3 className="text-lg font-semibold text-indigo-100 mt-2">
          {project.name}
        </h3>
        <div className="my-4 flex flex-wrap gap-2">
          {project.categories.slice(0, 3).map((c, index) => (
            <span
              key={index}
              className="px-2 py-1 text-[12px] rounded-full bg-indigo-100 text-indigo-700 font-semibold"
            >
              {c}
            </span>
          ))}
        </div>
        <Link
          to={project.path}
          className="text-indigo-200 hover:text-indigo-100"
        >
          View Project ➡️
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
