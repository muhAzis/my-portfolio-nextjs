'use client';
import React, { createContext, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export const ViewportContext = createContext([0, 0] as number[]);

const ViewportContextProvider: React.FC<Props> = ({ children }) => {
  const [viewport, setViewport] = useState<number[]>([1920, 1080]);

  useEffect(() => {
    const windowResize = () => {
      setViewport([window.innerWidth, window.innerHeight]);
    };

    windowResize();

    window.addEventListener('resize', windowResize);

    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);

  return <ViewportContext.Provider value={viewport}>{children}</ViewportContext.Provider>;
};

export default ViewportContextProvider;
