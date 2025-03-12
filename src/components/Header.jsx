// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-[#0d0d0d] text-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Nom du site */}
        <div className="text-2xl font-bold">
          <Link to="/">LevelUp Gaming</Link>
        </div>

        {/* Liens de navigation */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-green-500">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-green-500">Shop</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-500">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-green-500">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
