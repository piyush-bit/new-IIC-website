import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform scroll position to border radius
  // At top (0px): 0px border radius
  // At scroll (100px): 2rem (32px) border radius
  const borderRadius = useTransform(scrollY, [0, 100], [0, 32]);
  
  // Transform background opacity based on scroll
  const bgOpacity = useTransform(scrollY, [0, 100], [0.3, 0.9]);

  return (
    <motion.nav 
      className="px-4 py-3 font-heinch text-lg sticky top-0 bg-black z-10"
      style={{
        borderRadius: borderRadius,
        backgroundColor: 'rgba(0, 0, 0, var(--bg-opacity))',
        '--bg-opacity': bgOpacity
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="text-white text-5xl my-5 font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
        </motion.div>

        {/* Links and Hamburger */}
        <div className="flex items-center">
          {/* Desktop Links */}
          <motion.div 
            className="hidden lg:flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              'Home', 'About Us', 'Projects', 'Activities', 
              'All Events', 'Achievements', 'Team', 'Blogs', 'Contact'
            ].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-gray-200 transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          {/* Hamburger Icon */}
          <motion.div 
            className="lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            'Home', 'About Us', 'Projects', 'Activities',
            'All Events', 'Achievements', 'Team', 'Blogs', 'Contact'
          ].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block px-4 py-2 text-white hover:bg-blue-800 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              whileHover={{ x: 10 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;