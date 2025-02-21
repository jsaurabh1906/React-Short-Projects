import React, { useRef } from "react";
import dice from "../../assets/images/dice-bg.png";
import GameModal from "./GameModal";
const DiceGame = () => {
  const diceModalRef = useRef(null);

  const openModal = () => {
    diceModalRef.current.showModal();
  };

  return (
    <div className="w-full  flex flex-col items-center justify-center bg-brown-100 p-4">
      <header className="top-0 left-0 w-full z-10">
        <h1 className="text-2xl w-full text-center font-bold bg-brown-500 text-white mb-6 py-2 rounded-xl">
          Dice Game
        </h1>
      </header>
      <div className="flex flex-col items-center justify-center space-y-4">
        <img
          src={dice}
          alt="dice"
          className="w-full md:w-1/2 mx-auto rounded-2xl"
        />
        <GameModal ref={diceModalRef} />
        <button
          onClick={openModal}
          className="bg-brown-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-brown-600 focus:outline-none transition-colors duration-300"
        >
          Play Game
        </button>
      </div>
    </div>
  );
};

export default DiceGame;
