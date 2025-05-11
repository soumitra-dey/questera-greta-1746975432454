import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cafe-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-playfair text-2xl font-bold text-cafe-accent">
              Abashar
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link !text-white">Home</Link>
            <Link to="/menu" className="nav-link !text-white">Menu</Link>
            <Link to="/about" className="nav-link !text-white">About</Link>
            <Link to="/contact" className="nav-link !text-white">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cafe-accent"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-cafe-dark"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 nav-link !text-white">Home</Link>
            <Link to="/menu" className="block px-3 py-2 nav-link !text-white">Menu</Link>
            <Link to="/about" className="block px-3 py-2 nav-link !text-white">About</Link>
            <Link to="/contact" className="block px-3 py-2 nav-link !text-white">Contact</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;