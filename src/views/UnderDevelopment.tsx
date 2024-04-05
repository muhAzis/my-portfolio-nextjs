import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '@/styles/UnderDevelopment.scss';

const UnderDevelopment = () => {
  return (
    <div id="underDevelopment">
      <div className="content-container">
        <div className="spinner">
          <Image className="spinner-blade" src="/cakram-white.svg" alt="spinner" width={50} height={50} style={{ animation: 'spin 4s ease-in-out infinite' }} />
          <Image className="spinner-blade" src="/cakram-white.svg" alt="spinner" width={50} height={50} style={{ animation: 'spin 5s ease-in-out infinite' }} />
          <Image className="spinner-blade" src="/cakram-white.svg" alt="spinner" width={50} height={50} style={{ animation: 'spin 3s ease-in-out infinite' }} />
        </div>
        <h2 className="title">Under Development</h2>
        <h3 className="subtitle">{'Will be available soon'}</h3>
        <Link className="back" href={'/'}>
          {'< back to main page'}
        </Link>
      </div>
    </div>
  );
};

export default UnderDevelopment;
