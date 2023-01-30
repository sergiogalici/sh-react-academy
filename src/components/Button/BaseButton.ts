import styled from 'styled-components'
import { ThemeSpacings, ThemeColors } from '../../style/theme'

export type BaseBtnProps = {
  padding: ThemeSpacings
  outlined: boolean
  color: ThemeColors
  backgroundColor: ThemeColors
  borderRadius: number
}

export const BaseButton = styled.button<BaseBtnProps>`
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  padding: ${({ theme, padding }) => theme.spacing[padding]}px;
  outline: ${({ outlined, theme }) =>
    outlined ? `1px solid ${theme.colors.textLight}` : 'none'};
  color: ${({ color, theme }) => theme.colors[color]};
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor] : theme.colors.primary};
  cursor: pointer;
`
