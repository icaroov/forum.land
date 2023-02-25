import { act, fireEvent, screen } from '@testing-library/react'

import { authModalAtom } from '@src/atoms/authModalAtom'
import { renderWithProviders } from '@src/config/test/renderWithProviders'

import ResetPasswordForm from '.'

describe('<ResetPasswordForm />', () => {
  it('should render the component correctly', () => {
    const sendPasswordResetEmailMocked = jest.fn()

    renderWithProviders(
      <ResetPasswordForm
        sendPasswordResetEmail={sendPasswordResetEmailMocked}
        loading={false}
        error={undefined}
      />
    )

    const resetPasswordText = screen.getByText(/resetar senha/i)
    const resetPasswordDescriptionText = screen.getByText(
      /digite seu e-mail e enviaremos um link para você redefinir sua senha./i
    )

    expect(resetPasswordText).toBeInTheDocument()
    expect(resetPasswordDescriptionText).toBeInTheDocument()
  })

  it("should submit the form and show the 'check your email' message", () => {
    const sendPasswordResetEmailMocked = jest.fn()

    renderWithProviders(
      <ResetPasswordForm
        sendPasswordResetEmail={sendPasswordResetEmailMocked}
        loading={false}
        error={undefined}
      />
    )

    const emailInput = screen.getByPlaceholderText('E-mail')
    const submitButton = screen.getByRole('button', {
      name: /resetar senha/i
    })

    act(() => {
      fireEvent.change(emailInput, { target: { value: 'fake@mail.com' } })

      fireEvent.click(submitButton)
    })

    expect(sendPasswordResetEmailMocked).toHaveBeenCalledTimes(1)
  })

  it("should call login method when 'login' link is clicked", () => {
    const sendPasswordResetEmailMocked = jest.fn()
    const setAuthModalStateMocked = jest.fn()

    renderWithProviders(
      <ResetPasswordForm
        sendPasswordResetEmail={sendPasswordResetEmailMocked}
        loading={false}
        error={undefined}
      />,
      {
        node: authModalAtom,
        handler: setAuthModalStateMocked
      }
    )

    const loginLink = screen.getByText(/entrar/i)

    act(() => {
      fireEvent.click(loginLink)
    })

    expect(setAuthModalStateMocked).toHaveBeenCalled()
  })

  it("should call register method when 'register' link is clicked", () => {
    const sendPasswordResetEmailMocked = jest.fn()
    const setAuthModalStateMocked = jest.fn()

    renderWithProviders(
      <ResetPasswordForm
        sendPasswordResetEmail={sendPasswordResetEmailMocked}
        loading={false}
        error={undefined}
      />,
      {
        node: authModalAtom,
        handler: setAuthModalStateMocked
      }
    )

    const registerLink = screen.getByText(/criar conta/i)

    act(() => {
      fireEvent.click(registerLink)
    })

    expect(setAuthModalStateMocked).toHaveBeenCalled()
  })

  it('should not submit the form if email is invalid', () => {
    const sendPasswordResetEmailMocked = jest.fn()

    renderWithProviders(
      <ResetPasswordForm
        sendPasswordResetEmail={sendPasswordResetEmailMocked}
        loading={false}
        error={undefined}
      />
    )

    const emailInput = screen.getByPlaceholderText('E-mail')
    const submitButton = screen.getByRole('button', {
      name: /resetar senha/i
    })

    act(() => {
      fireEvent.change(emailInput, { target: { value: '' } })

      fireEvent.click(submitButton)
    })

    expect(sendPasswordResetEmailMocked).toHaveBeenCalledTimes(0)
  })
})
