import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: "Álvaro Fernández Amaro", img: "/alvaro.png", title: "Desarrollador Full Stack", subtitle: "Apasionado del código y la innovación." },
    { name: "Ignacio de Loyola Díaz Jiménez", img: "/ignacio.png", title: "Diseñador UX/UI", subtitle: "Crea experiencias visuales inolvidables." },
    { name: "Juan Deogracias Moya", img: "/juan.png", title: "Ingeniero de Software", subtitle: "Arquitecto de soluciones eficientes." },
    { name: "Alejandro Bermejo Moral", img: "/alex.png", title: "DevOps & Seguridad", subtitle: "Garantizando estabilidad y protección." },
  ];

  return (
    <div className="grid gap-10 items-center justify-center py-20 md:flex">
      {teamMembers.map((member, index) => (
        <div key={index} className="relative text-center group">
          <img
            src={member.img}
            alt={member.name}
            className="h-[500px] img-shadow img-gradient filter grayscale 
              md:transition-transform md:duration-1000 md:hover:grayscale-50 
              md:hover:scale-110 cursor-pointer"
          />
          
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 
              group-hover:opacity-100 transition-opacity duration-700 
              flex flex-col items-center text-white space-y-1">
            <h3 className="text-xl font-bold bg-gray-800 bg-opacity-70 px-2 py-1 rounded">{member.name}</h3>
            <p className="text-sm bg-gray-800 bg-opacity-70 px-2 py-1 rounded">{member.title}</p>
            <p className="text-xs bg-gray-800 bg-opacity-70 px-2 py-1 rounded">{member.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
