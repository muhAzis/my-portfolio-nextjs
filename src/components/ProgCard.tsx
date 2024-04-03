import Image from 'next/image';
import React, { useState } from 'react';
import '@/styles/ProgCard.scss';
import { techs, Techs } from '@/utils/techs-data';

interface Props {
  techName: Techs;
}

const ProgCard: React.FC<Props> = ({ techName }) => {
  const { icon, name } = techs.filter((tech) => tech.name === techName)[0];

  return (
    <div className="prog-card" key={name}>
      <Image className="prog-icon" src={icon} alt={name} width={20} height={20} />
      <span className="prog-name">{name}</span>
    </div>
  );
};

export default ProgCard;
