import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-start">
        <Link to="/" className="inline-block transition-transform hover:scale-105">
          <img 
            src="https://horizons-cdn.hostinger.com/6e62b952-c717-46e3-840c-7a6273822c15/15c68b08c250c307f9ac3ef4b4ca79ee.jpg" 
            alt="DPA Viagens Logo" 
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;