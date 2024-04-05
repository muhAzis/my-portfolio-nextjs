import { Comment } from '@/types/comment';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '@/styles/CommentCard.scss';
import { useSession } from 'next-auth/react';
import { useComments } from '@/hooks/useComments';
import GithubAccounttThumbnail from './GithubAccounttThumbnail';

dayjs.extend(relativeTime);

interface Props extends Comment {
  edit: {
    id: (id: string) => void;
    comment: (comment: string) => void;
  };
}

const CommentCard = ({ id, name, email, comment, image, uat, iat, edit }: Props) => {
  const { data: session } = useSession();
  const { loading, deleteComment } = useComments();
  const [time, setTime] = useState<string>('');
  const [showThumbnail, setShowThumbnail] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = setInterval(() => {
      setTime(dayjs(iat).fromNow());
    }, 1000);

    return () => clearInterval(updateTime);
  }, [iat]);

  const handleDeleteComment = () => {
    deleteComment({ id });
  };

  return (
    <div className="comment-card">
      {showThumbnail && <GithubAccounttThumbnail username={name} />}
      <div className="comment-header">
        <Image className="comment-user-pic" src={image} alt={name} width={50} height={50} />
        <div className="comment-info">
          <a href={'https://github.com/' + name} target="_blank" className="user-name" onMouseOver={() => setShowThumbnail(true)} onMouseLeave={() => setShowThumbnail(false)}>
            {name}
          </a>
          <span className="timestamp">{`${time}${uat ? ', edited' : ''}`}</span>
        </div>
        {session && session.user?.email === email && (
          <div className="comment-cta">
            <div
              className="bi bi-pencil-fill edit-btn"
              onClick={() => {
                edit.id(id);
                edit.comment(comment);
              }}
            />
            <div className="bi bi-trash3-fill delete-btn" onClick={handleDeleteComment} />
          </div>
        )}
      </div>
      <p className="comment-message">{comment}</p>
    </div>
  );
};

export default CommentCard;
