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
        <img src="/Logo.svg" alt="logo" />
      </div>
    </main>
  );
};

export default Contacts;
