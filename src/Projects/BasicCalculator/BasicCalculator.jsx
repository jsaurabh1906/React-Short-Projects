import React, { useState } from "react";

const calciButtons = [
  "%",
  "CE",
  "C",
  "DEL",
  "1/x",
  "x²",
  "√x",
  "÷",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "+/-",
  "0",
  ".",
  "=",
];
const getButtonClass = (btnItem) => {
  switch (btnItem) {
    case "CE":
    case "C":
    case "DEL":
      return "bg-red-400 hover:bg-red-500 text-white";
    case "%":
    case "1/x":
    case "x²":
    case "√x":
      return "bg-sky-100 hover:bg-sky-200"; // Function buttons
    case "÷":
    case "x":
    case "-":
    case "+":
      return "bg-sky-500 hover:bg-sky-600 text-white"; // Operator buttons
    case "=":
      return "bg-green-500 hover:bg-green-600 text-white"; // Equals button
    default: // Numbers and "."
      return "bg-white hover:bg-sky-200";
  }
};

const BasicCalculator = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(null);

  const clearInput = () => {
    setInput("0");
    setResult(null);
  };
  const sliceInput = () => {
    setInput((prev) => prev.slice(0, -1) || "0");
  };
  const calculateResult = () => {
    try {
      console.log("Currrent Input to Evaluate:", input);
      const calculatedResult = eval(input.replace("x", "*").replace("÷", "/"));
      setResult(calculatedResult.toString());
      setInput("0");
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClick = (value) => {
    if (input === "0") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleBtnClick = (btnItem) => {
    switch (btnItem) {
      case "=":
        return calculateResult();
      case "C":
        return clearInput();
      case "CE":
      case "DEL":
        return sliceInput();
      case "1/x":
        setInput((prev) =>
          prev !== "0"
            ? (1 / parseFloat(prev)).toString()
            : "Error Dividing by 0"
        );
      case "x²":
        return setInput((prev) => (parseFloat(prev) ** 2).toString());
      case "√x":
        return setInput((prev) =>
          parseFloat(prev) >= 0
            ? Math.sqrt(parseFloat(prev)).toString()
            : "Error Negative Square Root"
        );
      case "+/-":
        return setInput((prev) => (parseFloat(prev) * -1).toString());
      case "%":
        return setInput((prev) => (parseFloat(prev) / 100).toString());
      default:
        handleClick(btnItem);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-sky-100 p-4">
      <h1 className="text-2xl w-full text-center font-bold bg-sky-700 text-white mb-6 py-2 rounded-2xl">
        Calculator
      </h1>
      <div className="w-80 p-4 bg-sky-900/50 rounded-lg shadow-lg">
        <div className="w-full mb-2 px-4 py-3 text-2xl text-white text-right font-bold border-b-2 border-b-sky-50">
          {input}
        </div>
        {/* {result !== null && ( */}
        <div
          className={`w-full px-4 mb-3 text-2xl text-white text-right font-bold bg-sky-700/40 rounded-md overflow-hidden transform transition-all duration-500 ease-in-out ${
            result
              ? "max-h-24 opacity-100 scale-y-100 py-3"
              : "max-h-0 opacity-0 scale-y-0 py-0"
          }`}
        >
          {result}
        </div>

        {/* )} */}
        <div className="grid grid-cols-4 gap-3">
          {calciButtons.map((btnItem, idx) => (
            <button
              key={idx}
              onClick={() => handleBtnClick(btnItem)}
              className={`bg-gray-100 rounded-md px-4 py-2 font-medium shadow-sm transition-all duration-300 ${getButtonClass(
                btnItem
              )}`}
            >
              {btnItem}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicCalculator;
