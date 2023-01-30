import { ReactNode } from 'react'
import { theme, ThemeColors } from '../../style/theme'
import { Variants } from './buttonVariants'
import { StyledButton, StyledButtonProps } from './styled'

/* type Props = {
  children: ReactNode
  variant?: Variants
}*/

type Props = Partial<StyledButtonProps> & {
  children: ReactNode
}

export const Button = ({ children, variant = 'primary' }: Props) => {
  return <StyledButton variant={variant}>{children}</StyledButton>
}
