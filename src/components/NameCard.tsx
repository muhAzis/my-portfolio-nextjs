'use client';
import React from 'react';
import '@/styles/NameCard.scss';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const children: Variants = {
  hidden: { opacity: 0, y: '-50%' },
  visible: { opacity: 1, y: '0%', transition: { duration: 0.5 } },
};

const NameCard: React.FC = () => {
  return (
    <motion.div variants={children} id="nameCard">
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
        <span className="proffesion">Junior Fullstack Web Developer</span>
      </div>
    </motion.div>
  );
};

export default NameCard;
