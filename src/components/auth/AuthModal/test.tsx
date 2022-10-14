import { render, screen } from '@testing-library/react'

import AuthModal from '.'

describe('<AuthModal />', () => {
  it('should render the heading', () => {
    render(<AuthModal />)

    expect(
      screen.getByRole('heading', { name: /AuthModal/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
