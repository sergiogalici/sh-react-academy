import { ReactNode } from 'react'
import { Text } from '../Text'
import { BaseBtnProps } from './BaseButton'
import { StyledButton, StyledButtonProps } from './styled'

type Props = Partial<StyledButtonProps> &
  Partial<BaseBtnProps> & {
    children?: ReactNode
    onClick?: () => void
    icon?: string
  }

const variants = {
  primary: {
    backgroundColor: 'primary',
    color: 'textLight'
  },
  secondary: {
    backgroundColor: 'primaryLighter',
    color: 'primary'
  }
} as const

export const Button = ({
  variant,
  children,
  icon,
  outlined,
  color = 'textLight',
  backgroundColor = 'primary',
  size = 'md',
  borderRadius = 1,
  ...rest
}: Props) => {
  const v = variant ? variants[variant] : { backgroundColor, color }
  const textColor = outlined ? v.backgroundColor : v.color

  return (
    <StyledButton
      size={size}
      outlined={outlined}
      color={v.color}
      backgroundColor={v.backgroundColor}
      borderRadius={borderRadius}
      {...rest}
    >
      {icon && <span>X</span>}
      {children && (
        <Text size={size} color={textColor} bold>
          {children}
        </Text>
      )}
    </StyledButton>
  )
}
