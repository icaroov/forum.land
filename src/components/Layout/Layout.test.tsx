import { mockedUser } from '@src/__mocks__/firebase'
import { renderWithProviders } from '@src/config/test/renderWithProviders'

import Layout from '.'

describe('<Layout />', () => {
  it('should render the component correctly', () => {
    const { container } = renderWithProviders(
      <Layout user={mockedUser}>
        <h1>Test</h1>
      </Layout>
    )

    const navbar = container.querySelector('nav')
    const main = container.querySelector('main')

    expect(navbar).toBeInTheDocument()
    expect(main).toBeInTheDocument()
  })
})
