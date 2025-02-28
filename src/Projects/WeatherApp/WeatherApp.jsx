import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { formatTime, formatTimeSun } from "./utils";
import Header from "./Header";
import LocationAndDate from "./LocationAndDate";
import CurrentWeather from "./CurrentWeather";
import WeatherStats from "./WeatherStats";
import SunTimes from "./SunTimes";
import ForecastSection from "./ForecastSection";
import Loader from "./Loader";
import Error from "./Error";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherApp = () => {
  // const [searchQuery, setSearchQuery] = useState("pune");
  const [cityName, setCityName] = useState("pune");
  const [debouncedSearch, setDebouncedSearch] = useState(cityName);

  const FETCH_WEATHER_DATA_URL = `https://api.openweathermap.org/data/2.5/weather?q=${debouncedSearch}&units=metric&appid=${WEATHER_API_KEY}`;
  const FETCH_FORECAST_DATA_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${debouncedSearch}&units=metric&appid=${WEATHER_API_KEY}`;

  const [weatherData, isLoading, error] = useFetch(FETCH_WEATHER_DATA_URL);
  const [forecastData, isLoadingForecast, errorForecast] = useFetch(
    FETCH_FORECAST_DATA_URL
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(cityName);
    }, 700);
    return () => clearTimeout(handler);
  }, [cityName]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (!cityName.trim()) {
      alert("Please enter a city name");
      return;
    }
    setDebouncedSearch(cityName);
  };

  // Conditional background classes based on weather condition
  const getBackgroundClass = () => {
    if (!weatherData) return "from-blue-500 to-purple-600";

    switch (weatherData.weather[0].main) {
      case "Clear":
        return "from-blue-400 to-blue-600"; // Bright and clear sky
      case "Clouds":
        return "from-gray-400 to-gray-700"; // Cloudy/overcast sky
      case "Rain":
        return "from-blue-600 to-indigo-900"; // Dark rainy clouds
      case "Drizzle":
        return "from-blue-400 to-gray-600"; // Light rain effect
      case "Thunderstorm":
        return "from-gray-700 to-gray-900"; // Dark stormy effect
      case "Snow":
        return "from-blue-200 to-indigo-400"; // Cold and snowy look
      case "Mist":
        return "from-gray-300 to-gray-500"; // Light misty/foggy effect
      case "Smoke":
        return "from-gray-500 to-gray-700"; // Smoggy and hazy effect
      case "Haze":
        return "from-orange-300 to-orange-500"; // Sunset-like haze effect
      case "Dust":
        return "from-yellow-500 to-orange-700"; // Dust storm-like colors
      case "Fog":
        return "from-gray-400 to-gray-600"; // Similar to mist but denser
      case "Sand":
        return "from-yellow-400 to-orange-600"; // Sandstorm effect
      case "Ash":
        return "from-gray-600 to-gray-900"; // Volcanic ash dark effect
      case "Squall":
        return "from-blue-800 to-gray-900"; // Intense rainstorm effect
      case "Tornado":
        return "from-gray-900 to-black"; // Extreme tornado storm effect
      default:
        return "from-blue-500 to-purple-600"; // Default gradient
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${getBackgroundClass()} p-4 md:p-8 text-white flex flex-col justify-start`}
    >
      {/* Header and Search */}
      <Header
        // handleSubmit={handleSearch}
        handleSubmit={(e) => e.preventDefault()}
        searchTerm={cityName}
        setSearchTerm={setCityName}
      />
      {/* isplay Error Messages */}
      {(error || errorForecast) && (
        <>
          {error && (
            <Error error={error} msg={"Please try another city name"} />
          )}
          {errorForecast && (
            <Error
              error={errorForecast}
              msg={"Failed to load Forecast. Please try another city name"}
            />
          )}
        </>
      )}
      {/* Loading State */}
      {(isLoading || isLoadingForecast) && <Loader />}

      {/* Complete Weather Details */}
      {!isLoading && !error && weatherData && (
        <main>
          {" "}
          {/* Weather */}
          <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg mb-6 relative">
            <div className="p-6 md:p-8">
              {/* location and date */}
              <LocationAndDate data={weatherData} />

              {/* Complete Weather Stats */}
              <div className="flex flex-col md:flex-row justify-around gap-4">
                {/*Current Weather*/}
                <CurrentWeather data={weatherData} />
                {/* Weather Stats */}
                <WeatherStats data={weatherData} />
              </div>
            </div>
          </div>
          {/* Sun Timings */}
          <div className="w-full max-w-3xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 ">
            <SunTimes
              sunrise={formatTimeSun(
                weatherData?.sys.sunrise,
                weatherData?.timezone
              )}
              sunset={formatTimeSun(
                weatherData?.sys.sunset,
                weatherData?.timezone
              )}
            />
          </div>
          {/* Forecast */}
          {!isLoadingForecast && !errorForecast && forecastData && (
            <div className="w-full max-w-3xl mx-auto">
              <ForecastSection forecast={forecastData} />
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default WeatherApp;
