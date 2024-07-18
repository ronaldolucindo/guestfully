import Typography from '@/components/typography/typography'
import PropertyDetails from './components/property-details/property-details'
import BookingForm from './components/booking-form/booking-form'
import VACATION_HOUSE_MOCK from '@/mocks/vacation-house'
import { Booking } from '@/types/booking'
import { useBookingsStore } from '@/stores/bookings'
import { useNavigate, useParams } from 'react-router-dom'

type CreateBookingProps = {
  isEditing?: boolean
}
const CreateBooking = ({
  isEditing,
}: CreateBookingProps): React.JSX.Element => {
  const navigate = useNavigate()
  const { bookingId } = useParams()

  const addBooking = useBookingsStore((state) => state.addBooking)
  const editBooking = useBookingsStore((state) => state.editBooking)
  const bookedDates = useBookingsStore((state) => state.getBookedDates)
  const getBooking = useBookingsStore((state) => state.getBooking)

  const bookingToEdit =
    isEditing && bookingId ? getBooking(bookingId) : undefined

  const saveBooking = isEditing ? editBooking : addBooking
  const handleSaveBooking = (booking: Booking) => {
    saveBooking(booking)
    return navigate('/')
  }

  return (
    <div>
      <Typography variant="h2">
        {isEditing ? 'Edit Booking' : 'Create booking'}
      </Typography>
      <div className="relative mt-4 flex flex-col justify-between md:flex-row md:space-x-12">
        <PropertyDetails property={VACATION_HOUSE_MOCK} />
        <BookingForm
          property={VACATION_HOUSE_MOCK}
          booking={bookingToEdit}
          bookedDates={bookedDates()}
          onSubmit={handleSaveBooking}
        />
      </div>
    </div>
  )
}

export default CreateBooking
