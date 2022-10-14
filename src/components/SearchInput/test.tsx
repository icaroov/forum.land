import { render, screen } from '@testing-library/react'

import SearchInput from '.'

describe('<SearchInput />', () => {
  it('should render the heading', () => {
    render(<SearchInput />)

    expect(
      screen.getByRole('heading', { name: /SearchInput/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
