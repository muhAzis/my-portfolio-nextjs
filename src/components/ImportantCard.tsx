import React from 'react';
import '@/styles/ImportantCard.scss';

const ImportantCard = () => {
  return (
    <div id="importantCard">
      <i className="bi bi-info-circle-fill important-icon" />
      <div className="information-tab"></div>
    </div>
  );
};

export default ImportantCard;
