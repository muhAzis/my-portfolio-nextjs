import React, { useEffect, useState } from 'react';
import '@/styles/WelcomeScreen.scss';
import { easeInOut, easeOut, motion } from 'framer-motion';
import Logo from '@/components/Logo';

const parent = {
  hidden: { height: '100dvh' },
  visible: { height: '0dvh', transition: { delay: 2.4, duration: 1, ease: easeOut, staggerChildren: 0.1 } },
};

const logoAnimation = {
  hidden: { y: '100%' },
  visible: { y: ['100%', '0%', '0%', '-100%'], transition: { duration: 3, times: [0, 0.1, 0.8, 1], ease: easeOut } },
};

const textParentAnimation = {
  hidden: { y: '50%', opacity: 0 },
  visible: { y: '0%', opacity: 1, transition: { duration: 0.2, ease: easeOut } },
};

const textsAnimation = {
  hidden: { y: '0%' },
  visible: { y: ['0%', '-100%', '-200%', '-300%'], transition: { duration: 1.5, delay: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: easeOut } },
};

const WelcomeScreen: React.FC = ({}) => {
  return (
    <motion.main id="welcomeScreen" variants={parent} initial="hidden" animate="visible">
      {/* <motion.main id="welcomeScreen"> */}
      <div className="welcome-container">
        <Logo
          variants={logoAnimation}
          style={{
            position: 'absolute',
            width: '100%',
            minWidth: 1000,
            fill: 'var(--clr-white)',
            opacity: 0.005,
          }}
        />
        <motion.div variants={textParentAnimation} className="welcome-text">
          <motion.span variants={textsAnimation} className="texts">
            SELAMAT DATANG
          </motion.span>
          <motion.span variants={textsAnimation} className="texts">
            WELCOME
          </motion.span>
          <motion.span variants={textsAnimation} className="texts">
            ALOHA
          </motion.span>
          <motion.span variants={textsAnimation} className="texts">
            いらっしゃいませ
          </motion.span>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default WelcomeScreen;
