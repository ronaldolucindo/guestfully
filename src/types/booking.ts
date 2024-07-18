import { Property } from './property'

export type Booking = {
  id: string
  guests: number
  note: string
  totalPrice: number
  date: [Date, Date]
  property: {
    id: Property['id']
    name: Property['name']
    address: Property['address']
    image: string
  }
}

export type DateInterval = { start: Date; end: Date }
