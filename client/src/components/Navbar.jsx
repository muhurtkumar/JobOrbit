import React from "react";
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img src={logo} alt="" />
        <div className="flex gap-4 max-sm:text-xs">
          <button className="text-gray-600">Recruiter Login</button>
          <button className="bg-blue-600 text-white x-6 sm:px-9 py-2 rounded-full">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
