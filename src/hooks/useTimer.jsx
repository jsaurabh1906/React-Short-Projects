import React, { useEffect, useRef, useState } from "react";

const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timerDuration, setTimerDuration] = useState(60000);
  const [remainingTime, setRemainingTime] = useState(timerDuration);
  const [timerCompleted, setTimerCompleted] = useState(false);

  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - (timerDuration - remainingTime);

      startTimeRef.current = startTime;

      intervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTimeRef.current;

        const remainingTime = Math.max(0, timerDuration - elapsedTime);

        setRemainingTime(remainingTime);

        if (remainingTime === 0) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          setTimerCompleted(true);
          if (audioRef.current) {
            audioRef.current.play();
          }
        }
      }, 10);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timerDuration]);

  useEffect(() => {
    setTimerCompleted(false);
    setRemainingTime(timerDuration);
  }, [timerDuration]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setRemainingTime(timerDuration);
    clearInterval(intervalRef.current);
    setTimerCompleted(false);
  };

  const setTimer = (seconds) => {
    const newDuration = seconds * 1000;
    setTimerDuration(newDuration);
    setRemainingTime(newDuration);
    setTimerCompleted(false);
  };

  return {
    isRunning,
    remainingTime,
    timerCompleted,
    startStop,
    reset,
    setTimer,
    audioRef,
  };
};

export default useTimer;
