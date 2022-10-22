import Navbar from '@components/Layout/Navbar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  )
}

export default Layout
