import React, { useRef, useState } from "react";
import Header from "./CommonComponents/Header";
import SwitchMode from "./CommonComponents/SwitchMode";
import TimerButtons from "./Timer/TimerButtons";
import TimerMode from "./Timer/TimerMode";
import StopwatchMode from "./Stopwatch/StopwatchMode";

const StopwatchTimerApp = () => {
  const [timerMode, setTimerMode] = useState(false);
  const audioRef = useRef(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b  from-[#7474bf]  to-[#348ac7]">
      <audio
        ref={audioRef}
        src="https://cdnjs.cloudflare.com/ajax/libs/ion-sound/3.0.7/sounds/bell_ring.mp3"
      />
      <div className="w-full max-w-md bg-sky-200/10 backdrop-blur-2xl rounded-lg shadow-sm shadow-sky-200  overflow-hidden">
        {/* Header */}
        <Header />

        {/* Switch Modes between Stopwatch and Timer */}
        <SwitchMode timerMode={timerMode} setTimerMode={setTimerMode} />

        {/* Render Appropriate Mode */}
        {timerMode ? <TimerMode /> : <StopwatchMode />}
      </div>
    </div>
  );
};

export default StopwatchTimerApp;

// {/* <div className="p-8 text-center">
// {/* Time Display */}
// <div className="text-5xl font-bold font-mono mb-4">Time</div>
// {/* Timer Completed Message */}
// {timerMode && (
//   <div className="text-red-600 font-semibold mb-4 animate-pulse">
//     Time's up!
//   </div>
// )}
// {/* Timer Buttons (only for timer mode)*/}
// {timerMode && <TimerButtons />}
// {/* Control Buttons */}
// <div className="flex space-x-2 justify-center mb-4">
//   <button className="px-4 py-2 rounded-md font-semibold">
//     Start/stop
//   </button>
// </div>
// Timer
// </div> */}
