import styled from 'styled-components'
import { theme } from '../../style/theme'

export type StyledButtonProps = {
  border: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  outline: none;
  border: ${({ border, as }) => (border ? '2px solid white' : 'none')};
  border-radius: 3px;
`
