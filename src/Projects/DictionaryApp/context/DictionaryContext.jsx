import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";

export const DictionaryContext = React.createContext();

const DictionaryContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [recentSearches, setRecentSearches] = React.useState([]);

  //This function fetches the definition of a word from the dictionary API
  const fetchDefinition = async (word) => {
    //If the word is empty, show a warning and return
    if (!word.trim()) {
      toast.warn("Please enter a valid word");
      return;
    }
    //Set the loading state to true
    setIsLoading(true);
    //Set the error state to null
    setError(null);

    try {
      //Fetch the definition from the API
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
      );

      //If the response is not ok, show an info message and throw an error
      if (!response.ok) {
        throw new Error(`No Definition found for "${word}"`);
      }

      //Parse the response as JSON
      const data = await response.json();
      console.log(data);
      //Set the results state to the data
      setResults(data);

      //Add to recent searches if not present

      if (!recentSearches.includes(word.toLowerCase())) {
        //add to the beginning of the array
        const updatedRecentSearches = [
          word.toLowerCase(),
          ...recentSearches,
        ].slice(0, 10);

        setRecentSearches(updatedRecentSearches);
      }
    } catch (error) {
      //Set the error state to the error message
      setError(error.message);
      toast.error(error.message);
      //Set the results state to an empty array
      setResults([]);
    } finally {
      //Set the loading state to false
      setIsLoading(false);
    }
  };

  // This function clears the recent searches by setting the recentSearches state to an empty array and removing the "recentSearches" item from localStorage
  const clearRecentSearches = () => {
    // Set the recentSearches state to an empty array
    setRecentSearches([]);
    // Remove the "recentSearches" item from localStorage
    localStorage.removeItem("recentSearches");
  };

  //to load recent searches from local storage on initial render
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  //to save recent searches to local storage on every update
  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  return (
    <DictionaryContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        results,
        isLoading,
        error,
        fetchDefinition,
        recentSearches,
        clearRecentSearches,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryContextProvider;

export const useDictionaryContext = () => {
  const context = useContext(DictionaryContext);

  // Check if the context variable is defined
  if (!context) {
    // If not, throw an error
    throw new Error(
      "useDictionaryContext must be used within a DictionaryProvider"
    );
  }
  // Return the DictionaryContext
  return context;
};
