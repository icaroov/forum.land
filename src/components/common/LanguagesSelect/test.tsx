import { render, screen } from '@testing-library/react'

import LanguagesSelect from '.'

describe('<LanguagesSelect />', () => {
  it('should render the heading', () => {
    render(<LanguagesSelect />)

    expect(
      screen.getByRole('heading', { name: /LanguagesSelect/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
