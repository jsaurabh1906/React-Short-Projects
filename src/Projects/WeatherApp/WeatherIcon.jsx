import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Sun,
} from "lucide-react";
import React from "react";

// Weather icon mapping component based on OpenWeatherMap icon codes
const WeatherIcon = ({ iconCode, size = 24 }) => {
  const iconProps = { size: size, className: "text-white" };

  // Map OpenWeatherMap icon codes to Lucide icons
  if (!iconCode) return <Sun {...iconProps} />;

  const code = iconCode.substring(0, 2);

  switch (code) {
    case "01": // clear sky
      return <Sun {...iconProps} />;
    case "02": // few clouds
    case "03": // scattered clouds
      return <Cloud {...iconProps} />;
    case "04": // broken clouds
      return <Cloud {...iconProps} />;
    case "09": // shower rain
      return <CloudDrizzle {...iconProps} />;
    case "10": // rain
      return <CloudRain {...iconProps} />;
    case "11": // thunderstorm
      return <CloudLightning {...iconProps} />;
    case "13": // snow
      return <CloudSnow {...iconProps} />;
    case "50": // mist
      return <CloudFog {...iconProps} />;
    default:
      return <Sun {...iconProps} />;
  }
};

export default WeatherIcon;
