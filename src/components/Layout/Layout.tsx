import { UserType } from '@shared/user.type'

import Navbar from '@components/Layout/Navbar'

type LayoutProps = {
  children: React.ReactNode
  user: UserType
}

const Layout = ({ children, user }: LayoutProps) => {
  return (
    <>
      <Navbar user={user} />

      <main>{children}</main>
    </>
  )
}

export default Layout
