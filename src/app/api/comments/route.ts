import { Comment } from '@/types/comment';
import { db, rdb } from '@/utils/firebaseConfig';
import dayjs from 'dayjs';
import { get, push, ref, remove, set } from 'firebase/database';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

// export const GET = async () => {
//   try {
//     const commentsRef = ref(db, 'comments');
//     const snapshot = await get(commentsRef);
//     if (!snapshot.exists()) {
//       return NextResponse.json({ status: 200, message: 'No comments yet!' });
//     }

//     const keys = Object.keys(snapshot.val());
//     const values = Object.values(snapshot.val());

//     const data = values.map((value, i) => {
//       return {
//         ...value!,
//         id: keys[i],
//       };
//     });

//     return NextResponse.json({ status: 200, data, message: 'success!' });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ status: 400, message: error });
//   }
// };

// export const POST = async (request: NextRequest) => {
//   try {
//     const session = await getServerSession();
//     if (!session) {
//       return NextResponse.json({ status: 401, message: 'Unauthorized' });
//     }

//     const req = await request.json();
//     const { comment } = req;
//     if (!comment) {
//       return NextResponse.json({ status: 400, message: "Comment can't be empty!" });
//     }

//     const commentsRef = ref(rdb, 'comments');
//     const newCommentsRef = push(commentsRef);

//     await set(newCommentsRef, {
//       name: session.user.name,
//       email: session.user.email,
//       image: session.user.image,
//       comment: comment,
//       iat: dayjs().format('YYYY-MM-DD HH:mm:ss'),
//     } as Comment);

//     return NextResponse.json({ status: 200, message: 'success!' });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ status: 400, message: error });
//   }
// };

// export const DELETE = async (request: NextRequest) => {
//   try {
//     const session = await getServerSession();
//     if (!session) {
//       return NextResponse.json({ status: 401, message: 'Unauthorized' });
//     }

//     const req = await request.json();
//     const { id } = req;
//     if (!id) {
//       return NextResponse.json({ status: 400, message: 'Comment ID is required!' });
//     }

//     const commentRef = ref(rdb, 'comments/' + id);
//     await remove(commentRef);
//     return NextResponse.json({ status: 200, message: 'Comment deleted successfully!' });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ status: 400, message: error });
//   }
// };

// export const GET = async () => {
//   try {
//     const commentsRef = collection(db, 'comments');
//     const snapshot = await getDocs(commentsRef);
//     if (!snapshot) {
//       return NextResponse.json({ status: 200, message: 'No comments yet!' });
//     }

//     const data = snapshot.docs.map((doc) => {
//       return { ...doc.data(), id: doc.id };
//     });

//     return NextResponse.json({ status: 200, data, message: 'success!' });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ status: 400, message: error });
//   }
// };

// export const POST = async (request: NextRequest) => {
//   try {
//     const session = await getServerSession();
//     if (!session) {
//       return NextResponse.json({ status: 401, message: 'Unauthorized' });
//     }

//     const req = await request.json();
//     const { comment } = req;
//     if (!comment) {
//       return NextResponse.json({ status: 400, message: "Comment can't be empty!" });
//     }

//     const commentsRef = collection(db, 'comments');
//     await addDoc(commentsRef, {
//       name: session.user.name,
//       email: session.user.email,
//       image: session.user.image,
//       comment: comment,
//       iat: dayjs().format('YYYY-MM-DD HH:mm:ss'),
//     } as Comment);

//     return NextResponse.json({ status: 200, message: 'success!' });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ status: 400, message: error });
//   }
// };

// export const DELETE = async (request: NextRequest) => {
//   try {
//     const session = await getServerSession();
//     if (!session) {
//       return NextResponse.json({ status: 401, message: 'Unauthorized' });
//     }

//     const req = await request.json();
//     const { id } = req;
//     if (!id) {
//       return NextResponse.json({ status: 400, message: 'Comment ID is required!' });
//     }

//     const commentRef = doc(db, 'comments', id);
//     await deleteDoc(commentRef);

//     return NextResponse.json({ status: 200, message: 'Comment deleted successfully!' });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ status: 400, message: error });
//   }
// };
