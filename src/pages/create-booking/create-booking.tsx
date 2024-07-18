import Typography from '@/components/typography/typography'
import PropertyDetails from './components/property-details/property-details'
import BookingForm from './components/booking-form/booking-form'
import VACATION_HOUSE_MOCK from '@/mocks/vacation-house'
import { Booking } from '@/types/booking'
import { useBookingsStore } from '@/stores/bookings'
import { useNavigate } from 'react-router-dom'

type CreateBookingProps = {
  isEditing?: boolean
  booking?: Booking
}
const CreateBooking = ({
  booking,
  isEditing,
}: CreateBookingProps): React.JSX.Element => {
  const navigate = useNavigate()
  const isEditingBooking = Boolean(booking)
  const addBooking = useBookingsStore((state) => state.addBooking)
  const editBooking = useBookingsStore((state) => state.editBooking)
  const bookedDates = useBookingsStore((state) => state.getBookedDates)

  const saveBooking = isEditing ? editBooking : addBooking
  const handleSaveBooking = (booking: Booking) => {
    saveBooking(booking)
    return navigate('/')
  }

  return (
    <div>
      <Typography variant="h2">
        {isEditingBooking ? 'Edit Booking' : 'Create booking'}
      </Typography>
      <div className="relative mt-4 flex flex-col justify-between md:flex-row md:space-x-12">
        <PropertyDetails property={VACATION_HOUSE_MOCK} />
        <BookingForm
          pricePerNight={VACATION_HOUSE_MOCK.price}
          booking={booking}
          bookedDates={bookedDates()}
          maxGuests={6}
          onSubmit={handleSaveBooking}
        />
      </div>
    </div>
  )
}

export default CreateBooking
