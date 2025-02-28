import React from "react";
import { formatDate } from "./utils";
import { MapPin } from "lucide-react";

const LocationAndDate = ({ data }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      {/* location */}
      <div className="flex items-center ">
        <MapPin className="mr-2 h-5 w-5" />
        <h2 className="text-xl font-bold">
          {data?.name}, {data?.sys.country}
        </h2>
      </div>
      {/* date */}
      <div>
        <p>{formatDate(data?.dt)}</p>{" "}
      </div>
    </div>
  );
};

export default LocationAndDate;
