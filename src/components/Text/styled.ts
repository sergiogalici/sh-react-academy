import styled, { StyledComponent } from 'styled-components'
import { TextVariants, theme, Theme } from '../../style/theme'

type StyledTextProps = {
  as: TextVariants
}

// dal template literal si prende il valore dal return della funzione
export const StyledText = styled.p<StyledTextProps>`
  color: ${({ theme, as }) => theme.colors.lightGray};
  font-size: ${({ theme, as }) => {
    const { fontSize } = theme.textVariants[as]
    return theme.fontSizes[fontSize]
  }}rem;
`
