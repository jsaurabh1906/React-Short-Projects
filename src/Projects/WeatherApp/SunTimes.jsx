import { Sunrise, Sunset } from "lucide-react";
import React from "react";

const SunTimes = ({ sunrise, sunset }) => {
  return (
    <div className="flex flex-wrap justify-between items-center">
      {/* Sunrise Section */}
      <div className="flex items-center justify-center gap-3">
        <Sunrise className="text-yellow-300" />
        <div className="">
          <div className="text-sm text-white/80">Sunrise</div>
          <div className="font-medium">{sunrise}</div>
        </div>
      </div>
      {/* Sunset Section */}
      <div className="flex items-center gap-2">
        <Sunset className="text-orange-400" />
        <div className="">
          <div className="text-sm text-white/80">Sunset</div>
          <div className="font-medium">{sunset}</div>
        </div>
      </div>
    </div>
  );
};

export default SunTimes;
