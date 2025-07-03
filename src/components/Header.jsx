import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-8 px-10 bg-black/10 backdrop-blur-3xl z-50">
        <Link to="/">
          <h2 className="text-xl font-lato tracking-widest text-white transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWT-McO63QQUS28GOhrzPjyFVmG4sJLrs_g&s"
              className="w-20 h-15 rounded transition transform hover:scale-105"
              alt="Logo"
            />
          </h2>
        </Link>
        <div className="flex gap-8 items-center text-center">
          <Link
            to="/about"
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:text-xl ease-in-out cursor-pointer text-white"
          >
            About
          </Link>
          <Link
            to="/watchnow"
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:text-xl ease-in-out cursor-pointer text-white"
          >
            Watch now
          </Link>
          <Link
            to="/shop"
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:text-xl ease-in-out cursor-pointer text-white"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:text-xl ease-in-out cursor-pointer text-white"
          >
            Contact
          </Link>
        </div>
        <div className="text-3xl cursor-pointer">&#9776;</div>
      </nav>
    </>
  );
};

export default Header;
