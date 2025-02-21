import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

//dummy json url
const URL = "https://dummyjson.com/products?limit=100";

const CustomScroll = () => {
  const [data, isLoading, error] = useFetch(URL);
  const [scrollPercntage, setScrollPercentage] = useState(0);
  //   console.log(data);
  // Function to handle scroll event
  const handleScroll = () => {
    // Get the current scroll position
    const scrollTop = document.documentElement.scrollTop;
    console.log("scrollTop", scrollTop);

    // Get the total scroll height
    const scrollHeight = document.documentElement.scrollHeight;
    console.log("scrollHeight", scrollHeight);

    // Get the client height
    const clientHeight = document.documentElement.clientHeight;
    console.log("clientHeight", clientHeight);

    // Calculate the percentage of the scroll
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

    // Set the scroll percentage
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //   console.log(scrollPercntage);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-sky-100 p-4">
      {/* Scroll Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-500 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollPercntage}%` }}
        ></div>
      </div>
      <h1 className="text-2xl w-full text-center font-bold bg-sky-500 text-white mb-6 py-2 rounded-xl">
        Custom Scroll
      </h1>
      <p className="text-center mb-4 border-2 rounded px-2 py-1 border-blue-500 text-sm ">
        🔝See the scroll progress bar at top while scrolling🔝
      </p>
      <div>
        {data &&
          data.products.map((product) => (
            <p key={product.id}>{product.title}</p>
          ))}
      </div>
    </div>
  );
};

export default CustomScroll;
