'use client';
import ButtonCTA from '@/components/ButtonCTA';
import '@/styles/Hero.scss';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { Variants, motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '@/components/animations/Reveal';
import { useViewport } from '@/hooks/useViewport';
import { useOffset } from '@/hooks/useOffset';
import { Sarina } from 'next/font/google';
import ContactCard from '@/components/ContactCard';
import NameCard from '@/components/NameCard';

const sarina = Sarina({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sarina',
});

const parent: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const children: Variants = {
  hidden: { opacity: 0, x: '-50%' },
  visible: { opacity: 1, x: '0%', transition: { duration: 0.5 } },
};

const children2: Variants = {
  hidden: { opacity: 0, x: '50%' },
  visible: { opacity: 1, x: '0%', transition: { duration: 0.5 } },
};

const Hero: React.FC = () => {
  const [width, height] = useViewport();
  const heroRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroContProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: rightProgress } = useScroll({
    target: rightRef,
    offset: ['start start', 'end start'],
  });

  const heroProgress = useTransform(rightProgress, [0, 1], ['0%', '-20%']);
  const heroTextProgress = useTransform(heroContProgress, [0, 1], ['0%', '-50%']);
  const heroText2Progress = useTransform(heroContProgress, [0, 1], ['0%', '50%']);
  const heroTransProgress = useTransform(heroContProgress, [0, 1], [1, 0]);
  const heroTrans2Progress = useTransform(rightProgress, [0, 1], [1, 0]);

  const handleCTA1 = (): void => {
    window.open('/Muh Abdul Azis CV.pdf', '_blank');
  };

  return (
    <motion.main ref={heroRef} id="hero" variants={parent} initial="hidden" animate="visible">
      <motion.div className="marquee-container" style={{ y: heroText2Progress }}>
        <Marquee className="marquee-back" speed={100}>
          <span className={sarina.className} style={{ opacity: 0.5 }}>
            uhamad Abdul Azis M
          </span>
        </Marquee>
      </motion.div>
      <div className="hero-container">
        <div className="row1">
          <ContactCard link="" bIcon="bi bi-github" title="muhAzis" contact="github.com/muhAzis" mode={width <= 768 ? 'mini' : 'full'} />
          <ContactCard link="" bIcon="bi bi-google" title="Muhamad Abdul Azis" contact="muhabdulazis555@gmail.com" mode={width <= 768 ? 'mini' : 'full'} />
          <ContactCard link="" bIcon="bi bi-whatsapp" title="Whatsapp" contact="+62-882-2638-9456" mode={width <= 768 ? 'mini' : 'full'} />
        </div>
        <div className="row2">
          <NameCard />
        </div>
        {width <= 992 && (
          <a href="https://maps.app.goo.gl/s5BCWRqNA1Ru2F7p9" target="_blank" className="address-bar-mini">
            <motion.i className="bi bi-geo-alt-fill map" style={{ y: heroTextProgress, opacity: heroTransProgress }} />
            <motion.p className="address" style={{ y: heroTextProgress, opacity: heroTransProgress }}>
              <span className="country">
                Indonesia <span className="flag" />
              </span>
            </motion.p>
          </a>
        )}
        <div className="row3">
          <p className="description">
            a <span className="blackbold-text">Fullstack Web Developer</span> based <span className="blackbold-text">Programmer</span> and a <span className="blackbold-text">Graphic Designer</span>. Specialized in{' '}
            <span className="highlighted-text">Code Development</span>, <span className="highlighted-text">Responsive Web Layouts</span> and <span className="highlighted-text">UI/UX Design</span>.
          </p>
          <div className="call-to-actions">
            <ButtonCTA>Download my CV</ButtonCTA>
            <ButtonCTA href="/about" navigate={true}>
              Learn more about me &gt;
            </ButtonCTA>
          </div>
        </div>
        {width > 992 && (
          <a href="https://maps.app.goo.gl/s5BCWRqNA1Ru2F7p9" target="_blank" className="address-bar">
            <motion.i className="bi bi-geo-alt-fill map" style={{ y: heroTextProgress, opacity: heroTransProgress }} />
            <motion.p className="address" style={{ y: heroTextProgress, opacity: heroTransProgress }}>
              <span className="country">
                Indonesia <span className="flag" />
              </span>
              <br />
              Jl. Pundong No. 1
              <br />
              Pundong 1 03/02, Tirtoadi, Mlati, Sleman, DI Yogyakarta 55288
            </motion.p>
          </a>
        )}
      </div>
    </motion.main>
  );
};

export default Hero;
