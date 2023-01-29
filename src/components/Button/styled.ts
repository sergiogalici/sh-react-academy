import styled from 'styled-components'
import { theme, ThemeColors } from '../../style/theme'

export type StyledButtonProps = {
  borderColor: ThemeColors
  border: boolean
  borderStyle: string
  borderWidth: number
  borderRadius: number
  backgroundColor: ThemeColors
  padding: number
}

export const StyledButton = styled.button<StyledButtonProps>`
  outline: none;
  border: ${({ border, borderStyle, borderWidth, borderColor }) =>
    border ? borderWidth + 'px' + borderStyle + borderColor : 'none'};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => theme.colors[backgroundColor]};
  padding: ${({ padding }) => padding}px;
  cursor: pointer;
`
