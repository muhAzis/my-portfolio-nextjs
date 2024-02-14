import { ViewportContext } from '@/contexts/ViewportContext';
import { useContext } from 'react';

export const useViewport = () => {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error('useViewport must be used within a ViewportProvider');
  }

  return context;
};
