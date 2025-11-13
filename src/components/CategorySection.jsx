import React, { useState } from "react";
import { Home, Car, ShoppingBag, Globe2, Utensils } from "lucide-react"; // icons
import ApartmentImg from "../assets/tabs-image-01.jpg";
import FoodImg from "../assets/tabs-image-02.jpg";
import CarImg from "../assets/tabs-image-03.jpg";
import ShoppingImg from "../assets/tabs-image-04.jpg";
import TravelImg from "../assets/tabs-image-05.jpg";

const CategorySection = () => {
  const categories = [
    {
      id: "apartments",
      name: "Apartments",
      icon: <Home className="w-6 h-6 text-[#8D99AF]" />,
      title: "One Of The Most Trending Stuffs Right Now!",
      desc: "Plot Listing is a responsive Bootstrap 5 website template that included 4 different HTML pages. This template is provided by TemplateMo website. You can apply this layout for your static or dynamic CMS websites.",
      img: ApartmentImg,
    },
    {
      id: "food",
      name: "Food & Life",
      icon: <Utensils className="w-6 h-6 text-[#8D99AF]" />,
      title: "Food and Lifestyle category is here",
      desc: "You can feel free to download, edit and apply this template for your website. Please tell your friends about TemplateMo website.",
      img: FoodImg,
    },
    {
      id: "cars",
      name: "Cars",
      icon: <Car className="w-6 h-6 text-[#8D99AF]" />,
      title: "Best car rentals for your trips!",
      desc: "Did you know? You can get the best free HTML templates on Too CSS blog. Visit the blog pages and explore fresh and latest website templates.",
      img: CarImg,
    },
    {
      id: "shopping",
      name: "Shopping",
      icon: <ShoppingBag className="w-6 h-6 text-[#8D99AF]" />,
      title: "Shopping List: Images from Unsplash",
      desc: "Image credits go to Unsplash website that provides free stock photos for anyone. Images used in this Plot Listing template are from Unsplash.",
      img: ShoppingImg,
    },
    {
      id: "traveling",
      name: "Traveling",
      icon: <Globe2 className="w-6 h-6 text-[#8D99AF]" />,
      title: "Information and Safety Tips for Traveling",
      desc: "You are allowed to use this template for your commercial websites. You are NOT allowed to redistribute this template ZIP file on any Free CSS collection websites.",
      img: TravelImg,
    },
  ];

  const [active, setActive] = useState(categories[0]);

  return (
    <section className="bg-[#2B2D42] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto bg-[#2B2D42] rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat)}
              className={`flex items-center gap-4 p-5 text-left text-white border-b border-[#3f4259] transition ${
                active.id === cat.id
                  ? "bg-[#8D99AF]"
                  : "bg-[#3f4259] hover:bg-[#8D99AF]/60"
              }`}
            >
              <div className="bg-white p-3 rounded-full">
                {cat.icon}
              </div>
              <span className="font-medium text-lg">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold">{active.title}</h2>
            <p className="text-gray-300">{active.desc}</p>
            <button className="mt-4 bg-white text-[#8D99AF] font-semibold px-10 py-3 rounded-lg flex items-center gap-2 hover:bg-[#e8e8e8] transition">
              <span>Discover More</span>
              <span className="text-[#8D99AF]">⟶</span>
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={active.img}
              alt={active.name}
              className="rounded-xl w-full h-84 sm:h-82 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
