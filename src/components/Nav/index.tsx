import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { StyledNav, StyledNavProps } from './styled'

export type NavLink = {
  title: string
  to: string
  id: string | number
  value?: string
}

export type NavProps = Partial<StyledNavProps> & {
  links: NavLink[]
  children: ReactNode
}

export const Nav = ({ links, children }: NavProps) => {
  return (
    <StyledNav>
      <div className="link-list">
        {links.map((link) => (
          <Link to={link.to} key={link.id}>
            {link.title}
          </Link>
        ))}
      </div>
      {children}
    </StyledNav>
  )
}
