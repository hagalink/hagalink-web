import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: "Álvaro Fernández Amaro", img: "/alvaro.jpeg", title: "CDO Hagalink S.L.", subtitle: "Liderando la dirección creativa." },
    { name: "Ignacio de Loyola Díaz Jiménez", img: "/ignacio.jpeg", title: "CEO Hagalink S.L.", subtitle: "Guiando la visión empresarial." },
    { name: "Juan Deogracias Moya", img: "/juan.jpeg", title: "CIO Hagalink S.L.", subtitle: "Diseñando estrategias tecnológicas." },
    { name: "Alejandro Bermejo Moral", img: "/alex.jpeg", title: "CTO Hagalink S.L.", subtitle: "Asegurando la excelencia técnica." },
  ];

  return (
    <div className="grid gap-10 items-center justify-center py-20 md:grid-cols-2 md:max-w-xl md:mx-auto xl:flex xl:max-w-none">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="relative text-center group rounded-2xl overflow-hidden 
            md:transition-transform md:duration-1000 lg:hover:scale-110"
        >
          <img
            src={member.img}
            alt={member.name}
            className="h-[300px] w-full object-cover img-shadow img-gradient filter grayscale-0"
            loading="lazy"
          />
          
          <div
            className="absolute bottom-0 left-0 w-full bg-[#1b2431]/70
              flex flex-col items-center justify-center text-white space-y-1 py-4 
              opacity-100 lg:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700"
          >
            <h7 className="text-md font-semibold ">{member.name}</h7>
            <p className="text-sm font-extralight">{member.title}</p>
            <p className="text-xs font-extralight">{member.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
