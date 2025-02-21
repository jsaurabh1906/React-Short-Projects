import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import DiceRoller from "./DiceRoller";
import GamePlayHeader from "./GamePlayHeader";
import NumberSelector from "./NUmberSelector";
import GamePlayFooter from "./GamePlayFooter";
import InfoModal from "./InfoModal";

const GameModal = forwardRef((props, ref) => {
  // Create references for the game modal and info modal
  const gameModalRef = useRef(null);
  const infoModalRef = useRef(null);
  // Create state variables for score, selected number, rolled dice number, and error
  const [score, setScore] = useState(0);
  const [selectedNum, setSelecteNum] = useState(null);
  const [rolledDiceNum, setRolledDiceNum] = useState(5);
  const [error, setError] = useState(false);

  // Expose methods to the parent component
  useImperativeHandle(ref, () => ({
    showModal: () => {
      gameModalRef.current.showModal();
      gameModalRef.current.classList.remove("slide-out-top");
      gameModalRef.current.classList.add("slide-in-top");
    },
    closeModal: () => {
      gameModalRef.current.classList.remove("slide-in-top");
      gameModalRef.current.classList.add("slide-out-top");

      setTimeout(() => {
        gameModalRef.current.close();
        gameModalRef.current.classList.remove("slide-out-top");
      }, 500);
    },
  }));

  //This function generates a random number between 1 and 6
  const generateRandomNumber = () => {
    //Generate a random number between 0 and 5
    return Math.floor(Math.random() * 6) + 1;
  };

  // Function to handle dice roll
  const handleDiceRoll = () => {
    // Check if a number is selected
    if (!selectedNum) {
      setError("Please select a number");
      return;
    }
    const randomNum = generateRandomNumber();
    console.log("randomNum :", randomNum);
    setRolledDiceNum(randomNum);

    // Check if the selected number is equal to the random number
    if (selectedNum === randomNum) {
      // If it is, increase the score by the random number
      setScore((prevScore) => prevScore + randomNum);
      // Set the selected number to null
      setSelecteNum(null);
    } else {
      // If it is not, decrease the score by 2
      setScore((prevScore) => prevScore - 2);
      // Set the selected number to null
      setSelecteNum(null);
    }
  };

  // This function resets the score to 0
  const handleResetScore = () => {
    // Set the score state to 0
    setScore(0);
  };

  return (
    <dialog
      className="bg-brown-50 w-[90%] md:w-4xl h-auto mx-auto mt-15 rounded-2xl shadow-2xl shadow-brown-600 backdrop:bg-brown-800/80"
      ref={gameModalRef}
    >
      <InfoModal ref={infoModalRef} />
      <div className="w-full h-full ">
        {/* Header */}
        <GamePlayHeader
          onInfoClick={() => infoModalRef.current.showModal()}
          onClose={() => ref.current.closeModal()}
        />

        {/* Content */}
        <main>
          {/* Score */}
          <h2 className="text-2xl md:text-4xl text-center text-brown-700 font-extrabold py-6 ">
            Your Score: {score}
          </h2>

          {/* Guess Numbers */}
          <NumberSelector
            selectedNum={selectedNum}
            setSelecteNum={setSelecteNum}
            error={error}
            setError={setError}
          />

          {/* dice play */}
          <DiceRoller
            handleDiceRoll={handleDiceRoll}
            rolledDiceNum={rolledDiceNum}
            selectedNum={selectedNum}
          />
        </main>

        {/* footer */}
        <GamePlayFooter
          onResetScore={handleResetScore}
          onClose={() => ref.current.closeModal()}
        />
      </div>
    </dialog>
  );
});

export default GameModal;
