import { Outlet } from 'react-router-dom'
import Header from '../header/header'

const Layout = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <main className="m-auto w-full px-4 pb-16 xl:w-4/5">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
