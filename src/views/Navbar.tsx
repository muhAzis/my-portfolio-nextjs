'use client';
import '@/styles/Navbar.css';
import ButtonCTA from '@/components/ButtonCTA';
import React, { useEffect, useRef, useState } from 'react';
import Logo from '@/components/Logo';

const Navbar: React.FC = () => {
  const logoBtnRef = useRef<HTMLDivElement>(null);

  const [yOffset, setYOffset] = useState<number>(0);
  const [menuActive, setMenuActive] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setYOffset(window.pageYOffset);
    });

    return () => window.removeEventListener('scroll', () => {});
  }, [setYOffset]);

  useEffect(() => {
    if (logoBtnRef.current) {
      const button = logoBtnRef.current;
      button.onclick = () => {
        setMenuActive(!menuActive);
      };
    }
  }, [menuActive]);

  const handleCTA = (): void => {
    location.href = '#contacts';
  };

  const handleDownloadCV = (): void => {
    window.open('/Muh Abdul Azis CV.pdf', '_blank');
  };

  return (
    <nav id="navbar" style={yOffset > 0 || menuActive ? { backgroundColor: 'rgba(245, 245, 245, 0.3)', backdropFilter: 'blur(20px)', boxShadow: 'var(--box-shadow-lite1)' } : {}}>
      <div className="navbar-container">
        <div ref={logoBtnRef} className="logo">
          <Logo style={{ width: '50px', height: 'fit-content' }} />
        </div>
        <ul className={menuActive ? 'menu-list active' : 'menu-list'}>
          <li onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#hero">Home</a>
          </li>
          <li onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#skills">Skills</a>
          </li>
          <li onClick={() => setMenuActive(false)} className="menu-item">
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => setMenuActive(false)} className="menu-item">
            <ButtonCTA action={handleCTA}>Let&apos;s connect...</ButtonCTA>
          </li>
          <li onClick={() => setMenuActive(false)} id="downloadCV2" className="menu-item">
            <ButtonCTA action={handleDownloadCV}>Download as CV</ButtonCTA>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
