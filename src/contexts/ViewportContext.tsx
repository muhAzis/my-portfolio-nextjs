import { log } from 'console';
import React, { createContext, useEffect, useState } from 'react';

export const ViewportContext = createContext([0, 0] as number[]);

interface Props {
  children: React.ReactNode;
}

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
