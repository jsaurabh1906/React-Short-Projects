import React from "react";
import { IoCloseCircle, IoInformationCircle } from "react-icons/io5";

const GamePlayHeader = ({ onInfoClick, onClose }) => {
  return (
    <header className="flex justify-between items-center px-6 py-4 text-brown-700  border-b border-brown-600">
      {/* info button */}
      <button
        onClick={onInfoClick}
        className="flex items-center gap-2 cursor-pointer"
      >
        <IoInformationCircle className="" size={20} />
        <span className="text-sm font-bold">Info</span>
      </button>
      {/* title */}
      <h1 className="text-2xl font-bold">Dice Game</h1>
      {/* close button */}
      <IoCloseCircle
        // onClick={() => ref.current.closeModal()}
        onClick={onClose}
        size={20}
        className="cursor-pointer"
      />
    </header>
  );
};

export default GamePlayHeader;

// {/* <header className="flex justify-between items-center px-6 py-2 text-brown-700  border-b border-brown-600">
// {/* info */}
// <button
//   onClick={() => console.log("info")}
//   className="flex items-center gap-2 cursor-pointer"
// >
//   <IoInformationCircle className="" size={20} />
//   <span className="text-sm font-bold">Info</span>
// </button>
// {/* title */}
// <h1 className="text-2xl font-bold text-center py-5">Dice Game</h1>
// {/* close button */}
// <IoCloseCircle
//   onClick={() => ref.current.closeModal()}
//   size={20}
//   className="cursor-pointer"
// />
// </header> */}
