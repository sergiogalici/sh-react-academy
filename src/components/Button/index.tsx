import { ReactNode } from 'react'
import { theme, ThemeColors } from '../../style/theme'
import { StyledButton } from './styled'

type Props = {
  children: ReactNode
  border?: boolean
  borderColor?: ThemeColors
  borderStyle?: string
  borderWidth?: number
  borderRadius?: number
  disabled?: boolean
  backgroundColor?: ThemeColors
  padding?: number
}

export const Button = ({
  children,
  border = true,
  borderColor = 'primary',
  borderStyle = 'solid',
  borderWidth = 2,
  borderRadius = 2,
  backgroundColor = 'primary',
  padding = 3
}: Props) => {
  return (
    <StyledButton
      borderColor={borderColor}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      border={border}
      padding={padding}
    >
      {children}
    </StyledButton>
  )
}
