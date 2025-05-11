import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import ProductCard from '../components/ProductCard';

const Menu = () => {
  const [products, setProducts] = useState({ coffee: [], pastries: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('name');

      if (error) throw error;

      // Ensure image_url is properly formatted for each product
      const processedData = data.map(product => ({
        ...product,
        image_url: product.image_url?.startsWith('http') 
          ? product.image_url 
          : `${supabase.supabaseUrl}/storage/v1/object/public/product-images/${product.image_url}`
      }));

      const categorizedProducts = {
        coffee: processedData.filter(item => item.category === 'coffee'),
        pastries: processedData.filter(item => item.category === 'pastry')
      };

      setProducts(categorizedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cafe-brown"></div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title text-center"
        >
          Our Menu
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-playfair font-bold mb-6">Coffee</h2>
            <div className="space-y-6">
              {products.coffee.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-playfair font-bold mb-6">Pastries</h2>
            <div className="space-y-6">
              {products.pastries.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Menu;