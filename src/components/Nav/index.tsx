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
}

export const Nav = ({ links }: NavProps) => {
  return (
    <StyledNav>
      {links.map((link) => (
        <Link to={link.to}>
          {link.title}
          {link.value && (
            <Button variant="primary" borderRadius={3}>
              {link.value}
            </Button>
          )}
        </Link>
      ))}
    </StyledNav>
  )
}
