  import React from 'react';

  const Team = () => {
    return (
      <div className="grid gap-10 items-center justify-center py-20 md:flex">
        <div className="text-center">
          <img
            src="/alvaro.png"
            alt="Alvaro"
            className="h-[500px] img-shadow img-gradient filter grayscale md:transition-transform md:duration-1000 md:hover:grayscale-0 md:hover:scale-120 cursor-pointer"
          />

        </div>
        <div className="text-center">
          <img
            src="/ignacio.png"
            alt="Ignacio"
            className="h-[500px] img-shadow img-gradient filter grayscale md:transition-transform md:duration-1000 md:hover:grayscale-0 md:hover:scale-120 cursor-pointer"
          />

        </div>
        <div className="text-center">
          <img
            src="/juan.png"
            alt="Juan"
            className="h-[500px] img-shadow img-gradient filter grayscale md:transition-transform md:duration-1000 md:hover:grayscale-0 md:hover:scale-120 cursor-pointer"
          />

        </div>
        <div className="text-center">
          <img
            src="/alex.png"
            alt="Alex"
            className="h-[500px] img-gradient filter grayscale md:transition-transform md:duration-1000 md:hover:grayscale-0 md:hover:scale-120 cursor-pointer"
          />

        </div>
      </div>
    );
  };

  export default Team;