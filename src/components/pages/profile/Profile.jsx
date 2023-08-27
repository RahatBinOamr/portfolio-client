import React from 'react';
import AboutMe from '../aboutMe/AboutMe';
import ProfileBanner from './ProfileBanner';

const Profile = () => {
  return (
    <div className="mx-auto">
      <ProfileBanner />
      <AboutMe />
    </div>
  );
};

export default Profile;
