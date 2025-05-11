import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title text-center"
        >
          Our Story
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31"
              alt="Café interior"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-cafe-text-light">
              Founded in 2020, Abashar was born from a passion for exceptional coffee and a desire to create a warm, welcoming space for our community.
            </p>
            <p className="text-lg text-cafe-text-light">
              Our master baristas are trained in the art of coffee-making, ensuring each cup meets our high standards of quality and taste.
            </p>
            <p className="text-lg text-cafe-text-light">
              We source our beans from sustainable farms around the world, supporting fair trade practices and environmental responsibility.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;