import GithubProvider from 'next-auth/providers/github';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from './env.server';

export const authConfig = {
  providers: [
    GithubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
};
