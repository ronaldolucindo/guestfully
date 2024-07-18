import { Property } from './property'

export type Booking = {
  id: string
  guests: number
  note: string
  totalPrice?: number
  date: [Date, Date]
  propertyName: Property['name']
}

export type DateInterval = { start: Date; end: Date }
