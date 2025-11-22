import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Car, ShoppingBag, Globe2, Utensils, Grid, Info, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* Import your 8 different images from src/assets */
import img1 from "../assets/listing-01.jpg";
import img2 from "../assets/listing-02.jpg";
import img3 from "../assets/listing-03.jpg";
import img4 from "../assets/listing-04.jpg";
import img5 from "../assets/listing-05.jpg";
import img6 from "../assets/listing-03.jpg";
import img7 from "../assets/listing-01.jpg";
import img8 from "../assets/listing-02.jpg";

const CategoryDetailSection = () => {
    // All available images array
    const allImages = [img1, img2, img3, img4, img5, img6, img7, img8];

    // Function to get unique image for each card
    const getImageForCard = (cardIndex, totalCards) => {
        const imageIndex = cardIndex % allImages.length;
        return allImages[imageIndex];
    };

    // Generate 9 cards for each category (3 slides × 3 cards)
    const generateCards = (baseCards, count = 9) => {
        const cards = [];
        for (let i = 0; i < count; i++) {
            const baseCard = baseCards[i % baseCards.length];
            cards.push({
                ...baseCard,
                id: i + 1,
                title: `${baseCard.title} ${i + 1}`,
                price: i % 3 === 0 ? "$800 / month" : i % 3 === 1 ? "$1,200 / month" : "$2,400 / month",
                area: i % 3 === 0 ? "860 sq ft" : i % 3 === 1 ? "750 sq ft" : "950 sq ft",
                bedrooms: i % 3 === 0 ? "2" : i % 3 === 1 ? "1" : "3",
                bathrooms: i % 3 === 0 ? "3" : i % 3 === 1 ? "1" : "2",
                image: getImageForCard(i, count)
            });
        }
        return cards;
    };

    // Category-specific card data - 9 cards per category
    const categoryCards = {
        apartments: generateCards([
            {
                title: "Luxury Apartment",
                description: "Modern living with stunning city views and premium amenities in downtown area.",
                author: "Real ESTATE Agent"
            },
            {
                title: "Studio Apartment",
                description: "Cozy studio perfect for students and young professionals.",
                author: "Real ESTATE Agent"
            },
            {
                title: "Penthouse Suite",
                description: "Luxurious penthouse with panoramic city views and private terrace.",
                author: "Real ESTATE Agent"
            }
        ]),
        food: generateCards([
            {
                title: "Italian Restaurant",
                description: "Authentic Italian cuisine with fresh ingredients and romantic ambiance.",
                author: "Food Expert"
            },
            {
                title: "Sushi Bar",
                description: "Fresh sushi and Japanese specialties prepared by master chefs.",
                author: "Food Expert"
            },
            {
                title: "Vegetarian Cafe",
                description: "Healthy vegetarian and vegan options in a cozy atmosphere.",
                author: "Food Expert"
            }
        ]),
        cars: generateCards([
            {
                title: "Luxury Sedan",
                description: "Premium luxury sedan with advanced safety features and comfort.",
                author: "Auto Dealer"
            },
            {
                title: "Sports Car",
                description: "High-performance sports car with exceptional handling and acceleration.",
                author: "Auto Dealer"
            },
            {
                title: "Family SUV",
                description: "Spacious SUV perfect for family trips and daily commute.",
                author: "Auto Dealer"
            }
        ]),
        shopping: generateCards([
            {
                title: "Fashion Boutique",
                description: "Latest fashion trends and designer collections from around the world.",
                author: "Shopping Guide"
            },
            {
                title: "Electronics Store",
                description: "Latest gadgets, smartphones, and home appliances with expert advice.",
                author: "Shopping Guide"
            },
            {
                title: "Home Decor",
                description: "Beautiful home furniture and decoration items for every style.",
                author: "Shopping Guide"
            }
        ]),
        traveling: generateCards([
            {
                title: "Beach Resort",
                description: "Luxury beachfront resort with all-inclusive packages.",
                author: "Travel Agent"
            },
            {
                title: "Mountain Cabin",
                description: "Cozy cabin retreat with stunning mountain views.",
                author: "Travel Agent"
            },
            {
                title: "City Hotel",
                description: "Modern hotel in the heart of the city with easy access to attractions.",
                author: "Travel Agent"
            }
        ])
    };

    const categories = [
        {
            id: "apartments",
            name: "Apartments",
            icon: <Home className="w-4 h-4 sm:w-5 sm:h-5" />,
            description: "Find your perfect home from our curated selection of apartments.",
            listings: {
                week: { listings: 124, sales: 84 },
                month: { listings: 1040, sales: 720 }
            }
        },
        {
            id: "food",
            name: "Food & Life",
            icon: <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />,
            description: "Discover amazing dining experiences and culinary adventures.",
            listings: {
                week: { listings: 89, sales: 62 },
                month: { listings: 756, sales: 520 }
            }
        },
        {
            id: "cars",
            name: "Cars",
            icon: <Car className="w-4 h-4 sm:w-5 sm:h-5" />,
            description: "Browse our extensive collection of vehicles.",
            listings: {
                week: { listings: 67, sales: 45 },
                month: { listings: 589, sales: 410 }
            }
        },
        {
            id: "shopping",
            name: "Shopping",
            icon: <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />,
            description: "Shop from the best stores and boutiques.",
            listings: {
                week: { listings: 156, sales: 110 },
                month: { listings: 1320, sales: 890 }
            }
        },
        {
            id: "traveling",
            name: "Traveling",
            icon: <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />,
            description: "Plan your next adventure with our travel recommendations.",
            listings: {
                week: { listings: 92, sales: 68 },
                month: { listings: 780, sales: 540 }
            }
        }
    ];

    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [mobileView, setMobileView] = useState('content');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Animation variants for slide transitions
    // Animation variants for slide transitions
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? "120%" : "-120%",
            opacity: 0.8,
            transition: {
                duration: 0.2
            }
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.2
            }
        },
        exit: (direction) => ({
            x: direction < 0 ? "120%" : "-120%",
            opacity: 0.8,
            transition: {
                duration: 0.2
            }
        })
    };

    const contentVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    // Group cards into slides of 3
    const getSlides = () => {
        const cards = categoryCards[activeCategory.id];
        const slides = [];
        for (let i = 0; i < cards.length; i += 3) {
            slides.push(cards.slice(i, i + 3));
        }
        return slides;
    };

    const slides = getSlides();
    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Auto-slide effect
    // Auto-slide effect - faster interval (1.5 seconds)
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 1500); // Reduced to 1.5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, currentSlide, totalSlides]);

    // Reset auto-play when category changes
    useEffect(() => {
        setCurrentSlide(0);
        setIsAutoPlaying(true);
    }, [activeCategory]);

    // Pause auto-play on hover
    const handleMouseEnter = () => {
        setIsAutoPlaying(false);
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
    };

    const renderCardContent = (card) => (
        <div className="flex flex-col h-full">
            <div className="flex-1">
                {/* Price and title section */}
                <div className="mb-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                                by: {card.author}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-xl font-bold text-gray-800">
                                {card.price}
                            </p>
                            <p className="text-gray-600 text-sm">
                                included tax
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-4 border-gray-200" />

                {/* Details section */}
                <div className="mb-4">
                    <p className="text-gray-700 font-medium mb-2">
                        Details: {card.area}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="text-gray-600">
                            <span className="font-medium">{card.bedrooms}</span> Bedrooms
                        </div>
                        <div className="text-gray-600">
                            <span className="font-medium">{card.bathrooms}</span> Bathrooms
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-4">
                    {card.description}
                </p>
            </div>

            {/* Contact button at bottom */}
            <button className="w-full bg-[#8D99AF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#7a8497] transition text-sm lg:text-base mt-4">
                Contact Now
            </button>
        </div>
    );

    return (
        <section className="bg-white py-4 sm:py-6 lg:py-8 px-4 xs:px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-7xl mx-auto w-full">
                {/* Desktop & Tablet Layout - Bootstrap 12 Column Grid */}
                <div className="hidden md:block w-full">
                    <div className="flex flex-wrap -mx-3 w-full">   
                        {/* Left Side - 4 Columns */}
                        <div className="w-full md:w-4/12 lg:w-4/12 xl:w-4/12 px-4 lg:px-6 mb-8 lg:mb-0">
                            <div className="bg-white p-6 lg:p-8 xl:p-10 h-full">
                                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-6 lg:mb-8 xl:mb-10">Categories</h3>
                                <div className="space-y-3 lg:space-y-4 xl:space-y-5">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => {
                                                setActiveCategory(category);
                                                setCurrentSlide(0);
                                            }}
                                            className={`flex items-center gap-4 w-full p-4 lg:p-5 xl:p-6 transition-all duration-300 ${activeCategory.id === category.id
                                                ? "bg-[#2B2D42] text-white shadow-lg"
                                                : "bg-gray-300 text-gray-700 hover:bg-[#8D99AF] hover:shadow-md"
                                                }`}
                                        >
                                            <div className={`p-3 lg:p-4  ${activeCategory.id === category.id ? "bg-gray-400" : "bg-white"
                                                }`}>
                                                {category.icon}
                                            </div>
                                            <span className="font-semibold text-base lg:text-lg xl:text-xl text-left flex-1">
                                                {category.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side - 8 Columns */}
                        <div className="w-full md:w-8/12 lg:w-8/12 xl:w-8/12 px-3">
                            <div
                                className="bg-white p-4 lg:p-6 h-full w-full"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-[#8D99AF] p-3">
                                        {activeCategory.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
                                            Featured {activeCategory.name}
                                        </h2>
                                        <p className="text-gray-600 text-sm lg:text-base mt-1">
                                            {activeCategory.description}
                                        </p>
                                    </div>
                                    {/* Slide Counter & Auto-play Indicator */}
                                    <div className="flex items-center gap-2">
                                        {/* <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                            Slide {currentSlide + 1} of {totalSlides}
                                        </div> */}
                                        {/* <button
                                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                                            className={`p-2 rounded-full transition-colors ${isAutoPlaying ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                                                }`}
                                            title={isAutoPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
                                        >
                                            {isAutoPlaying ? '⏸️' : '▶️'}
                                        </button> */}
                                    </div>
                                </div>

                                {/* Carousel Container */}
                                <div
                                    className="relative"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full shadow-lg p-3 hover:bg-gray-50 transition-all duration-300 hidden lg:block"
                                    >
                                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                                    </button>

                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full shadow-lg p-3 hover:bg-gray-50 transition-all duration-300 hidden lg:block"
                                    >
                                        <ChevronRight className="w-5 h-5 text-gray-600" />
                                    </button>

                                    {/* Slides */}
                                    <div className="w-full space-y-6">
                                        <div className="w-full space-y-6">
                                            {slides[currentSlide]?.map((card) => (
                                                <div
                                                    key={card.id}
                                                    className="bg-white shadow-md border border-gray-200 w-full h-full"
                                                >
                                                    <div className="flex flex-col lg:flex-row w-full h-full">
                                                        {/* Card Image - 50% width, full height */}
                                                        <div className="lg:w-1/2 w-full h-full">
                                                            <img
                                                                src={card.image}
                                                                alt={card.title}
                                                                className="w-full h-full min-h-[250px] lg:min-h-[300px] object-cover"
                                                            />
                                                        </div>

                                                        {/* Card Content - 50% width, full height */}
                                                        <div className="lg:w-1/2 w-full p-4 lg:p-6 flex flex-col h-full">
                                                            {renderCardContent(card)}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Carousel Indicators */}
                                <div className="flex justify-center items-center gap-2 mt-8">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-3 h-3 rounded-full ${index === currentSlide
                                                ? 'bg-[#8D99AF] w-8'
                                                : 'bg-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                {/* <div className="flex flex-wrap gap-3 mt-8">
                                    <button className="bg-[#8D99AF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#7a8497] transition text-sm lg:text-base flex-1">
                                        Explore All {activeCategory.name}
                                    </button>
                                    <button className="border border-[#8D99AF] text-[#8D99AF] px-6 py-3 rounded-lg font-medium hover:bg-[#8D99AF] hover:text-white transition text-sm lg:text-base flex-1">
                                        Contact Us
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden w-full">
                    {/* Mobile Header */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 mb-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-lg font-bold text-gray-800">
                                {activeCategory.name}
                            </h1>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                Slide {currentSlide + 1} of {totalSlides}
                            </span>
                        </div>
                    </div>

                    {/* Mobile Content */}
                    <AnimatePresence mode="wait">
                        {mobileView === 'content' && (
                            <motion.div
                                key="content"
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 mb-4"
                            >
                                {/* Carousel Indicators */}
                                <div className="flex justify-center items-center gap-2 mb-4">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
                                                ? 'bg-[#8D99AF] w-6'
                                                : 'bg-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Current Slide - 1 Card on mobile */}
                                <div className="w-full space-y-4">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentSlide}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {slides[currentSlide]?.map((card) => (
                                                <div
                                                    key={card.id}
                                                    className="bg-white rounded-xl shadow-md border border-gray-200 w-full"
                                                >
                                                    {/* Card Image */}
                                                    <div className="w-full">
                                                        <img
                                                            src={card.image}
                                                            alt={card.title}
                                                            className="w-full h-48 object-cover rounded-t-xl"
                                                        />
                                                    </div>

                                                    {/* Card Content */}
                                                    <div className="p-4">
                                                        <div className="flex flex-col h-full">
                                                            <div className="flex-1">
                                                                <div className="mb-4">
                                                                    <div className="flex justify-between items-start">
                                                                        <div>
                                                                            <h3 className="text-lg font-bold text-gray-800">
                                                                                {card.title}
                                                                            </h3>
                                                                            <p className="text-gray-600 text-sm mt-1">
                                                                                by: {card.author}
                                                                            </p>
                                                                        </div>
                                                                        <div className="text-right">
                                                                            <p className="text-lg font-bold text-gray-800">
                                                                                {card.price}
                                                                            </p>
                                                                            <p className="text-gray-600 text-xs">
                                                                                included tax
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <hr className="my-3 border-gray-200" />

                                                                <div className="mb-3">
                                                                    <p className="text-gray-700 font-medium mb-2 text-sm">
                                                                        Details: {card.area}
                                                                    </p>
                                                                    <div className="flex flex-wrap gap-3">
                                                                        <div className="text-gray-600 text-sm">
                                                                            <span className="font-medium">{card.bedrooms}</span> Bedrooms
                                                                        </div>
                                                                        <div className="text-gray-600 text-sm">
                                                                            <span className="font-medium">{card.bathrooms}</span> Bathrooms
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <p className="text-gray-600 text-xs mt-3">
                                                                    {card.description}
                                                                </p>
                                                            </div>

                                                            <button className="w-full bg-[#8D99AF] text-white py-3 rounded-lg font-medium text-sm mt-3">
                                                                Contact Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Mobile Navigation */}
                                <div className="flex justify-between gap-2 mt-4">
                                    <button
                                        onClick={prevSlide}
                                        className="flex-1 bg-[#8D99AF] text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        Previous
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="flex-1 bg-[#8D99AF] text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2"
                                    >
                                        Next
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="flex gap-2 mt-4">
                                    <button className="flex-1 bg-[#8D99AF] text-white py-3 rounded-lg font-medium text-sm">
                                        Explore All
                                    </button>
                                    <button className="flex-1 border border-[#8D99AF] text-[#8D99AF] py-3 rounded-lg font-medium text-sm">
                                        Contact
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {mobileView === 'categories' && (
                            <motion.div
                                key="categories"
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 mb-4"
                            >
                                <h2 className="text-lg font-bold text-gray-800 mb-4">All Categories</h2>
                                <div className="grid grid-cols-2 gap-3">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => {
                                                setActiveCategory(category);
                                                setMobileView('content');
                                                setCurrentSlide(0);
                                            }}
                                            className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all ${activeCategory.id === category.id
                                                ? "bg-[#8D99AF] text-white"
                                                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                                                }`}
                                        >
                                            <div className={`p-2 rounded-md ${activeCategory.id === category.id ? "bg-white/20" : "bg-white"
                                                }`}>
                                                {category.icon}
                                            </div>
                                            <span className="text-sm font-medium text-center">
                                                {category.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Mobile Bottom Navigation */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-10">
                    <div className="grid grid-cols-2">
                        <button
                            onClick={() => setMobileView('content')}
                            className={`flex flex-col items-center py-3 transition ${mobileView === 'content' ? 'text-[#8D99AF]' : 'text-gray-500'
                                }`}
                        >
                            <Info className="w-5 h-5 mb-1" />
                            <span className="text-sm font-medium">Listings</span>
                        </button>
                        <button
                            onClick={() => setMobileView('categories')}
                            className={`flex flex-col items-center py-3 transition ${mobileView === 'categories' ? 'text-[#8D99AF]' : 'text-gray-500'
                                }`}
                        >
                            <Grid className="w-5 h-5 mb-1" />
                            <span className="text-sm font-medium">Categories</span>
                        </button>
                    </div>
                </div>

                {/* Spacer for mobile bottom nav */}
                <div className="md:hidden h-20"></div>
            </div>
        </section>
    );
};

export default CategoryDetailSection;