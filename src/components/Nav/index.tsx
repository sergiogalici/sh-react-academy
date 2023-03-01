import { memo, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '../Stack'
import { StyledNav, StyledNavProps } from './styled'

export type NavLink = {
  title: string
  to: string
  id: string | number
  rightSlot?: ReactNode
}

export type NavProps = Partial<StyledNavProps> & {
  links: NavLink[]
}

export const Nav = memo(({ links }: NavProps) => {
  return (
    <StyledNav>
      <div className="link-list">
        {links.map(({ id, title, to, rightSlot }) => {
          return rightSlot ? (
            <Stack gap="sm" key={id}>
              <Link to={to}>{title}</Link>
              {rightSlot}
            </Stack>
          ) : (
            <Link key={id} to={to}>
              {title}
            </Link>
          )
        })}
      </div>
    </StyledNav>
  )
})
