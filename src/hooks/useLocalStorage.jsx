import { useEffect, useState } from "react";

// Export a custom hook called useLocalStorage that takes in a key and an initialValue as parameters
export const useLocalStorage = (key, initialValue) => {
  // Retrieve the stored value from localStorage or use the initialValue if it doesn't exist
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Try to get the item from localStorage
      const item = localStorage.getItem(key);
      console.log("item:", item);
      // If the item exists, parse it and return it, otherwise return the initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If there is an error, log it and return the initialValue
      console.log("Error while accessing LocalStorage:", error);
      return initialValue;
    }
  });

  // This useEffect hook is used to store a value in the LocalStorage when the key or storedValue changes
  useEffect(() => {
    try {
      // Try to set the value in the LocalStorage
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // If an error occurs, log it to the console
      console.error("Error while setting LocalStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
