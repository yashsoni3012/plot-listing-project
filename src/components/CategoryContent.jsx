import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Car, ShoppingBag, Globe2, Utensils, Grid, Info, BarChart3 } from "lucide-react";

const CategoryDetailSection = () => {
    const categories = [
        {
            id: "apartments",
            name: "Apartments",
            icon: <Home className="w-4 h-4 sm:w-5 sm:h-5" />,
            description: "Plot Listing template is a responsive website layout that included four HTML pages. Please tell your friends about TemplateMo website. You can download and apply this template for your dynamic CMS websites.",
            listings: {
                week: { listings: 124, sales: 84 },
                month: { listings: 1040, sales: 720 }
            }
        },
        {
            id: "food",
            name: "Food & Life",
            icon: <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />,
            description: "Plot Listing template is a responsive website layout that included four HTML pages. Please tell your friends about TemplateMo website. You can download and apply this template for your dynamic CMS websites.",
            listings: {
                week: { listings: 89, sales: 62 },
                month: { listings: 756, sales: 520 }
            }
        },
        {
            id: "cars",
            name: "Cars",
            icon: <Car className="w-4 h-4 sm:w-5 sm:h-5" />,
            description: "Plot Listing template is a responsive website layout that included four HTML pages. Please tell your friends about TemplateMo website. You can download and apply this template for your dynamic CMS websites.",
            listings: {
                week: { listings: 67, sales: 45 },
                month: { listings: 589, sales: 410 }
            }
        },
        {
            id: "shopping",
            name: "Shopping",
            icon: <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />,
            description: "Plot Listing template is a responsive website layout that included four HTML pages. Please tell your friends about TemplateMo website. You can download and apply this template for your dynamic CMS websites.",
            listings: {
                week: { listings: 156, sales: 110 },
                month: { listings: 1320, sales: 890 }
            }
        },
        {
            id: "traveling",
            name: "Traveling",
            icon: <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />,
            description: "Plot Listing template is a responsive website layout that included four HTML pages. Please tell your friends about TemplateMo website. You can download and apply this template for your dynamic CMS websites.",
            listings: {
                week: { listings: 92, sales: 68 },
                month: { listings: 780, sales: 540 }
            }
        }
    ];

    const [activeCategory, setActiveCategory] = useState(categories[1]);
    const [mobileView, setMobileView] = useState('content');

    const contentVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    return (
        <section className="bg-white py-4 sm:py-6 lg:py-8 px-4 xs:px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Top Side Filtering - Responsive for tablets and desktop */}
                <div className="hidden md:block bg-white rounded-t-none rounded-b-2xl p-0 mb-6 lg:mb-8">
                    <div className="flex flex-col items-center">
                        <div className="flex w-full">
                            {categories.map((category, index) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category)}
                                    className={`flex flex-1 items-center justify-center gap-2 px-4 py-4 md:px-6 md:py-6 lg:px-10 lg:py-8 transition-all duration-300 ${
                                        index !== categories.length - 1 ? 'border-r border-[#3f4259]' : ''
                                    } ${
                                        activeCategory.id === category.id
                                            ? "bg-[#2B2D42] text-white shadow-md"
                                            : "bg-[#8D99AF] text-white hover:shadow-sm"
                                    }`}
                                >
                                    <div className={`${
                                        activeCategory.id === category.id ? "text-white" : "text-gray-300"
                                    }`}>
                                        {category.icon}
                                    </div>
                                    <span className="font-medium whitespace-nowrap text-sm md:text-base lg:text-lg">
                                        {category.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet Header */}
                <div className="md:hidden bg-white rounded-2xl shadow-lg border border-gray-200 p-3 sm:p-4 mb-3 sm:mb-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg sm:text-xl font-bold text-gray-800">
                            {activeCategory.name}
                        </h1>
                        <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {mobileView === 'content' ? 'Info' : mobileView === 'categories' ? 'Categories' : 'Stats'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet Content Switcher */}
                <div className="md:hidden">
                    <AnimatePresence mode="wait">
                        {mobileView === 'content' && (
                            <motion.div
                                key="content"
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200 mb-3 sm:mb-4"
                            >
                                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                                    <div className="bg-[#8D99AF] p-2 sm:p-3 rounded-lg sm:rounded-xl">
                                        {activeCategory.icon}
                                    </div>
                                    <h2 className="text-base sm:text-lg font-bold text-gray-800">
                                        About {activeCategory.name}
                                    </h2>
                                </div>

                                <div className="mb-4 sm:mb-5">
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                        {activeCategory.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    <button className="flex-1 bg-[#8D99AF] text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-medium hover:bg-[#7a8497] transition text-xs sm:text-sm">
                                        Explore
                                    </button>
                                    <button className="flex-1 border border-[#8D99AF] text-[#8D99AF] px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-medium hover:bg-[#8D99AF] hover:text-white transition text-xs sm:text-sm">
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
                                className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200 mb-3 sm:mb-4"
                            >
                                <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-5">All Categories</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => {
                                                setActiveCategory(category);
                                                setMobileView('content');
                                            }}
                                            className={`flex flex-col items-center gap-1 sm:gap-2 p-3 sm:p-4 rounded-lg transition-all ${
                                                activeCategory.id === category.id
                                                    ? "bg-[#8D99AF] text-white"
                                                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                                            }`}
                                        >
                                            <div className={`p-1.5 sm:p-2 rounded-md ${
                                                activeCategory.id === category.id ? "bg-white/20" : "bg-white"
                                            }`}>
                                                {category.icon}
                                            </div>
                                            <span className="text-xs sm:text-sm font-medium text-center leading-tight">
                                                {category.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {mobileView === 'stats' && (
                            <motion.div
                                key="stats"
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200 mb-3 sm:mb-4"
                            >
                                <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-5">Listings Stats</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                        <h3 className="font-semibold text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">This Week</h3>
                                        <p className="text-xl sm:text-2xl font-bold text-[#8D99AF]">
                                            {activeCategory.listings.week.listings}
                                        </p>
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            Listings & {activeCategory.listings.week.sales} Sales
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                        <h3 className="font-semibold text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">This Month</h3>
                                        <p className="text-xl sm:text-2xl font-bold text-[#8D99AF]">
                                            {activeCategory.listings.month.listings}
                                        </p>
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            Listings & {activeCategory.listings.month.sales} Sales
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Desktop & Tablet Content */}
                <div className="hidden md:block">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory.id}
                            variants={contentVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-200"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-[#8D99AF] p-3 rounded-xl">
                                    {activeCategory.icon}
                                </div>
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
                                    Description for {activeCategory.name}
                                </h2>
                            </div>

                            <div className="mb-6 lg:mb-8">
                                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                    {activeCategory.description}
                                </p>
                            </div>

                            <div className="border-t border-gray-200 my-6 lg:my-8"></div>

                            <div className="bg-gray-50 rounded-xl p-5 lg:p-6 mb-6 lg:mb-8">
                                <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-5 lg:mb-6">Total Listings</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <h4 className="font-semibold text-gray-700 mb-2 text-sm lg:text-base">This Week</h4>
                                        <p className="text-2xl lg:text-3xl font-bold text-[#8D99AF]">
                                            {activeCategory.listings.week.listings}
                                        </p>
                                        <p className="text-gray-600 text-xs lg:text-sm">
                                            Listings & {activeCategory.listings.week.sales} Sales
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <h4 className="font-semibold text-gray-700 mb-2 text-sm lg:text-base">This Month</h4>
                                        <p className="text-2xl lg:text-3xl font-bold text-[#8D99AF]">
                                            {activeCategory.listings.month.listings}
                                        </p>
                                        <p className="text-gray-600 text-xs lg:text-sm">
                                            Listings & {activeCategory.listings.month.sales} Sales
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 lg:gap-4">
                                <button className="bg-[#8D99AF] text-white px-5 py-3 lg:px-6 lg:py-3 rounded-lg font-medium hover:bg-[#7a8497] transition text-sm lg:text-base">
                                    Explore {activeCategory.name}
                                </button>
                                <button className="border border-[#8D99AF] text-[#8D99AF] px-5 py-3 lg:px-6 lg:py-3 rounded-lg font-medium hover:bg-[#8D99AF] hover:text-white transition text-sm lg:text-base">
                                    Contact Agent
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile Bottom Navigation */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-10">
                    <div className="grid grid-cols-3">
                        <button
                            onClick={() => setMobileView('content')}
                            className={`flex flex-col items-center py-2 sm:py-3 transition ${
                                mobileView === 'content' ? 'text-[#8D99AF]' : 'text-gray-500'
                            }`}
                        >
                            <Info className="w-4 h-4 sm:w-5 sm:h-5 mb-1" />
                            <span className="text-xs sm:text-sm font-medium">Info</span>
                        </button>
                        <button
                            onClick={() => setMobileView('categories')}
                            className={`flex flex-col items-center py-2 sm:py-3 transition ${
                                mobileView === 'categories' ? 'text-[#8D99AF]' : 'text-gray-500'
                            }`}
                        >
                            <Grid className="w-4 h-4 sm:w-5 sm:h-5 mb-1" />
                            <span className="text-xs sm:text-sm font-medium">Categories</span>
                        </button>
                        <button
                            onClick={() => setMobileView('stats')}
                            className={`flex flex-col items-center py-2 sm:py-3 transition ${
                                mobileView === 'stats' ? 'text-[#8D99AF]' : 'text-gray-500'
                            }`}
                        >
                            <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 mb-1" />
                            <span className="text-xs sm:text-sm font-medium">Stats</span>
                        </button>
                    </div>
                </div>

                {/* Spacer for mobile bottom nav */}
                <div className="md:hidden h-16 sm:h-20"></div>
            </div>
        </section>
    );
};

export default CategoryDetailSection;