import React from "react";

const Servicios = ({ icon: Icon, text, title}) => {
  return (
    <div className="relative">
      <div className="group bg-neutral-900 text-white flex items-start p-6 rounded-lg h-auto relative overflow-hidden transition-all duration-300 hover:bg-neutral-800">
        <div className="mr-4 text-white text-xl items-center">
          <Icon />
        </div>
        <div>
          <h3 className="font-bold text-lg flex items-center gap-2">{title}</h3>
          <p className="m-0 text-base text-gray-300">{text}</p>
        </div>
        <div className="absolute top-0 left-0 w-0 h-[2px] bg-neutral-400 transition-all duration-1000 group-hover:w-full"></div>
        <div
          className="absolute top-0 left-0 h-96 w-full ml-20 opacity-3 pointer-events-none"
          style={{
            backgroundImage: "url('/favicon.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Servicios;
