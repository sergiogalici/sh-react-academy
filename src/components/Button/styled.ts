import styled, { css } from 'styled-components'
import { theme, ThemeColors } from '../../style/theme'
import { Variants, variants } from './buttonVariants'

export type StyledButtonProps = {
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
`
