import React from "react";
import { useDictionaryContext } from "./context/DictionaryContext";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, fetchDefinition, isLoading } =
    useDictionaryContext();

  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    fetchDefinition(inputValue);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto px-4">
        <div className="relative flex items-center">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for a word..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-4 pr-12 rounded-xl shadow-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition-all text-lg placeholder:text-blue-900 dark:placeholder:text-blue-50"
            aria-label="Search for a word"
          />

          {/* Search Button */}
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            aria-label="Search"
            aria-disabled={isLoading || !inputValue.trim()}
          >
            {isLoading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              <div className="space-x-1 flex items-center justify-center">
                <p>Search</p>
              </div>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
