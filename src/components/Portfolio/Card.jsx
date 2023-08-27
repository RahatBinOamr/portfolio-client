import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';

const Card = ({ _id, title, image }) => {
  return (
    <div className=" p-1 card w-80 shadow-xl   bg-gradient-to-r from-purple-400 to-pink-600 rounded-md  ">
      {' '}
      <div className="    ">
        <Zoom bottom cascade>
          <div className="relative  overflow-hidden bg-cover bg-no-repeat bg-gray-800 ">
            {' '}
            <Link to={`/portfolio/${_id}`}>
              <figure>
                <img
                  src={image}
                  alt="Shoes"
                  className="w-full h-60 mb-3    transition duration-300 ease-in-out hover:scale-110"
                />
              </figure>
            </Link>
            <Link to={`/portfolio/${_id}`}>
              {' '}
              <div className="card-body">
                <h2 className="card-title text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {' '}
                  {title}
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </Link>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Card;
