import React from "react";
import TimeDisplay from "../CommonComponents/TimeDisplay";
import TimerButtons from "./TimerButtons";
import ControlButtons from "../CommonComponents/ControlButtons";
import useTimer from "../../../hooks/useTimer";
const TimerMode = () => {
  const timer = useTimer();
  return (
    <div className="p-8 text-center">
      {/* time display */}

      <TimeDisplay time={timer.remainingTime} />

      {/* display when time's up */}
      {timer.timerCompleted && (
        <div className="text-red-600 font-semibold mb-4 animate-pulse">
          Time's up!
        </div>
      )}

      {/* Timer Presets Buttons */}
      <TimerButtons setTimer={timer.setTimer} />

      {/* Control Buttons */}
      <ControlButtons
        isRunning={timer.isRunning}
        startStop={timer.startStop}
        reset={timer.reset}
        timerMode={true}
      />
      <audio
        ref={timer.audioRef}
        src="https://cdnjs.cloudflare.com/ajax/libs/ion-sound/3.0.7/sounds/bell_ring.mp3"
      />
    </div>
  );
};

export default TimerMode;
