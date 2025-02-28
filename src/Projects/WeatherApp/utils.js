// Function to format date
const formatDate = (dt) => {
  const date = new Date(dt * 1000);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
};

// Function to format day
const formatDay = (dt) => {
  const date = new Date(dt * 1000);
  return date.toLocaleDateString("en-US", { weekday: "short" });
};

// Function to format time
const formatTime = (dt) => {
  const date = new Date(dt * 1000);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Function to format time for sunrise and sunset
const formatTimeSun = (dt, timezone) => {
  // Create date in UTC
  const utcDate = new Date(dt * 1000);

  // Calculate target time by adding timezone offset
  const targetTime = new Date(utcDate.getTime() + timezone * 1000);

  // Extract hours and minutes directly
  let hours = targetTime.getUTCHours();
  let minutes = targetTime.getUTCMinutes();

  // Format as HH:MM
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
};

//format time for forcast card
const formatTimeForcast = (dt) => {
  const date = new Date(dt * 1000);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

// Conditional background classes based on weather condition
const getBackgroundClass = () => {
  if (!weather) return "from-blue-500 to-purple-600";

  const id = weather.weather[0].id;

  // Weather condition codes
  if (id >= 200 && id < 300) return "from-gray-700 to-gray-900"; // Thunderstorm
  if (id >= 300 && id < 400) return "from-blue-400 to-blue-600"; // Drizzle
  if (id >= 500 && id < 600) return "from-blue-600 to-indigo-800"; // Rain
  if (id >= 600 && id < 700) return "from-blue-200 to-indigo-400"; // Snow
  if (id >= 700 && id < 800) return "from-gray-400 to-gray-600"; // Atmosphere
  if (id === 800) return "from-blue-400 to-blue-600"; // Clear
  if (id > 800) return "from-blue-400 to-indigo-600"; // Clouds

  return "from-blue-500 to-purple-600";
};

export {
  formatTime,
  formatDate,
  formatDay,
  formatTimeSun,
  formatTimeForcast,
  getBackgroundClass,
};
