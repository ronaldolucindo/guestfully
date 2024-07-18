import Typography from '@/components/typography/typography'
import { XCircleIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'

const NotFound = (): React.JSX.Element => {
  return (
    <div className="mt-24 flex h-full min-h-60 w-full items-center justify-center space-x-3 rounded-lg px-2 py-8 shadow-md md:px-0">
      <XCircleIcon className="size-20 text-red-500" />
      <div>
        <Typography className="text-3xl text-gray-500">
          Page not found
        </Typography>
        <Link
          className="font-bold text-blue-800 hover:text-blue-700 hover:underline"
          to={'/'}
        >
          Go to homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFound
