import { UserType } from '@shared/types/user.type'

import Navbar from '../Navbar'

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
