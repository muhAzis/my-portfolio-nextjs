import Logo from '@/components/Logo';
import Reveal from '@/components/animations/Reveal';
import '@/styles/Contacts.scss';
import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
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

const Contacts: React.FC = () => {
  return (
    <main id="contacts">
      <Reveal always={true} variants={parent} className="row1">
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
      <Reveal always={true} variants={parent} className="row2">
        <motion.div variants={children} className="logo-container">
          <Logo
            variants={logo}
            style={{
              height: '100%',
              fill: 'var(--clr-white)',
            }}
          />
        </motion.div>
        <div className="section">
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
        </div>
        <div className="section">
          <motion.div variants={children} className="sub-title">
            Contact me
          </motion.div>
          <motion.a variants={children} href="" target="_blank" className="item">
            <i className="bi bi-google" /> muhabdulazis555@gmail.com
          </motion.a>
          <motion.a variants={children} href="https://wa.me/6288226389456" target="_blank" className="item">
            <i className="bi bi-whatsapp" /> +62 882-2638-9456
          </motion.a>
        </div>
        <div className="section">
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
        </div>
      </Reveal>
      <Reveal always={true} variants={parent} className="row3">
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
