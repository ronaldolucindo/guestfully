import Typography from '@/components/typography/typography'
import BookingCardMenu from './booking-card-menu'
import { Booking } from '@/types/booking'
import { formatCurrency } from '@/utils/formatCurrency'

type BookingCardProps = {
  booking: Booking
  onEdit: () => void
  onDelete: () => void
}

const BookingCard = ({
  booking,
  onEdit,
  onDelete,
}: BookingCardProps): React.JSX.Element => {
  return (
    <div className="flex flex-col space-x-2 overflow-hidden rounded-lg bg-white shadow-md md:flex-row md:space-x-8">
      <img
        className="h-32 md:h-48"
        src={booking.property.image}
        alt={booking.property.name}
      />
      <div className="w-full flex-col py-2">
        <div className="flex justify-between">
          <Typography variant="h6">{booking.property.name}</Typography>
          <BookingCardMenu onEdit={onEdit} onDelete={onDelete} />
        </div>
        <Typography className="text-sm text-gray-500">
          {booking.property.address}
        </Typography>
        <Typography className="text-sm font-bold text-gray-500">
          {booking.date[0].toLocaleDateString()} -{' '}
          {booking.date[1].toLocaleDateString()}
        </Typography>
        <Typography className="mt-4 text-xl font-bold text-blue-800">
          {formatCurrency('usd', booking.totalPrice)}
        </Typography>
      </div>
    </div>
  )
}

export default BookingCard
