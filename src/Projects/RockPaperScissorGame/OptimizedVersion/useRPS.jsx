import { useState, useEffect } from "react";
import winSound from "../assets/sounds/win1.mp3";
import loseSound from "../assets/sounds/lost1.mp3";
import tieSound from "../assets/sounds/tie1.mp3";

const choices = ["Rock", "Paper", "Scissors"];

const useRPS = ({ activeTab }) => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const playSound = (sound) => {
    if (sound) {
      const audio = new Audio(sound);
      audio.play().catch((err) => console.log("Failed to play audio: ", err));
    }
  };

  const handleChoice = (choice) => {
    setAnimate(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoiceSelection = choices[randomIndex];

      setUserChoice(choice);
      setComputerChoice(computerChoiceSelection);

      determineWinner(choice, computerChoiceSelection);
      setAnimate(false);
    }, 700);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a tie!");
      playSound(tieSound);
      return;
    }

    if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      setResult("You win!");
      playSound(winSound);
      setUserScore((prev) => prev + 1);
    } else {
      setResult("You lose!");
      playSound(loseSound);
      setComputerScore((prev) => prev + 1);
    }
  };

  // Reset scores when tab changes
  useEffect(() => {
    setUserScore(0);
    setComputerScore(0);
  }, [activeTab]);

  return {
    userChoice,
    computerChoice,
    result,
    animate,
    userScore,
    computerScore,
    handleChoice,
  };
};

export default useRPS;
