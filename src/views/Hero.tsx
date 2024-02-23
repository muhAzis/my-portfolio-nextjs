'use client';
import ButtonCTA from '@/components/ButtonCTA';
import '@/styles/Hero.scss';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { Variants, motion } from 'framer-motion';
import Reveal from '@/components/animations/Reveal';
import { useViewport } from '@/hooks/useViewport';
import { useOffset } from '@/hooks/useOffset';

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
  const scrollParentRef = useRef<HTMLDivElement>(null);

  const handleCTA1 = (): void => {
    window.open('/Muh Abdul Azis CV.pdf', '_blank');
  };

  useEffect(() => {
    if (scrollParentRef.current) {
      const scrollLength = scrollParentRef.current?.getClientRects()[0].height;

      let interval = 2000;
      let scroll = 0;
      const scrollingText = () => {
        scroll += scrollLength;
        if (scroll === scrollLength * 5) {
          scroll = 0;
          interval = 2000;
          scrollParentRef.current?.scroll({ top: scroll, left: 0, behavior: 'instant' });
        } else {
          scrollParentRef.current?.scroll({ top: scroll, left: 0, behavior: 'smooth' });
          if (scroll + scrollLength === scrollLength * 5) {
            interval = 300;
          }
        }

        const start = setTimeout(scrollingText, interval);

        return () => {
          clearTimeout(start);
        };
      };

      scrollingText();
    }
  }, []);

  return (
    <motion.main id="hero" variants={parent} initial="hidden" animate="visible">
      <Marquee className="marquee-back" speed={100}>
        uhamad Abdul Azis M
      </Marquee>
      <div className="hero-container">
        <motion.div
          variants={{
            hidden: { maxHeight: '0px' },
            visible: { maxHeight: '935px', transition: { duration: 1 } },
          }}
          className="col1"
        >
          <Marquee style={{ overflow: 'hidden' }}>
            <span className="profile-pict-running-text">Muhamad Abdul Azis</span>
          </Marquee>
          <div
            className="address-bar"
            onClick={() => {
              window.open('https://maps.app.goo.gl/s5BCWRqNA1Ru2F7p9', '_blank');
            }}
          >
            <i className="bi bi-geo-alt-fill map" />
            <p className="address">
              <span className="country">Indonesia</span>
              <br />
              Jl. Pundong No. 1
              <br />
              Pundong 1 03/02, Tirtoadi, Mlati, Sleman
              <br />
              DI Yogyakarta 55288
            </p>
          </div>
          <Image
            id="profile-picture"
            src={'/profile.png'}
            alt="profile-picture"
            quality={80}
            width={300}
            height={300}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              objectFit: 'cover',
              zIndex: 1,
            }}
          />
        </motion.div>
        <div className="col2">
          <Reveal variants={children} className="row1">
            <div className="greet">Hi, I&apos;m</div>
            <div className="status">
              <span className="dot" />
              Available now
            </div>
          </Reveal>
          <Reveal variants={children} className="row2">
            <h1 className="name">
              Muhamad
              <br />
              Abdul
              <br />
              Azis
            </h1>
          </Reveal>
          <Reveal variants={children} className="row3">
            <p className="description">
              a <span className="blackbold-text">Fullstack Web Developer</span> based <span className="blackbold-text">Programmer</span> and a <span className="blackbold-text">Graphic Designer</span>. Specialized in{' '}
              <span className="purple-text">Code Development</span>, <span className="purple-text">Responsive Web Layouts</span> and <span className="purple-text">UI/UX Design</span>.
            </p>
            <div className="buttons">
              <ButtonCTA id={'downloadCV'} action={handleCTA1}>
                Download CV
              </ButtonCTA>
              <Link href="/about">
                <ButtonCTA id={'learnMore'}>Learn more about me &gt;</ButtonCTA>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </motion.main>
  );
};

export default Hero;
