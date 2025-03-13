import React, { useEffect, useState } from "react";
import HomePageHeader from "./HomePageHeader";
import SearchAndFilter from "./SearchAndFilter";
import projects from "../../projects";
import ProjectCard from "./ProjectCard";
import NoResult from "./NoResult";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  //get all unique categories
  const allCategories = [
    ...new Set(projects.flatMap((project) => project.categories)),
  ].sort();

  //filter projects based on search and category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || project.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  //saving favorites to localstorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  //Toggle favorites
  const toggleFavorite = (projectName) => {
    //if project includes in favorites, remove
    if (favorites.includes(projectName)) {
      setFavorites(favorites.filter((name) => name !== projectName));
    } else {
      //else include to favorites
      setFavorites([...favorites, projectName]);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8">
        <div className="max-w-7xl mx-auto ">
          <HomePageHeader />
          <SearchAndFilter
            categories={allCategories}
            onSearch={search}
            onSetSearch={setSearch}
            onSelectedCategory={selectedCategory}
            onSetSelectedCategory={setSelectedCategory}
          />
          {/* Projects Grid cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.path}
                project={project}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            ))}
          </div>
          {/* No Results */}
          {filteredProjects.length === 0 && (
            <NoResult
              setSearch={setSearch}
              setSelectedCategory={setSelectedCategory}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
