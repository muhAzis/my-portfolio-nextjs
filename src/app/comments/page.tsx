'use client';
import React, { useEffect, useRef, useState } from 'react';
import '@/styles/CommentsPage.scss';
import ImportantCard from '@/components/ImportantCard';
import GithubSigninButton from '@/components/GithubSigninButton';
import { useSession } from 'next-auth/react';
import { useComments } from '@/hooks/useComments';
import Image from 'next/image';
import { useViewport } from '@/hooks/useViewport';
import CommentCard from '@/components/CommentCard';
import Link from 'next/link';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/utils/firebaseConfig';
import { Comment } from '@/types/comment';
import dayjs from 'dayjs';

const Comments = () => {
  const { data: session } = useSession();
  const { loading, postComment, updateComment } = useComments();
  const [width, height] = useViewport();

  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState<string>('');
  const [commentId, setCommentId] = useState<string>('');
  const [limiter, setLimiter] = useState<number>(5);
  const [loadingLoader, setLoadingLoader] = useState<boolean>(false);
  const [commentsLimit, setCommentsLimit] = useState<boolean>(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      try {
        console.log(limiter);

        setLoadingLoader(true);
        const commentsRef = collection(db, 'comments');
        const q = query(commentsRef, orderBy('iat', 'desc'), limit(limiter));
        onSnapshot(q, (snapshot) => {
          const data = snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id } as Comment;
          });

          const sorted = [...data].sort((a, b) => dayjs(b.iat).unix() - dayjs(a.iat).unix());

          setComments(sorted);
          setLoadingLoader(false);
        });
      } catch (error) {
        return new Error('Something went wrong!');
      }
    })();
  }, [limiter]);

  useEffect(() => {
    const loader = () => {
      if (loaderRef.current) {
        const element = loaderRef.current.getBoundingClientRect();
        const isInView = element.top < window.innerHeight && element.bottom >= 0;

        if (isInView && !loadingLoader && comments.length >= limiter) {
          setCommentsLimit(false);
          setLimiter((prev) => prev + 5);
          setLoadingLoader(true);
        } else {
          setCommentsLimit(true);
        }
      }
    };

    window.addEventListener('scroll', loader);

    return () => window.removeEventListener('scroll', loader);
  }, [loadingLoader, comments]);

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
    <main id="comments">
      <div className="comments-container">
        <div className="header">
          <div className="title">
            <Image className="cakram-white" src="/cakram-white.svg" alt="cakramW" width={50} height={50} style={{ animation: 'spin 5s infinite linear' }} />
            <h1>Comments Page</h1>
          </div>
          <Link href="/#developer" className="back-btn">
            <i className="bi bi-arrow-left-circle" />
            Back
          </Link>
        </div>
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
        <div className="comments-box">
          {comments.map((comment, i) => (
            <CommentCard {...comment} edit={{ id: setCommentId, comment: setComment }} key={comment.id} />
          ))}
          {loadingLoader && (
            <div className="loader" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <Image src="/cakram-white.svg" alt="loading" width={30} height={30} style={{ animation: 'spin 1s infinite linear' }} />
              <p>Loading coments...</p>
            </div>
          )}
          {commentsLimit && <p className="end-of-comments">~ End of comments ~</p>}
        </div>
      </div>
      {!loadingLoader && <div ref={loaderRef} />}
    </main>
  );
};

export default Comments;
