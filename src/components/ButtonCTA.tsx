import '@/styles/ButtonCTA.css';
import React from 'react';

interface Props {
  children: React.ReactNode;
  action: () => void;
}

const ButtonCTA: React.FC<Props> = ({ children, action }) => {
  return (
    <button className="call-to-action" onClick={action}>
      {children}
    </button>
  );
};

export default ButtonCTA;
