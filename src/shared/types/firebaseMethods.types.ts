import {
  ActionCodeSettings,
  AuthError,
  CustomParameters,
  UserCredential
} from 'firebase/auth'

export type FirebaseErrorType = AuthError | Error | undefined

export type SendPasswordResetEmailErrorType = (
  email: string,
  actionCodeSettings?: ActionCodeSettings | undefined
) => Promise<boolean>

export type SignInWithGoogleType = (
  scopes?: string[] | undefined,
  customOAuthParameters?: CustomParameters | undefined
) => Promise<UserCredential | undefined>
