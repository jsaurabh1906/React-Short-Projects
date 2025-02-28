import React from "react";
import { formatDate, formatDay, formatTimeForcast } from "./utils";
import WeatherIcon from "./WeatherIcon";

const ForecastSection = ({ forecast }) => {
  if (!forecast || !forecast.list || forecast.list.length === 0) {
    return null;
  }

  // Function to group forecasts by day and find min/max temperatures
  const groupForecastByDay = (forecastList) => {
    // console.log("=== Grouping Forecast Data by Day ===");
    const dailyData = {};

    forecastList.forEach((item, index) => {
      const date = new Date(item.dt * 1000);
      // const dateStr = date.toISOString().split("T")[0];
      const dateStr = formatTimeForcast(item.dt);
      // console.log(`\n🔹 Processing item ${index + 1}: ${dateStr}`);
      // console.log(
      //   "   ➡ Temperature:",
      //   item.main.temp_min,
      //   "-",
      //   item.main.temp_max
      // );

      if (!dailyData[dateStr]) {
        dailyData[dateStr] = {
          minTemp: item.main.temp_min,
          maxTemp: item.main.temp_max,
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        };
        // console.log("   ✅ Added new entry:", dailyData[dateStr]);
      } else {
        // console.log("   🔄 Before update:", dailyData[dateStr]);
        dailyData[dateStr].minTemp = Math.min(
          dailyData[dateStr].minTemp,
          item.main.temp_min
        );
        dailyData[dateStr].maxTemp = Math.max(
          dailyData[dateStr].maxTemp,
          item.main.temp_max
        );
        // console.log("   🔄 After update:", dailyData[dateStr]);
        // Choose an icon from midday forecast (if available)
        const hours = date.getHours();
        if (hours === 12) {
          dailyData[dateStr].icon = item.weather[0].icon;
          dailyData[dateStr].description = item.weather[0].description;
        }
      }
    });

    // console.log("\n=== Final Grouped Data ===");
    // console.log(dailyData); // Final result
    return dailyData;
  };

  const dailyForecasts = groupForecastByDay(forecast.list);
  // Get 5 days data
  const fiveDayForecast = Object.entries(dailyForecasts).slice(1, 6);

  // console.log("=== Five Day Forecast ===");
  // console.log(fiveDayForecast);

  return (
    <>
      <h3 className="text-xl font-semibold my-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {fiveDayForecast.map(([date, data], index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            <div className="p-4 flex flex-col items-center">
              <div className="font-medium mb-2">{date}</div>
              <WeatherIcon iconCode={data.icon} size={40} />
              <div className="text-lg font-bold mt-2">
                <div className="text-center text-white/80 text-xs font-normal">
                  Min/Max
                </div>
                <div>
                  {Math.round(data.minTemp)}°C / {Math.round(data.maxTemp)}°C
                </div>
              </div>
              <div className="text-sm text-center mt-1 text-white/80">
                {data.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ForecastSection;
