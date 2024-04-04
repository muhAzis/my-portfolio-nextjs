import { Account, NextAuthOptions, Profile, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import GithubProvider from 'next-auth/providers/github';

interface GithubAuthProfile extends Profile {
  login?: string;
  id?: string;
  url?: string;
}

interface jwtCallback {
  token: JWT;
  user: User | AdapterUser;
  account: Account | null;
  profile?: GithubAuthProfile | undefined;
}

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
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     return true;
  //   },
  //   async jwt({ token, user, account, profile }: jwtCallback) {
  //     return token;
  //   },
  //   async session({ session, token, user }) {
  //     return session;
  //   },
  // },
};
