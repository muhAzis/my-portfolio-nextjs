import React, { useState } from 'react';
import '@/styles/FeatureCard.scss';

interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard = ({ children, title, className, style }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="feature-card">
      <div className="col1">
        <div className="arrow-icon" onClick={() => setIsActive((prev) => !prev)} style={isActive ? { transform: 'rotate(90deg)' } : {}}>
          <i className="bi bi-caret-right-fill" />
        </div>
      </div>
      <div className="col2" style={isActive ? { gap: 10 } : {}}>
        <div className="feature-title" onClick={() => setIsActive((prev) => !prev)}>
          {title}
        </div>
        <div className={'feature-desc ' + className} style={isActive ? { ...style, maxHeight: 1000, paddingBlock: 20 } : { ...style }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
