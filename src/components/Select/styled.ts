import styled, { css } from 'styled-components'
import { ThemeSpacings, ThemeColors } from '../../style/theme'

export type StyledSelectProps = {
  padding: ThemeSpacings
  color?: ThemeColors
  borderRadius?: number
  fullWidth: boolean
}

export const StyledSelect = styled.select<StyledSelectProps>`
  ${({ fullWidth }) => fullWidth && 'width: 100%'};
  padding: ${({ padding, theme }) => theme.spacing[padding]}px;
  color: ${({ color, theme }) => (color ? theme.colors[color] : 'inherit')};
  ${({ borderRadius, theme }) =>
    borderRadius && `border-radius: ${theme.radii[borderRadius]}px;`}
  outline: none;
`
