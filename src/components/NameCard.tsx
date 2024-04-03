import React from 'react';
import '@/styles/NameCard.scss';
import Image from 'next/image';

const NameCard: React.FC = () => {
  return (
    <div id="nameCard">
      <div className="profile-pic">
        <Image id="profilePic" src="/profile1x1.png" alt="Profile Picture" width={150} height={150} />
        <span className="status">
          <span className="dot" />
          Available
        </span>
      </div>
      <div className="profile-info">
        <span className="greet">Hi, I&apos;m</span>
        <h1 className="name">Muhamad Abdul Azis</h1>
        <span className="proffesion">Fullstack Web Developer</span>
      </div>
    </div>
  );
};

export default NameCard;
