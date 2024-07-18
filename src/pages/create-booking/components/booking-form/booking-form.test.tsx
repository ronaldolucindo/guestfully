/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { render, screen, waitFor } from '@testing-library/react'
import BookingForm from './booking-form'
import { vitest } from 'vitest'
import { BOOKING_MOCK } from '@/mocks/booking'
import VACATION_HOUSE_MOCK from '@/mocks/vacation-house'
import userEvent from '@testing-library/user-event'

const formProps = {
  booking: BOOKING_MOCK,
  property: VACATION_HOUSE_MOCK,
  bookedDates: [{ start: new Date(), end: new Date() }],
  onSubmit: vitest.fn(),
}
const FORMATTED_PRICE = '$989.99'

describe('BookingForm', () => {
  it('displays input initial value', () => {
    render(<BookingForm {...formProps} />)

    expect(screen.getByLabelText('Guests')).toHaveValue(
      `${formProps.booking.guests}`,
    )
    expect(screen.getByLabelText('Note')).toHaveValue(formProps.booking.note)
  })
  it('does not display input initial value', () => {
    render(
      <BookingForm
        property={formProps.property}
        onSubmit={formProps.onSubmit}
        bookedDates={formProps.bookedDates}
      />,
    )

    expect(screen.getByLabelText('Note')).not.toHaveValue()
  })
  it('it shows price per night', () => {
    render(<BookingForm {...formProps} />)

    expect(screen.getByText(`${FORMATTED_PRICE}`)).toBeTruthy()
  })
  it('triggers submit function', async () => {
    const user = userEvent.setup()
    render(<BookingForm {...formProps} />)

    await waitFor(() => {
      const saveBtn = screen.getByTestId('BookingForm.bookBtn')
      expect(saveBtn).toBeInTheDocument()

      user.click(saveBtn)
      expect(formProps.onSubmit).toHaveBeenCalled()
    })

    expect(screen.getByLabelText('Guests')).toHaveValue(
      `${formProps.booking.guests}`,
    )
    expect(screen.getByLabelText('Note')).toHaveValue(formProps.booking.note)
  })
})
