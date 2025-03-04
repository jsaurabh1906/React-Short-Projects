import React from "react";
import { motion } from "framer-motion";
import useRPS from "./useRPS";
import rockImg from "../assets/images/rock.png";
import paperImg from "../assets/images/paper.png";
import scissorsImg from "../assets/images/scissors.png";

const choicesImages = {
  Rock: rockImg,
  Paper: paperImg,
  Scissors: scissorsImg,
};
const RPSGame = ({ showAnimation = false, showScores = false, activeTab }) => {
  const {
    userChoice,
    computerChoice,
    result,
    animate,
    userScore,
    computerScore,
    handleChoice,
  } = useRPS({ activeTab });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Rock Paper Scissors</h1>
      {/* ScoreCard */}
      {showScores && (
        <div className="flex items-center justify-between w-64 bg-gray-800 text-white rounded-lg p-4 shadow-md mb-6">
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold text-green-400">You</p>
            <p className="text-2xl font-bold">{userScore}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold text-red-400">Computer</p>
            <p className="text-2xl font-bold">{computerScore}</p>
          </div>
        </div>
      )}
      {/* Choices */}
      <div className="flex gap-6 my-6">
        {Object.keys(choicesImages).map((choice) => (
          <motion.button
            key={choice}
            onClick={() => handleChoice(choice)}
            whileHover={showAnimation ? { scale: 1.1 } : {}}
            whileTap={showAnimation ? { scale: 0.9 } : {}}
            className="transition"
          >
            <div className="space-y-2 text-center">
              <img
                src={choicesImages[choice]}
                alt={choice}
                className="w-20 h-20 rounded-full object-cover ring-4 ring-gray-300 hover:ring-gray-400 transition-all"
              />
              <p className="text-lg font-medium">{choice}</p>
            </div>
          </motion.button>
        ))}
      </div>{" "}
      {/* Result Display */}
      {userChoice && (
        <motion.div
          className="text-center my-6 p-4 bg-gray-800 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg">
            You chose: <strong className="text-blue-400">{userChoice}</strong>
          </p>
          <p className="text-lg">
            Computer chose:{" "}
            <strong className="text-red-400">{computerChoice}</strong>
          </p>
          <motion.p
            className={`mt-4 text-xl font-bold py-2 px-4 rounded-lg ${
              result === "You win!"
                ? "bg-green-500"
                : result === "You lose!"
                ? "bg-red-500"
                : "bg-yellow-500"
            }`}
            animate={showAnimation ? { scale: animate ? [1, 1.2, 1] : 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {result}
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default RPSGame;
