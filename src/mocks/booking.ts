import { Booking } from '@/types/booking'

export const BOOKING_MOCK: Booking = {
  id: 'id',
  guests: 3,
  note: 'my notes',
  totalPrice: 900.9877,
  date: [new Date(), new Date()],
  property: {
    id: 'pId',
    name: 'pName',
    address: 'pAddress',
    image: 'imageUrl',
  },
}
