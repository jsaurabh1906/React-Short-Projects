import { Droplets, Eye, GaugeCircle, Wind } from "lucide-react";
import React from "react";
import StatsItem from "./StatsItem";

const WeatherStats = ({ data }) => {
  const stats = [
    {
      icon: Wind,
      name: "Wind",
      label: "Wind",
      value: `${data?.wind.speed} m/s`,
    },
    {
      icon: Droplets,
      name: "Humidity",
      label: "Humidity",
      value: `${data?.main.humidity}%`,
    },
    {
      icon: GaugeCircle,
      name: "Pressure",
      label: "Pressure",
      value: `${data?.main.pressure} hPa`,
    },
    {
      icon: Eye,
      name: "Visibility",
      label: "Visibility",
      value: `${data?.visibility / 1000} km`,
    },
  ];

  return (
    <div className="flex justify-around flex-wrap gap-4 md:grid md:grid-cols-2 md:gap-8">
      {stats.map((stat) => (
        <StatsItem key={stat.name} {...stat} />
      ))}
    </div>
  );
};

export default WeatherStats;
