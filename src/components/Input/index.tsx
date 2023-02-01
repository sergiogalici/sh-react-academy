import { ReactNode } from 'react'
import { ThemeSpacings, ThemeColors, theme } from '../../style/theme'
import { StyledInput } from './styled'

type Props = {
  padding?: ThemeSpacings
  color?: ThemeColors
  borderRadius?: number
  placeText?: string
  borderColor?: ThemeColors
}

export const Input = ({
  padding = 'sm',
  color = 'textDark',
  borderRadius,
  placeText = '',
  borderColor = 'lightGray'
}: Props) => {
  return (
    <StyledInput
      placeholder={placeText}
      borderRadius={borderRadius}
      color={color}
      padding={padding}
      borderColor={borderColor}
    />
  )
}
