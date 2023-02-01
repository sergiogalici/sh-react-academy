import styled, { css } from 'styled-components'
import { ThemeSpacings, ThemeColors } from '../../style/theme'

export type StyledInputProps = {
  padding: ThemeSpacings
  color: ThemeColors
  borderRadius?: number
  borderColor: ThemeColors
}

export const StyledInput = styled.input<StyledInputProps>`
  padding: ${({ padding, theme }) => theme.spacing[padding]}px;
  color: ${({ color, theme }) => theme.colors[color]};
  ${({ borderRadius, theme }) =>
    borderRadius && `border-radius: ${theme.radii[borderRadius]}px`}
  outline: none;
  border: ${({ borderColor, theme }) => `1px solid ${theme.colors[borderColor]}`};
  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.textDark}`};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
  &:hover {
    border: ${({ theme }) => `1px solid ${theme.colors.textDark}`};
  }
`
