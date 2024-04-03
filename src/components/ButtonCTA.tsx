import '@/styles/ButtonCTA.scss';
import React from 'react';

interface Props {
  children: React.ReactNode;
  bIcon?: string;
  bIconPos?: 'left' | 'right';
  action?: () => void;
  href?: string;
  className?: string;
  id?: string;
  color?: 'dark' | 'light';
  style?: React.CSSProperties;
}

const ButtonCTA: React.FC<Props> = ({ children, bIcon, bIconPos = 'left', action, href, className, style, id, color = 'dark' }) => {
  return href ? (
    <a id={id} href={href} target="_blank" className={className + ' call-to-action ' + color} onClick={action} style={style}>
      {bIcon && bIconPos === 'left' && <i className={bIcon + ' bIcon'} />}
      {children}
      {bIcon && bIconPos === 'right' && <i className={bIcon + ' bIcon'} />}
    </a>
  ) : (
    <button id={id} className={className + ' call-to-action ' + color} onClick={action} style={style}>
      {bIcon && bIconPos === 'left' && <i className={bIcon + ' bIcon'} />}
      {children}
      {bIcon && bIconPos === 'right' && <i className={bIcon + ' bIcon'} />}
    </button>
  );
};

export default ButtonCTA;
