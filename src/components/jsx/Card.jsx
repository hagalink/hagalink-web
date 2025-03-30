import React from "react";

const Card = ({ icon: Icon, text, title }) => {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-gradient-to-b from-[#141f2b] to-[#192635] text-white flex flex-col items-center p-4 sm:p-6 rounded-lg shadow-[0_4px_15px_rgba(255,255,255,0.2)] lg:shadow-none lg:transition-all lg:duration-700 lg:hover:shadow-[0_4px_15px_rgba(255,255,255,0.2)]">
      <div className="text-white text-3xl sm:text-4xl mb-4">
        <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
      </div>
      <h3 className="font-bold text-base sm:text-lg md:text-xl text-center mb-2 glow-title">{title}</h3>
      <p className="text-sm sm:text-base text-gray-300 text-center">{text}</p>
    </div>
  );
};

export default Card;