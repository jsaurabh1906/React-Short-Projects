import React from "react";
import { formatTime } from "../utils/timeFormatter";

const TimeDisplay = ({ time }) => {
  return (
    <div className="text-5xl text-sky-50 font-mono font-bold mb-4">
      {formatTime(time)}
    </div>
  );
};

export default TimeDisplay;
