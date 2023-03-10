import styled from 'styled-components'

export type StyledNavProps = {}

export const StyledNav = styled.nav<StyledNavProps>`
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  padding: ${({ theme }) => theme.spacing.sm}px 0;

  .link-list {
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${({ theme }) => theme.spacing.md}px;
    gap: ${({ theme }) => theme.spacing.sm}px;
    color: ${({ theme }) => theme.colors.lightGray};
  }

  .link-list :not(:last-child) {
    border-inline-end-width: 2px;
    border-inline-end-style: solid;
    border-inline-end-color: ${({ theme }) => theme.colors.lightGray};
  }
`
