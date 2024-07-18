import Typography from '@/components/typography/typography'
import { CheckCircleIcon } from '@heroicons/react/16/solid'

type AmenitiesProps = {
  amenities: string[]
}

const Amenities = ({ amenities }: AmenitiesProps): React.JSX.Element => {
  return (
    <div className="w-full">
      <Typography variant="h4">Amenities</Typography>
      <div className="flex justify-between">
        <ul className="flex w-full list-none flex-wrap justify-between space-y-4">
          {amenities.map((item) => (
            <li
              className="flex w-1/2 items-center space-x-2 md:w-1/3"
              key={item}
            >
              <CheckCircleIcon className="size-6" />
              <Typography className="text-lg capitalize">{item}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Amenities
