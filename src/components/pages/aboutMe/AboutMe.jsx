import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import profile from '../../../assets/imgaes/profile/mine.jpeg';
const AboutMe = () => {
  return (
    <Slide left>
      <h1 className="  text-center items-center justify-center mt-10 text-3xl  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {' '}
        About Me{' '}
      </h1>
      <div className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mt-7  items-center justify-center ">
        <div className="hidden md:block lg:hidden xl:block sm:mt-3 md:mt-6 lg:mt-10">
          <img
            className="w-80 h-full ms-60 rounded-xl    bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            src={profile}
            alt=""
          />
        </div>
        <div className="me-2 md:me-4 lg:me-7">
          <h1 className="text-3xl font-semibold ">
            {' '}
            My Name{' '}
            <span className="text-3xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {' '}
              MD Rahat Bin Omar
            </span>
          </h1>
          <p>
            Highly Skilled Web Developer With One Years Of Experience Designing
            And Developing Responsive, User-Friendly Websites And Web
            Applications. Proficient In Front-End And Back-End Technologies,
            Including HTML5, CSS3, JavaScript, React JS, React Redux, Express
            Js, Node JS And Mongo DB. Strong Problem-Solving Abilities And A
            Passion For Staying Up-To-Date With The Latest Industry Trends And
            Technologies.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-6 items-center justify-between">
            <div>
              <p className="text-xl">
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  age :-
                </span>
                22
              </p>

              <p className="text-xl">
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  gender :-
                </span>
                Male
              </p>

              <p className="text-xl">
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Experience :-
                </span>
                1 Year +
              </p>

              <p className="text-xl">
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Work Time :-
                </span>
                Available
              </p>
            </div>
            <div>
              <p className="text-xl">
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Language :-
                </span>
                Bangla / English
              </p>

              <p className="text-xl">
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Phone :-
                </span>
                01878813721
              </p>

              <p className="text-xl">
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Email :-
                </span>
                rahatbinomar@gmail.com
              </p>

              <p className="text-xl">
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Address :-
                </span>
                Ziri Patiya Chittagong Bangladesh
              </p>
            </div>
          </div>
          <div>
            {' '}
            <div className="grid grid-flow-col gap-4 mt-3">
              <Link to={'https://github.com/RahatBinOamr'}>
                <BsGithub size={30} className="me-3" />
              </Link>
              <Link
                to={'https://www.linkedin.com/in/md-rahat-bin-omar-0832a7244/'}
              >
                <BsLinkedin size={30} className="me-3" />
              </Link>
              <Link
                to={'https://www.facebook.com/profile.php?id=100078041629619'}
              >
                <BsFacebook size={30} />
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <Link to={'/contact'}>
              <button className="text-center  bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded-md text-white">
                <span className=" animate-ping ">📞</span> Contact Me{' '}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default AboutMe;
