import styled, { StyledComponent } from 'styled-components'
import { TextVariants, ThemeColors, ThemeFontSizes, theme } from '../../style/theme'

export type StyledTextProps = {
  as: TextVariants
  color: ThemeColors
  size?: number
  bold: boolean
  lineHeight: number
  upperCase?: boolean
}

// dal template literal si prende il valore dal return della funzione
export const StyledText = styled.p<StyledTextProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, as, size }) => {
    const { fontSize } = theme.textVariants[as]
    return size ? size : theme.fontSizes[fontSize]
  }}rem;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  text-transform: ${({ upperCase }) => (upperCase ? 'uppercase' : 'none')};
`
