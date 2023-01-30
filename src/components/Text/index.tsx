import { ReactNode } from 'react'
import { TextVariants, ThemeColors, ThemeFontSizes } from '../../style/theme'

import { StyledText } from './styled'
import { StyledTextProps } from './styled'

/* type Props = {
  children: ReactNode
  variant?: TextVariants
  color?: ThemeColors
  bold?: boolean
  lineHeight?: number
  size?: number
  upperCase?: boolean
}*/

type Props = Partial<StyledTextProps> & {
  children: ReactNode
}

export const Text = ({
  children,
  variant = 'p',
  color = 'primary',
  bold = false,
  lineHeight = 1.2,
  size,
  upperCase
}: Props) => {
  return (
    <StyledText
      variant={variant}
      color={color}
      bold={bold}
      lineHeight={lineHeight}
      size={size}
      upperCase={upperCase}
    >
      {children}
    </StyledText>
  )
}
