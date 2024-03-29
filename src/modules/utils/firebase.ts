import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID, 
} from '@env';

import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, signInWithPhoneNumber } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
}

const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db, signInWithPhoneNumber, firebaseApp };
