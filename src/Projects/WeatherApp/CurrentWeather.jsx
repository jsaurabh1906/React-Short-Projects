import React from "react";
import WeatherIcon from "./WeatherIcon";

const CurrentWeather = ({ data }) => {
  return (
    <div className="my-4 flex items-center justify-center rounded-lg gap-6">
      <div>
        <WeatherIcon iconCode={data?.weather[0].icon} size={64} />
      </div>
      <div>
        <div className="text-5xl font-bold">
          {/* {Math.round(data?.main.temp?.tofixed(1))}°C */}
          {data?.main.temp?.toFixed(1)}°C
        </div>
        <div className="text-lg capitalize">{data?.weather[0].description}</div>
        <div className="text-sm text-white/80">
          Feels like {Math.round(data?.main.feels_like)}°C
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
