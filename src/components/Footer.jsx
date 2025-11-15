import React from "react";
import { Link } from "react-router-dom"; // or use next/link for Next.js
import logo from "../assets/black-logo.png"; // Update this path to your logo image

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Three Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Column 1: Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img 
                src={logo} 
                alt="Plotlist Logo" 
                className="h-10 w-auto" // Adjust height as needed
              />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adicingi elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua.
            </p>
          </div>

          {/* Column 2: Categories and About Us Side by Side */}
          <div className="flex justify-center md:justify-start space-x-12 lg:space-x-16">
            {/* Categories Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/reviews" className="text-gray-600 hover:text-[#8D99AF] hover:underline transition-all duration-300">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/listing" className="text-gray-600 hover:text-[#8D99AF] hover:underline transition-all duration-300">
                    Listing
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-[#8D99AF] hover:underline transition-all duration-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Us Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/awards" className="text-gray-600 hover:text-[#8D99AF] hover:underline transition-all duration-300">
                    Awards
                  </Link>
                </li>
                <li>
                  <Link to="/useful-sites" className="text-gray-600 hover:text-[#8D99AF] hover:underline transition-all duration-300">
                    Useful Sites
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-gray-600 hover:text-[#8D99AF] hover:underline transition-all duration-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-600">
              <p>27th Street of New Town, Digital Villa</p>
              <p>010-020-0340</p>
              <p>090-080-0760</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-gray-500 mb-2">
            Copyright © 2025 Yash Ranpura, All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Design: React Projects
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;