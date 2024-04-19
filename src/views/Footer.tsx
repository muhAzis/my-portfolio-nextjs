import ContactCard from '@/components/ContactCard';
import '@/styles/Footer.scss';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Footer: React.FC = () => {
  return (
    <main id="contact">
      <div className="contact-container">
        <div className="row1">
          <ContactCard link="https://wa.me/6288226389456" bIcon="bi bi-whatsapp" title="Whatsapp" contact="+62-882-2638-9456" size="small" />
          <Image src="/cakram-yellow.svg" alt="cakram yellow" className="cakram-yellow" width={30} height={30} />
          <ContactCard
            link="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQhdMWjRfXSmMnvSrGGzZGNvZtxXqhJbqXzdQGgzGkfvcnvdFKbmJMGggblNbnQsZHpKG"
            bIcon="bi bi-google"
            title="Muhamad Abdul Azis"
            contact="muhabdulazis555@gmail.com"
            size="small"
          />
          <Image src="/cakram-yellow.svg" alt="cakram yellow" className="cakram-yellow" width={30} height={30} />
          <ContactCard link="https://github.com/muhAzis" bIcon="bi bi-github" title="muhAzis" contact="github.com/muhAzis" size="small" />
        </div>
        <div className="row2">
          <div className="logo-full">
            <Image src="/logo-full-green.svg" alt="Logo full" width={180} height={57} />
          </div>
          <p className="desc">If you are interested to know more detail about me or if you have a project to discuss you can reach me via my contacts</p>
        </div>
        <div className="row3">
          <div className="copyright">
            <Copyright />
            <div className="copy-text">
              <span className="bold">{new Date().getFullYear()} All rights reserved</span>
              <br />
              designed and developed by <span className="bold">Muhamad Abdul Azis</span>
            </div>
          </div>
          <div className="connect">
            <span className="connect-text">Let&apos;s connect!</span>
            <div className="socmed">
              <a href="https://www.linkedin.com/in/muhabdulazis" target="_blank" className="bi bi-linkedin" />
              <a href="https://www.instagram.com/muh_abdulazis" target="_blank" className="bi bi-instagram" />
              <a href="https://facebook.com/muh.ab.azis" target="_blank" className="bi bi-facebook" />
              <a href="https://discordapp.com/users/891593433578364928" target="_blank" className="bi bi-discord" />
            </div>
          </div>
        </div>
      </div>
      <Marquee gradient={false} speed={100}>
        <div className="marquee">
          <span className="marquee-text">Interested in my skill?</span>
          <Image src="/cakram-yellow.svg" alt="cakram red" className="cakram-yellow" width={80} height={80} />
          <span className="marquee-text">Want to connect?</span>
          <Image src="/cakram-yellow.svg" alt="cakram red" className="cakram-yellow" width={80} height={80} />
          <span className="marquee-text">Have a project to discuss?</span>
          <Image src="/cakram-yellow.svg" alt="cakram red" className="cakram-yellow" width={80} height={80} />
        </div>
      </Marquee>
    </main>
  );
};

const Copyright = () => {
  return (
    <svg id="copyright" width="20" height="20" viewBox="0 0 20 20" style={{ marginRight: '5px', fill: 'var(--clr-text-dark-green)' }} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.19617C14.8622 1.19617 18.8038 5.13778 18.8038 10C18.8038 14.8622 14.8622 18.8038 10 18.8038C5.13778 18.8038 1.19617 14.8622 1.19617 10C1.19617 5.13778 5.13778 1.19617 10 1.19617ZM10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.82743 14.7368C7.2329 14.7368 5.11962 12.6216 5.11962 10C5.11962 7.37838 7.2329 5.26316 9.82743 5.26316C11.1719 5.26316 12.3842 5.82873 13.2443 6.74144C13.6974 7.22221 14.4544 7.24465 14.9352 6.79157C15.416 6.33848 15.4384 5.58144 14.9853 5.10067C13.6934 3.72974 11.8599 2.87081 9.82743 2.87081C5.9006 2.87081 2.72727 6.0682 2.72727 10C2.72727 13.9318 5.9006 17.1292 9.82743 17.1292C11.7312 17.1292 13.4612 16.3754 14.7344 15.1527C15.2109 14.6951 15.2262 13.9379 14.7686 13.4614C14.311 12.9849 13.5538 12.9696 13.0773 13.4272C12.2306 14.2403 11.0875 14.7368 9.82743 14.7368Z"
      />
    </svg>
  );
};

export default Footer;
