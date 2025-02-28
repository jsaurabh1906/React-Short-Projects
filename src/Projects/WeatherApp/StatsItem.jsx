import React from "react";

const StatsItem = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-center">
      <Icon className="mr-2 h-5 w-5 text-white/80" />
      <div>
        <div>{label}</div>
        <div>{value}</div>
      </div>
    </div>
  );
};

export default StatsItem;
