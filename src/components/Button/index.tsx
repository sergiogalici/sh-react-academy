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

export const Button = ({
  children,
  color = 'textLight',
  backgroundColor = 'primary',
  padding = 'md',
  borderRadius = 1,
  ...rest
}: Props) => {
  return (
    <StyledButton
      padding={padding}
      color={color}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      {...rest}
    >
      {children && <Text color={color}>{children}</Text>}
    </StyledButton>
  )
}
