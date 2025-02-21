import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductCard from "./ProductCard";

// Dummy JSON Api
const BASE_URL = "https://dummyjson.com/products";

const LoadMoreData = () => {
  // State to keep track of the number of items to skip
  const [skip, setSkip] = useState(0);
  const limit = 50; // limit of data to be fetched
  const [data, isLoading, error] = useFetch(
    `${BASE_URL}?limit=${limit}&skip=${skip}`
  );
  const [allProducts, setAllProducts] = useState([]);

  // This useEffect hook is triggered whenever the data prop changes
  useEffect(() => {
    // Check if data exists, if it does, check if it has a products property and if that property has a length greater than 0
    if (data && data.products && data.products.length > 0) {
      // If all conditions are met, set the allProducts state to the previous state plus the new products
      setAllProducts((prev) => [...prev, ...data.products]);
    }
  }, [data]); // The useEffect hook will only run when the data prop changes

  // Handle Load More button Click
  const handleLoadMore = () => {
    setSkip((prev) => prev + limit);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-700 p-4">
      <h1 className="text-2xl w-full text-center font-bold bg-gray-500 text-white mb-6 py-2 rounded-xl">
        Load More Data
      </h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div>
        <button
          className="bg-blue-500 text-white rounded-lg px-3 py-2 gap-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-blue-600 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleLoadMore}
          disabled={isLoading || allProducts.length >= 100}
        >
          {isLoading
            ? "Loading..."
            : allProducts.length >= 100
            ? "No More Products"
            : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default LoadMoreData;

// fix for duplicate keys
// useEffect(() => {
//   if (data && data.products && data.products.length > 0) {
//     setAllProducts((prev) => {
//       const uniqueProducts = new Map();
//       [...prev, ...data.products].forEach((product) => {
//         uniqueProducts.set(product.id, product); // Ensures only unique product IDs
//       });
//       return Array.from(uniqueProducts.values()); // Converts Map back to an array
//     });
//   }
// }, [data]); // Runs whenever `data` updates
