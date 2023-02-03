import { ReactNode } from 'react'
import { StyledNav, StyledNavProps } from './styled'

type Props = Partial<StyledNavProps> & {
  children?: ReactNode
}

export const Nav = ({ children }: Props) => {
  return <StyledNav>{children}</StyledNav>
}
