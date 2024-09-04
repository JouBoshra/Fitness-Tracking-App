import React from "react";

const Divider = ({ text }) => (
  <div className="flex items-center justify-center space-x-3">
    <span className="flex-grow bg-gray-300 h-px"></span>
    <span className="text-gray-300 hover:text-gray-600 hover:scale-110 transition-all duration-300">
      {text}
    </span>
    <span className="flex-grow bg-gray-300 h-px"></span>
  </div>
);

export default Divider;
