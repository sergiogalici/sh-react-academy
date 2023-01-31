import styled from 'styled-components'
import { ThemeSpacings, ThemeColors } from '../../style/theme'

export type BaseBtnProps = {
  padding: ThemeSpacings
  color: ThemeColors
  backgroundColor: ThemeColors
  borderRadius: number
  outlined?: boolean
  fullWidth?: boolean
}

export const BaseButton = styled.button<BaseBtnProps>`
  border: none;
  border-radius: ${({ borderRadius, theme }) => theme.radii[borderRadius]}px;
  padding: ${({ theme, padding }) =>
    `${theme.spacing[padding] / 2}px ${theme.spacing[padding]}px`};
  outline: ${({ outlined, backgroundColor, theme }) =>
    outlined ? `1px solid ${theme.colors[backgroundColor]}` : 'none'};
  color: ${({ color, theme }) => theme.colors[color]};
  background-color: ${({ theme, backgroundColor, outlined }) =>
    outlined ? 'transparent' : theme.colors[backgroundColor]};
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  cursor: pointer;
`
