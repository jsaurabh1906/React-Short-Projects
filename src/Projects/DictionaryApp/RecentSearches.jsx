import React from "react";
import { useDictionaryContext } from "./context/DictionaryContext";

const RecentSearches = () => {
  const { recentSearches, clearRecentSearches, fetchDefinition } =
    useDictionaryContext();
  const handleClearSearch = () => {
    clearRecentSearches();
  };
  return (
    <div className="w-[90%] bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Recent Searches</h3>
        <button
          onClick={handleClearSearch}
          className="text-sm font-semibold bg-red-400 hover:bg-red-500 px-4 py-2 rounded-md text-white transition-all duration-300"
        >
          Clear All
        </button>{" "}
      </div>
      <ul>
        {recentSearches.map((searchedWord, index) => (
          <li key={index}>
            <button
              onClick={() => fetchDefinition(searchedWord)}
              className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-100 cursor-pointer transition-all duration-300"
            >
              {searchedWord}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
