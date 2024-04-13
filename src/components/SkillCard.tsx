import React from 'react';
import '@/styles/SkillCard.scss';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  icon: string;
  skillName: string;
}

const anim: Variants = {
  hidden: { opacity: 0, y: '-20%' },
  visible: { opacity: 1, y: '0%', transition: { duration: 0.5 } },
};

const SkillCard: React.FC<Props> = ({ children, icon, skillName }) => {
  return (
    <motion.div variants={anim} className="skillcard">
      <div className="icon">
        <Image src={icon} alt={skillName} width={30} height={30} style={{ fill: 'var(--clr-white)' }} />
      </div>
      <div className="skill-name">{skillName}</div>
      <div className="skill-desc">{children}</div>
    </motion.div>
  );
};

export default SkillCard;
