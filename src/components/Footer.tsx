import React from "react";
import Image from "next/image";
import Logo from '../../public/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand and Description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              
              <Image src={Logo} alt="4orth Space Logo" className="w-24" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Nigeria&apos;s premier destination for sophisticated professionals. A refined 
              coworking and creative hub where innovation meets elegance, fostering 
              collaboration among creatives, entrepreneurs, and visionaries.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-white font-medium mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Memberships</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Private Offices</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Dedicated Desk</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Meeting Room</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Event spaces</a></li>
            </ul>
          </div>
        </div>

        {/* Contact and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h4 className="text-white font-medium mb-2">Contact us</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Victoria Island, Lagos, Nigeria</p>
                <p>+234 (0) 123 456 7890</p>
                <p>hello@4orthspace.com</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-sm mt-4 border-t border-gray-800 pt-4      ">
              © 2025 4orth Space. All rights reserved.
            </div>
    </footer>
  );
}