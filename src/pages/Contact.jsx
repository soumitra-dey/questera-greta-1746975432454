import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title text-center"
        >
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <FiMapPin className="text-cafe-accent text-2xl" />
              <div>
                <h3 className="font-bold text-cafe-text">Address</h3>
                <p className="text-cafe-text-light">123 Coffee Street, Café City, CC 12345</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FiPhone className="text-cafe-accent text-2xl" />
              <div>
                <h3 className="font-bold text-cafe-text">Phone</h3>
                <p className="text-cafe-text-light">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FiMail className="text-cafe-accent text-2xl" />
              <div>
                <h3 className="font-bold text-cafe-text">Email</h3>
                <p className="text-cafe-text-light">hello@abashar.com</p>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-cafe-text text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-cafe-card border border-cafe-border rounded-lg focus:outline-none focus:border-cafe-accent text-cafe-text"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-cafe-text text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-cafe-card border border-cafe-border rounded-lg focus:outline-none focus:border-cafe-accent text-cafe-text"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-cafe-text text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 bg-cafe-card border border-cafe-border rounded-lg focus:outline-none focus:border-cafe-accent text-cafe-text"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;