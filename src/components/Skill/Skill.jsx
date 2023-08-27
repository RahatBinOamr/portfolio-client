import React from 'react';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { BsBootstrapFill } from 'react-icons/bs';
import { DiJavascript1 } from 'react-icons/di';
import { FaHtml5, FaNode, FaReact } from 'react-icons/fa';
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandCss3, TbBrandNextjs } from 'react-icons/tb';
import Slide from 'react-reveal/Slide';
const Skill = () => {
  const items = [
    { item: <FaHtml5 />, range: '95%', title: 'HTML' },
    { item: <TbBrandCss3 />, range: '90%', title: 'CSS' },
    { item: <BiLogoTailwindCss />, range: '95%', title: 'Tailwind CSS' },
    { item: <BsBootstrapFill />, range: '95%', title: 'Bootstrap CSS' },
    { item: <DiJavascript1 />, range: '80%', title: 'JavaScript' },
    { item: <FaReact />, range: '90%', title: 'React JS' },
    { item: <SiRedux />, range: '90%', title: 'React Redux' },
    { item: <SiRedux />, range: '90%', title: 'Redux Toolkit' },
    { item: <TbBrandNextjs />, range: '73%', title: 'Next JS' },
    { item: <FaNode />, range: '85%', title: 'Node Js' },
    { item: <SiExpress />, range: '90%', title: 'Express Js' },
    { item: <SiMongodb />, range: '83%', title: 'MongoDB' },
    { item: <SiTypescript />, range: '53%', title: 'TypeScript' },
    {
      item: <SiFirebase />,
      range: '83%',
      title: 'Firebase Authentication',
    },
  ];

  return (
    <Slide right>
      <h1 className=" text-center items-center justify-center mt-10 mb-10 text-3xl  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {' '}
        SKILL
      </h1>
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 items-center ">
        {items.map((item, index) => (
          <div className="flex items-center">
            <div
              key={index}
              className={`w-24 h-24 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 cursor-pointer`}
            >
              <div className="absolute w-full h-full mt-[-70px] text-3xl  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center animate-ping">
                {item.range}
              </div>

              <div className=" flex items-center justify-center circle w-16 h-16 text-5xl rounded-full animate-spin text-pink-500">
                {item.item}
              </div>
            </div>
            <div className="font-bold items-center justify-center    text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
};

export default Skill;
