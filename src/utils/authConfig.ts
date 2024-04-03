import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '@/utils/env.server';
import GithubProvider from 'next-auth/providers/github';

export const authConfig = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
    }),
  ],
};
