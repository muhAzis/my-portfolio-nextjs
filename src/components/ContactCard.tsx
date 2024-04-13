import React from 'react';
import '@/styles/ContactCard.scss';
import { motion, Variants } from 'framer-motion';
import { useViewport } from '@/hooks/useViewport';

interface Props {
  link: string;
  bIcon?: string;
  title: string;
  contact: string;
  size?: 'big' | 'small';
}

const children: Variants = {
  hidden: { opacity: 0, y: '-50%' },
  visible: { opacity: 1, y: '0%', transition: { duration: 0.5 } },
};

const ContactCard: React.FC<Props> = ({ link, bIcon, title, contact, size = 'big' }) => {
  const [width, height] = useViewport();

  return (
    <motion.a variants={children} href={link} target="_blank" className={size === 'big' ? 'contact-card-big' : 'contact-card-small'}>
      <i className={bIcon + ' contact-icon'} />
      {width > 768 && (
        <div className="info">
          <span className="title">{title}</span>
          <span className="contact">{contact}</span>
        </div>
      )}
    </motion.a>
  );
};

export default ContactCard;
