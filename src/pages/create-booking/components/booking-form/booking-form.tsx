import Button from '@/components/button/button'
import { Field, Input, Label, Textarea } from '@headlessui/react'

type BookingFormProps = {
  booking: string
  onSubmit: () => void
}

const BookingForm = ({
  booking,
  onSubmit,
}: BookingFormProps): React.JSX.Element => {
  return (
    <div className="md:p-x-8 flex h-4/5 w-full flex-col overflow-hidden rounded-lg bg-white p-4 shadow-md md:sticky md:top-24">
      <form className="w-full" onSubmit={onSubmit}>
        <p>Booking form {booking}</p>
        <Field className="my-2">
          <Label className="text-sm font-bold">Name</Label>
          <Input
            type="text"
            className="mt-1 block w-full rounded-lg bg-slate-100 px-3 py-2 text-sm/6 data-[focus]:outline-2 data-[focus]:outline-white/25"
          />
        </Field>
        <Field className="my-2">
          <Label className="text-sm font-bold">Email</Label>
          <Input
            type="email"
            className="mt-1 block w-full rounded-lg bg-slate-100 px-3 py-2 text-sm/6 data-[focus]:outline-2 data-[focus]:outline-white/25"
          />
        </Field>
        <Field className="my-2">
          <Label className="text-sm font-bold">Note</Label>
          <Textarea className="mt-1 block w-full rounded-lg bg-slate-100 px-3 py-2 text-sm/6 data-[focus]:outline-2 data-[focus]:outline-white/25" />
        </Field>
        <Button variant="rounded">Book now</Button>
      </form>
    </div>
  )
}

export default BookingForm
