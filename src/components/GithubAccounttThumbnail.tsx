import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '@/styles/GithubAccountThumbnail.scss';

interface Props {
  username: string;
}

const GithubAccounttThumbnail: React.FC<Props> = ({ username }) => {
  const [name, setName] = useState<string>('');
  const [site, setSite] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [repos, setRepos] = useState<number>(0);
  const [stars, setStars] = useState<number | string>(0);
  const [image, setImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const account = await fetch(`https://api.github.com/users/${username}`);
        const { avatar_url, name, blog, bio, public_repos, followers } = await account.json();
        const stars = await fetch(`https://api.github.com/users/${username}/starred`);
        const starsData = await stars.json();
        let starsCount = 0;
        starsData.forEach((star: any) => {
          if (star.owner.login === username) {
            starsCount += star.stargazers_count;
          }
        });

        setName(name);
        setImage(avatar_url);
        // setSite(blog);
        setSite(`https://github.com/${username}`);
        setBio(bio);
        setRepos(public_repos);
        setStars(starsCount > 9999 ? '9999+' : starsCount);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [username]);

  return !loading ? (
    <div className="account-thumbnail">
      <Image className="profile-image" src={image} alt={username} width={100} height={100} />
      <div className="account-info-tab">
        <div className="info-header">
          <div className="name-info">
            <span className="account-username">{username}</span>
            <span className="account-name">{name}</span>
          </div>
          <div className="public-repos">
            <i className="bi bi-inboxes-fill" />
            <span>{repos}</span>
            <i className="bi bi-star-fill star" />
            <span>{stars}</span>
          </div>
        </div>
        <span className="account-url">
          <i className="bi bi-github " />
          {site}
        </span>
        <p className="account-bio">{bio}</p>
      </div>
    </div>
  ) : (
    <div className="account-thumbnail">
      <Image className="profile-image loading-state" src="/github-white.svg" alt={username} width={100} height={100} />
      <div className="account-info-tab">
        <div className="info-header">
          <div className="name-info">
            <span className="account-username">{username}</span>
            <span className="account-name loading-state" style={{ width: 200, height: 16, backgroundColor: 'var(--clr-light-dark)', opacity: 1 }} />
          </div>
          <div className="public-repos">
            <i className="bi bi-inboxes-fill" />
            <span className="loading-state" style={{ width: 20, height: 16, backgroundColor: 'var(--clr-light-dark)' }} />
            <i className="bi bi-star-fill star" />
            <span className="loading-state" style={{ width: 20, height: 16, backgroundColor: 'var(--clr-light-dark)' }} />
          </div>
        </div>
        <span className="account-url">
          <i className="bi bi-github " />
          <span className="loading-state" style={{ width: 250, height: 16, backgroundColor: 'var(--clr-light-dark)' }} />
        </span>
        <p className="account-bio loading-state" style={{ width: 300, height: 70, backgroundColor: 'var(--clr-light-dark)' }} />
      </div>
    </div>
  );
};

export default GithubAccounttThumbnail;
