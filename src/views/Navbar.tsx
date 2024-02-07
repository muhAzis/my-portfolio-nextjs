'use client';
import '@/styles/Navbar.css';
import ButtonCTA from '@/components/ButtonCTA';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

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
          <Image src={'/Logo.svg'} alt="Logo" height={40} width={50} />
        </div>
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#home">Home</a>
          </li>
          <li className="menu-item">
            <a href="#about">Skills</a>
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
