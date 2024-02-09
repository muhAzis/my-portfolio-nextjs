'use client';
import ButtonCTA from '@/components/ButtonCTA';
import '@/styles/Hero.scss';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';

const Hero: React.FC = () => {
  const scrollParentRef = useRef<HTMLDivElement>(null);

  const handleCTA = (): void => {
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

        setTimeout(scrollingText, interval);
      };

      scrollingText();
    }
  }, []);

  return (
    <main id="hero">
      <div className="left-col">
        <div className="col1">
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
        </div>
        <div className="col2">
          <div className="row1">
            <div className="greet">Hi, I&apos;m</div>
            <div className="status">
              <span className="dot" />
              Available now
            </div>
          </div>
          <div className="row2">
            <h1 className="name">
              Muhamad
              <br />
              Abdul
              <br />
              Azis
            </h1>
          </div>
          <div className="row3">
            <p className="description">
              a <span className="blackbold-text">Web Developer</span> based <span className="blackbold-text">Programmer</span> and a <span className="blackbold-text">Graphic Designer</span>. Specialized in{' '}
              <span className="purple-text">Code Development</span>, <span className="purple-text">Responsive Web Layouts</span> and <span className="purple-text">UI/UX Design</span>.
            </p>
            <ButtonCTA id={'downloadCV'} action={handleCTA}>
              Download as CV
            </ButtonCTA>
          </div>
        </div>
      </div>
      <div className="right-col">
        <div ref={scrollParentRef} className="scrolling-text">
          <div className="scrolling-item">
            Website
            <br />
            Developer
          </div>
          <div className="scrolling-item">Programmer</div>
          <div className="scrolling-item">
            UI/UX
            <br />
            Designer
          </div>
          <div className="scrolling-item">
            Logo
            <br />
            Designer
          </div>
          <div className="scrolling-item">
            Website
            <br />
            Developer
          </div>
        </div>
        <div className="backstory-tab">
          <span className="quote" />
          <p className="backstory">
            Graduated from an <span className="purple-text">almost-IT major</span> in one of most <span className="purple-text">favorite university</span> in Indonesia. The main focus is in{' '}
            <span className="purple-text">digital electronics</span> which requires <span className="purple-text">programming</span> most of the time, so I decided to deepen my programming skill as a{' '}
            <span className="purple-text">web developer</span> because I love visuals.
          </p>
        </div>
        <div className="learn-more">
          <span className="text">
            Learn more
            <br />
            about me
          </span>
          <span className="arrow" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
