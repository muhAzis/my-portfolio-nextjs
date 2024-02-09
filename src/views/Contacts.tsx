import Logo from '@/components/Logo';
import '@/styles/Contacts.css';
import React from 'react';

const Contacts: React.FC = () => {
  return (
    <main id="contacts">
      <div className="col1">
        <h2 className="interested">
          <span className="gradient-text">Interested</span> in
          <br />
          my skill?
        </h2>
        <h3 className="discuss">
          Or have any
          <br />
          <span className="gradient-text">project</span> to
          <br />
          discuss?
        </h3>
      </div>
      <div className="col2">
        <div className="section">
          <div className="sub-title">Contact me</div>
          <a href="" target="_blank" className="item">
            <i className="bi bi-google"></i> muhabdulazis555@gmail.com
          </a>
          <a href="https://wa.me/6288226389456" target="_blank" className="item">
            <i className="bi bi-whatsapp"></i> +62 882-2638-9456
          </a>
        </div>
        <div className="section">
          <div className="sub-title">Let&apos;s connect</div>
          <a href="https://github.com/muhAzis" target="_blank" className="item">
            <i className="bi bi-github"></i> github.com/muhAzis
          </a>
          <a href="https://www.linkedin.com/in/muhabdulazis" target="_blank" className="item">
            <i className="bi bi-linkedin"></i> Muhamad Abdul Azis
          </a>
          <a href="https://www.instagram.com/muh_abdulazis" target="_blank" className="item">
            <i className="bi bi-instagram"></i> @muh_abdulazis
          </a>
          <a href="https://www.threads.net/@muh_abdulazis" target="_blank" className="item">
            <i className="bi bi-threads"></i> @muh_abdulazis
          </a>
          <a href="https://web.facebook.com/muh.ab.azis" target="_blank" className="item">
            <i className="bi bi-facebook"></i> Muhammad Abdul Azis
          </a>
        </div>
      </div>
      <div className="col3">
        <Logo
          style={{
            width: '100%',
            height: '100%',
            fill: 'url(#my-gradient)',
            stroke: 'var(--clr-white)',
            strokeWidth: '2px ',
            strokeOpacity: '0.2',
          }}
        >
          <linearGradient id="my-gradient" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(144, 34, 229, 0.1)" />
            <stop offset="100%" stopColor="rgba(43, 43, 43, 0.1)" />
          </linearGradient>
        </Logo>
      </div>
    </main>
  );
};

export default Contacts;
