import React, { useState } from "react";

const choices = ["Rock", "Paper", "Scissors"];
const RockPaperScissor = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (choice) => {
    //computer choice
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoiceSelection = choices[randomIndex];

    setComputerChoice(computerChoiceSelection);
    setUserChoice(choice);

    //detemine result
    determineWinner(choice, computerChoiceSelection);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a tie!");
    } else if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-900 text-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Simple Rock Paper Scissors</h1>
      <div className="flex gap-4 mb-6">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleChoice(choice)}
            className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {choice}
          </button>
        ))}
      </div>
      {userChoice && (
        <div className="text-lg text-center mt-4">
          <p>
            You chose: <strong>{userChoice}</strong>{" "}
          </p>
          <p>
            Computer chose: <strong>{computerChoice}</strong>
          </p>
          <p className="mt-2 text-xl font-bold">Result: {result}</p>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissor;
