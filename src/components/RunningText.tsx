import React from 'react';
import Marquee from 'react-fast-marquee';
import '@/styles/RunningText.scss';

const RunningText: React.FC = () => {
  return (
    <Marquee className="running-text">
      <span className="marquee-text">
        Fullstack Web Developer
        <span className="dot" />
        UI/UX Designer
        <span className="dot" />
        Programmer
        <span className="dot" />
        Logo Designer
        <span className="dot" />
        Web App Developer
        <span className="dot" />
      </span>
    </Marquee>
  );
};

export default RunningText;
