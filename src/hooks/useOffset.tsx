import { VerticalOffsetContext } from '@/contexts/VerticalOffsetContext';
import { useContext } from 'react';

export const useOffset = () => {
  const context = useContext(VerticalOffsetContext);
  if (context === undefined) {
    throw new Error('useOffset must be used within a VerticalOffsetProvider');
  }

  return context;
};
