import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      {...props}
      className={`relative my-5 px-4 py-2 w-auto h-10 rounded-lg ${bgColor} ${textColor} ${className}  hover:bg-blue-500 cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default Button;
