import { render, screen } from '@testing-library/react'

import Register from '.'

describe('<Register />', () => {
  it('should render the heading', () => {
    const { container } = render(<Register />)

    expect(screen.getByRole('heading', { name: /Register/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
