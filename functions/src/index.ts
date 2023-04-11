import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

admin.initializeApp()
const db = admin.firestore()

export const onUserCreate = functions.auth.user().onCreate(async user => {
  const { uid, email, displayName, photoURL, providerData } = user
  const userRef = db.collection('users').doc(uid)

  const userData = {
    uid,
    email,
    displayName,
    photoURL,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    providerData
  }

  return userRef.set(userData)
})
