import Button from '@/components/button/button'
import Typography from '@/components/typography/typography'
import { Booking } from '@/types/booking'
import { Field, Input, Label, Select, Textarea } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Controller, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import { differenceInDays } from 'date-fns/differenceInDays'
import { addDays } from 'date-fns/addDays'

type BookingFormProps = {
  booking?: string
  pricePerNight: number
  maxGuests: number
  // onSubmit: () => void
}

const BookingForm = ({
  pricePerNight,
  maxGuests,
  // onSubmit,
}: BookingFormProps): React.JSX.Element => {
  const {
    register,
    // setValue,
    handleSubmit,
    control,
    watch,
    // formState: { errors },
  } = useForm<Booking>({
    defaultValues: {
      guests: 1,
      note: '',
      totalPrice: 0,
      date: [undefined, undefined],
    },
  })
  const onSubmit = (data: Booking) => console.log(data)
  const guestOptions = Array.from({ length: maxGuests }, (_x, i) => i + 1)
  const [startDate, endDate] = watch('date')
  const dateLimit = startDate ? addDays(startDate, 60) : undefined
  const numberOfNights =
    startDate && endDate ? differenceInDays(endDate, startDate) : 0
  const total = numberOfNights * pricePerNight

  return (
    <div className="md:p-x-8 flex h-4/5 w-full flex-col rounded-lg bg-white p-4 shadow-md md:sticky md:top-24">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Typography className="text-lg font-bold">
          $ {pricePerNight}{' '}
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
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  name="date"
                  minDate={new Date()}
                  // should allow at most 60 days booking
                  maxDate={dateLimit}
                  selectsRange={true}
                  className="mt-1 block w-full rounded-lg bg-slate-100 px-3 py-2 text-sm/6 data-[focus]:outline-2 data-[focus]:outline-white/25"
                  wrapperClassName="w-full"
                  onChange={(date) => field.onChange(date)}
                  startDate={field.value?.[0]}
                  endDate={field.value?.[1]}
                  // TODO: Add booked intervals to show as unavailable
                  // excludeDateIntervals={}
                  isClearable={true}
                />
              )}
            />
          </div>
        </Field>
        <Field>
          <Label className="text-sm font-bold">Guests</Label>
          <div className="relative">
            <Select
              {...register('guests', { required: true })}
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
          <Textarea
            {...register('note')}
            className="mt-1 block w-full rounded-lg bg-slate-100 px-3 py-2 text-sm/6 data-[focus]:outline-2 data-[focus]:outline-white/25"
          />
        </Field>
        <Input type="hidden" value={total} {...register('totalPrice')} />
        <Button type="submit" variant="rounded">
          Book now
        </Button>
      </form>
    </div>
  )
}

export default BookingForm
