import { Booking, DateInterval } from '@/types/booking'
import { create } from 'zustand'
import { v4 as uuid } from 'uuid'

type BookingsState = {
  bookings: Booking[]
  addBooking: (booking: Booking) => void
  deleteBooking: (booking: Booking) => void
  editBooking: (booking: Booking) => void
  getBooking: (id: string) => Booking | undefined
  getBookedDates: () => DateInterval[]
}

export const useBookingsStore = create<BookingsState>()((set, get) => ({
  bookings: [],
  addBooking: (booking) =>
    set((state) => ({
      ...state,
      bookings: [...state.bookings, { ...booking, id: uuid() }],
    })),
  deleteBooking: (booking) => {
    const filteredBookings = get().bookings.filter(
      (item) => item.id !== booking.id,
    )
    set((state) => ({
      ...state,
      bookings: [...filteredBookings],
    }))
  },
  editBooking: (booking) => {
    const bookingsCopy = get().bookings
    const indexToEdit = bookingsCopy.findIndex((item) => item.id === booking.id)
    bookingsCopy[indexToEdit] = booking
    set((state) => ({
      ...state,
      bookings: bookingsCopy,
    }))
  },
  getBooking: (id) => get().bookings.find((booking) => booking.id === id),
  getBookedDates: () =>
    get().bookings.map((booking) => ({
      start: booking.date[0],
      end: booking.date[1],
    })),
}))
