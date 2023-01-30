import { ReactNode } from 'react'
import { theme } from '../../style/theme'
import { BaseBtnProps } from './BaseButton'
import { StyledButton, StyledButtonProps } from './styled'

type Props = Partial<StyledButtonProps> &
  Partial<BaseBtnProps> & {
    children: ReactNode
    onClick?: () => void
  }

export const Button = ({
  variant,
  children,
  onClick,
  padding = 'md',
  outlined = false,
  color = 'textLight',
  backgroundColor = 'primary',
  borderRadius = theme.radii[1]
}: Props) => {
  return (
    <StyledButton
      variant={variant}
      padding={padding}
      outlined={outlined}
      color={color}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}
