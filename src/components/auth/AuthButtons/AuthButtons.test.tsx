import { fireEvent, screen } from '@testing-library/react'

import { authModalAtom } from '@src/atoms/authModalAtom'
import { renderWithProviders } from '@src/config/test/renderWithProviders'

import AuthButtons from '.'

describe('<AuthButtons />', () => {
  renderWithProviders(<AuthButtons />)

  it('should renders correctly', () => {
    const loginButton = screen.getByRole('button', { name: 'Login' })
    const registerButton = screen.getByRole('button', {
      name: 'Cadastre-se'
    })

    expect(loginButton).toBeInTheDocument()
    expect(registerButton).toBeInTheDocument()
  })

  it("should switch to 'register' form when 'register' button is clicked", () => {
    const onClick = jest.fn()

    renderWithProviders(<AuthButtons />, {
      node: authModalAtom,
      handler: onClick
    })

    const registerButton = screen.getByRole('button', {
      name: 'Cadastre-se'
    })

    fireEvent.click(registerButton)

    expect(onClick).toBeCalledWith({ isOpen: true, view: 'register' })
  })

  it("should switch to 'login' form when 'login' button is clicked", () => {
    const onClick = jest.fn()

    renderWithProviders(<AuthButtons />, {
      node: authModalAtom,
      handler: onClick
    })

    const loginButton = screen.getByRole('button', { name: 'Login' })

    fireEvent.click(loginButton)

    expect(onClick).toBeCalledWith({ isOpen: true, view: 'login' })
  })
})
