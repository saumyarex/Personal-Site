import React from "react";

function Container({ children, className = "" }) {
  return (
    <div className={`w-full py-5 pr-5  bg-gray-900   ${className}`}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-gradient-to-l from-blue-600/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-64 bg-gradient-to-r from-purple-600/5 to-transparent" />
      {children}
    </div>
  );
}

export default Container;
