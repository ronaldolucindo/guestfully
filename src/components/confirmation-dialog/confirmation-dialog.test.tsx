/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ConfirmationDialog from './confirmation-dialog'
import { vitest } from 'vitest'

const modalProps = {
  isOpen: true,
  onClose: vitest.fn(),
  title: 'Title',
  description: 'Description',
  onCancel: vitest.fn(),
  onConfirm: vitest.fn(),
}

describe('ConfirmatioDialog', () => {
  it('renders when isOpen', async () => {
    render(<ConfirmationDialog {...modalProps} />)
    await waitFor(() => {
      expect(screen.getByTestId('ConfirmationDialog')).toBeInTheDocument()
      expect(screen.getByText(modalProps.title)).toBeInTheDocument()
      expect(screen.getByText(modalProps.description)).toBeInTheDocument()
    })
  })

  it('does not render when isOpen false', () => {
    render(<ConfirmationDialog {...modalProps} isOpen={false} />)

    expect(screen.queryByTestId('ConfirmationDialog')).not.toBeInTheDocument()
  })

  it('calls onConfirm function', async () => {
    const user = userEvent.setup()
    render(<ConfirmationDialog {...modalProps} />)
    await waitFor(() => {
      const confirmBtn = screen.getByTestId('ConfirmationDialog.confirmBtn')
      expect(confirmBtn).toBeInTheDocument()

      user.click(confirmBtn)
      expect(modalProps.onClose).toHaveBeenCalled()
      expect(modalProps.onConfirm).toHaveBeenCalled()
    })
  })
  it('calls onCancel function', async () => {
    const user = userEvent.setup()
    render(<ConfirmationDialog {...modalProps} />)
    await waitFor(() => {
      const cancelBtn = screen.getByTestId('ConfirmationDialog.cancelBtn')

      expect(cancelBtn).toBeInTheDocument()
      user.click(cancelBtn)
      expect(modalProps.onClose).toHaveBeenCalled()
      expect(modalProps.onCancel).toHaveBeenCalled()
    })
  })
})
