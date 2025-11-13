import React from "react";
import Navbar from "../components/Navbar";
import backgroundImg from "../assets/banner-bg.jpg";
import { Home, Car, ShoppingBag, Globe2, Utensils, MapPin, Search } from "lucide-react";

const HeroSection = () => {
  const icons = [
    { icon: Home, label: "Home" },
    { icon: Car, label: "Car" },
    { icon: ShoppingBag, label: "Shopping" },
    { icon: Globe2, label: "Travel" },
    { icon: Utensils, label: "Food" },
    { icon: MapPin, label: "Places" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay - Full screen */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content - Takes remaining space after navbar */}
        <div className="flex-1 flex flex-col justify-between pt-16 lg:pt-20">
          {/* Hero Content - Centered and properly spaced */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
            <div className="w-full max-w-6xl text-center text-white">
              {/* Text Content */}
              <div className="mb-8 sm:mb-12">
                <p className="text-xs sm:text-sm md:text-base uppercase tracking-wider mb-3 sm:mb-4 text-gray-200">
                  Over 36,500+ Active Listings
                </p>

                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-snug">
                  Find Nearby Places & Things
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto px-2">
                  Search for apartments, food, life, cars, shopping, and travel options near you.
                </p>
              </div>

              {/* Search Bar - Mobile Optimized */}
              <div className="w-full max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl sm:rounded-lg overflow-hidden shadow-2xl">
                  {/* Mobile Search - Simplified */}
                  <div className="block sm:hidden">
                    <div className="p-4">
                      <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 mb-3">
                        <Search size={20} className="text-gray-400 mr-2" />
                        <input
                          type="text"
                          placeholder="What are you looking for?"
                          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <select className="p-2 text-gray-600 border border-gray-300 rounded-lg outline-none text-sm bg-white">
                          <option>All Areas</option>
                          <option>New Village</option>
                          <option>Old Town</option>
                        </select>
                        
                        <select className="p-2 text-gray-600 border border-gray-300 rounded-lg outline-none text-sm bg-white">
                          <option>Price Range</option>
                          <option>$100 - $250</option>
                          <option>$250 - $500</option>
                        </select>
                      </div>
                      
                      <button className="w-full bg-[#8D99AF] text-white font-semibold py-3 rounded-lg transition hover:bg-[#7a8497] text-sm">
                        Search Now
                      </button>
                    </div>
                  </div>

                  {/* Desktop Search */}
                  <div className="hidden sm:flex flex-col md:flex-row">
                    <div className="flex-1 flex flex-col md:flex-row">
                      <select className="flex-1 p-3 md:p-4 text-gray-600 border-b md:border-b-0 md:border-r border-gray-200 outline-none text-sm md:text-base bg-white">
                        <option>All Areas</option>
                        <option>New Village</option>
                        <option>Old Town</option>
                        <option>Modern City</option>
                      </select>

                      <div className="flex-1 flex items-center p-3 md:p-4 border-b md:border-b-0 md:border-r border-gray-200">
                        <input
                          type="text"
                          placeholder="Enter a location"
                          className="w-full outline-none text-gray-700 placeholder-gray-500 text-sm md:text-base"
                        />
                      </div>

                      <select className="flex-1 p-3 md:p-4 text-gray-600 border-b md:border-b-0 md:border-r border-gray-200 outline-none text-sm md:text-base bg-white">
                        <option>Price Range</option>
                        <option>$100 - $250</option>
                        <option>$250 - $500</option>
                        <option>$500 - $1000</option>
                        <option>$1000+</option>
                      </select>
                    </div>

                    <button className="bg-[#8D99AF] text-white font-semibold hover:bg-[#7a8497] transition text-sm md:text-base p-3 md:p-4 px-6 md:px-8 min-w-[120px]">
                      Search Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Icons Section - At the bottom */}
          <div className="pb-6 sm:pb-8 pt-4">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              {/* First Row - 3 icons */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {icons.slice(0, 3).map(({ icon: Icon, label }, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center cursor-pointer"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/95 text-gray-800 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white hover:scale-105 hover:shadow-xl">
                      <Icon 
                        size={24} 
                        className="sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" 
                      />
                    </div>
                    <span className="mt-2 text-white text-sm sm:text-base font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Second Row - 3 icons */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {icons.slice(3, 6).map(({ icon: Icon, label }, index) => (
                  <div
                    key={index + 3}
                    className="group flex flex-col items-center cursor-pointer"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/95 text-gray-800 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white hover:scale-105 hover:shadow-xl">
                      <Icon 
                        size={24} 
                        className="sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" 
                      />
                    </div>
                    <span className="mt-2 text-white text-sm sm:text-base font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;