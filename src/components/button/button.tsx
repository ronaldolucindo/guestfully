import {
  ButtonProps as UiButtonProps,
  Button as UiButton,
} from '@headlessui/react'

const BUTTON_CLASSES = {
  normal:
    'rounded-sm bg-blue-700 px-4 py-2 text-white data-[active]:bg-blue-700 data-[disabled]:bg-gray-500 data-[hover]:bg-blue-800',
  rounded:
    'rounded-full bg-blue-700 px-4 py-2 text-white data-[active]:bg-blue-700 data-[disabled]:bg-gray-500 data-[hover]:bg-blue-800',
  danger:
    'rounded-sm bg-red-700 px-4 py-2 text-white data-[active]:bg-red-700 data-[disabled]:bg-gray-500 data-[hover]:bg-red-800',
  text: 'rounded-sm bg-transparent px-4 py-2 text-gray-700 data-[active]:bg-transparent data-[disabled]:text-gray-500 data-[hover]:bg-gray-100',
}

type ButtonProps = UiButtonProps & {
  variant?: 'normal' | 'rounded' | 'danger' | 'text'
}

const Button = ({
  variant = 'normal',
  ...props
}: ButtonProps): React.JSX.Element => {
  const className = BUTTON_CLASSES[variant]
  return <UiButton {...props} className={className} />
}

export default Button
