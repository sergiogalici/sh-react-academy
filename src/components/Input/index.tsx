import { ReactNode } from 'react'
import { ThemeSpacings, ThemeColors, theme } from '../../style/theme'
import { StyledInput, StyledInputProps } from './styled'

type Props = Partial<StyledInputProps> & {
  padding?: ThemeSpacings
  color?: ThemeColors
  borderRadius?: number
  placeText?: string
  borderColor?: ThemeColors
  value?: string
  onChange?: (value: string) => void
}

export const Input = ({
  fullWidth,
  padding = 'sm',
  color = 'textDark',
  borderRadius = 0,
  placeText = '',
  borderColor = 'lightGray',
  onChange
}: Props) => {
  return (
    <StyledInput
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      placeholder={placeText}
      borderRadius={borderRadius}
      color={color}
      padding={padding}
      borderColor={borderColor}
      fullWidth={fullWidth}
    />
  )
}
