import '@testing-library/jest-dom'

jest.mock('firebase/auth', () => {
  return {
    getAuth: jest.fn()
  }
})

jest.mock('firebase/firestore', () => {
  return {
    getFirestore: jest.fn()
  }
})

jest.mock('firebase/storage', () => {
  return {
    getStorage: jest.fn()
  }
})

jest.mock('firebase/app', () => {
  return {
    getApp: jest.fn(),
    getApps: () => [],
    initializeApp: jest.fn()
  }
})
