import styled, { css } from 'styled-components'
import { theme, ThemeColors } from '../../style/theme'
import { Variants, variants } from './buttonVariants'

export type StyledButtonProps = {
  borderColor: ThemeColors
  border: boolean
  borderStyle: string
  borderWidth: number
  borderRadius: number
  backgroundColor: ThemeColors
  padding: number
  variant: Variants
}

export const StyledButton = styled.button<StyledButtonProps>`
  outline: none;
  cursor: pointer;
  ${({ variant }) => {
    const currVar = variants[variant]
    const {
      borderWidth,
      borderStyle,
      borderColor,
      borderRadius,
      backgroundColor,
      padding
    } = currVar
    if (variant) {
      return css`
        border: ${() =>
          borderWidth + 'px ' + borderStyle + ' ' + theme.colors[borderColor]};
        border-radius: ${() => borderRadius}px;
        background-color: ${() => theme.colors[backgroundColor]};
        padding: ${() => padding}px;
      `
    }
  }}
  border: ${({ border, borderStyle, borderWidth, borderColor }) =>
    border
      ? borderWidth + 'px ' + borderStyle + ' ' + theme.colors[borderColor]
      : 'none'};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => theme.colors[backgroundColor]};
  padding: ${({ padding }) => padding}px;
`
