import React from "react";

function Container({ children, className = "" }) {
  return (
    <div className={`w-full py-5 pr-5  bg-gray-900   ${className}`}>
      {/* Background decoration */}
      {children}
      <div className="absolute -z-40 top-0 right-0 w-1/3 h-64 bg-gradient-to-l from-blue-600/5 to-transparent" />
      <div className="absolute -z-10 bottom-0 left-0 w-1/3 h-64 bg-gradient-to-r from-purple-600/5 to-transparent" />
    </div>
  );
}

export default Container;
