import {
  ButtonProps as UiButtonProps,
  Button as UiButton,
} from '@headlessui/react'

const BUTTON_CLASSES = {
  normal:
    'rounded-sm bg-blue-700 px-4 py-2 text-white data-[active]:bg-blue-700 data-[disabled]:bg-gray-500 data-[hover]:bg-blue-800',
  rounded:
    'rounded-full bg-blue-700 px-4 py-2 text-white data-[active]:bg-blue-700 data-[disabled]:bg-gray-500 data-[hover]:bg-blue-800',
}

type ButtonProps = UiButtonProps & {
  variant?: 'normal' | 'rounded'
}

const Button = ({
  variant = 'normal',
  ...props
}: ButtonProps): React.JSX.Element => {
  const className = BUTTON_CLASSES[variant]
  return <UiButton {...props} className={className} />
}

export default Button
