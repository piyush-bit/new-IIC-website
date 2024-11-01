import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 py-3 font-heinch text-lg">
      <div className="container mx- flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-5xl my-5 font-bold">
          <a href="#">Logo</a>
        </div>

        {/* Links and Hamburger */}
        <div className="flex items-center">
          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-6">
            <a href="#home" className="text-white hover:text-gray-200">
              Home
            </a>
            <a href="#about-us" className="text-white hover:text-gray-200">
              About Us
            </a>
            <a href="#projects" className="text-white hover:text-gray-200">
              Projects
            </a>
            <a href="#activities" className="text-white hover:text-gray-200">
              Activities
            </a>
            <a href="#all-events" className="text-white hover:text-gray-200">
              All Events
            </a>
            <a href="#achievements" className="text-white hover:text-gray-200">
              Achievements
            </a>
            <a href="#team" className="text-white hover:text-gray-200">
              Team
            </a>
            <a href="#blogs" className="text-white hover:text-gray-200">
              Blogs
            </a>
            <a href="#contact" className="text-white hover:text-gray-200">
              Contact
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a
            href="#home"
            className="block px-4 py-2 text-white hover:bg-blue-800"
          >
            Home
          </a>
          <a
            href="#about-us"
            className="block px-4 py-2 text-white hover:bg-blue-800"
          >
            About Us
          </a>
          <a
            href="#projects"
            className="block px-4 py-2 text-white hover:bg-blue-800"
          >
            Projects
          </a>
          <a
            href="#activities"
            className="block px-4 py-2 text-white hover:bg-blue-800"
          >
            Activities
          </a>
          <a
            href="#all-events"
            className="block px-4 py-2 text-white hover:bg-blue-800"
          >
            All Events
          </a>
          <a
            href="#achievements"
            className="block px-4 py-2 text-white hover:bg-blue-800"
          >
            Achievements
          </a>
          <a
            href="#team"
            className="block px-4 py-2 text-white hover:bg-blue-800"
          >
            Team
          </a>
          <a
            href="#blogs"
            className="block px-4 py-2 text-white hover:bg-blue-800"
          >
            Blogs
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-white hover:bg-blue-800"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
