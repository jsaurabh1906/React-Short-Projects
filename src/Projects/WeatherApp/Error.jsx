import React from "react";

const Error = ({ error, msg }) => {
  return (
    <div className="w-full max-w-3xl mx-auto my-4 p-6 rounded-2xl bg-red-500/20 backdrop-blur-md border border-red-500/30">
      <p className="text-center text-lg">{error}</p>
      <p className="text-center mt-2">{msg}</p>
    </div>
  );
};

export default Error;
