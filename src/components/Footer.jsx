import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-cafe-dark text-cafe-text py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-cafe-accent">Abashar</h3>
            <p className="text-sm text-cafe-text-light">Creating moments of joy, one cup at a time.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-cafe-text">Hours</h4>
            <p className="text-sm text-cafe-text-light">Monday - Friday: 7am - 8pm</p>
            <p className="text-sm text-cafe-text-light">Saturday - Sunday: 8am - 9pm</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-cafe-text">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-cafe-text-light hover:text-cafe-accent transition-colors">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="text-cafe-text-light hover:text-cafe-accent transition-colors">
                <FiFacebook size={24} />
              </a>
              <a href="#" className="text-cafe-text-light hover:text-cafe-accent transition-colors">
                <FiTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-cafe-text-light">
          <p>&copy; 2024 Abashar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;