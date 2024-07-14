import Typography from '@/components/typography/typography'
import BookingCard from './components/booking-card/booking-card'
import houseImage from '@/assets/vacation-house.jpg'
import { Link } from 'react-router-dom'
import Button from '@/components/button/button'
import ConfirmationDialog from '@/components/confirmation-dialog/confirmation-dialog'
import { useState } from 'react'

const Bookings = (): React.JSX.Element => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <Typography variant="h2">My Bookings</Typography>
        <Link to="/create-booking">
          <Button>Create Booking</Button>
        </Link>
      </div>
      <div className="flex flex-col space-y-4">
        <BookingCard
          title="Vacation house"
          image={houseImage}
          startDate={new Date('2024-06-21')}
          endDate={new Date('2024-06-28')}
          price={1920}
          onEdit={() => 1}
          onDelete={() => setIsDialogOpen(true)}
        />
        <BookingCard
          title="Vacation house"
          image={houseImage}
          startDate={new Date('2024-06-21')}
          endDate={new Date('2024-06-28')}
          price={1920}
          onEdit={() => 1}
          onDelete={() => setIsDialogOpen(true)}
        />
      </div>
      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Delete Booking"
        description="Are you sure you want to delete your booking? All of your data will be permanently removed."
        onCancel={() => 0}
        onConfirm={() => 1}
      />
    </>
  )
}

export default Bookings
