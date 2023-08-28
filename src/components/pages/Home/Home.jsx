import React from 'react';
import PortfolioCard from '../../Portfolio/PortfolioCard';
import Skill from '../../Skill/Skill';
import ParticleBg from '../../particles/ParticleBg';
import Contact from '../contact/Contact';
import Profile from '../profile/Profile';

const Home = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-2 lg:px-8">
      <ParticleBg />
      <Profile />
      <Skill />
      <PortfolioCard />
      <Contact />
    </div>
  );
};

export default Home;
