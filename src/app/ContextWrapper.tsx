import React from 'react';
import CommentsDataContextProvider from '@/contexts/CommentsDataContext';
import ViewportContextProvider from '@/contexts/ViewportContext';

interface Props {
  children: React.ReactNode;
}

const ContextWrapper = ({ children }: Props) => {
  return (
    <CommentsDataContextProvider>
      <ViewportContextProvider>{children}</ViewportContextProvider>
    </CommentsDataContextProvider>
  );
};

export default ContextWrapper;
