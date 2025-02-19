import React, { useState } from "react";

const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [randomColor, setRandomColor] = useState("#000000");

  const generateRandomHexColor = () => {
    const randomHexColor = `#${Math.floor(Math.random() * 16777215) //16777215 is the maximum value for a 6-digit hexadecimal number
      .toString(16) // Converts the number to a hexadecimal string
      .padStart(6, "0")}`; // Ensures always 6 digits

    setRandomColor(randomHexColor);
    setTypeOfColor("HEX");
  };

  const generateRandomRGBColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setRandomColor(`rgb(${r}, ${g}, ${b})`);
    setTypeOfColor("RGB");
  };

  return (
    <div className="w-full  flex flex-col items-center justify-center bg-indigo-50 p-4">
      {/* Title */}
      <h1 className="text-2xl w-full text-center font-bold bg-indigo-700 text-white mb-6 py-2 rounded-2xl">
        Random Color Generator
      </h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={generateRandomHexColor}
          className="bg-indigo-700 hover:bg-indigo-800 text-white text-sm py-2 px-4 rounded-md transition"
        >
          Generate HEX Color
        </button>
        <button
          onClick={generateRandomRGBColor}
          className="bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4 rounded-md transition"
        >
          Generate RGB Color
        </button>
      </div>

      {/* Color Display Box */}
      <div
        className="w-64 h-64 flex flex-col items-center justify-center text-white text-xl font-bold rounded-lg shadow-md transition-all duration-300"
        style={{
          backgroundColor: randomColor,
          border: randomColor === "#ffffff" ? "1px solid #ccc" : "none",
          color: randomColor === "#ffffff" ? "#000" : "#fff",
        }}
      >
        <p>Type: {typeOfColor}</p>
        <p>{randomColor}</p>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
