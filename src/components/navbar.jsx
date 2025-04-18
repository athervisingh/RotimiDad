import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === '/';



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div 
      className={`w-full h-[8vh] absolute top-0 left-0 z-[1000] transition-all duration-300 ${
        isHome ? 'bg-white/40 text-black' : 'bg-white shadow-xl text-white'
      }`}
      // style={{
      //   backgroundColor: isHome ? 'bg-white/40' : 'red',
      //   // color: isHome ? '#000' : '#fff',
      //   // padding: '1rem',
      // }}
    >
      {/* Desktop Layout */}
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex gap-2 justify-around items-center h-16">
          {/* Logo and Name */}
          <div className="flex items-center">
            <img className="w-16 sm:w-20 md:w-24 m-2 h-auto" src="/images/logo.png" alt="Logo" />
            <span className="hidden sm:block w-auto ml-2">
              <img className="h-5 sm:h-7" src="/images/name.png" alt="Name" />
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-6 bg-black/50 h-10 px-4 rounded-xl justify-center">
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold text-sm lg:text-base px-2" : "text-white hover:text-gray-300 text-sm lg:text-base px-2"
            }>
              Home
            </NavLink>
            <NavLink to="/courses-and-duration" className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold text-sm lg:text-base px-2" : "text-white hover:text-gray-300 text-sm lg:text-base px-2"
            }>
              Courses
            </NavLink>
            <NavLink to="/universities" className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold text-sm lg:text-base px-2" : "text-white hover:text-gray-300 text-sm lg:text-base px-2"
            }>
              Universities
            </NavLink>
            <NavLink to="/contact-us" className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold text-sm lg:text-base px-2" : "text-white hover:text-gray-300 text-sm lg:text-base px-2"
            }>
              Contact
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold text-sm lg:text-base px-2" : "text-white hover:text-gray-300 text-sm lg:text-base px-2"
            }>
              About
            </NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-4 py-2">
          <NavLink to="/" 
            className={({ isActive }) => 
              isActive ? "block py-2 text-blue-400 font-bold border-b border-gray-700" : "block py-2 text-white border-b border-gray-700"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink to="/courses-and-duration" 
            className={({ isActive }) => 
              isActive ? "block py-2 text-blue-400 font-bold border-b border-gray-700" : "block py-2 text-white border-b border-gray-700"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Courses and Duration
          </NavLink>
          <NavLink to="/universities" 
            className={({ isActive }) => 
              isActive ? "block py-2 text-blue-400 font-bold border-b border-gray-700" : "block py-2 text-white border-b border-gray-700"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Universities
          </NavLink>
          <NavLink to="/contact-us" 
            className={({ isActive }) => 
              isActive ? "block py-2 text-blue-400 font-bold border-b border-gray-700" : "block py-2 text-white border-b border-gray-700"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
          <NavLink to="/about-us" 
            className={({ isActive }) => 
              isActive ? "block py-2 text-blue-400 font-bold" : "block py-2 text-white"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;