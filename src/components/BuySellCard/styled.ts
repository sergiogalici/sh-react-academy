import styled from 'styled-components'
import { ThemeSpacings } from '../../style/theme'

export type StyledBSCardProps = {}

export const StyledBSCard = styled.div<StyledBSCardProps>`
  width: 250px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => `padding: 0 ${theme.spacing.md}px;`}
  button {
    position: absolute;
    bottom: 5%;
    width: 85%;
  }
`
