import React, { useEffect, useState, createContext } from 'react';

interface Props {
  children: React.ReactNode;
}

export const VerticalOffsetContext = createContext(0 as number);

const VerticalOffsetContextProvider: React.FC<Props> = ({ children }) => {
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOffset(window.pageYOffset);
    });

    return () => window.removeEventListener('scroll', () => {});
  }, [setOffset]);

  return <VerticalOffsetContext.Provider value={offset}>{children}</VerticalOffsetContext.Provider>;
};

export default VerticalOffsetContextProvider;
