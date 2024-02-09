'use client';
import '@/styles/Navbar.css';
import ButtonCTA from '@/components/ButtonCTA';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';

const Navbar: React.FC = () => {
  const [yOffset, setYOffset] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setYOffset(window.pageYOffset);
    });

    return () => window.removeEventListener('scroll', () => {});
  }, [setYOffset]);

  const handleCTA = (): void => {
    location.href = '#contacts';
  };

  return (
    <nav id="navbar" style={yOffset > 0 ? { backdropFilter: 'blur(20px)', boxShadow: 'var(--box-shadow-lite1)' } : {}}>
      <div className="navbar-container">
        <div className="logo">
          <Logo style={{ width: '50px', height: 'fit-content' }} />
        </div>
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#hero">Home</a>
          </li>
          <li className="menu-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="menu-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="menu-item">
            <ButtonCTA action={handleCTA}>Let&apos;s connect...</ButtonCTA>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
