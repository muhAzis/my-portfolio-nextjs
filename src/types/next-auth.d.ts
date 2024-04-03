import nextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      username: string;
      id: string;
      url: string;
    } & DefaultSession['user'];
  }
}
