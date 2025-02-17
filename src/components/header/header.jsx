import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
        
        {/* 🟠 Left Section (Logo & Mobile Menu) */}
        <div className="flex items-center gap-4">
          {/* 🍽️ Logo */}
          <Link to="/" className="text-2xl font-bold text-orange-500">
            Yoo 🍽️
          </Link>

          {/* 🍔 Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars size={24} />
          </button>
        </div>

        {/* 🔵 Center Section (Navigation) */}
        <nav
          className={`absolute top-16 left-0 w-full bg-white p-4 shadow-md md:relative md:top-0 md:w-auto md:flex md:gap-6 md:bg-transparent md:shadow-none ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/" className="block md:inline px-4 py-2 hover:text-orange-500">Home</Link>
          <Link to="/menu" className="block md:inline px-4 py-2 hover:text-orange-500">Menu</Link>
          <Link to="/orders" className="block md:inline px-4 py-2 hover:text-orange-500">Orders</Link>
          <Link to="/contact" className="block md:inline px-4 py-2 hover:text-orange-500">Contact</Link>
        </nav>

        {/* 🛒 Right Section (Cart & Profile Icons) */}
        <div className="flex items-center gap-6 text-gray-600">
          <Link to="/cart" className="hover:text-orange-500">
            <FaShoppingCart size={22} />
          </Link>
          <Link to="/profiles" className="hover:text-orange-500">
            <FaUser size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
