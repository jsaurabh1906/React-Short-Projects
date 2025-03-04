import React, { useState } from "react";
import { motion } from "framer-motion";

import rockImg from "./assets/images/rock.png";
import paperImg from "./assets/images/paper.png";
import scissorsImg from "./assets/images//scissors.png";
import winSound from "./assets/sounds/win1.mp3";
import loseSound from "./assets/sounds/lost1.mp3";
import tieSound from "./assets/sounds/tie1.mp3";

const choices = ["Rock", "Paper", "Scissors"];
const choicesImges = { Rock: rockImg, Paper: paperImg, Scissors: scissorsImg };
const RockPaperScisscorsAnimate = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [animate, setAnimate] = useState(false);

  const playSound = (sound) => {
    if (sound) {
      const audio = new Audio(sound);
      audio.play().catch((err) => console.error("Failed to play audio: ", err));
    }
  };

  const handleChoice = (choice) => {
    setAnimate(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoiceSelection = choices[randomIndex];

      setComputerChoice(computerChoiceSelection);
      setUserChoice(choice);

      //detemine result
      determineWinner(choice, computerChoiceSelection);
      setAnimate(false);
    }, 700);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a tie!");
      playSound(tieSound);
    } else if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      setResult("You win!");
      playSound(winSound);
    } else {
      setResult("You lose!");
      playSound(loseSound);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Rock Paper Scissors</h1>
      {!userChoice && <p>Choose your item</p>}
      <div className="flex gap-4 my-6">
        {choices.map((choice) => (
          <motion.button
            key={choice}
            onClick={() => handleChoice(choice)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="transition"
          >
            <div className="space-y-2">
              <img
                src={choicesImges[choice]}
                alt={choice}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200 hover:ring-gray-300"
              />
              <p>{choice}</p>
            </div>
          </motion.button>
        ))}
      </div>
      {userChoice && (
        <motion.div
          className="text-lg text-center my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            You chose: <strong>{userChoice}</strong>
          </p>
          <p>
            Computer chose: <strong>{computerChoice}</strong>
          </p>
          <motion.p
            className="mt-2 text-xl font-bold"
            animate={{ scale: animate ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5 }}
          >
            {result}
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default RockPaperScisscorsAnimate;
