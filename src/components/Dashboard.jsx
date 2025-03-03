import React, { useEffect, useState } from "react";
import projects from "../projects";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Search,
} from "lucide-react";

const Dashboard = ({ isCollapsed, setIsCollapsed }) => {
  const [search, setSearch] = useState("");

  // Collapse sidebar if screen width is below 480px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setIsCollapsed(true);
      }
    };

    // Set initial collapse state based on screen size
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsCollapsed]);

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } bg-gray-900 text-white p-4 transition-all duration-300 relative`}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-4 right-[-16px] bg-gray-700 text-white p-1 rounded-full"
      >
        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      {/* Sidebar Heading */}
      <div className="flex items-center space-x-2 mb-4">
        <LayoutDashboard />
        {!isCollapsed && <h1 className="text-xl font-bold">Dashboard</h1>}
      </div>

      {/* Search Bar */}
      {!isCollapsed && (
        <div className="h-8 flex items-center bg-gray-800 rounded-md mb-4 px-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search Projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-white ml-2 w-full"
          />
        </div>
      )}

      {/* Project List */}
      <ul className="space-y-2">
        {filteredProjects.map((project) => (
          <li key={project.name}>
            <Link
              to={project.path}
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded transition"
            >
              {project.icon}
              {!isCollapsed && <span>{project.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
