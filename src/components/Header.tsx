
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-800 tracking-wider">
            MARIAN HOLYARTS
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#gallery" className="text-blue-700 hover:text-blue-900 transition-colors font-medium">
              Gallery
            </a>
            <a href="#about" className="text-blue-700 hover:text-blue-900 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-blue-700 hover:text-blue-900 transition-colors font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
