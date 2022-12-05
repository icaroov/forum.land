import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import { FIREBASE } from '@src/constants/firebase'

const firebaseConfig = {
  apiKey: FIREBASE.FIREBASE_API_KEY,
  authDomain: FIREBASE.FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE.FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE.FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE.FIREBASE_APP_ID
}

// Initialize Firebase for Server Side Rendering
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

export const firestore = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
