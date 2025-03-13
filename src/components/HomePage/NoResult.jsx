import React from "react";

const NoResult = ({ setSearch, setSelectedCategory }) => {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl text-indigo-300 dark:text-gray-400">
        No projects found matching your criteria
      </h3>
      <button
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        onClick={() => {
          setSearch("");
          setSelectedCategory("");
        }}
      >
        Clear filters
      </button>
    </div>
  );
};

export default NoResult;
