import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "./logoevhc.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Everyone Who Codes" 
            className="h-8 w-auto mr-2" 
          />
          {/* <span className="text-xl font-bold text-gray-900">Everyone Who Codes</span> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</a>
          <a href="#mentors" className="text-gray-700 hover:text-blue-600 transition-colors">Mentors</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#resources" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</a>
        </nav>

        {/* CTA Button */}
        <a 
          href="#programs" 
          className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#programs" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </a>
            <a 
              href="#mentors" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Mentors
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#resources" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </a>
            <a 
              href="#programs" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              SignUp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;