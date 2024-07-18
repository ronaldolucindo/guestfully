import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import Button from '../button/button'

type ConfirmationDialogProps = {
  title: string
  description: string
  isOpen: boolean
  onClose: () => void
  onCancel?: () => void
  onConfirm: () => void
}

const ConfirmationDialog = ({
  title,
  description,
  isOpen,
  onClose,
  onCancel,
  onConfirm,
}: ConfirmationDialogProps): React.JSX.Element => {
  const handleCancel = () => {
    onCancel && onCancel()
    onClose()
  }
  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
      data-testid="ConfirmationDialog"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center py-4">
        <DialogPanel className="max-w-lg space-y-8 rounded-md bg-white p-8 shadow-sm">
          <DialogTitle className="text-lg font-bold text-red-600">
            {title}
          </DialogTitle>
          <Description>{description}</Description>
          <div className="flex justify-end gap-4">
            <Button
              variant="text"
              onClick={handleCancel}
              data-testid="ConfirmationDialog.cancelBtn"
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={handleConfirm}
              data-testid="ConfirmationDialog.confirmBtn"
            >
              Confirm
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default ConfirmationDialog
