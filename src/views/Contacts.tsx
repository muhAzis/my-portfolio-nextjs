import Logo from '@/components/Logo';
import Reveal from '@/components/animations/Reveal';
import '@/styles/Contacts.scss';
import { Variants, motion } from 'framer-motion';
import React from 'react';

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
      <Reveal always={true} variants={parent} className="col1">
        <motion.h2 variants={children} className="interested">
          <span className="gradient-text">Interested</span> in
          <br />
          my skill?
        </motion.h2>
        <motion.h3 variants={children} className="discuss">
          Or have any
          <br />
          <span className="gradient-text">project</span> to
          <br />
          discuss?
        </motion.h3>
      </Reveal>
      <Reveal always={true} variants={parent} className="col2">
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
      <Reveal always={true} variants={parent} className="col3">
        <Logo
          variants={logo}
          style={{
            width: '100%',
            height: '100%',
            fill: 'url(#my-gradient)',
            stroke: 'var(--clr-white)',
            strokeWidth: '2px ',
            strokeOpacity: '0.2',
          }}
        >
          <linearGradient id="my-gradient" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(144, 34, 229, 0.1)" />
            <stop offset="100%" stopColor="rgba(43, 43, 43, 0.1)" />
          </linearGradient>
        </Logo>
      </Reveal>
    </main>
  );
};

export default Contacts;
