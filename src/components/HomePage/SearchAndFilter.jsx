import { Filter, Search, X } from "lucide-react";
import React from "react";

const SearchAndFilter = ({
  categories,
  onSearch,
  onSetSearch,
  onSelectedCategory,
  onSetSelectedCategory,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
      {/* Search Input */}
      <div className="relative w-full sm:w-80">
        <Search size={20} className="absolute left-3 top-2.5 text-indigo-200" />
        <input
          type="text"
          placeholder="Search Projects..."
          className="w-full pl-10 p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-indigo-200"
          value={onSearch}
          onChange={(e) => onSetSearch(e.target.value)}
        />
        {/* Clear search button if search text exists */}
        {onSearch && (
          <button
            onClick={() => onSetSearch("")}
            className="absolute right-0 inset-y-0 pr-3 flex items-center cursor-pointer"
          >
            <X size={18} className="text-indigo-200 hover:text-indigo-300" />
          </button>
        )}
      </div>
      {/* Category Filter */}
      <div className="relative">
        <Filter className="absolute left-3 top-2.5 text-indigo-200" size={20} />
        <select
          value={onSelectedCategory}
          onChange={(e) => onSetSelectedCategory(e.target.value)}
          className="pl-10 p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:outline-none focus:ring-indigo-400 "
        >
          <option value="" className="">
            All Categories
          </option>
          {categories.map((category) => (
            <option key={category} value={category} className="">
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
