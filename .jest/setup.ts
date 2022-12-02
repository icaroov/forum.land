import '@testing-library/jest-dom'

jest.mock('next-i18next', () => ({
  ...jest.requireActual('next-i18next'),
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        changeLanguage: () => new Promise(() => {})
      }
    }
  }
}))

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
