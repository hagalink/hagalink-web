import React from 'react';

const Team = () => {
  const teamMembers = [
    { 
      name: "Álvaro Fernández Amaro", 
      img: "/alvaro.jpeg", 
      title: "CDO Hagalink S.L.", 
      subtitle: "Liderando la dirección creativa.", 
      linkedin: "https://www.linkedin.com/in/alvaroofernaandez" 
    },
    { 
      name: "Ignacio de Loyola Díaz Jiménez", 
      img: "/ignacio.jpeg", 
      title: "CEO Hagalink S.L.", 
      subtitle: "Guiando la visión empresarial.", 
      linkedin: "https://www.linkedin.com/in/ignacio-de-loyola-d%C3%ADaz-jim%C3%A9nez/" 
    },
    { 
      name: "Juan Deogracias Moya", 
      img: "/juan.jpeg", 
      title: "CIO Hagalink S.L.", 
      subtitle: "Diseñando estrategias tecnológicas.", 
      linkedin: "https://www.linkedin.com/in/juan-deogracias-moya" 
    },
    { 
      name: "Alejandro Moral Bermejo", 
      img: "/alex.jpeg", 
      title: "CTO Hagalink S.L.", 
      subtitle: "Asegurando la excelencia técnica.", 
      linkedin: "https://www.linkedin.com/in/alejandro-moral-bermejo" 
    },
  ];

  return (
    <div className="grid gap-10 items-center justify-center py-20 md:grid-cols-2 md:max-w-xl md:mx-auto xl:flex xl:max-w-none">
      {teamMembers.map((member, index) => (
        <a
          key={index}
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-center group rounded-2xl overflow-hidden 
            transition-transform duration-1000 lg:hover:scale-110"
        >
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-auto max-w-[300px] max-h-[400px] object-cover img-shadow img-gradient filter grayscale hover:grayscale-0 rounded-2xl"
            loading="lazy"
          />
          
          <div
            className="absolute bottom-0 left-0 w-full bg-black/70
              flex flex-col items-center justify-center text-white space-y-1 py-4 
              opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-b-2xl"
          >
            <h7 className="text-md font-semibold ">{member.name}</h7>
            <p className="text-sm font-extralight">{member.title}</p>
            <p className="text-xs font-extralight">{member.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Team;
