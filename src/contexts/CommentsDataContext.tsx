import { Comment } from '@/types/comment';
import { db } from '@/utils/firebaseConfig';
import dayjs from 'dayjs';
import { addDoc, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import React, { createContext, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

type CommentsDataContextType = {
  loading: boolean;
  comments: Comment[];
  postComment: ({ comment }: { comment: string }) => Promise<void | Error>;
  deleteComment: ({ id }: { id: string }) => Promise<void | Error>;
};

export const CommentsDataContext = createContext<CommentsDataContextType>({
  loading: false,
  comments: [],
  postComment: async ({ comment }: { comment: string }) => {},
  deleteComment: async ({ id }: { id: string }) => {},
});

const CommentsDataContextProvider: React.FC<Props> = ({ children }) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = async () => {
    try {
      const commentsRef = collection(db, 'comments');
      onSnapshot(commentsRef, (snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id } as Comment;
        });

        const sorted = [...data].sort((a, b) => dayjs(b.iat).unix() - dayjs(a.iat).unix());
        console.log(sorted);

        setComments(sorted);
      });
    } catch (error) {
      return new Error('Something went wrong!');
    }
  };

  const postComment = async ({ comment }: { comment: string }) => {
    try {
      if (!session) {
        return new Error('Unauthorized');
      }

      const commentsRef = collection(db, 'comments');

      setLoading(true);
      await addDoc(commentsRef, {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        comment: comment,
        iat: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      } as Comment);

      setLoading(false);
    } catch (error) {
      return new Error('Something went wrong!');
    }
  };

  const deleteComment = async ({ id }: { id: string }) => {
    try {
      if (!session) {
        return new Error('Unauthorized');
      }

      const commentRef = doc(db, 'comments', id);

      setLoading(true);
      await deleteDoc(commentRef);

      setLoading(false);
    } catch (error) {
      return new Error('Something went wrong!');
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const values = {
    loading,
    comments,
    postComment,
    deleteComment,
  };

  return <CommentsDataContext.Provider value={values}>{children}</CommentsDataContext.Provider>;
};

export default CommentsDataContextProvider;
