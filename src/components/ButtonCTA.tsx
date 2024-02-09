import '@/styles/ButtonCTA.css';
import React from 'react';

interface Props {
  children: React.ReactNode;
  action: () => void;
  className?: string;
  id?: string;
}

const ButtonCTA: React.FC<Props> = ({ children, action, className, id }) => {
  return (
    <button id={id} className={className + ' call-to-action'} onClick={action}>
      {children}
    </button>
  );
};

export default ButtonCTA;
