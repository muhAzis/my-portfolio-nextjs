import NextAuth from 'next-auth';
import { authConfig } from './authOptions';

const authHandler = NextAuth(authConfig);

export { authHandler as GET, authHandler as POST };
