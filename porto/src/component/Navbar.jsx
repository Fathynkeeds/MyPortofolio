import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-around">
        <Link to="/" className="text-white text-lg font-semibold hover:text-gray-300">
          Homepage
        </Link>
        <Link to="/About" className="text-white text-lg font-semibold hover:text-gray-300">
          About 
        </Link>
        <Link to="/Contact" className="text-white text-lg font-semibold hover:text-gray-300">
          Contact
        </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
