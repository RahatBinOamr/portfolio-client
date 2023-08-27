import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';

import Card from './Card';
const PortfolioCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://protfolio-server-ten.vercel.app/api/v1/portfolio`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  console.log(data);
  return (
    <Fade bottom>
      <h1 className=" text-center items-center justify-center mt-10 mb-10 text-3xl  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
        Project
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.portfolio?.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </Fade>
  );
};

export default PortfolioCard;
