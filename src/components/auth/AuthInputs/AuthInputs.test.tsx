import { screen } from '@testing-library/react'

import { renderWithProviders } from '@src/config/test/renderWithProviders'
import { ViewEnum } from '@src/shared/enums/View.enum'

import AuthInputs from '.'

describe('<AuthInputs />', () => {
  it('should render the login form by default', () => {
    renderWithProviders(<AuthInputs view={ViewEnum.LOGIN} />)
    expect(screen.getByTestId('login-form')).toBeInTheDocument()
  })

  it('should render the register form when view is "register"', () => {
    renderWithProviders(<AuthInputs view={ViewEnum.REGISTER} />)

    expect(screen.getByTestId('register-form')).toBeInTheDocument()
  })
})
