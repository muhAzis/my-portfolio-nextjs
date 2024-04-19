'use client';
import React, { useEffect, useState } from 'react';
import '@/styles/CommentSection.scss';
import GithubSigninButton from './GithubSigninButton';
import { useSession } from 'next-auth/react';
import CommentCard from './CommentCard';
import { useComments } from '@/hooks/useComments';
import Image from 'next/image';
import { useViewport } from '@/hooks/useViewport';
import ImportantCard from './ImportantCard';
import Link from 'next/link';
import Div from './animations/Div';
import { AnimatePresence, Variants } from 'framer-motion';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/utils/firebaseConfig';
import { Comment } from '@/types/comment';

const parent: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const CommentSection = () => {
  const { data: session } = useSession();
  const { loading, postComment, updateComment } = useComments();
  const [width, height] = useViewport();

  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState<string>('');
  const [commentId, setCommentId] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const commentsRef = collection(db, 'comments');
        const q = query(commentsRef, orderBy('iat', 'desc'), limit(7));
        onSnapshot(q, (snapshot) => {
          const data = snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id } as Comment;
          });

          setComments(data);
        });
      } catch (error) {
        return new Error('Something went wrong!');
      }
    })();
  }, []);

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();

    comment.length > 0 ? postComment({ comment }) : alert('Comment cannot be empty!');
    setComment('');
  };

  const handleUpdateComment = (e: React.FormEvent) => {
    e.preventDefault();

    comment.length > 0 ? updateComment({ comment, id: commentId }) : alert('Comment cannot be empty!');
    setComment('');
    setCommentId('');
  };

  return (
    <div id="commentSection">
      <h3 className="title">Have some thought for me? Leave a comment!</h3>
      <ImportantCard />
      <GithubSigninButton />
      {session && (
        <>
          <form onSubmit={(e) => (commentId.length > 0 ? handleUpdateComment(e) : handleSendComment(e))} className="comment-box">
            <textarea value={comment} className="comment-input" placeholder="Your comment here..." onChange={(e) => setComment(e.target.value)} required />
            {width > 576 ? (
              <button type="submit" className="send-btn">
                {loading ? <Image src="/cakram-red.svg" alt="loading" width={30} height={30} style={{ opacity: 0.3, animation: 'spin 1s infinite linear' }} /> : <span className="bi bi-send-fill" />}
              </button>
            ) : (
              <button type="submit" className="send-btn-mini">
                Send
                {loading ? <Image src="/cakram-red.svg" alt="loading" width={30} height={30} style={{ opacity: 0.3, animation: 'spin 1s infinite linear' }} /> : <span className="bi bi-send-fill" />}
              </button>
            )}
          </form>
          {commentId.length > 0 && (
            <div
              className="edit-comment"
              onClick={() => {
                setCommentId('');
                setComment('');
              }}
            >
              <Image src={session.user.image || ''} alt="edit" width={30} height={30} style={{ borderRadius: '50%' }} />
              <span className="comment-id">
                Editing <span className="bold">{commentId}</span>
              </span>
              <i className="bi bi-x-circle" />
            </div>
          )}
        </>
      )}
      <div className="comments-container">
        <AnimatePresence>
          {comments.map((comment, i) => (
            <CommentCard {...comment} edit={{ id: setCommentId, comment: setComment }} key={comment.id} />
          ))}
        </AnimatePresence>
        <Link href={'/comments'} className="full-comments-btn">
          {'Go to Comments page >'}
        </Link>
      </div>
    </div>
  );
};

export default CommentSection;
