import React from "react";
import TimeDisplay from "../CommonComponents/TimeDisplay";
import ControlButtons from "../CommonComponents/ControlButtons";
import LapList from "./LapList";
import { useStopwatch } from "../../../hooks/useStopwatch";

const StopwatchMode = () => {
  const stopwatch = useStopwatch();
  return (
    <div className="p-8 text-center">
      <TimeDisplay time={stopwatch.elapsedTime} />
      <ControlButtons
        isRunning={stopwatch.isRunning}
        startStop={stopwatch.startStop}
        reset={stopwatch.reset}
        lap={stopwatch.lap}
        timerMode={false}
      />

      <LapList
        laps={stopwatch.laps}
        clearLaps={stopwatch.clearLaps}
        getLapTime={stopwatch.getLapTime}
      />
    </div>
  );
};

export default StopwatchMode;
