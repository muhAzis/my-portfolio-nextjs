const fbApiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const fbAuthDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const fbDatabaseURL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;
const fbProjectID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const fbStorageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const fbMessagingSenderID = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const fbAppID = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;

// const githubClientID = process.env.GITHUB_CLIENT_ID;
// const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

if (!fbApiKey || !fbAuthDomain || !fbDatabaseURL || !fbProjectID || !fbStorageBucket || !fbMessagingSenderID || !fbAppID) {
  throw new Error('Required server environtment variables are missing! Please check your `.env.local` file.');
}

export const FIREBASE_API_KEY = fbApiKey;
export const FIREBASE_AUTH_DOMAIN = fbAuthDomain;
export const FIREBASE_DATABASE_URL = fbDatabaseURL;
export const FIREBASE_PROJECT_ID = fbProjectID;
export const FIREBASE_STORAGE_BUCKET = fbStorageBucket;
export const FIREBASE_MESSAGING_SENDER_ID = fbMessagingSenderID;
export const FIREBASE_APP_ID = fbAppID;

// export const GITHUB_CLIENT_ID = githubClientID;
// export const GITHUB_CLIENT_SECRET = githubClientSecret;
