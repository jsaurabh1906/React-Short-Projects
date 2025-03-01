import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import RecentSearches from "./RecentSearches";
import Definition from "./Definition";
import DictionaryContextProvider from "./context/DictionaryContext";
import { ThemeProvider } from "./context/ThemeContext";

const DictionaryApp = () => {
  return (
    <ThemeProvider>
      <DictionaryContextProvider>
        <div className="min-h-screen transition-colors duration-300  bg-blue-50 dark:bg-gray-900 dark:text-blue-50">
          <div className="container mx-auto p-6 ">
            <Header />
            <SearchBar />
            <div className="my-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <Definition />
              </div>
              <div className="lg:col-span-1">
                <RecentSearches />
              </div>
            </div>
          </div>
        </div>
      </DictionaryContextProvider>
    </ThemeProvider>
  );
};

export default DictionaryApp;
