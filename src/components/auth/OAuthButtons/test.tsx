import { render, screen } from '@testing-library/react'

import OAuthButtons from '.'

describe('<OAuthButtons />', () => {
  it('should render the heading', () => {
    const { container } = render(<OAuthButtons />)

    expect(screen.getByRole('heading', { name: /OAuthButtons/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
