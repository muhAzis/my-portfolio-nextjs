import { Techs } from '@/utils/techs-data';
import React from 'react';
import ProgCard from './ProgCard';
import '@/styles/TechStackCard.scss';
import { motion, Variants } from 'framer-motion';

interface Props {
  title: string;
  children: React.ReactNode;
  techStack: Techs[];
  bar: 'green' | 'red';
}

const anim: Variants = {
  hidden: { opacity: 0, y: '-20%' },
  visible: { opacity: 1, y: '0%', transition: { duration: 0.5 } },
};

const TechStackCard = ({ children, title, techStack, bar }: Props) => {
  return (
    <motion.div variants={anim} className="tech-stack-card">
      <div className="tech-title">{title}</div>
      <div className="bars">
        <div className={'bar1 ' + bar} />
        <div className={'bar2 ' + bar} />
      </div>
      <div className="tech-desc">{children}</div>
      <div className="techs-container">
        {techStack.map((tech, i) => (
          <ProgCard techName={tech} key={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default TechStackCard;
