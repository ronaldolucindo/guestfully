import { ReactNode, createElement } from 'react'

type TypographyProps = {
  variant?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  className?: string
  children: ReactNode
}
const CLASS_NAMES = {
  p: 'text-base font-normal',
  span: 'text-base font-normal',
  h1: 'text-4xl font-bold text-blue-700',
  h2: 'text-3xl font-bold text-blue-700',
  h3: 'text-2xl font-bold text-blue-700',
  h4: 'text-xl font-bold text-blue-700',
  h5: 'text-lg font-bold text-blue-700',
  h6: 'text-base font-bold text-gray-700',
}

const Typography = ({
  variant = 'p',
  className,
  children = '',
}: TypographyProps): React.JSX.Element => {
  return createElement(
    variant,
    { className: className ?? CLASS_NAMES[variant] },
    children,
  )
}

export default Typography
