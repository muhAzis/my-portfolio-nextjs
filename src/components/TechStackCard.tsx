import { Techs } from '@/utils/techs-data';
import React from 'react';
import ProgCard from './ProgCard';
import '@/styles/TechStackCard.scss';

interface Props {
  title: string;
  children: React.ReactNode;
  techStack: Techs[];
  bar: 'green' | 'red';
}

const TechStackCard: React.FC<Props> = ({ children, title, techStack, bar }) => {
  return (
    <div className="tech-stack-card">
      <div className="tech-title">{title}</div>
      <div className={'bar ' + bar} />
      <div className="tech-desc">{children}</div>
      <div className="techs-container">
        {techStack.map((tech, i) => (
          <ProgCard techName={tech} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
