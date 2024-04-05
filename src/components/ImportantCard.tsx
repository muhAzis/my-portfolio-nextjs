import React from 'react';
import '@/styles/ImportantCard.scss';
import FeatureCard from './FeatureCard';

const ImportantCard = () => {
  return (
    <div id="importantCard">
      <div className="information-title">
        <i className="bi bi-exclamation-octagon-fill" />
        <span>Important!!</span>
      </div>
      <p className="information-desc">
        <span className="bold">Please be a good apple!!!</span> Do not leave any offensive or inappropriate comments. Use this comment section wisely nad don&apos;t be a barbaric who ruins other people&apos; home.
        <br />
        <br />
        <span className="bold">Kindly reminder that everyone can see your GitHub information, so guard yourself up!</span>
      </p>
      <span className="key-feature">Key features:</span>
      <div className="features-list">
        <FeatureCard title="Leave a comment using your GitHub account with ease">
          <p className="feature-text">
            In order to use the comment section you will have to sign in using your GitHub account. I assume that you guys are using GitHub since I named this section as <span className="bold">Developer Section</span>. I mean what kind of
            developer that doesn&apos;t use GitHub, right?
          </p>
          <p className="feature-text">
            So why didn&apos;t I provide another method of sign in instead of just using GitHub? I don&apos;t want any random people to post their comment here, I named this a <span className="bold">Developer Section</span> for a reason you
            guys.
          </p>
          <p className="feature-text">
            This sign in feature is powered by <span className="bold">next-auth</span>.
          </p>
        </FeatureCard>
        <FeatureCard title="Realtime comment update">
          <p className="feature-text">
            The comment section will update in realtime, so you don&apos;t have to refresh the page to see the new comments. This feature is powered by <span className="bold">Firebase Realtime Database</span>.
          </p>
        </FeatureCard>
        <FeatureCard title="GitHub profile thumbnail on mouse hover">
          <p className="feature-text">
            When you hover your mouse to the user&apos;s username, a thumbnail of the GitHub profile will pop up. It contains information about the <span className="bold">name</span> and <span className="bold">username</span>, the{' '}
            <span className="bold">public repository</span> count, the total <span className="bold">stargazers</span> count of it&apos;s own repositories, the <span>GitHub account URL</span>, and the <span className="bold">bio</span> of the
            user.
          </p>
          <p className="feature-text">
            This feature is powered by <span className="bold">GitHub API</span>.
          </p>
        </FeatureCard>
        <FeatureCard title="Delete and Update comment">
          <p className="feature-text">You can modify your posted comment and also delete it.</p>
        </FeatureCard>
      </div>
    </div>
  );
};

export default ImportantCard;
