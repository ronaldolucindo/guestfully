import { Outlet } from 'react-router-dom'
import Header from '../header/header'

const Layout = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
