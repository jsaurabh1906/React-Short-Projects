import React from "react";
const NumberSelector = ({ selectedNum, setSelecteNum, error, setError }) => {
  // This function is used to handle the selection of a number
  const handleSelectNumber = (val) => {
    // Set the selected number to the value passed in
    setSelecteNum(val);
    setError(null);
  };

  return (
    <>
      <p className="text-center text-brown-700 px-6 py-2">Guess a Number</p>
      <div className="flex flex-wrap gap-2 justify-center p-2">
        {[1, 2, 3, 4, 5, 6].map((num, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectNumber(num)}
            className={` w-12 h-12 rounded-full flex justify-center items-center  font-bold transition-all duration-300 ease-in-out cursor-pointer ${
              selectedNum === idx + 1
                ? "bg-brown-700 hover:bg-brown-600 text-brown-50"
                : "bg-brown-100 hover:bg-brown-200 text-brown-700"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
      {error && <p className="text-center text-red-500 ">{error}</p>}
    </>
  );
};

export default NumberSelector;
