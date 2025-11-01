import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex flex-wrap items-center justify-between px-4 sm:px-10 z-50 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'py-6 bg-black/70' 
            : 'py-8 bg-transparent bg-opacity-100 border-b-0' 
        }`}
      >
        {/* Logo Section */}
        <Link to="/">
          <h2 className="text-xl font-lato tracking-widest text-white transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWT-McO63QQUS28GOhrzPjyFVmG4sJLrs_g&s"
              className="w-20 h-15 rounded transition transform hover:scale-105"
              alt="Logo"
            />
          </h2>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-white cursor-pointer hover:text-purple-400 transition"
            aria-label="Toggle navigation"
          >
            &#9776;
          </button>
        </div>

        {/* Navigation Links Container */}
        <div
          className={`md:flex md:w-auto transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'fixed inset-0 top-0 left-0 w-full h-full bg-black z-40 flex items-center justify-center' 
              : 'hidden'
          }`}
        >
          {/* Close button for mobile menu */}
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-6 text-white text-4xl hover:text-purple-400 transition"
              aria-label="Close navigation"
            >
              &times;
            </button>
          )}
          
          <div className={`flex flex-col md:flex-row gap-8 md:gap-8 items-center text-center text-white ${
            isOpen 
              ? 'text-2xl space-y-8' 
              : isScrolled 
                ? 'text-lg ease-in-out duration-200' 
                : 'text-xl'
          }`}>
            <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:text-xl ease-in-out cursor-pointer text-white"
          >
            About
          </Link>
          <Link
            to="/watchnow"
            onClick={() => setIsOpen(false)}
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:text-xl ease-in-out cursor-pointer text-white"
          >
            Watch now
          </Link>
          <Link
            to="/shop"
            onClick={() => setIsOpen(false)}
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:text-xl ease-in-out cursor-pointer text-white"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:text-xl ease-in-out cursor-pointer text-white"
          >
            Contact
          </Link>
          </div>
        </div> 
      </nav>
    </>
  );
};

export default Header;