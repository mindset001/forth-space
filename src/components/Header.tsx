'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/images/logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="flex items-center  px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <Image 
              src={Logo} 
              alt="4orth Space Logo" 
              className="w-20 sm:w-24 h-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center ml-[30%] space-x-8 lg:space-x-12">
          <Link 
            href="/" 
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link 
            href="/about" 
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link 
            href="/services" 
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link 
            href="/memberships" 
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium relative group"
          >
            Memberships
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link 
            href="/contact" 
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"></span>
          </Link>
        </div>


        {/* Mobile Menu Button */}
        <div className="md:hidden  ml-[30%]">
          <button 
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className={`absolute top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Image 
                src={Logo} 
                alt="4orth Space Logo" 
                className="w-20 h-auto"
              />
              <button 
                className="text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col p-6 space-y-1">
              <Link 
                href="/" 
                className="text-gray-800 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 text-lg font-medium py-4 px-4 rounded-lg"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-800 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 text-lg font-medium py-4 px-4 rounded-lg"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-gray-800 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 text-lg font-medium py-4 px-4 rounded-lg"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link 
                href="/memberships" 
                className="text-gray-800 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 text-lg font-medium py-4 px-4 rounded-lg"
                onClick={closeMobileMenu}
              >
                Memberships
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-800 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 text-lg font-medium py-4 px-4 rounded-lg"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>

            {/* Mobile CTA Button */}
           
          </div>
        </div>
      </nav>
    </header>
  );
}