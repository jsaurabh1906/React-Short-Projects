import React from "react";
import { formatTime } from "../utils/timeFormatter";

const LapList = ({ laps, clearLaps, getLapTime }) => {
  return (
    <div
      className={`${
        laps.length > 0 ? "" : "hidden"
      } bg-sky-200/20 rounded-xl p-4 max-h-64 overflow-auto hide-scrollbar`}
    >
      <div className="flex justify-between mb-2">
        <h2 className="font-bold text-xl text-white">Laps</h2>
        <button
          onClick={clearLaps}
          className="font-semibold border-2 rounded-full text-red-400 hover:text-red-300 px-2 py-0.5 transition"
        >
          Clear
        </button>
      </div>
      <div className="space-y-2">
        {laps
          .map((lap, index) => {
            return (
              <div
                key={index}
                className=" flex justify-between items-center py-1 px-3 border-b border-sky-300 text-sky-100"
              >
                <span>{laps.length - index}</span>
                <span>{formatTime(getLapTime(index))}</span>
              </div>
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

export default LapList;
