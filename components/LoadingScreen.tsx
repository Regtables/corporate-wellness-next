'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // whileHover={{ opacity: [ 1 ]}}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      >
          <img
            src="/loading.webp" // Replace with your actual loading GIF
            alt="Loading..."
            className="w-48 h-48" // Adjust size as needed
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;