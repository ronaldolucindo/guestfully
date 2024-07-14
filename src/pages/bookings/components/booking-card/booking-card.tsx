import Typography from '@/components/typography/typography'
import BookingCardMenu from './booking-card-menu'

type BookingCardProps = {
  title: string
  price: number
  startDate: Date
  endDate: Date
  image: string
  onEdit: () => void
  onDelete: () => void
}

const BookingCard = ({
  image,
  startDate,
  endDate,
  price,
  title,
  onEdit,
  onDelete,
}: BookingCardProps): React.JSX.Element => {
  return (
    <div className="flex flex-col space-x-2 overflow-hidden rounded-lg bg-white shadow-md md:flex-row md:space-x-8">
      <img className="h-32 md:h-48" src={image} alt={title} />
      <div className="w-full flex-col py-2">
        <div className="flex justify-between">
          <Typography variant="h6">{title}</Typography>
          <BookingCardMenu onEdit={onEdit} onDelete={onDelete} />
        </div>
        <Typography className="text-sm text-gray-500">
          {startDate.toDateString()} - {endDate.toDateString()}
        </Typography>
        <Typography className="mt-2 text-xl font-bold text-blue-800">
          {price}
        </Typography>
      </div>
    </div>
  )
}

export default BookingCard
