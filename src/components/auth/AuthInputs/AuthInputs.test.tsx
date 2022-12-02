import { screen } from '@testing-library/react'

import { renderWithProviders } from '@src/config/test/renderWithProviders'

import AuthInputs from '.'

describe('<AuthInputs />', () => {
  it('should render the login form by default', () => {
    renderWithProviders(<AuthInputs view="login" />)
    expect(screen.getByTestId('login-form')).toBeInTheDocument()
  })

  it('should render the register form when view is "register"', () => {
    renderWithProviders(<AuthInputs view="register" />)

    expect(screen.getByTestId('register-form')).toBeInTheDocument()
  })
})
