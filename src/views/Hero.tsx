'use client';
import ButtonCTA from '@/components/ButtonCTA';
import '@/styles/Hero.css';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Hero: React.FC = () => {
  const handleCTA = (): void => {
    window.open('/Muh Abdul Azis CV.pdf', '_self');
  };

  return (
    <main id="hero">
      <div className="collumn col1">
        <Marquee>
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
      <div className="collumn col2">
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
          <ButtonCTA action={handleCTA}>Download as CV</ButtonCTA>
        </div>
      </div>
      <div className="collumn col3"></div>
    </main>
  );
};

export default Hero;
