import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#432dd7");

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const hexToRgb = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-100 p-6">
      <h1 className="text-2xl w-full text-center font-bold bg-indigo-700 text-white mb-6 py-3 rounded-lg shadow-lg">
        Color Picker
      </h1>
      <div className="p-6 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg text-center">
        <label>Pick a color</label>
        <input
          type="color"
          value={color}
          onChange={handleChangeColor}
          className="w-40 h-15 border-none cursor-pointer"
        />
        <p className="mt-4 text-lg font-semibold">Selected Color:</p>
        <div
          className="w-32 h-16 mt-2 border rounded-lg"
          style={{ backgroundColor: color }}
        ></div>
        <p className="mt-2 text-gray-700">HEX: {color}</p>
        <p className="mt-2 text-gray-700">RGB: {hexToRgb(color)}</p>
      </div>
    </div>
  );
};

export default ColorPicker;
