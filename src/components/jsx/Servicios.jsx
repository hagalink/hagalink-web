import React from "react";

const Servicios = ({ icon: Icon, text, title, link, linkText }) => {
  return (
    <div className="relative">
      <div className="group bg-[#172331] text-white flex items-start p-6 rounded-lg h-auto relative overflow-hidden transition-all duration-300 hover:bg-[#1d2c3d]">
        <div className="mr-4 text-white text-xl items-center">
          <Icon />
        </div>
        <div>
          <h3 className="font-bold text-lg flex items-center gap-2">{title}</h3>
          <p className="m-0 text-base text-gray-300">{text}</p>
          <a
            href={link}
            className="text-blue-200 mt-2 inline-block transition-colors duration-300 hover:text-blue-300"
          >
            {linkText} ›
          </a>
        </div>
        <div className="absolute top-0 left-0 w-0 h-[2px] bg-blue-200 transition-all duration-1000 group-hover:w-full"></div>
      </div>
    </div>
  );
};

export default Servicios;
