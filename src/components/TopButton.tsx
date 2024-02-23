import React from 'react';
import '@/styles/TopButton.scss';
import { useOffset } from '@/hooks/useOffset';

const TopButton: React.FC = () => {
  const yOffset = useOffset();

  const handleClick = (): void => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div id="topBtn" onClick={() => yOffset > 0 && handleClick()}>
      <img
        src="/Logo.svg"
        alt="logo"
        width={50}
        style={{
          marginTop: -5,
          animation: 'spinning 7s infinite linear',
          opacity: yOffset > 0 ? 1 : 0.3,
          transition: 'opacity 0.2s ease-in-out',
        }}
      />
    </div>
  );
};

export default TopButton;
