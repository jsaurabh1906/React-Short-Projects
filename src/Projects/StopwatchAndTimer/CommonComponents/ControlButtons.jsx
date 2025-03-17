import React from "react";

const ControlButtons = ({ isRunning, reset, lap, timerMode, startStop }) => {
  const disabled = !isRunning;
  return (
    <div className="flex space-x-2 justify-center mb-4">
      <button
        className={`px-4 py-2 rounded-md font-semibold text-white cursor-pointer ${
          isRunning
            ? "bg-red-500 hover-bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        } `}
        onClick={startStop}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        onClick={reset}
        className="px-4 py-2 rounded-md font-semibold bg-slate-500 hover:bg-slate-600 text-white cursor-pointer"
      >
        Reset
      </button>
      {!timerMode && (
        <button
          disabled={disabled}
          onClick={lap}
          className={`px-4 py-2 rounded-md font-semibold bg-indigo-500 hover:bg-indigo-600 text-white ${
            disabled ? "bg-indigo-200 opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Lap
        </button>
      )}
    </div>
  );
};

export default ControlButtons;
