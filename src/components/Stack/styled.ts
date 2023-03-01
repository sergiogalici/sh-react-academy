import styled from 'styled-components'
import { ThemeSpacings } from '../../style/theme'

export type StyledStackProps = {
  direction: 'vertical' | 'horizontal'
  gap: ThemeSpacings | number
}

export const StyledStack = styled.div<StyledStackProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'horizontal' ? 'row' : 'column')};
  gap: ${({ theme, gap }) => (typeof gap === 'number' ? gap : theme.spacing[gap])}px;
`
