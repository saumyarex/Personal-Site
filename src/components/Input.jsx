import React from "react";

function Input({ type = "text", lable, className = "", ...props }, ref) {
  const id = React.useId();
  return (
    <div className="w-full">
      {lable && (
        <label className="inline-block mb-2 text-gray-300" htmlFor={id}>
          {lable}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
