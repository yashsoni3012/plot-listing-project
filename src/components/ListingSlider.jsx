import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation

import "swiper/css";
import "swiper/css/pagination"; // Removed navigation CSS

/* Import your 9 images from src/assets */
import img1 from "../assets/listing-01.jpg";
import img2 from "../assets/listing-02.jpg";
import img3 from "../assets/listing-03.jpg";
import img4 from "../assets/listing-04.jpg";
import img5 from "../assets/listing-05.jpg";
import img6 from "../assets/listing-06.jpg";
import img7 from "../assets/listing-01.jpg";
import img8 from "../assets/listing-02.jpg";
import img9 from "../assets/listing-03.jpg";

/* Example card data (9 items) */
const cards = [
  { img: img1, title: "Sunshine Apartment", agent: "Sale Agent", price: "$3,600 / month", details: "3660 sq ft", beds: 5, baths: 3, reviews: 24 },
  { img: img2, title: "Modern House", agent: "John Carter", price: "$4,200 / month", details: "4200 sq ft", beds: 4, baths: 2, reviews: 18 },
  { img: img3, title: "Beach Villa", agent: "Emma Watson", price: "$2,900 / month", details: "2800 sq ft", beds: 3, baths: 2, reviews: 35 },

  { img: img4, title: "City Penthouse", agent: "David Miller", price: "$6,700 / month", details: "5200 sq ft", beds: 6, baths: 4, reviews: 40 },
  { img: img5, title: "Luxury Flat", agent: "Jessica Lee", price: "$5,800 / month", details: "4500 sq ft", beds: 4, baths: 3, reviews: 22 },
  { img: img6, title: "Elegant Suite", agent: "Robert Fox", price: "$3,300 / month", details: "3000 sq ft", beds: 3, baths: 2, reviews: 16 },

  { img: img7, title: "Classic Apartment", agent: "Lauren Smith", price: "$2,700 / month", details: "2500 sq ft", beds: 2, baths: 1, reviews: 12 },
  { img: img8, title: "Sea Facing Room", agent: "Michael Owen", price: "$3,100 / month", details: "3100 sq ft", beds: 3, baths: 2, reviews: 19 },
  { img: img9, title: "Hilltop Villa", agent: "Nina Brown", price: "$7,900 / month", details: "6000 sq ft", beds: 7, baths: 5, reviews: 27 },
];

/* Group into slides of 3 items each */
const groupIntoSlides = (arr) => {
  const grouped = [];
  for (let i = 0; i < arr.length; i += 3) {
    grouped.push(arr.slice(i, i + 3));
  }
  return grouped;
};

const slides = groupIntoSlides(cards);

export default function VerticalThreePerSlideSlider() {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading (optional) */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Recent Listing</h1>
          <p className="text-gray-500 mt-2">Check them out</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]} // Removed Navigation
          slidesPerView={1}          // one "slide" at a time; each slide contains 3 stacked cards
          pagination={{ 
            clickable: true,
            el: '.custom-pagination',
          }}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="w-full pt-12"
        >
          {slides.map((group, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="flex flex-col gap-6">
                {group.map((c, idx) => (
                  <article
                    key={idx}
                    className="bg-gray-100 shadow-md overflow-hidden border border-transparent hover:border-gray-200 transition"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* LEFT: image (on md+ screens) */}
                      <div className="md:w-1/2 w-full">
                        <img
                          src={c.img}
                          alt={c.title}
                          className="w-full h-64 md:h-72 object-cover"
                        />
                      </div>

                      {/* RIGHT: content */}
                      <div className="p-6 md:w-1/2 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-semibold text-gray-800">{c.title}</h3>
                            <div className="text-sm text-gray-500">
                              <span className="mr-1 text-yellow-500">★★★★★</span>
                              <span className="text-gray-600">({c.reviews})</span>
                            </div>
                          </div>

                          <p className="text-sm text-gray-500 mt-2">by <span className="text-blue-600 font-medium">{c.agent}</span></p>

                          <div className="flex items-center gap-3 mt-4 text-gray-700">
                            <span className="inline-flex items-center px-3 py-2 bg-white rounded-full shadow-sm text-sm">💰</span>
                            <div>
                              <div className="text-base font-medium">{c.price}</div>
                              <div className="text-sm text-gray-500">Details: {c.details}</div>
                            </div>
                          </div>

                          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-8 text-gray-700">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">🛏️</span>
                              <span>{c.beds} Bedrooms</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                              <span className="text-xl">🛁</span>
                              <span>{c.baths} Bathrooms</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 md:mt-8 flex justify-end">
                          <button className="flex items-center gap-2 bg-white px-5 py-2 rounded-lg shadow hover:bg-[#8D99AF] hover:text-white transition text-gray-700">
                            <span className="text-xl">👁️</span>
                            <span>Contact Now</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Container with margin top */}
        <div className="custom-pagination !mt-8 flex justify-center"></div>
      </div>
    </section>
  );
}