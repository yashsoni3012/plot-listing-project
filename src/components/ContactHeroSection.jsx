import React from "react";
import categoriesBg from "../assets/heading-bg.jpg"; // Update this path to your image

const CategoriesSection = () => {
    return (
        <section className="relative py-16 lg:py-24">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 h-[530px] bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: `url(${categoriesBg})`,
                }}
            >
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 lg:px-8 mt-40">
                {/* Section Header */}
                <div className="text-start mb-12 lg:mb-16">
                    <p className="text-sm md:text-base uppercase tracking-wider text-gray-300 mb-3">
                        Keep in touch with us
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                       Feel free to send us a message <br/> about your business needs
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;