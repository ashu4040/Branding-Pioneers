import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between bg-white items-center p-6 ">
        <h2 className="text-2xl font-bold text-purple-700 flex flex-col sm:pl-48">
          <span>Branding</span> <span>Pioneers</span>
        </h2>
        <button className="bg-purple-700 text-white px-4 py-2 rounded-lg sm:mr-48">
          Get Started
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
