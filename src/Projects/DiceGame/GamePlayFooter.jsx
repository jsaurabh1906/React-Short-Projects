import React from "react";

const GamePlayFooter = ({ onClose, onResetScore }) => {
  return (
    <footer className="mt-6 flex justify-center">
      <button
        onClick={onResetScore}
        className="bg-white hover:bg-brown-50 border-2 border-brown-700 text-brown-700 px-4 py-2 rounded-lg mr-2 transition-all duration-300 ease-in-out cursor-pointer"
      >
        Reset Score
      </button>
      <button
        onClick={onClose}
        className="bg-brown-700 hover:bg-brown-600 text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer"
      >
        Close
      </button>
    </footer>
  );
};

export default GamePlayFooter;
