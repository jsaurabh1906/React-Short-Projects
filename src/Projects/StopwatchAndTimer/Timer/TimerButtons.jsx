import React from "react";

const TimerButtons = ({ setTimer }) => {
  const [customTime, setCustomTime] = React.useState(1);
  const presets = [
    { label: "30 sec", seconds: 30 },
    { label: "1 min", seconds: 60 },
    { label: "5 min", seconds: 300 },
    { label: "10 min", seconds: 600 },
  ];
  const handleCustomChange = () => {
    setTimer(customTime * 60);
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {presets.map((preset) => (
          <button
            key={preset.label}
            className="bg-sky-200 hover:bg-sky-300 text-sky-900 py-1 px-2 rounded"
            onClick={() => setTimer(preset.seconds)}
          >
            {preset.label}
          </button>
        ))}
      </div>
      <div className="mb-4 grid grid-cols-5 items-center gap-2">
        <label htmlFor="custom-time" className="col-span-2 text-sky-100">
          Custom Time(in mins)
        </label>
        <input
          type="number"
          min="1"
          value={customTime}
          onChange={(e) => setCustomTime(e.target.value)}
          className="col-span-1 w-full px-2 py-1 text-sky-900 border border-sky-100 rounded  focus:outline-none focus:ring-2 focus:ring-sky-300"
        />
        <button
          className="col-span-2 w-full bg-sky-200 hover:bg-sky-300 text-sky-900 py-1 px-2 rounded"
          onClick={handleCustomChange}
          disabled={!customTime || customTime < 1}
        >
          Set Custom
        </button>
      </div>
    </>
  );
};

export default TimerButtons;
