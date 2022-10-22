import { render, screen } from '@testing-library/react'

import { UserType } from '@src/shared/user.type'

import UserAvatar from '.'

const userMock: Partial<UserType> = {
  displayName: 'John Doe',
  email: '',
  emailVerified: true,
  isAnonymous: false,
  metadata: {
    creationTime: '',
    lastSignInTime: ''
  },
  phoneNumber: '',
  photoURL: '',
  providerData: [],
  providerId: '',
  refreshToken: '',
  tenantId: '',
  uid: ''
}

describe('<UserAvatar />', () => {
  it('should render the heading', () => {
    render(<UserAvatar user={userMock} />)

    expect(
      screen.getByRole('heading', { name: /UserAvatar/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
