import { ReactNode } from 'react'
import { ThemeSpacings, ThemeColors, theme } from '../../style/theme'
import { StyledInput, StyledInputProps } from './styled'

type Props = Partial<StyledInputProps> & {
  padding?: ThemeSpacings
  color?: ThemeColors
  borderRadius?: number
  placeholder?: string
  borderColor?: ThemeColors
  value?: string
  onChange?: (value: string) => void
}

export const Input = ({
  fullWidth,
  placeholder,
  padding = 'sm',
  color = 'textDark',
  borderRadius = 0,
  borderColor = 'lightGray',
  onChange
}: Props) => {
  return (
    <StyledInput
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      placeholder={placeholder}
      borderRadius={borderRadius}
      color={color}
      padding={padding}
      borderColor={borderColor}
      fullWidth={fullWidth}
    />
  )
}
