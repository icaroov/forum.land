import { render, screen } from '@testing-library/react'

import Register from '.'

describe('<Register />', () => {
  it('should render the heading', () => {
    render(<Register />)

    expect(
      screen.getByRole('heading', { name: /Register/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
