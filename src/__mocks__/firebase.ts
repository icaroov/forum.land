import { UserType } from '@shared/types/user.type'

export const mockedUser: UserType = {
  uid: '123',
  displayName: 'John Doe',
  email: 'fake@mail.com',
  emailVerified: true,
  photoURL: 'https://example.com/photo.png',
  phoneNumber: '+1234567890',
  isAnonymous: false,
  tenantId: null,
  providerData: [],
  metadata: {
    creationTime: '2021-01-01T00:00:00.000Z'
  },
  refreshToken: '123',
  delete: jest.fn(),
  getIdToken: jest.fn(),
  getIdTokenResult: jest.fn(),
  reload: jest.fn(),
  toJSON: jest.fn(),
  providerId: '123'
}
