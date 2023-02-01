import { ReactNode } from 'react'
import { theme } from '../../style/theme'
import { Icon } from '../Icon'
import { IconProp } from '../Icon'
import { Text } from '../Text'
import { BaseBtnProps } from './BaseButton'
import { StyledButton } from './styled'

type Props = Partial<BaseBtnProps> & {
  variant?: keyof typeof variants
  children?: ReactNode
  onClick?: () => void
  icon?: IconProp
}

const variants = {
  primary: {
    backgroundColor: 'primary',
    color: 'textLight'
  },
  secondary: {
    backgroundColor: 'primaryLighter',
    color: 'primary'
  },
  tertiary: {
    backgroundColor: 'transparent',
    color: 'textLight'
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
  const v = variant ? variants[variant] : { backgroundColor, color, outlined }
  const textColor = outlined ? v.backgroundColor : v.color

  return (
    <StyledButton
      fontSize={size}
      size={size}
      outlined={outlined}
      color={v.color}
      backgroundColor={v.backgroundColor}
      borderRadius={borderRadius}
      {...rest}
    >
      {icon && <Icon icon={icon} size="3x" />}
      {children && (
        <Text size={size} color={textColor} bold>
          {children}
        </Text>
      )}
    </StyledButton>
  )
}
