import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DEFAULT_IMAGES } from '../constants/defaultImages';

const ProductCard = ({ item }) => {
  const handleImageError = (e) => {
    e.target.src = DEFAULT_IMAGES[item.category] || DEFAULT_IMAGES.coffee;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-cafe-border pb-4"
    >
      <Link to={`/menu/${item.id}`} className="flex items-start gap-4 hover:opacity-90 transition-opacity">
        <div className="relative w-24 h-24 overflow-hidden rounded-lg">
          <img
            src={item.image_url || DEFAULT_IMAGES[item.category]}
            alt={item.name}
            onError={handleImageError}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-bold text-cafe-text">{item.name}</h3>
            <span className="text-cafe-accent">${item.price.toFixed(2)}</span>
          </div>
          <p className="text-cafe-text-light">{item.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;