import '@/styles/ButtonCTA.scss';
import React from 'react';

interface Props {
  children: React.ReactNode;
  action?: () => void;
  className?: string;
  id?: string;
  reverseColor?: boolean;
}

const ButtonCTA: React.FC<Props> = ({ children, action, className, id, reverseColor = false }) => {
  return (
    <button
      id={id}
      className={className + ' call-to-action'}
      onClick={action}
      style={reverseColor ? { backgroundColor: 'var(--clr-white)', color: 'var(--clr-text-dark)' } : { backgroundColor: 'var(--clr-dark)', color: 'var(--clr-text-white)' }}
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
