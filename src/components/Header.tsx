import React from "react";
import Image from "next/image";
import Logo from '../../public/images/logo.png';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="flex items-center sm:justify-between gap-24 px-8 py-4 max-w-7xl mx-auto border-b border-white bg-black/30 backdrop-blur-sm">
        {/* Logo */}
        <div className="text-white">
          <Image src={Logo} alt="4orth Space Logo" className="w-24" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-12 ml-[20%]">
          <a href="/" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
            Home
          </a>
          <a href="about" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
            About
          </a>
          <a href="services" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
            Services
          </a>
          <a href="memberships" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
            Memberships
          </a>
          <a href="contact" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}