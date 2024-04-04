import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
