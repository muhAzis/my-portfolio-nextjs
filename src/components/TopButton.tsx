import React from 'react';
import '@/styles/TopButton.scss';
import Image from 'next/image';

const TopButton: React.FC = () => {
  const handleClick = (): void => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div id="topBtn" onClick={handleClick}>
      <Image
        src="/Logo.svg"
        alt="logo"
        width={50}
        height={50}
        style={{
          height: 'fit-content',
          marginTop: -5,
          animation: 'spinning 7s infinite linear',
          transition: 'opacity 0.2s ease-in-out',
        }}
      />
    </div>
  );
};

export default TopButton;
