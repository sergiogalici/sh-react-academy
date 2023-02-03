import styled from 'styled-components'

export type StyledNavProps = {}

export const StyledNav = styled.nav<StyledNavProps>`
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  padding: ${({ theme }) => theme.spacing.sm}px 0;
`
