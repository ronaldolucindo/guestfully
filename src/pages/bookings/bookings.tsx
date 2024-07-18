import Typography from '@/components/typography/typography'
import BookingCard from './components/booking-card/booking-card'
import { Link } from 'react-router-dom'
import Button from '@/components/button/button'
import ConfirmationDialog from '@/components/confirmation-dialog/confirmation-dialog'
import { useState } from 'react'
import { useBookingsStore } from '@/stores/bookings'
import { InformationCircleIcon } from '@heroicons/react/16/solid'
import { Booking } from '@/types/booking'

const Bookings = (): React.JSX.Element => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState<Booking>()
  const bookings = useBookingsStore((state) => state.bookings)
  const deleteBooking = useBookingsStore((state) => state.deleteBooking)

  const handleDeleteClick = (booking: Booking) => {
    setIsDialogOpen(true)
    setSelectedBooking(booking)
  }

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <Typography variant="h2">My Bookings</Typography>
        <Link to="/create-booking">
          <Button>Create Booking</Button>
        </Link>
      </div>
      <div className="flex flex-col space-y-4">
        {!bookings.length && (
          <div className="mt-24 flex h-full w-full items-center justify-center space-x-3 rounded-lg px-2 py-8 shadow-md md:px-0">
            <InformationCircleIcon className="size-12 text-gray-500" />
            <Typography className="text-lg text-gray-500">
              No bookings added, your bookings will be displayed here.
            </Typography>
          </div>
        )}
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            booking={booking}
            onEdit={() => 1}
            onDelete={() => handleDeleteClick(booking)}
          />
        ))}
      </div>
      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Delete Booking"
        description="Are you sure you want to delete your booking? All of your data will be permanently removed."
        onConfirm={() => !!selectedBooking && deleteBooking(selectedBooking)}
      />
    </>
  )
}

export default Bookings
