import styled from 'styled-components'

export type StyledLayoutProps = {}

export const StyledLayout = styled.div<StyledLayoutProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 980px;
  gap: ${({ theme }) => theme.spacing.md}px;
`
