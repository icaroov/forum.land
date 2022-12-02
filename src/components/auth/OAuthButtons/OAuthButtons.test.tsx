import { screen } from '@testing-library/react'
import { t } from 'i18next'

import { renderWithProviders } from '@src/config/test/renderWithProviders'

import OAuthButtons, { trans } from './OAuthButtons'

jest.mock('react-firebase-hooks/auth', () => ({
  useSignInWithGoogle: jest.fn(() => [jest.fn(), null, false, null])
}))

describe('<OAuthButtons />', () => {
  it('should render the component correctly', () => {
    renderWithProviders(<OAuthButtons />)

    const googleButton = screen.getByRole('button', {
      name: trans(t).google
    })
    const googleImage = googleButton.querySelector('img')

    expect(googleButton).toBeInTheDocument()
    expect(googleImage).toHaveAttribute('src', '/assets/img/googlelogo.png')
  })
})
