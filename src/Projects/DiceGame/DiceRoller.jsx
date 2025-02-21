import React, { useState } from "react";
import dice1 from "../../assets/images/dice-1.svg";
import dice2 from "../../assets/images/dice-2.svg";
import dice3 from "../../assets/images/dice-3.svg";
import dice4 from "../../assets/images/dice-4.svg";
import dice5 from "../../assets/images/dice-5.svg";
import dice6 from "../../assets/images/dice-6.svg";

const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

// This function is a React component that displays a dice image and allows the user to roll it
const DiceRoller = ({ rolledDiceNum, handleDiceRoll, selectedNum }) => {
  // This state variable is used to track whether the dice is currently rolling
  const [rolling, setRolling] = useState(false);

  //This function sets the state of the rolling variable to true, then after 500 milliseconds, it calls the handleDiceRoll function and sets the rolling variable to false
  const onRoll = () => {
    setRolling(true);
    setTimeout(() => {
      handleDiceRoll();
      setRolling(false);
    }, 500);
  };

  return (
    <div className=" w-40 h-40 mx-auto flex justify-center items-center mt-10 ">
      <img
        src={dices[rolledDiceNum - 1]}
        alt={`Dice - ${rolledDiceNum}`}
        className={`cursor-pointer transition-transform duration-500 ${
          !selectedNum ? "" : rolling ? "animate-spin" : ""
        }`}
        onClick={onRoll}
        loading="lazy"
      />
    </div>
  );
};

export default DiceRoller;
