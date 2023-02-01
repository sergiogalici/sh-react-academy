import styled from 'styled-components'
import { ThemeSpacings, ThemeColors, ThemeFontSizes } from '../../style/theme'

export type BaseBtnProps = {
  size: ThemeSpacings
  color: ThemeColors
  backgroundColor: ThemeColors
  fontSize: number
  borderRadius: number
  outlined?: boolean
  fullWidth?: boolean
}

export const BaseButton = styled.button<BaseBtnProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: ${({ borderRadius, theme }) => theme.radii[borderRadius]}px;
  padding: ${({ theme, size }) =>
    `${theme.spacing[size] / 2}px ${theme.spacing[size]}px`};
  border: ${({ outlined, backgroundColor, theme }) =>
    outlined ? `1px solid ${theme.colors[backgroundColor]}` : 'none'};
  color: ${({ color, theme }) => theme.colors[color]};
  background-color: ${({ theme, backgroundColor, outlined }) =>
    outlined ? 'transparent' : theme.colors[backgroundColor]};
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    background-color: ${({ backgroundColor, theme }) => theme.colors[backgroundColor]};
    opacity: 0.8;
  }
  font-size: ${({ fontSize, theme }) => `${fontSize}rem`};
`
