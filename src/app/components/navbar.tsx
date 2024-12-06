'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-8 md:h-12" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-800 hover:text-teal-500 text-lg font-semibold">
              About Us
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-teal-500 text-lg font-semibold">
              Services
            </Link>
            <Link href="/research" className="text-gray-800 hover:text-teal-500 text-lg font-semibold">
              Research
            </Link>
            <Link href="/faq" className="text-gray-800 hover:text-teal-500 text-lg font-semibold">
              FAQs
            </Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/trade">
              <button className="bg-teal-500 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-teal-600 transition duration-300 text-lg">
                TRADE
              </button>
            </Link>
            <button className="bg-teal-500 p-2 rounded-full hover:bg-teal-600 transition duration-300">
              <img src="/globe_icon.svg" alt="Change Language" className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <div className="flex flex-col space-y-4">
            <Link href="/about" className="text-gray-800 hover:text-teal-500 text-lg font-semibold">
              About Us
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-teal-500 text-lg font-semibold">
              Services
            </Link>
            <Link href="/research" className="text-gray-800 hover:text-teal-500 text-lg font-semibold">
              Research
            </Link>
            <Link href="/faq" className="text-gray-800 hover:text-teal-500 text-lg font-semibold">
              FAQs
            </Link>
            <Link href="/trade">
              <button className="w-full bg-teal-500 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-teal-600 transition duration-300 text-lg">
                TRADE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
