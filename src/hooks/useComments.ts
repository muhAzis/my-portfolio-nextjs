import { CommentsDataContext } from '@/contexts/CommentsDataContext';
import { useContext } from 'react';

export const useComments = () => {
  const context = useContext(CommentsDataContext);
  if (context === undefined) {
    throw new Error('useComments must be used within a CommentsDataContextProvider');
  }

  return context;
};
