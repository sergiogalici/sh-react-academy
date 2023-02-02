import styled from 'styled-components'
import { ThemeSpacings, theme } from '../../style/theme'

export type StyledBSInfoBoxProps = {
  width?: number
  height?: number
  padding: ThemeSpacings
}

export const StyledBSInfoBox = styled.div<StyledBSInfoBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: ${({ padding, theme }) => theme.spacing[padding]}px;
  .subtitles-wrapper {
    display: flex;
    flex-direction: row;
    gap: 3px;
    ${({ width }) => width && `width: ${width}px;`}
    ${({ height }) => height && `height: ${height}px;`}
  }
  gap: 5px;
`
