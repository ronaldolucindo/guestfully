import Typography from '@/components/typography/typography'
import BookingCard from './components/booking-card/booking-card'
import houseImage from '@/assets/vacation-house.jpg'
import { Link } from 'react-router-dom'
import Button from '@/components/button/button'

const Bookings = (): React.JSX.Element => {
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
          onDelete={() => 1}
        />
        <BookingCard
          title="Vacation house"
          image={houseImage}
          startDate={new Date('2024-06-21')}
          endDate={new Date('2024-06-28')}
          price={1920}
          onEdit={() => 1}
          onDelete={() => 1}
        />
      </div>
    </>
  )
}

export default Bookings
