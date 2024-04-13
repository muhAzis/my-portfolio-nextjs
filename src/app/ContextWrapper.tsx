import React from 'react';
import CommentsDataContextProvider from '@/contexts/CommentsDataContext';
import VerticalOffsetContextProvider from '@/contexts/VerticalOffsetContext';
import ViewportContextProvider from '@/contexts/ViewportContext';

interface Props {
  children: React.ReactNode;
}

const ContextWrapper = ({ children }: Props) => {
  return (
    <CommentsDataContextProvider>
      <ViewportContextProvider>
        <VerticalOffsetContextProvider>{children}</VerticalOffsetContextProvider>
      </ViewportContextProvider>
    </CommentsDataContextProvider>
  );
};

export default ContextWrapper;
