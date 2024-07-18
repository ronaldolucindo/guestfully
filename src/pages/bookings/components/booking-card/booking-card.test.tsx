import { render, screen } from '@testing-library/react'
import BookingCard from './booking-card'
import { vitest } from 'vitest'
import { BOOKING_MOCK } from '@/mocks/booking'

const cardProps = {
  booking: BOOKING_MOCK,
  onEdit: vitest.fn(),
  onDelete: vitest.fn(),
}
const FORMATTED_PRICE = '$900.99'
const FORMATTED_DATE = `${cardProps.booking.date[0].toLocaleDateString()} - ${cardProps.booking.date[1].toLocaleDateString()}`

const ResizeObserverMock = vitest.fn(() => ({
  observe: vitest.fn(),
  unobserve: vitest.fn(),
  disconnect: vitest.fn(),
}))

// Stub the global ResizeObserver
vitest.stubGlobal('ResizeObserver', ResizeObserverMock)

describe('BookingCard', () => {
  it('displays relevant card data', () => {
    render(<BookingCard {...cardProps} />)

    expect(screen.getByText(cardProps.booking.property.name)).toBeTruthy()
    expect(screen.getByText(cardProps.booking.property.address)).toBeTruthy()
    expect(screen.getByText(FORMATTED_DATE)).toBeTruthy()
  })
  it('displays price formatted', () => {
    render(<BookingCard {...cardProps} />)
    expect(screen.getByText(FORMATTED_PRICE)).toBeTruthy()
  })
})
