import React from "react";

const SwitchMode = ({ timerMode, setTimerMode }) => {
  return (
    <div className="flex">
      <button
        className={`flex-1 py-2 px-4 text-center text-lg font-semibold transition-all duration-300 cursor-pointer ${
          !timerMode
            ? "bg-sky-700 border-b-2  border-white text-sky-100"
            : "bg-white text-sky-700"
        } `}
        onClick={() => setTimerMode(false)}
      >
        Stopwatch
      </button>
      <button
        className={`flex-1 py-2 px-4 text-center text-lg font-semibold transition-all duration-300 cursor-pointer ${
          timerMode
            ? "bg-sky-700 border-b-2 border-white text-sky-100"
            : "bg-white text-sky-700"
        } `}
        onClick={() => setTimerMode(true)}
      >
        Timer
      </button>
    </div>
  );
};

export default SwitchMode;
