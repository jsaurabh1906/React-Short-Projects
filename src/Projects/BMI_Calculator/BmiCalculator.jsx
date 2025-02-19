import React, { useState } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState(1);
  const [height, setHeight] = useState(1);
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    const squaredHeightInMeters = Math.pow(height / 100, 2);

    const bmi = weight / squaredHeightInMeters;

    setBmi(bmi.toFixed(2));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-cyan-100 p-4">
      <h1 className="text-2xl w-full text-center font-bold bg-cyan-700 text-white mb-6 py-2 rounded-2xl">
        BMI Calculator
      </h1>
      <div className="mb-4 bg-cyan-200/50 shadow-2xl p-4 rounded-xl">
        <form onSubmit={calculateBMI} className="flex flex-col gap-2">
          <label
            htmlFor="weight"
            className="mt-1 text-sm font-medium text-gray-700 "
          >
            Weight (kg)
          </label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          />
          <label className="mt-1 text-sm font-medium text-gray-700 ">
            Height (cm)
          </label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          />
          <button
            type="submit"
            className=" bg-cyan-700 text-white my-2 p-2 rounded-md hover:bg-cyan-600 transition-all duration-300 ease-in-out"
          >
            Calculate BMI
          </button>
        </form>
      </div>
      {bmi && (
        <div>
          <p className="text-lg text-cyan-900 font-semibold text-center">
            Your BMI is: {bmi}
          </p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
