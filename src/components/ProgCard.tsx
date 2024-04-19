'use client';
import Image from 'next/image';
import React from 'react';
import '@/styles/ProgCard.scss';
import { techs, Techs } from '@/utils/techs-data';
import { motion, Variants } from 'framer-motion';

interface Props {
  techName: Techs;
}

const anim: Variants = {
  hidden: { opacity: 0, y: '-50%' },
  visible: { opacity: 1, y: '0%', transition: { duration: 0.5 } },
};

const ProgCard = ({ techName }: Props) => {
  const { icon, name } = techs.filter((tech) => tech.name === techName)[0];

  return (
    <motion.div variants={anim} className="prog-card" key={name}>
      <Image className="prog-icon" src={icon} alt={name} width={20} height={20} />
      <span className="prog-name">{name}</span>
    </motion.div>
  );
};

export default ProgCard;
