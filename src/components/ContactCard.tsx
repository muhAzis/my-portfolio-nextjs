import React from 'react';
import '@/styles/ContactCard.scss';

interface Props {
  link: string;
  bIcon?: string;
  title: string;
  contact: string;
  size?: 'big' | 'small';
  mode?: 'mini' | 'full';
}

const ContactCard: React.FC<Props> = ({ link, bIcon, title, contact, size = 'big', mode = 'full' }) => {
  return (
    <a href={link} target="_blank" className={size === 'big' ? 'contact-card-big' : 'contact-card-small'}>
      <i className={bIcon + ' contact-icon'} />
      {mode === 'full' && (
        <div className="info">
          <span className="title">{title}</span>
          <span className="contact">{contact}</span>
        </div>
      )}
    </a>
  );
};

export default ContactCard;
