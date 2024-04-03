import { initializeApp } from 'firebase/app';
import { FIREBASE_API_KEY, FIREBASE_APP_ID, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET } from './env.server';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: FIREBASE_API_KEY,
//   authDomain: FIREBASE_AUTH_DOMAIN,
//   databaseURL: FIREBASE_DATABASE_URL,
//   projectId: FIREBASE_PROJECT_ID,
//   storageBucket: FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
//   appId: FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyBm-7MWYI-Aw6F_qhEOJBVvlUo5p_TuLaQ',
//   authDomain: 'portfolio-azis.firebaseapp.com',
//   databaseURL: 'https://portfolio-azis-default-rtdb.asia-southeast1.firebasedatabase.app',
//   projectId: 'portfolio-azis',
//   storageBucket: 'portfolio-azis.appspot.com',
//   messagingSenderId: '1056228798537',
//   appId: '1:1056228798537:web:a36e8fcf7685c9c1f6cf98',
// };

const app = initializeApp(firebaseConfig);
const rdb = getDatabase(app);
const db = getFirestore(app);

export { db, rdb };
