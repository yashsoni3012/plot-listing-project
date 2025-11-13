import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-[2000]">
      <div className="flex space-x-3">
        <div className="w-4 h-4 bg-[#8D99AF] rounded-full animate-pulse-scale"></div>
        <div
          className="w-4 h-4 bg-[#8D99AF] rounded-full animate-pulse-scale"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-4 h-4 bg-[#8D99AF] rounded-full animate-pulse-scale"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-4 h-4 bg-[#8D99AF] rounded-full animate-pulse-scale"
          style={{ animationDelay: "0.3s" }}
        ></div>
      </div>
      
      <style jsx>{`
        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.7;
          }
        }
        .animate-pulse-scale {
          animation: pulse-scale 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;