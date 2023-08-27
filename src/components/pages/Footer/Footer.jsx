import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link to={'https://github.com/RahatBinOamr'}>
            <BsGithub size={30} className="me-3" />
          </Link>
          <Link to={'https://www.linkedin.com/in/md-rahat-bin-omar-0832a7244/'}>
            <BsLinkedin size={30} className="me-3" />
          </Link>
          <Link to={'https://www.facebook.com/profile.php?id=100078041629619'}>
            <BsFacebook size={30} />
          </Link>
        </div>
      </div>
      <div>
        <p>
          Copyright © 2023 - All right reserved by{' '}
          <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            MD Rahat Bin Omar
          </span>{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
