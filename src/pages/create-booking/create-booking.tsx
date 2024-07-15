import Typography from '@/components/typography/typography'
import PropertyDetails from './components/property-details/property-details'
import BookingForm from './components/booking-form/booking-form'
import VACATION_HOUSE_MOCK from '@/mocks/vacation-house'

type CreateBookingProps = {
  // TODO: Fix booking type
  booking?: string
}
const CreateBooking = ({ booking }: CreateBookingProps): React.JSX.Element => {
  const isEditingBooking = Boolean(booking)
  return (
    <div>
      <Typography variant="h2">
        {isEditingBooking ? 'Edit Booking' : 'Create booking'}
      </Typography>
      <div className="relative mt-4 flex flex-col justify-between md:flex-row md:space-x-12">
        <PropertyDetails property={VACATION_HOUSE_MOCK} />
        <BookingForm booking="1" onSubmit={() => 1} />
      </div>
    </div>
  )
}

export default CreateBooking
