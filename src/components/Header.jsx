import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen  text-white  overflow-hidden">
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-8 px-10 bg-black/30 backdrop-blur-lg z-50">
        <h2 className="text-xl font-lato tracking-widest text-white transition">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWT-McO63QQUS28GOhrzPjyFVmG4sJLrs_g&s" className="w-20 h-15 rounded transition transform hover:scale-105" alt="" />
        </h2>
        <div className="flex gap-8 items-center">
          <Link to='/about' className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:text-xl ease-in-out cursor-pointer">
            About
          </Link>
          <Link to='/watchnow' className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:text-xl ease-in-out cursor-pointer">
            Watch now
          </Link>
          <Link to='/actors' className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:text-xl ease-in-out cursor-pointer">
            Actors
          </Link>
          <Link to='/contact' className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:text-xl ease-in-out cursor-pointer">
            Contact
          </Link>
        </div>
        <div className="text-3xl cursor-pointer">&#9776;</div>
      </nav>
    </div>
  );
};

export default Home;
