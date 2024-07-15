import Typography from '@/components/typography/typography'

type GuestInfoProps = {
  guests: number
  bedrooms: number
  bathrooms: number
}

const GuestInfo = ({
  guests,
  bedrooms,
  bathrooms,
}: GuestInfoProps): React.JSX.Element => {
  return (
    <div className="mt-8 flex w-full justify-between">
      <div className="flex items-center space-x-2">
        <Typography className="text-3xl font-bold">{guests}</Typography>
        <Typography>Guests</Typography>
      </div>
      <div className="flex items-center space-x-2">
        <Typography className="text-3xl font-bold">{bedrooms}</Typography>
        <Typography>Bedrooms</Typography>
      </div>
      <div className="flex items-center space-x-2">
        <Typography className="text-3xl font-bold">{bathrooms}</Typography>
        <Typography>Bathrooms</Typography>
      </div>
    </div>
  )
}

export default GuestInfo
