import { BsDot, BsReddit } from 'react-icons/bs'

export const FIREBASE = {
  FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

export const FIREBASE_ERRORS: Record<string, string> = {
  'Firebase: Error (auth/email-already-in-use).':
    'Usuário já cadastrado com esse e-mail.',
  'Firebase: Error (auth/user-not-found).': 'E-mail ou senha inválidos.',
  'Firebase: Error (auth/wrong-password).': 'E-mail ou senha inválidos.',
  'Firebase: Error (auth/popup-closed-by-user).':
    'Login cancelado, tente novamente.'
}

export const ICONS = {
  REDDIT: BsReddit,
  DOT: BsDot
}
