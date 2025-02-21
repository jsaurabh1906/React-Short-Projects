import React from "react";

const Tags = ({ tag }) => {
  return (
    <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
      {tag}
    </div>
  );
};

export default Tags;
