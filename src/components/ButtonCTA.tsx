import '@/styles/ButtonCTA.scss';
import Link from 'next/link';
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
  navigate?: boolean;
  download?: string;
}

const ButtonCTA: React.FC<Props> = ({ children, bIcon, bIconPos = 'left', action, href, className, style, id, color = 'dark', navigate = false, download }) => {
  return href ? (
    !navigate ? (
      <a id={id} href={href} target="_blank" className={className + ' call-to-action ' + color} onClick={action} style={style}>
        {bIcon && bIconPos === 'left' && <i className={bIcon + ' bIcon'} />}
        {children}
        {bIcon && bIconPos === 'right' && <i className={bIcon + ' bIcon'} />}
      </a>
    ) : (
      <Link id={id} href={href} className={className + ' call-to-action ' + color} onClick={action} style={style}>
        {bIcon && bIconPos === 'left' && <i className={bIcon + ' bIcon'} />}
        {children}
        {bIcon && bIconPos === 'right' && <i className={bIcon + ' bIcon'} />}
      </Link>
    )
  ) : !download ? (
    <button id={id} className={className + ' call-to-action ' + color} onClick={action} style={style}>
      {bIcon && bIconPos === 'left' && <i className={bIcon + ' bIcon'} />}
      {children}
      {bIcon && bIconPos === 'right' && <i className={bIcon + ' bIcon'} />}
    </button>
  ) : (
    <a href={download} id={id} className={className + ' call-to-action ' + color} onClick={action} style={style} download>
      {bIcon && bIconPos === 'left' && <i className={bIcon + ' bIcon'} />}
      {children}
      {bIcon && bIconPos === 'right' && <i className={bIcon + ' bIcon'} />}
    </a>
  );
};

export default ButtonCTA;
