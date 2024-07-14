import logo from '@/assets/logo.jpg'
import { Link } from 'react-router-dom'
const Header = (): React.JSX.Element => {
  return (
    <header className="mb-8 flex w-full rounded-lg bg-gray-50 py-2 shadow-md">
      <div className="m-auto w-full px-4 lg:w-4/5">
        <Link to="/">
          <span className="sr-only">Guestfully</span>
          <img
            className="h-10 w-auto opacity-80 mix-blend-darken lg:h-16"
            src={logo}
            alt="Guestfully"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
