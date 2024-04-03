import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '@/styles/Developer.scss';
import CommentSection from '@/components/CommentSection';

const Developer: React.FC = ({}) => {
  const [count, setCount] = useState<number>(0);

  const techs = ['/typescript-white.svg', '/reactjs-white.svg', '/nextjs.svg', '/framer-white.svg', '/firebase-white.svg'];

  useEffect(() => {
    try {
      (async () => {
        const res = await fetch('https://api.github.com/repos/muhAzis/my-portfolio-nextjs');
        const data = await res.json();

        setCount(data.stargazers_count ? data.stargazers_count : 0);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main id="developer">
      <div className="developer-container">
        <div className="section-header">
          <Image className="cakram-white" src="/cakram-white.svg" alt="cakramW" width={50} height={50} />
          <h2 className="section-title">Developer Section</h2>
        </div>

        <div className="section-info">
          <p className="desc">
            Are you a developer and interested with this portfolio website? I will provide the repository of this website for you to check out, and you may use the source code as you wish. But consider to leave a star in the repo!
          </p>
          <a href="https://github.com/muhAzis/my-portfolio-nextjs" target="_blank" className="github-link">
            <i className="bi bi-github" /> https://github.com/muhAzis/my-portfolio-nextjs
          </a>
          <p className="desc">And if you want to check my other works, you can go here :</p>
          <a href="https://github.com/muhAzis" target="_blank" className="github-link">
            <i className="bi bi-github" /> https://github.com/muhAzis
          </a>
          <p className="desc">
            This website is built using <span className="bold">React</span> and <span className="bold">Next</span> as the framework for fullstack, and I’m using <span className="bold">Typescript</span> for the language instead of Javascript
            for better development experience. The database is using <span className="bold">Firebase</span> service to use the realtime database it provides. For the animation I’m using <span className="bold">Framer Motion</span> since this
            library works so well with React and easy to use.
          </p>
          <div className="tech-stack">
            {techs.map((tech, i) => (
              <Image key={i} src={tech} alt={tech} width={30} height={30} className="tech" />
            ))}
          </div>
          <div className="github-stars">
            <span className="text">Stars Count</span>
            <div className="counter">
              <div className="number">{count}</div>
              <i className="bi bi-star-fill" />
            </div>
          </div>
        </div>

        <div className="comment-section">
          <CommentSection />
        </div>
      </div>
    </main>
  );
};

export default Developer;
