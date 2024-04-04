import React, { useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import '@/styles/GithubSigninButton.scss';

const GithubSigninButton = () => {
  const { data: session } = useSession();

  const [name, setName] = useState<string>('gitub-user');
  const [image, setImage] = useState<string>('/github.svg');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (session?.user?.email && session?.user?.name && session?.user?.image) {
      setName(session.user.name);
      setImage(session.user.image);
      setEmail(session.user.email);
    }
  }, [session]);

  const handleSignIn = async () => {
    await signIn('github');
  };

  const handleSignOut = () => {
    signOut();
  };

  if (session) {
    return (
      <div id="githubAuth">
        <button className="github-button" onClick={handleSignOut}>
          Sign Out <i className="bi bi-github" />
        </button>
        <div className="session-info">
          Signed in as
          <div className="text">
            <Image className="user-pict" src={image ? image : ''} alt={name} width={30} height={30} />
            <span className="username">{name}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="githubAuth">
        <button className="github-button" onClick={handleSignIn}>
          Sign In with Github <i className="bi bi-github" />
        </button>
      </div>
    );
  }
};

export default GithubSigninButton;

{
  /* <div className="session-info">
  Please wait...
  <Image className="user-pict" src="/cakram-white.svg" alt="loading" width={30} height={30} style={{ animation: 'spin 1s infinite ease-in-out' }} />
</div> */
}
