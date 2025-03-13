import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar (Dashboard) */}
      <Dashboard isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div className="flex flex-col flex-1 transition-all duration-300">
        {/* Header */}
        <header
          className={`bg-gray-900 shadow-md p-4 transition-all duration-300 pl-8`}
        >
          <h1 className="text-xl text-white font-bold">React Projects</h1>
        </header>

        {/* Main Content */}
        {/* className="flex-1 flex justify-center items-center bg-gray-100 p-4" */}
        <main className="h-full">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-3">
          © {new Date().getFullYear()} Project Dashboard
        </footer>
      </div>
    </div>
  );
};

export default Layout;
