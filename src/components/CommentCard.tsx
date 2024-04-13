import { Comment } from '@/types/comment';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '@/styles/CommentCard.scss';
import { useSession } from 'next-auth/react';
import { useComments } from '@/hooks/useComments';
import GithubAccounttThumbnail from './GithubAccounttThumbnail';
import { motion, Variants } from 'framer-motion';

dayjs.extend(relativeTime);

interface Props extends Comment {
  edit: {
    id: (id: string) => void;
    comment: (comment: string) => void;
  };
}

const anim: Variants = {
  hidden: {
    opacity: 0,
    x: '10%',
  },
  visible: {
    opacity: 1,
    x: '0%',
    transition: {
      type: 'spring',
      stiffness: 100,
      bounce: 0.3,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: '-10%',
    height: 0,
    padding: 0,
    transition: {
      duration: 0.2,
    },
  },
};

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
    <motion.div
      variants={anim}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        margin: '-100px 0px -100px 0px',
      }}
      exit="exit"
      className="comment-card"
    >
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
    </motion.div>
  );
};

export default CommentCard;
