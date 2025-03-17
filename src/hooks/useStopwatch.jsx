import React, { useEffect, useRef, useState } from "react";

export const useStopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - elapsedTime;
      startTimeRef.current = startTime;

      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setElapsedTime(0);
    setLaps([]);
  };

  const lap = () => {
    if (isRunning) {
      setLaps([...laps, elapsedTime]);
    }
  };

  const clearLaps = () => {
    setLaps([]);
  };

  const getLapTime = (index) => {
    if (index === 0) return laps[0];
    return laps[index] - laps[index - 1];
  };

  return {
    isRunning,
    elapsedTime,
    laps,
    startStop,
    reset,
    lap,
    clearLaps,
    getLapTime,
  };
};
