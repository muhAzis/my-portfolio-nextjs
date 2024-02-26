import Logo from '@/components/Logo';
import Reveal from '@/components/animations/Reveal';
import { useOffset } from '@/hooks/useOffset';
import { useViewport } from '@/hooks/useViewport';
import '@/styles/Contacts.scss';
import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

const parent: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const children: Variants = {
  hidden: { opacity: 0, x: '-50%' },
  visible: { opacity: 1, x: '0%', transition: { duration: 0.3, staggerChildren: 0.03 } },
};

const children2: Variants = {
  hidden: { opacity: 0, y: '50%' },
  visible: { opacity: 1, y: '0%', transition: { duration: 0.2 } },
};

const logo: Variants = {
  hidden: { opacity: 0, y: '100%' },
  visible: { opacity: 1, y: '0%', transition: { duration: 1 } },
};

const margin = '300px 0px -300px 0px';

const Contacts: React.FC = () => {
  const contactsRef = useRef<HTMLDivElement>(null);
  const [width, height] = useViewport();
  const yOffset = useOffset();

  const [contactHeight, setContactHeight] = useState<number>(0);
  const [isOffset, setIsOffset] = useState<boolean>(false);

  useEffect(() => {
    if (contactsRef.current) {
      setContactHeight(contactsRef.current.clientHeight);
    }
  }, [setContactHeight]);

  useEffect(() => {
    setIsOffset(!(yOffset < 992));
  }, [yOffset]);

  return (
    <main id="contacts" ref={contactsRef} style={{ position: 'sticky', bottom: contactHeight > height ? -(contactHeight - height) : 0 }}>
      <Reveal always={isOffset} variants={parent} margin={margin} className="row1">
        <Marquee>
          <motion.span variants={children} className="marquee-text">
            Interested in my skill?
            <span className="dot" />
            Want to connect?
            <span className="dot" />
            Have a project to discuss?
            <span className="dot" />
          </motion.span>
        </Marquee>
      </Reveal>
      <div className="row2">
        <Reveal always={isOffset} variants={children} margin={margin} className="logo-container">
          <Logo
            variants={logo}
            style={{
              height: '100%',
              fill: 'url(#grad)',
              textShadow: 'var(--box-purple)',
              filter: 'url(#f2)',
            }}
          >
            <defs>
              <filter id="f2" width="200" height="200">
                <feOffset in="SourceGraphic" dx="0" dy="0" />
                <feGaussianBlur stdDeviation="10" />
                <feBlend in="SourceGraphic" in2="blurOut" />
              </filter>
              <linearGradient id="grad" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#c8d746" />
                <stop offset="100%" stopColor="#f7e298" />
              </linearGradient>
            </defs>
          </Logo>
        </Reveal>
        <Reveal always={isOffset} variants={parent} margin={margin} className="section">
          <motion.div variants={children} className="sub-title">
            This page
          </motion.div>
          <motion.a variants={children} href="#hero" className="item-page">
            Home
          </motion.a>
          <motion.a variants={children} href="#skills" className="item-page">
            Skills
          </motion.a>
          <motion.a variants={children} href="#projects" className="item-page">
            Projects
          </motion.a>
          <Link href="/about" target="_blank">
            <motion.span variants={children} className="item-page">
              More about me &gt;
            </motion.span>
          </Link>
        </Reveal>
        <Reveal always={isOffset} variants={parent} margin={margin} className="section">
          <motion.div variants={children} className="sub-title">
            Contact me
          </motion.div>
          <motion.a variants={children} href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQnlTWsPfmXxSGtGCHmBWRhPXJxVBlrWWCjcKkCVPzLVMDbrGWlFqnJCPRVdGglHFwRmJJ" target="_blank" className="item">
            <i className="bi bi-google" /> muhabdulazis555@gmail.com
          </motion.a>
          <motion.a variants={children} href="https://wa.me/6288226389456" target="_blank" className="item">
            <i className="bi bi-whatsapp" /> +62 882-2638-9456
          </motion.a>
        </Reveal>
        <Reveal always={isOffset} variants={parent} margin={margin} className="section">
          <motion.div variants={children} className="sub-title">
            Let&apos;s connect
          </motion.div>
          <motion.a variants={children} href="https://github.com/muhAzis" target="_blank" className="item">
            <i className="bi bi-github" /> github.com/muhAzis
          </motion.a>
          <motion.a variants={children} href="https://www.linkedin.com/in/muhabdulazis" target="_blank" className="item">
            <i className="bi bi-linkedin" /> Muhamad Abdul Azis
          </motion.a>
          <motion.a variants={children} href="https://www.instagram.com/muh_abdulazis" target="_blank" className="item">
            <i className="bi bi-instagram" /> @muh_abdulazis
          </motion.a>
          <motion.a variants={children} href="https://www.threads.net/@muh_abdulazis" target="_blank" className="item">
            <i className="bi bi-threads" /> @muh_abdulazis
          </motion.a>
          <motion.a variants={children} href="https://web.facebook.com/muh.ab.azis" target="_blank" className="item">
            <i className="bi bi-facebook" /> Muhammad Abdul Azis
          </motion.a>
        </Reveal>
      </div>
      <Reveal always={isOffset} variants={parent} className="row3">
        <motion.div className="rows">
          <div className="text">Repository of this website:</div>
          <a href="https://github.com/muhAzis/my-protfolio-nextjs" target="_blank" className="repo-link">
            <span>https://github.com/muhAzis/my-protfolio-nextjs</span> <span className="bi bi-box-arrow-up-right" />
          </a>
        </motion.div>
        <motion.div className="rows">
          <div className="text">Build using:</div>
          <div className="tech-stack">
            <img src="/Typescript.png" alt="typescript" className="tech-logo" />
            <img src="/React.png" alt="react" className="tech-logo" />
            <img src="/nextjs.svg" alt="next" className="tech-logo" />
            <img src="/framer-motion.svg" alt="framer-motion" className="tech-logo" />
          </div>
        </motion.div>
      </Reveal>
    </main>
  );
};

export default Contacts;
