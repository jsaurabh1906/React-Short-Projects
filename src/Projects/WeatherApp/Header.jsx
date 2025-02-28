import { Search } from "lucide-react";
import React from "react";

const Header = ({ handleSubmit, searchTerm, setSearchTerm }) => {
  return (
    <header className="w-full mx-auto max-w-3xl mb-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Weather Forecast
        </h1>
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            placeholder="Search city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white/20 rounded-full py-2 pl-10 pr-4 text-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 w-full md:w-48"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/70" />
        </form>
      </div>
    </header>
  );
};

export default Header;
