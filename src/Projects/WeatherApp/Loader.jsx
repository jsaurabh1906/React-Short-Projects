import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
    </div>
  );
};

export default Loader;
