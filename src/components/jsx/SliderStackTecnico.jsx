import { InfiniteSlider } from '../motion-primitives/infinite-slider';
import { SiAstro } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiNestjs } from 'react-icons/si';

export function SliderStackTecnico() {
  const iconColor = "#FFFFFF";

  return (
    <InfiniteSlider gap={80} speed={80} reverse>
      <SiAstro className="text-white w-16 h-16 sm:w-24 sm:h-24" />
      <FaPython className="text-white w-16 h-16 sm:w-24 sm:h-24" />
      <SiDjango className="text-white w-16 h-16 sm:w-24 sm:h-24" />
      <FaReact className="text-white w-16 h-16 sm:w-24 sm:h-24" />
      <RiTailwindCssFill className="text-white w-16 h-16 sm:w-24 sm:h-24" />
      <FaJava className="text-white w-16 h-16 sm:w-24 sm:h-24" />
      <SiSpring className="text-white w-16 h-16 sm:w-24 sm:h-24" />
      <SiMongodb className="text-white w-16 h-16 sm:w-24 sm:h-24" />
      <FaDocker className="text-white w-16 h-16 sm:w-24 sm:h-24" />
      <GrMysql className="text-white w-16 h-16 sm:w-24 sm:h-24" />
      <SiTypescript className="text-white w-16 h-16 sm:w-24 sm:h-24" />
      <SiPostgresql className="text-white w-16 h-16 sm:w-24 sm:h-24" />
      <SiNestjs className="text-white w-16 h-16 sm:w-24 sm:h-24" />
    </InfiniteSlider>
  );
}
