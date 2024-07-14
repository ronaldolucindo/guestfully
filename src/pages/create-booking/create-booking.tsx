type CreateBookingProps = {
  // TODO: Fix booking type
  booking?: string
}
const CreateBooking = ({ booking }: CreateBookingProps): React.JSX.Element => {
  const isEditingBooking = Boolean(booking)
  return (
    <div>
      <p>{isEditingBooking ? 'Edit Booking' : 'Create booking'}</p>
    </div>
  )
}

export default CreateBooking
