import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gray-900/80 backdrop-blur-xl text-white px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text transform group-hover:scale-105 transition-transform duration-300">EventEase</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT US</NavLink>
            <NavLink to="/contact">CONTACT US</NavLink>
            <NavLink to="/events">EVENTS</NavLink>
            <div className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="p-2 text-gray-300 hover:text-white transition-colors"
                title="Profile"
              >
                <User className="h-5 w-5" />
              </Link>
              <Link
                to="/signin"
                className="bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-2 rounded-md hover:from-pink-500 hover:to-purple-500 transition-all"
              >
                SIGN IN
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT US</NavLink>
            <NavLink to="/contact">CONTACT US</NavLink>
            <NavLink to="/events">EVENTS</NavLink>
            <NavLink to="/profile">PROFILE</NavLink>
            <Link
              to="/signin"
              className="block bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-2 rounded-md hover:from-pink-500 hover:to-purple-500 transition-all text-center mt-4"
            >
              SIGN IN
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}