import styled from 'styled-components'
import { ThemeColors, ThemeFontSizes, ThemeSpacings, theme } from '../../style/theme'

export type CategoryCardProps = {
  backgroundColor?: ThemeColors
  fontSize?: ThemeFontSizes
  padding?: ThemeSpacings
  shadow?: boolean
  borderRadius?: number
  width?: number
  height?: number
}

export const StyledCatCard = styled.div<CategoryCardProps>`
  ${({ borderRadius, theme }) =>
    borderRadius && `border-radius: ${theme.radii[borderRadius]}px;`}
  ${({ backgroundColor, theme }) =>
    backgroundColor && `background-color: ${theme.colors[backgroundColor]};`}
  ${({ fontSize, theme }) => fontSize && `font-size: ${theme.fontSizes[fontSize]}px;`}
  ${({ padding, theme }) =>
    padding && `padding: ${theme.spacing[padding] / 2}px ${theme.spacing[padding]}px;`}
  ${({ shadow, theme }) => shadow && `box-shadow: 0 0 1px 1px ${theme.colors.lightGray};`}
  ${({ width }) => width && `width: ${width}px;`}
  ${({ height }) => height && `height: ${height}px;`}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
