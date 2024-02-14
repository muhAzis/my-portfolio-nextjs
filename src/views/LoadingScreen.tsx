import Logo from '@/components/Logo';
import '@/styles/LoadingScreen.scss';
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <main id="loadingScreen">
      <Logo style={{ position: 'absolute', width: '100vw', minWidth: '768px', fill: 'transparent', stroke: 'var(--clr-dark)', strokeOpacity: '0.02', zIndex: -1 }} />
      <Logo id={'loadingLogo'} style={{ width: '80%', maxWidth: '100px' }} />
      <div className="loading-text">Page is loading</div>
    </main>
  );
};

export default LoadingScreen;
