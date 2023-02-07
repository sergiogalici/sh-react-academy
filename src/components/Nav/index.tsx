import { ReactNode } from 'react'
import { ThemeColors } from '../../style/theme'
import { Link } from '../Link'
import { StyledNav, StyledNavProps } from './styled'

export type NavLink = {
  title: string
  to: string
}

export type NavProps = Partial<StyledNavProps> & {
  links: NavLink[]
}

export const Nav = ({ links }: NavProps) => {
  return (
    <StyledNav>
      {links.map((link, index) => (
        <Link to={link.to} key={link.title + index}>
          {link.title}
        </Link>
      ))}
    </StyledNav>
  )
}
