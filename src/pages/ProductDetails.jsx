import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowLeft, 
  FiClock, 
  FiInfo, 
  FiStar, 
  FiCoffee, 
  FiHeart,
  FiShoppingBag,
  FiAlertCircle,
  FiUsers,
  FiThermometer
} from 'react-icons/fi';
import { supabase } from '../lib/supabase';
import { DEFAULT_IMAGES } from '../constants/defaultImages';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  const fetchProductDetails = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      const processedProduct = {
        ...data,
        image_url: data.image_url?.startsWith('http')
          ? data.image_url
          : `${supabase.supabaseUrl}/storage/v1/object/public/product-images/${data.image_url}`
      };

      setProduct(processedProduct);
    } catch (error) {
      console.error('Error fetching product details:', error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProductDetails();
  }, [fetchProductDetails]);

  const handleImageError = (e) => {
    e.target.src = DEFAULT_IMAGES[product?.category] || DEFAULT_IMAGES.coffee;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cafe-brown"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button onClick={() => navigate('/menu')} className="mt-4 btn-primary">
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/menu')}
          className="flex items-center gap-2 text-cafe-brown hover:text-cafe-accent transition-colors mb-8"
        >
          <FiArrowLeft /> Back to Menu
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="relative group">
              <img
                src={product.image_url}
                alt={product.name}
                onError={handleImageError}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <button
                onClick={() => setLiked(!liked)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-cafe-accent hover:text-white transition-colors"
              >
                <FiHeart
                  className={`text-2xl ${liked ? 'text-red-500 fill-current' : 'text-cafe-brown'}`}
                />
              </button>
              <div className="absolute bottom-4 left-4 bg-cafe-brown text-white px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <FiStar className="text-yellow-400" />
                  <span>{product.rating || '4.5'}/5</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="flex justify-between items-start">
                <h1 className="text-4xl font-playfair font-bold text-cafe-brown">{product.name}</h1>
                <span className="text-3xl font-bold text-cafe-accent">${product.price.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-gray-600">
                <FiCoffee />
                <span>{product.category === 'coffee' ? 'Hot Beverage' : 'Fresh Pastry'}</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cafe-cream p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-cafe-brown">
                  <FiClock className="text-xl" />
                  <h3 className="font-bold">Prep Time</h3>
                </div>
                <p>{product.preparation_time || '5-10 minutes'}</p>
              </div>
              <div className="bg-cafe-cream p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-cafe-brown">
                  <FiUsers className="text-xl" />
                  <h3 className="font-bold">Serving Size</h3>
                </div>
                <p>{product.serving_size || '1 person'}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-4 text-cafe-brown">
                  <FiInfo className="text-2xl" />
                  <h3 className="text-xl font-bold">Ingredients</h3>
                </div>
                <p className="text-gray-600">{product.ingredients || 'Information not available'}</p>
              </div>

              {product.allergens && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-4 text-cafe-brown">
                    <FiAlertCircle className="text-2xl" />
                    <h3 className="text-xl font-bold">Allergens</h3>
                  </div>
                  <p className="text-gray-600">{product.allergens}</p>
                </div>
              )}

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-4 text-cafe-brown">
                  <FiThermometer className="text-2xl" />
                  <h3 className="text-xl font-bold">Best Served</h3>
                </div>
                <p className="text-gray-600">
                  {product.category === 'coffee' ? 'Hot and fresh' : 'Fresh from the oven'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="btn-primary flex-1 flex items-center justify-center gap-2 py-3">
                <FiShoppingBag />
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;