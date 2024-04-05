import React, { useState } from 'react';
import '@/styles/CommentSection.scss';
import GithubSigninButton from './GithubSigninButton';
import { useSession } from 'next-auth/react';
import CommentCard from './CommentCard';
import { useComments } from '@/hooks/useComments';
import Image from 'next/image';
import { useViewport } from '@/hooks/useViewport';
import ImportantCard from './ImportantCard';

const CommentSection: React.FC = ({}) => {
  const { data: session } = useSession();
  const { loading, comments, postComment } = useComments();
  const [width, height] = useViewport();

  const [comment, setComment] = useState<string>('');

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();

    comment.length ? postComment({ comment }) : alert('Comment cannot be empty!');
    setComment('');
  };

  const renderComments = () => {
    if (comments.length > 7) {
      return comments.slice(0, 7).map((comment, i) => <CommentCard {...comment} key={i} />);
    }

    return comments.map((comment, i) => <CommentCard {...comment} key={i} />);
  };

  return (
    <div id="commentSection">
      <h3 className="title">Have some thought for me? Leave a comment!</h3>
      <ImportantCard />
      <GithubSigninButton />
      {session && (
        <form onSubmit={(e) => handleSendComment(e)} className="comment-box">
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
      )}
      <div className="comments-container">
        {renderComments()}
        <span className="full-comments-btn">See other {comments.length - 7} comments</span>
      </div>
    </div>
  );
};

export default CommentSection;
