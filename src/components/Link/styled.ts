import styled from 'styled-components'

export type StyledLinkProps = {}

export const StyledLink = styled.a<StyledLinkProps>`
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

  :not(:last-child) {
    border-inline-end-width: 2px;
    border-inline-end-style: solid;
    border-inline-end-color: ${({ theme }) => theme.colors.lightGray};
  }
`
