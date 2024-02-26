'use client';
import '@/styles/Navbar.scss';
import ButtonCTA from '@/components/ButtonCTA';
import React, { useEffect, useRef, useState } from 'react';
import Logo from '@/components/Logo';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useOffset } from '@/hooks/useOffset';

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const children = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const children2 = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Navbar: React.FC = () => {
  const logoBtnRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const progressBounce = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const progressBar = useTransform(progressBounce, [0, 1], ['0%', '100%']);

  const yOffset = useOffset();
  const [menuActive, setMenuActive] = useState<boolean>(false);

  useEffect(() => {
    if (logoBtnRef.current) {
      const button = logoBtnRef.current;
      button.onclick = () => {
        setMenuActive(!menuActive);
      };
    }
  }, [menuActive]);

  const handleCTA = (): void => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleDownloadCV = (): void => {
    window.open('/Muh Abdul Azis CV.pdf', '_blank');
  };

  return (
    <nav id="navbar" style={yOffset > 0 || menuActive ? { backgroundColor: 'rgba(245, 245, 245, 0.3)', backdropFilter: 'blur(20px)', boxShadow: 'var(--box-shadow-lite1)' } : {}}>
      <motion.div className="progress-bar" style={{ width: progressBar }} />
      <motion.div variants={parent} initial="hidden" animate="visible" className="navbar-container">
        <div ref={logoBtnRef} className="logo">
          <Logo variants={children} style={{ width: '50px', height: 'fit-content', fill: 'var(--clr-white)' }} />
        </div>
        <ul className={menuActive ? 'menu-list active' : 'menu-list'}>
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#hero">Home</a>
          </motion.li>
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#skills">Skills</a>
          </motion.li>
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <ButtonCTA action={handleCTA}>Let&apos;s connect...</ButtonCTA>
          </motion.li>
          <motion.li variants={children2} onClick={() => setMenuActive(false)} id="downloadCV2" className="menu-item">
            <ButtonCTA action={handleDownloadCV} reverseColor={true}>
              Download as CV
            </ButtonCTA>
          </motion.li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
