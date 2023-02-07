import { ReactNode } from 'react'
import { ThemeColors } from '../../style/theme'
import { Link } from '../Link'
import { StyledNav, StyledNavProps } from './styled'

export type NavLink = {
  title: string
  to: string
  id: string | number
}

export type NavProps = Partial<StyledNavProps> & {
  links: NavLink[]
}

export const Nav = ({ links }: NavProps) => {
  return (
    <StyledNav>
      {links.map((link) => (
        <Link to={link.to} key={link.id}>
          {link.title}
        </Link>
      ))}
    </StyledNav>
  )
}
