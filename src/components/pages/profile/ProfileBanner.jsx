import React from 'react';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import profile from '../../../assets/imgaes/profile/mine.jpeg';
import './profile.css';
const ProfileBanner = () => {
  return (
    <Slide right>
      <div className=" flex text-center items-center justify-center mt-10 sm:px-3 lg:px-20 ">
        <div className="">
          {' '}
          <img
            className="profileImage w-72 h-full rounded-full "
            src={profile}
            alt=""
          />
          <h1 className="mt-2 sm:xl md:text-2xl lg:text-3xl text-center font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            MD Rahat Bin Omar
          </h1>
          <h1 className="sm:xl md:text-2xl lg:text-3xl font-semibold mt-6">
            Hello I Am A{' '}
            <span className=" sm:xl md:text-2xl lg:text-3xl text-center font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              <Typewriter
                words={[
                  'Font-End Developer',
                  'JavaScrip Developer',
                  'React Developer',
                  'Next Js Developer',
                  'NodeJS Developer',
                  'MERN Stack Developer',
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <div className="mt-5">
            <Link
              to={
                'https://drive.google.com/file/d/15QARHKaeJgXTZt5pLKL-Vt47Xt9VoOpQ/view'
              }
            >
              <button className="text-center  bg-gradient-to-r from-purple-400 to-pink-600 px-4 py-2 rounded-md text-white">
                Download Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default ProfileBanner;
