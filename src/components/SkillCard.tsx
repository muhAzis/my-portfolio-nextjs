import React from 'react';
import '@/styles/SkillCard.scss';
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
  icon: string;
  skillName: string;
}

const SkillCard: React.FC<Props> = ({ children, icon, skillName }) => {
  return (
    <div className="skillcard">
      <div className="icon">
        <Image src={icon} alt={skillName} width={30} height={30} style={{ fill: 'var(--clr-white)' }} />
      </div>
      <div className="skill-name">{skillName}</div>
      <div className="skill-desc">{children}</div>
    </div>
  );
};

export default SkillCard;
