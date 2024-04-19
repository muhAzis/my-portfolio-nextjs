'use client';
import '@/styles/Navbar.scss';
import React, { useState } from 'react';
import Logo from '@/components/Logo';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useViewport } from '@/hooks/useViewport';

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
  const [width, height] = useViewport();
  const { scrollYProgress } = useScroll();
  const progressBounce = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const progressBar = useTransform(progressBounce, [0, 1], ['0%', '100%']);

  const [menuActive, setMenuActive] = useState<boolean>(false);

  const scrollToBottom = (): void => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return width > 768 ? (
    <nav id="navbar">
      <motion.div className="progress-bar" style={{ width: progressBar }} />
      <motion.div variants={parent} initial="hidden" animate="visible" className="navbar-container">
        <div className="logo">
          <Logo variants={children} style={{ width: '50px', height: 'fit-content', fill: 'var(--clr-light-dark)', filter: 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.25))' }} />
        </div>
        <ul className="menu-list">
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#hero">Home</a>
          </motion.li>
          <Image src="/cakram-black.svg" alt="cakram-b" height={25} width={25} style={{ animation: 'spin 5s infinite linear' }} />
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#skills">Skills</a>
          </motion.li>
          <Image src="/cakram-black.svg" alt="cakram-b" height={25} width={25} style={{ animation: 'spin 5s infinite linear' }} />
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#projects">Projects</a>
          </motion.li>
          <Image src="/cakram-black.svg" alt="cakram-b" height={25} width={25} style={{ animation: 'spin 5s infinite linear' }} />
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#developer">Developer</a>
          </motion.li>
          <Image src="/cakram-black.svg" alt="cakram-b" height={25} width={25} style={{ animation: 'spin 5s infinite linear' }} />
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <div className="unique-menu" onClick={scrollToBottom}>
              Let&apos;s connect!
            </div>
          </motion.li>
        </ul>
      </motion.div>
    </nav>
  ) : (
    <nav id="miniNavbar">
      <motion.div className="progress-bar" style={{ width: progressBar }} />
      <motion.div variants={parent} initial="hidden" animate="visible" className="navbar-container">
        <div className="logo" style={{ opacity: 0 }}>
          <Logo variants={children} style={{ width: '50px', height: 'fit-content', fill: 'var(--clr-light-dark)', filter: 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.25))' }} />
        </div>
        <div className="menu-btn" onClick={() => setMenuActive((prev) => !prev)}>
          <Image className="menu-image" src="/cakram-white.svg" alt="menu" height={30} width={30} />
        </div>
        <ul className={menuActive ? 'menu-list active' : 'menu-list'}>
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#hero">Home</a>
            <Image src="/cakram-black.svg" alt="cakram-b" height={25} width={25} style={{ animation: 'spin 8s infinite linear' }} />
          </motion.li>
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#skills">Skills</a>
            <Image src="/cakram-black.svg" alt="cakram-b" height={25} width={25} style={{ animation: 'spin 8s infinite linear' }} />
          </motion.li>
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#projects">Projects</a>
            <Image src="/cakram-black.svg" alt="cakram-b" height={25} width={25} style={{ animation: 'spin 8s infinite linear' }} />
          </motion.li>
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#developer">Developer</a>
            <Image src="/cakram-black.svg" alt="cakram-b" height={25} width={25} style={{ animation: 'spin 8s infinite linear' }} />
          </motion.li>
          <motion.li variants={children2} onClick={() => setMenuActive(false)} className="menu-item">
            <div className="unique-menu" onClick={scrollToBottom}>
              Let&apos;s connect!
            </div>
            <Image src="/cakram-black.svg" alt="cakram-b" height={25} width={25} style={{ animation: 'spin 8s infinite linear' }} />
          </motion.li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
