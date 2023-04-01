import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

admin.initializeApp()
const db = admin.firestore()

export const onUserCreate = functions.auth.user().onCreate(async user => {
  const { uid, email, displayName, photoURL } = user
  const userRef = db.collection('users').doc(uid)

  const userData = {
    email,
    displayName,
    photoURL,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }

  return userRef.set(userData)
})
