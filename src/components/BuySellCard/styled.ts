import styled from 'styled-components'
import { ThemeSpacings } from '../../style/theme'

export type StyledBSCardProps = {
  height?: string | number
  width?: string | number
}

export const StyledBSCard = styled.div<StyledBSCardProps>`
  ${({ width }) => width && `width: ${typeof width === 'string' ? width : `${width}px`}`};
  ${({ height }) =>
    height && `height: ${typeof height === 'string' ? height : `${height}px`}`};
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
