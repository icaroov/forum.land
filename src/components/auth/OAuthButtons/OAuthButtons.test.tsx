import { screen } from '@testing-library/react'

import { renderWithProviders } from '@src/config/test/renderWithProviders'

import OAuthButtons from '.'

describe('<OAuthButtons />', () => {
  it('should render the component correctly', () => {
    const signInWithGooglMocked = jest.fn()

    renderWithProviders(
      <OAuthButtons
        signInWithGoogle={signInWithGooglMocked}
        loading={false}
        error={undefined}
      />
    )

    const googleButton = screen.getByRole('button', {
      name: /Continue com uma conta Google/i
    })
    const googleImage = googleButton.querySelector('img')

    expect(googleButton).toBeInTheDocument()
    expect(googleImage).toHaveAttribute('src', '/assets/img/googlelogo.png')
  })

  it("should render the component correctly when it's loading", () => {
    const signInWithGooglMocked = jest.fn()

    renderWithProviders(
      <OAuthButtons
        signInWithGoogle={signInWithGooglMocked}
        loading={true}
        error={undefined}
      />
    )

    const googleButton = screen.getByRole('button', {
      name: /Continue com uma conta Google/i
    })
    const loadingText = screen.getByText(/loading/i)

    expect(googleButton).toBeDisabled()
    expect(loadingText).toBeInTheDocument()
  })

  it('should call signInWithGoogle method', () => {
    const signInWithGooglMocked = jest.fn()

    renderWithProviders(
      <OAuthButtons
        signInWithGoogle={signInWithGooglMocked}
        loading={false}
        error={undefined}
      />
    )

    const googleButton = screen.getByRole('button', {
      name: /Continue com uma conta Google/i
    })

    googleButton.click()

    expect(signInWithGooglMocked).toHaveBeenCalled()
  })
})
