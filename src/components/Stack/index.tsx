import { ReactNode } from 'react'
import { ThemeSpacings } from '../../style/theme'
import { StyledStack } from './styled'

type Props = {
  direction?: 'vertical' | 'horizontal'
  gap?: ThemeSpacings | number
  children: ReactNode
}

export const Stack = ({ direction = 'horizontal', gap = 'md', children }: Props) => {
  return (
    <StyledStack direction={direction} gap={gap}>
      {children}
    </StyledStack>
  )
}
