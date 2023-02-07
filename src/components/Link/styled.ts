import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export type StyledLinkProps = {}

export const StyledLink = styled(NavLink)<StyledLinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightGray};
  text-decoration: none;

  &:hover,
  :focus {
    text-decoration: underline;
  }

  padding: 0px ${({ theme }) => theme.spacing.md}px;
`
