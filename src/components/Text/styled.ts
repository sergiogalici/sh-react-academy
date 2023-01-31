import styled from 'styled-components'
import { TextVariants, ThemeColors, ThemeFontSizes } from '../../style/theme'

export type StyledTextProps = {
  as: TextVariants
  color?: ThemeColors
  size?: ThemeFontSizes
  bold: boolean
  lineHeight: number
  upperCase?: boolean
}

// dal template literal si prende il valore dal return della funzione
export const StyledText = styled.p<StyledTextProps>`
  color: ${({ theme, color }) => (color ? theme.colors[color] : 'inherit')};
  font-size: ${({ theme, as, size }) => {
    const fontSize = size ?? theme.textVariants[as].fontSize
    return theme.fontSizes[fontSize]
  }}rem;
  font-weight: ${({ bold }) => (bold ? 700 : 'inherit')};
  text-transform: ${({ upperCase }) => (upperCase ? 'uppercase' : 'none')};
`
