export type Booking = {
  id: string
  guests: number
  note: string
  totalPrice?: number
  date: [Date, Date]
}

export type DateInterval = { start: Date; end: Date }
