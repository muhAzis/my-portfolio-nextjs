'use client';
import ButtonCTA from '@/components/ButtonCTA';
import '@/styles/Hero.scss';
import React, { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { Variants, motion, useScroll, useTransform } from 'framer-motion';
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
      staggerChildren: 0.2,
      delay: 2.5,
      delayChildren: 2.5,
    },
  },
};

const children: Variants = {
  hidden: { opacity: 0, y: '-50%' },
  visible: { opacity: 1, y: '0%', transition: { duration: 0.5 } },
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroContProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroText2Progress = useTransform(heroContProgress, [0, 1], ['0%', '50%']);

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
          <ContactCard link="https://github.com/muhAzis" bIcon="bi bi-github" title="muhAzis" contact="github.com/muhAzis" />
          <ContactCard
            link="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQhdMWjRfXSmMnvSrGGzZGNvZtxXqhJbqXzdQGgzGkfvcnvdFKbmJMGggblNbnQsZHpKG"
            bIcon="bi bi-google"
            title="Muhamad Abdul Azis"
            contact="muhabdulazis555@gmail.com"
          />
          <ContactCard link="https://wa.me/6288226389456" bIcon="bi bi-whatsapp" title="Whatsapp" contact="+62-882-2638-9456" />
        </div>
        <div className="row2">
          <NameCard />
        </div>
        <motion.a variants={children} href="https://maps.app.goo.gl/s5BCWRqNA1Ru2F7p9" target="_blank" className="address-bar-mini">
          <motion.i className="bi bi-geo-alt-fill map" />
          <motion.p className="address">
            <span className="country">
              Indonesia <span className="flag" />
            </span>
          </motion.p>
        </motion.a>
        <div className="row3">
          <motion.p variants={children} className="description">
            a <span className="blackbold-text">Fullstack Web Developer</span> based <span className="blackbold-text">Programmer</span> and a <span className="blackbold-text">Graphic Designer</span>. Specialized in{' '}
            <span className="highlighted-text">Code Development</span>, <span className="highlighted-text">Responsive Web Layouts</span> and <span className="highlighted-text">UI/UX Design</span>.
          </motion.p>
          <motion.div variants={children} className="call-to-actions">
            <ButtonCTA download="/Muh Abdul Azis CV.pdf">Download my CV</ButtonCTA>
            <ButtonCTA href="/about" navigate={true}>
              Learn more about me &gt;
            </ButtonCTA>
          </motion.div>
        </div>
        <motion.a variants={children} href="https://maps.app.goo.gl/s5BCWRqNA1Ru2F7p9" target="_blank" className="address-bar">
          <i className="bi bi-geo-alt-fill map" />
          <p className="address">
            <span className="country">
              Indonesia <span className="flag" />
            </span>
            <br />
            Jl. Pundong No. 1
            <br />
            Pundong 1 03/02, Tirtoadi, Mlati, Sleman, DI Yogyakarta 55288
          </p>
        </motion.a>
      </div>
    </motion.main>
  );
};

export default Hero;
