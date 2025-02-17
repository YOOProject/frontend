import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* 🍽️ Left Section (Logo & Copyright) */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-orange-500">Yoo 🍽️</h2>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} Yoo. All rights reserved.
          </p>
        </div>

        {/* 🔵 Center Section (Navigation Links) */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-300 mt-4 md:mt-0">
          <Link to="/" className="hover:text-orange-400 transition">About</Link>
          <Link to="/menu" className="hover:text-orange-400 transition">Reviews</Link>
          <Link to="/orders" className="hover:text-orange-400 transition">Location</Link>
          <Link to="/contact" className="hover:text-orange-400 transition">Terms & Conditions</Link>
        </nav>

        {/* 🔗 Right Section (Social Links) */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">Instagram</a>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
