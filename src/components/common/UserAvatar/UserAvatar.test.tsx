import { screen } from '@testing-library/react'

import { mockedUser } from '@src/__mocks__/firebase'
import { renderWithProviders } from '@src/config/test/renderWithProviders'

import UserAvatar from '.'

describe('<UserAvatar />', () => {
  it('should render the component correctly', () => {
    const userName = mockedUser?.displayName || ''

    renderWithProviders(<UserAvatar user={mockedUser} />)

    const avatar = screen.getByRole('img')
    const displayedName = screen.getByText(userName)
    const initials = userName
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase()

    expect(displayedName).toBeInTheDocument()
    expect(avatar).toHaveAttribute('aria-label', userName)
    expect(screen.getByText(initials)).toBeInTheDocument()
  })

  it("should return null if the user doesn't have a displayName", () => {
    const { container } = renderWithProviders(<UserAvatar user={{}} />)

    expect(container).toBeEmptyDOMElement()
  })
})
