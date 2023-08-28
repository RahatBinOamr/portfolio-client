import React, { useEffect, useState } from 'react';
import { Slide, Zoom } from 'react-reveal';
import { Link, useParams } from 'react-router-dom';
import ParticleDBg from '../particles/ParticlesDBg';

const PortfolioDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://protfolio-server-ten.vercel.app/api/v1/portfolio/${id}`)
      .then(res => res.json())
      .then(data => setData(data?.data));
  }, []);
  console.log(data, id);
  const {
    title,
    image,
    image1,
    image2,
    image3,
    image4,
    live,
    server,
    client,
    description,
  } = data;
  console.log(server);
  return (
    <>
      <ParticleDBg />
      <div className=" ">
        <Link to={'/'}>
          <button className="bg-pink-500 p-2 rounded-md shadow-md">
            Back To Home
          </button>
        </Link>
      </div>
      <div className="w-full mt-5 mb-8 ">
        <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl  ">
          <Slide right>
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
              <img
                src={image}
                alt=""
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
              />
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src={image1}
              />
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src={image2}
              />
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src={image3}
              />
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src={image4}
              />
            </div>
          </Slide>

          <Slide left>
            {' '}
            <div>
              <Link to={live}>
                {' '}
                <button className="text-center  bg-gradient-to-r from-purple-400 to-pink-600 px-5 py-2 rounded-md text-white">
                  Live
                </button>
              </Link>
              <Link to={client}>
                {' '}
                <button className="text-center  bg-gradient-to-r from-purple-400 to-pink-600 px-5 py-2 rounded-md text-white">
                  Client
                </button>
              </Link>
              <Link to={server}>
                {' '}
                <button className="text-center  bg-gradient-to-r from-purple-400 to-pink-600 px-5 py-2 rounded-md text-white">
                  Server
                </button>
              </Link>
            </div>
          </Slide>

          <Zoom bottom cascade>
            <div className="mt-8">
              <h1 className="text-xl font-bold ">{title} </h1>
            </div>

            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetails;
