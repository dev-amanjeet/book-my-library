import React, { useState } from 'react';
import { Search, Menu, X, User, BookOpen, Bell } from 'lucide-react';
import { Link } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
           <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition">
      <BookOpen className="h-8 w-8 text-blue-600" />
      <span className="text-2xl font-bold text-gray-900">Book My Library</span>
    </Link>

          {/* search bar */}
            <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search books, authors, or topics..."
                className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                
               
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fas fa-search text-gray-400"></i>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Libraries</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">My Bookings</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Help</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>
         

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Libraries</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">My Bookings</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Help</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 w-fit">
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
