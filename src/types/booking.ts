export type Booking = {
  guests: number
  note: string
  totalPrice?: number
  date: [Date | undefined, Date | undefined]
}
