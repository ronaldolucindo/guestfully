import Button from '@/components/button/button'
import Typography from '@/components/typography/typography'
import { Booking, DateInterval } from '@/types/booking'
import { Field, Label, Select, Textarea } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Controller, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import { differenceInDays } from 'date-fns/differenceInDays'
import { addDays } from 'date-fns/addDays'
import { areIntervalsOverlapping } from 'date-fns/areIntervalsOverlapping'
import { Property } from '@/types/property'

type BookingFormProps = {
  booking?: Booking
  property: Property
  bookedDates: DateInterval[]
  onSubmit: (data: Booking) => void
}

const BookingForm = ({
  property,
  bookedDates,
  onSubmit,
}: BookingFormProps): React.JSX.Element => {
  const {
    register,
    setError,
    clearErrors,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Booking>({
    defaultValues: {
      guests: 1,
      note: '',
      date: [undefined, undefined],
    },
  })

  const guestOptions = Array.from({ length: property.guests }, (_x, i) => i + 1)
  const [startDate, endDate] = watch('date')
  const dateLimit = startDate ? addDays(startDate, 60) : undefined
  const numberOfNights =
    startDate && endDate ? differenceInDays(endDate, startDate) : 0
  const total = numberOfNights * property.price
  const isDateSelected = (date: Booking['date']) => Boolean(date[0] && date[1])

  const areOverlapping = (date: [Date | null, Date | null]) =>
    bookedDates.some((item) =>
      areIntervalsOverlapping(
        { start: date[0] ?? '', end: date[1] ?? '' },
        item,
      ),
    )

  const beforeSubmit = (data: Booking) => {
    const bookingData = {
      ...data,
      totalPrice: total,
      property: {
        id: property.id,
        name: property.name,
        address: property.address,
        image: property.images[0].original,
      },
    }
    onSubmit(bookingData)
  }

  return (
    <div className="md:p-x-8 flex h-4/5 w-full flex-col rounded-lg bg-white p-4 shadow-md md:sticky md:top-24">
      <form
        className="w-full"
        noValidate
        onSubmit={(e) => {
          e.preventDefault()
          void handleSubmit(beforeSubmit)(e)
        }}
      >
        <Typography className="text-lg font-bold">
          $ {property.price}{' '}
          <Typography className="text-sm font-bold" variant="span">
            / night
          </Typography>
        </Typography>
        <div>
          {!!numberOfNights && (
            <Typography className="text-sm font-bold text-blue-700">
              $ {total} total for {numberOfNights} nights
            </Typography>
          )}
        </div>
        <Field className="my-2">
          <Label className="text-sm font-bold">Date</Label>
          <div className="w-full">
            <Controller
              name="date"
              control={control}
              rules={{ validate: { isDateSelected } }}
              render={({ field }) => (
                <DatePicker
                  name="date"
                  minDate={new Date()}
                  // should allow at most 60 days booking
                  maxDate={dateLimit}
                  selectsRange={true}
                  className={`mt-1 block w-full rounded-lg bg-slate-100 px-3 py-2 text-sm/6 data-[focus]:outline-2 data-[focus]:outline-white/25 ${errors.date ? 'border-2 border-red-500' : ''}`}
                  wrapperClassName="w-full"
                  onChange={(date) => {
                    // should prevent user from selecting overlapping ranges
                    if (areOverlapping(date)) {
                      setError('date', {
                        type: 'manual',
                        message: 'Selected range includes booked dates',
                      })
                      return field.onChange([undefined, undefined])
                    }
                    clearErrors('date')
                    return field.onChange(date)
                  }}
                  startDate={field.value?.[0]}
                  endDate={field.value?.[1]}
                  excludeDateIntervals={bookedDates}
                  isClearable={true}
                  onKeyDown={(e) => e.preventDefault()}
                />
              )}
            />
          </div>
          {errors?.date && (
            <Typography className="text-sm text-red-600">
              {errors.date?.message}
            </Typography>
          )}
        </Field>
        <Field>
          <Label className="text-sm font-bold">Guests</Label>
          <div className="relative">
            <Select
              {...register('guests', { required: true, valueAsNumber: true })}
              className="mt-3 block w-full appearance-none rounded-lg bg-slate-100 px-3 py-2 focus:outline-none data-[focus]:outline-2 data-[focus]:outline-white/25"
            >
              {guestOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <ChevronDownIcon
              className="group pointer-events-none absolute right-2.5 top-2.5 size-4"
              aria-hidden="true"
            />
          </div>
        </Field>
        <Field className="my-2">
          <Label className="text-sm font-bold">Note</Label>
          <Controller
            name="note"
            control={control}
            render={({ field }) => (
              <Textarea
                onChange={(e) => field.onChange(e?.target?.value)}
                value={field.value}
                className="mt-1 block w-full rounded-lg bg-slate-100 px-3 py-2 text-sm/6 data-[focus]:outline-2 data-[focus]:outline-white/25"
              />
            )}
          />
        </Field>
        <Button type="submit" variant="rounded">
          Book now
        </Button>
      </form>
    </div>
  )
}

export default BookingForm
