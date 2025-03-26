import React from "react";

function Sidebar({ name, email, phoneNo, location, className = "" }) {
  return (
    <>
      <div
        className={`sm:flex flex-col text-white items-start bg-gray-800 h-lvh p-5 mt-0 hidden rounded-2xl  ${className}`}
      >
        <h2 className="text-white font-bold">{name}</h2>
        <div className="flex flex-col items-start">
          <span>{email}</span>
          <span>{phoneNo}</span>
          <span>{location}</span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
