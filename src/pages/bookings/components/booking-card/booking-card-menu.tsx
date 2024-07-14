import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'

type BookingCardMenuProps = {
  disabled?: boolean
  onEdit: () => void
  onDelete: () => void
}

const BookingCardMenu = ({
  disabled,
  onEdit,
  onDelete,
}: BookingCardMenuProps): React.JSX.Element => {
  return (
    <div className="w-52 text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 focus:outline-none data-[hover]:bg-gray-50 data-[open]:bg-gray-50 data-[focus]:outline-1 data-[focus]:outline-white">
          <EllipsisVerticalIcon className="size-4 fill-black" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl bg-gray-50 p-1 text-sm text-gray-500 shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button
              className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-gray-200"
              disabled={disabled}
              onClick={disabled ? undefined : onEdit}
            >
              <PencilIcon className="size-4 fill-gray-500" />
              Edit
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-gray-200"
              disabled={disabled}
              onClick={disabled ? undefined : onDelete}
            >
              <TrashIcon className="size-4 fill-gray-500" />
              Delete
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}

export default BookingCardMenu
